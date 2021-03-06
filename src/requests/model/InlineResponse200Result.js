"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestCallback = _interopRequireDefault(require("./RequestCallback"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse200Result model module.
 * @module model/InlineResponse200Result
 * @version 1.0.0
 */
var InlineResponse200Result = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200Result</code>.
   * @alias module:model/InlineResponse200Result
   */
  function InlineResponse200Result() {
    _classCallCheck(this, InlineResponse200Result);

    InlineResponse200Result.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200Result, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse200Result</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200Result} obj Optional instance to populate.
     * @return {module:model/InlineResponse200Result} The populated <code>InlineResponse200Result</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200Result();

        if (data.hasOwnProperty('request_id')) {
          obj['request_id'] = _ApiClient["default"].convertToType(data['request_id'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _RequestCallback["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200Result;
}();
/**
 * @member {String} request_id
 */


InlineResponse200Result.prototype['request_id'] = undefined;
/**
 * @member {module:model/RequestCallback} data
 */

InlineResponse200Result.prototype['data'] = undefined;
var _default = InlineResponse200Result;
exports["default"] = _default;