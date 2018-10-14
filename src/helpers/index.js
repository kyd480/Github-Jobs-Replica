export const generateQueryParams = (obj) => {
  return '?' + Object.keys(obj)
    .map((key) => obj[key] ? key + '=' + obj[key] : '')
    .filter((val) => val !== '')
    .join('&');
}