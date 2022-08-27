"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Button=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties")),_react=_interopRequireDefault(require("react")),_propTypes=_interopRequireDefault(require("prop-types"));require("./button.css");var _jsxRuntime=require("react/jsx-runtime"),_excluded=["primary","backgroundColor","size","label"];function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}/**
 * Primary UI component for user interaction
 */var Button=function(a){var b=a.primary,c=a.backgroundColor,d=a.size,e=a.label,f=(0,_objectWithoutProperties2["default"])(a,_excluded),g=b?"storybook-button--primary":"storybook-button--secondary";return/*#__PURE__*/(0,_jsxRuntime.jsx)("button",_objectSpread(_objectSpread({type:"button",className:["storybook-button","storybook-button--".concat(d),g].join(" "),style:c&&{backgroundColor:c}},f),{},{children:e}))};exports.Button=Button,Button.propTypes={/**
   * Is this the principal call to action on the page?
   */primary:_propTypes["default"].bool,/**
   * What background color to use
   */backgroundColor:_propTypes["default"].string,/**
   * How large should the button be?
   */size:_propTypes["default"].oneOf(["small","medium","large"]),/**
   * Button contents
   */label:_propTypes["default"].string.isRequired,/**
   * Optional click handler
   */onClick:_propTypes["default"].func},Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};