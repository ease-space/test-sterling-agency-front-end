import ImageminPlugin from 'imagemin-webpack-plugin';
import ImageminMozjpeg from 'imagemin-mozjpeg';
import ImageminPngquant from 'imagemin-pngquant';
import ImageminGifsicle from 'imagemin-gifsicle';
import ImageminSvgo from 'imagemin-svgo';

export const imageMin = (source = 'images') => {
  return new ImageminPlugin({
    test: `${source}/**`,
    plugins: [
      ImageminMozjpeg(),
      ImageminPngquant(),
      ImageminGifsicle(),
      ImageminSvgo(),
    ],
  });
};
