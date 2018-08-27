const pathToRegexp = (path, keys = []) => {
  const regStr = '^' + path.replace(/\/:([^\/]+)/g, (_, name) => {
    keys.push({ name });
    return '/([^/]+)';
  });
  return new RegExp(regStr);
}

module.exports = pathToRegexp
