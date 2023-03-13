import getImage from '../api/imageApi';
import path from 'path';

const imageWidth = 350;
const imageHeight = 350;

const inputImagePath = './images/full/fjord.jpg';
const outputImage = './images/cached/fjord.jpg';
const outputImagePath: string = path.join(process.cwd(), outputImage);

describe('Test the image resizing function', () => {
  it('checks if the function returns an image path', async () => {
    const result = await getImage(
      inputImagePath,
      outputImagePath,
      imageWidth,
      imageHeight
    );
    expect(result).toEqual(outputImagePath);
  });
});
