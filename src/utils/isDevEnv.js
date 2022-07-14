export function isDevEnv() {
  return [undefined, '', 'development'].includes(process.env.REACT_APP_ENV);
}
