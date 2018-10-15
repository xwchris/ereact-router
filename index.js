const env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

if (env === 'production') {
  require('./dist/ereact-router.production');
} else {
  require('./dist/ereact-router.development');
}
