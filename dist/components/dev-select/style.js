"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Select=void 0;var _templateObject,_taggedTemplateLiteral2=_interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral")),_styledComponents=_interopRequireDefault(require("styled-components")),Select=_styledComponents["default"].select(_templateObject||(_templateObject=(0,_taggedTemplateLiteral2["default"])(["\n  max-width: 100%;\n  padding: 11px 13px;\n  background: #f9f9fa;\n  color: var(--black2);\n  margin-bottom: 0.9rem;\n  border-radius: 10px;\n  outline: 0;\n  border: 1px solid rgba(245, 245, 245, 0.7);\n  font-size: 14px;\n  transition: all 0.3s ease-out;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);\n\n  option {\n    background: white;\n    display: flex;\n    white-space: pre;\n    min-height: 20px;\n    padding: 11px 13px;\n  }\n\n  :invalid:required {\n    border: 1px solid red;\n  }\n  :valid {\n    border: 1px solid green;\n  }\n"])));exports.Select=Select;