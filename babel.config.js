'use strict';

module.exports = {
  presets:[
    "@babel/env"
  ],
  plugins: [
    ["@babel/transform-react-jsx", { pragma: "EReact.createElement" }]
  ]
}
