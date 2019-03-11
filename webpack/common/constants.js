import Ip from 'ip';

const getNodeEnv = () => {
  return process.env.NODE_ENV || 'development';
};

const getBuildEnv = () => {
  return process.env.BUILD_ENV || 'development';
};

const isNodeDev = () => {
  return getNodeEnv() === 'development';
};

const isBuildDev = () => {
  return getBuildEnv() === 'development';
};

const getPortHttp = () => {
  return process.env.PORT_HTTP || 3002;
};

const getHost = () => {
  return process.env.HOST || Ip.address();
};

export const constants = Object.freeze({
  NODE_ENV: getNodeEnv(),
  BUILD_ENV: getBuildEnv(),
  NODE_DEV: isNodeDev(),
  BUILD_DEV: isBuildDev(),
  HOST: getHost(),
  PORT_HTTP: getPortHttp(),
});
