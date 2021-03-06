"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestAuth model module.
 * @module model/RequestAuth
 * @version 1.0.0
 */
var RequestAuth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestAuth</code>.
   * @alias module:model/RequestAuth
   * @param username {String} 
   * @param password {String} 
   */
  function RequestAuth(username, password) {
    _classCallCheck(this, RequestAuth);

    RequestAuth.initialize(this, username, password);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestAuth, null, [{
    key: "initialize",
    value: function initialize(obj, username, password) {
      obj['username'] = username;
      obj['password'] = password;
    }
    /**
     * Constructs a <code>RequestAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestAuth} obj Optional instance to populate.
     * @return {module:model/RequestAuth} The populated <code>RequestAuth</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestAuth();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestAuth;
}();
/**
 * @member {String} username
 */


RequestAuth.prototype['username'] = undefined;
/**
 * @member {String} password
 */

RequestAuth.prototype['password'] = undefined;
var _default = RequestAuth;
exports["default"] = _default;