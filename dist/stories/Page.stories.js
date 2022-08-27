"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=exports.LoggedOut=exports.LoggedIn=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty")),_react=_interopRequireDefault(require("react")),_testingLibrary=require("@storybook/testing-library"),_Page=require("./Page"),_jsxRuntime=require("react/jsx-runtime");function ownKeys(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function _objectSpread(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?ownKeys(Object(b),!0).forEach(function(c){(0,_defineProperty2["default"])(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):ownKeys(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}var _default={title:"Example/Page",component:_Page.Page,parameters:{// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
layout:"fullscreen"}};exports["default"]=_default;var Template=function(a){return/*#__PURE__*/(0,_jsxRuntime.jsx)(_Page.Page,_objectSpread({},a))},LoggedOut=Template.bind({});// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
exports.LoggedOut=LoggedOut;var LoggedIn=Template.bind({});exports.LoggedIn=LoggedIn,LoggedIn.play=/*#__PURE__*/function(){var a=(0,_asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function b(a){var c,d,e;return _regenerator["default"].wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return c=a.canvasElement,d=(0,_testingLibrary.within)(c),b.next=4,d.getByRole("button",{name:/Log in/i});case 4:return e=b.sent,b.next=7,_testingLibrary.userEvent.click(e);case 7:case"end":return b.stop();}},b)}));return function(){return a.apply(this,arguments)}}();