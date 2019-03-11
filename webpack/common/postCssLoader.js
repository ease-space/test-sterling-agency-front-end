import imports from 'postcss-import';
import url from 'postcss-url';
import properties from 'postcss-custom-properties';
import mqpacker from 'css-mqpacker';
import smootheFonts from 'postcss-font-smoothing';
import modules from 'postcss-icss-selectors';
import reporter from 'postcss-reporter';
import gradients from 'postcss-easing-gradients';
import cssnano from 'cssnano';
import calc from 'postcss-calc';
import fixesFlexbugs from 'postcss-flexbugs-fixes';
import postcssNested from 'postcss-nested';

export const postCssLoader = () => {
  return {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => {
        return [
          imports(),
          url(),
          modules({
            mode: 'global', //loader.resourcePath.includes('.m.css') ? 'local' : 'global',
          }),
          gradients(),
          properties(),
          smootheFonts(),
          mqpacker(),
          reporter(),
          cssnano(),
          calc(),
          fixesFlexbugs(),
          postcssNested(),
        ];
      },
    },
  };
};
