"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseCall = _interopRequireDefault(require("./ResponseCall"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResponseCallsList model module.
 * @module model/ResponseCallsList
 * @version 1.0.0
 */
var ResponseCallsList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseCallsList</code>.
   * @alias module:model/ResponseCallsList
   * @param result {Array.<module:model/ResponseCall>} 
   * @param count {Number} 
   */
  function ResponseCallsList(result, count) {
    _classCallCheck(this, ResponseCallsList);

    ResponseCallsList.initialize(this, result, count);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseCallsList, null, [{
    key: "initialize",
    value: function initialize(obj, result, count) {
      obj['result'] = result;
      obj['count'] = count;
    }
    /**
     * Constructs a <code>ResponseCallsList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCallsList} obj Optional instance to populate.
     * @return {module:model/ResponseCallsList} The populated <code>ResponseCallsList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseCallsList();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], [_ResponseCall["default"]]);
        }

        if (data.hasOwnProperty('count')) {
          obj['count'] = _ApiClient["default"].convertToType(data['count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ResponseCallsList;
}();
/**
 * @member {Array.<module:model/ResponseCall>} result
 */


ResponseCallsList.prototype['result'] = undefined;
/**
 * @member {Number} count
 */

ResponseCallsList.prototype['count'] = undefined;
var _default = ResponseCallsList;
exports["default"] = _default;