import Path from 'path';

export const paths = Object.freeze({
  ROOT: Path.resolve(__dirname, '../../'),
  OUTPUT_CLIENT: Path.resolve(__dirname, '../../', 'build/client'),
  OUTPUT_SERVER: Path.resolve(__dirname, '../../', 'build/server'),
  PUBLIC_CLIENT: '/',
  PUBLIC_SERVER: '/',
  ENTRY_CLIENT: Path.resolve(__dirname, '../../', 'src/mount/client.js'),
  ENTRY_SERVER: Path.resolve(__dirname, '../../', 'src/mount/render.js'),
  LOGO: Path.resolve(__dirname, '../../', 'src/assets/images/icon-app.png'),
  STYLELINT: Path.resolve(__dirname, '../../', '.stylelintrc.js'),
});
