/* Imports */
import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import getImage from './api/imageApi';
import path from 'path';

/* Express to run server and routes */
const app: Application = express();

// morgan HTTP logger
app.use(morgan('dev'));

/* Setting up the server and GET route */
const port = 3000;
const endPoint = '/resize';

// The GET route function also process the express server request,
// parse the file name and the required dimensions.

// Request url should be like:
// http://localhost:3000/resize?filename=fjord.jpg&width=200&height=200
app.get(endPoint, async (req: Request, res: Response): Promise<void> => {
  try {
    const inputDir = './images/full/';
    const cachedDir = './images/cached/';

    const inputImage = req.query.filename;
    const inputImagePath: string = inputDir + inputImage;

    const imageWidth: number = parseInt(<string>req.query.width);
    const imageHeight: number = parseInt(<string>req.query.height);

    const outputImage = `${cachedDir}${imageWidth}x${imageHeight}_${inputImage}`;
    const outputImagePath: string = path.join(process.cwd(), outputImage);

    // Call to the getImage function to resize the requested image
    const imgPath = (await getImage(
      inputImagePath,
      outputImagePath,
      imageWidth,
      imageHeight
    )) as string;
    res.sendFile(imgPath);
  } catch (err) {
    console.error(err);
    res.send(
      'Error occured. Please make sure the request URL looks like this example: <br/> http://localhost:3000/resize?filename=fjord.jpg&width=200&height=200'
    );
  }
});

// Spin up the server
app.listen(port, (): void => {
  console.log(`server started at http://localhost:${port}${endPoint}`);
});

export default app;
