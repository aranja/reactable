'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function pageHref(name) {
    return '#page-' + name;
}

var Links = (function (_React$Component) {
    _inherits(Links, _React$Component);

    function Links() {
        _classCallCheck(this, Links);

        _get(Object.getPrototypeOf(Links.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Links, [{
        key: 'handlePageButton',
        value: function handlePageButton(page, e) {
            e.preventDefault();
            this.props.onPageChange(page);
        }
    }, {
        key: 'renderPageButton',
        value: function renderPageButton(className, link) {

            return _react2['default'].createElement(
                'a',
                { className: className,
                    key: link.rel,
                    href: pageHref(link.rel),
                    onClick: this.handlePageButton.bind(this, link) },
                link.rel
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (typeof this.props.colSpan === 'undefined') {
                throw new TypeError('Must pass a colSpan argument to Links');
            }

            if (typeof this.props.paginationLinks === 'undefined') {
                throw new TypeError('Must pass an object paginationLinks argument to Links');
            }

            var pageButtons = [];

            for (var i = 0; i < this.props.paginationLinks.length; i++) {
                var className = "reactable-page-button";
                pageButtons.push(this.renderPageButton(className, this.props.paginationLinks[i]));
            }

            return _react2['default'].createElement(
                'tbody',
                { className: 'reactable-pagination-links' },
                _react2['default'].createElement(
                    'tr',
                    null,
                    _react2['default'].createElement(
                        'td',
                        { colSpan: this.props.colSpan },
                        pageButtons
                    )
                )
            );
        }
    }]);

    return Links;
})(_react2['default'].Component);

exports.Links = Links;
;
