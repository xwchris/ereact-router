'use strict';

let EReactRouter = null;

if (process.env.NODE_ENV === 'production') {
  EReactRouter = require('./dist/ereact-router.production');
} else {
  EReactRouter = require('./dist/ereact-router.development');
}

module.exports = EReactRouter.default || EReactRouter;
