/* Imports */
import sharp from 'sharp';
import fs from 'fs';

/* Function to resize images given its name, width and height parameters
    If the image was previously requested, it's returned from the cache
*/
const getImage = async (
  inputImagePath: string,
  outputImagePath: string,
  imageWidth: number,
  imageHeight: number
): Promise<string> => {

  if (fs.existsSync(outputImagePath)) {
    return outputImagePath;
  } else {
    console.log('resizing: ' + inputImagePath);
    await sharp(inputImagePath).resize(imageWidth, imageHeight).toFile(outputImagePath);
    return outputImagePath;
  }
};

export default getImage;
