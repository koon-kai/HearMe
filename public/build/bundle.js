webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// import 'babel-core/polyfill';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(157);

	var _reactRedux = __webpack_require__(246);

	var _reduxRouter = __webpack_require__(264);

	var _storeConfigureStore = __webpack_require__(280);

	var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

	var store = (0, _storeConfigureStore2['default'])();

	(0, _reactDom.render)(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(_reduxRouter.ReduxRouter, null)
	), document.getElementById('main'));

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(158);

	//custom react component

	var _containersHearMeApp = __webpack_require__(245);

	var _containersHearMeApp2 = _interopRequireDefault(_containersHearMeApp);

	var _containersIndexPage = __webpack_require__(471);

	var _containersIndexPage2 = _interopRequireDefault(_containersIndexPage);

	var _containersPostPage = __webpack_require__(474);

	var _containersPostPage2 = _interopRequireDefault(_containersPostPage);

	var _componentsAddPostReact = __webpack_require__(242);

	var _componentsAddPostReact2 = _interopRequireDefault(_componentsAddPostReact);

	var _componentsNotFoundPageReact = __webpack_require__(222);

	var _componentsNotFoundPageReact2 = _interopRequireDefault(_componentsNotFoundPageReact);

	var _componentsChatReact = __webpack_require__(243);

	var _componentsChatReact2 = _interopRequireDefault(_componentsChatReact);

	var routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { path: '/', component: _containersHearMeApp2['default'] },
	  _react2['default'].createElement(_reactRouter.IndexRoute, { component: _containersIndexPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/posts/:id', component: _containersPostPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/posts', component: _componentsAddPostReact2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/chat', component: _componentsChatReact2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '404', component: _componentsNotFoundPageReact2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsNotFoundPageReact2['default'] })
	);

	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(158);

	var Header = (function (_Component) {
	  _inherits(Header, _Component);

	  function Header() {
	    _classCallCheck(this, Header);

	    _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'header',
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: 'logo' },
	            _react2['default'].createElement(
	              _reactRouter.IndexLink,
	              { to: '/' },
	              _react2['default'].createElement(
	                'h1',
	                null,
	                'HearMe'
	              )
	            )
	          ),
	          _react2['default'].createElement(
	            'nav',
	            null,
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/' },
	              'Blog'
	            ),
	            _react2['default'].createElement(
	              'span',
	              null,
	              '|'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/photo' },
	              'Photo'
	            ),
	            _react2['default'].createElement(
	              'span',
	              null,
	              '|'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/note' },
	              'Note'
	            ),
	            _react2['default'].createElement(
	              'span',
	              null,
	              '|'
	            ),
	            _react2['default'].createElement(
	              _reactRouter.Link,
	              { to: '/chat' },
	              'Chat'
	            )
	          )
	        ),
	        _react2['default'].createElement('div', { className: 'page-divider' })
	      );
	    }
	  }]);

	  return Header;
	})(_react.Component);

	exports['default'] = Header;
	module.exports = exports['default'];

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsWebAPIUtils = __webpack_require__(229);

	var _utilsWebAPIUtils2 = _interopRequireDefault(_utilsWebAPIUtils);

	var AppDispatcher = __webpack_require__(230);
	var EventEmitter = __webpack_require__(234).EventEmitter;
	var Constants = __webpack_require__(478);
	var assign = __webpack_require__(237);

	var ActionTypes = Constants.ActionTypes;
	var CHANGE_EVENT = 'change';

	var _posts = [];
	var _post = {};

	var PostStore = assign({}, EventEmitter.prototype, {

	    init: function init() {},

	    getPostId: function getPostId() {
	        return _post._id;
	    },

	    getPost: function getPost() {
	        return _post;
	    },

	    getPosts: function getPosts() {
	        return _posts;
	    },

	    emitChange: function emitChange() {
	        this.emit(CHANGE_EVENT);
	    },

	    addChangeListener: function addChangeListener(callback) {
	        this.on(CHANGE_EVENT, callback);
	    },

	    removeChangeListener: function removeChangeListener(callback) {
	        this.removeListener(CHANGE_EVENT, callback);
	    }
	});

	var errHandler = function errHandler(err) {
	    console.log(err);
	};

	PostStore.dispatchToken = AppDispatcher.register(function (action) {

	    switch (action.type) {
	        case ActionTypes.ADD_POST:
	            _utilsWebAPIUtils2['default'].addPost(action.data).then(function (data) {
	                _post = data;
	                PostStore.emitChange();
	            }, errHandler);
	            break;

	        case ActionTypes.GET_POST:
	            _utilsWebAPIUtils2['default'].getPost(action.id).then(function (data) {
	                _post = data.success ? data.data : null;
	                PostStore.emitChange();
	            }, errHandler);
	            break;

	        case ActionTypes.GET_POSTS:
	            _utilsWebAPIUtils2['default'].getPosts().then(function (data) {
	                _posts = data;
	                PostStore.emitChange();
	            }, errHandler);
	            break;

	        default:
	        // do something common
	    }
	});

	module.exports = PostStore;

/***/ },

/***/ 229:
/***/ function(module, exports) {

	"use strict";

	var API_URL = '/api/v2';
	var TIMEOUT = 10000;

	var _pendingRequests = {};

	function abortPendingRequests(key) {
	    if (_pendingRequests[key]) {
	        _pendingRequests[key]._callback = function () {};
	        _pendingRequests[key].abort();
	        _pendingRequests[key] = null;
	    }
	}

	function token() {
	    return UserStore.getState().token;
	}

	function makeUrl(part) {
	    return API_URL + part;
	}

	function dispatch(key, response, params) {
	    var payload = { actionType: key, response: response };
	    if (params) {
	        payload.queryParams = params;
	    }
	    AppDispatcher.handleRequestAction(payload);
	}

	// return successful response, else return request Constants
	function makeDigestFun(key, params) {
	    return function (err, res) {
	        if (err && err.timeout === TIMEOUT) {
	            dispatch(key, Constants.request.TIMEOUT, params);
	        } else if (res.status === 400) {
	            UserActions.logout();
	        } else if (!res.ok) {
	            dispatch(key, Constants.request.ERROR, params);
	        } else {
	            dispatch(key, res, params);
	        }
	    };
	}

	// a get request with an authtoken param
	function get(url) {
	    return request.get(url).timeout(TIMEOUT).query({ authtoken: token() });
	}

	var Api = {
	    getEntityData: function getEntityData(entityId) {
	        var url = makeUrl("/entities/" + entityId);
	        var key = Constants.api.GET_ENTITY_DATA;
	        var params = { entityId: entityId };
	        abortPendingRequests(key);
	        dispatch(key, Constants.request.PENDING, params);
	        _pendingRequests[key] = get(url).end(makeDigestFun(key, params));
	    },

	    getPosts: function getPosts() {
	        var promise = new Promise(function (resolve, reject) {
	            $.ajax({
	                url: "/api/posts",
	                dataType: 'json',
	                success: (function (data) {
	                    resolve(data);
	                }).bind(this),
	                error: (function (xhr, status, err) {
	                    reject(err);
	                }).bind(this)
	            });
	        });
	        return promise;
	    },

	    getPost: function getPost(id) {
	        var promise = new Promise(function (resolve, reject) {
	            $.ajax({
	                type: "get",
	                url: "/api/posts/" + id,
	                dataType: 'json',
	                success: (function (data) {
	                    resolve(data);
	                }).bind(this),
	                error: (function (err) {
	                    reject(err);
	                    // console.error("/post", status, err.toString());
	                }).bind(this)
	            });
	        });
	        return promise;
	    },

	    addPost: function addPost(post) {
	        var promise = new Promise(function (resolve, reject) {
	            $.ajax({
	                type: "post",
	                url: "/api/posts",
	                data: post,
	                dataType: 'json',
	                success: (function (data) {
	                    resolve(data);
	                }).bind(this),
	                error: (function (err) {
	                    reject(err);
	                }).bind(this)
	            });
	        });
	        return promise;
	    }
	};

	module.exports = Api;

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Dispatcher = __webpack_require__(231).Dispatcher;

	module.exports = new Dispatcher();

/***/ },

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(232);


/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var invariant = __webpack_require__(233);

	var _prefix = 'ID_';

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);

	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }

	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */

	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };

	  /**
	   * Removes a callback based on its token.
	   */

	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };

	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */

	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };

	  /**
	   * Dispatches a payload to all registered callbacks.
	   */

	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };

	  /**
	   * Is this Dispatcher currently dispatching.
	   */

	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };

	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };

	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };

	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */

	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };

	  return Dispatcher;
	})();

	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 234:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 237:
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },

/***/ 238:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AppDispatcher = __webpack_require__(230);
	var Constants = __webpack_require__(478);
	var ActionTypes = Constants.ActionTypes;

	module.exports = {

	    getPosts: function getPosts() {
	        AppDispatcher.dispatch({
	            type: ActionTypes.GET_POSTS
	        });
	    },

	    getPost: function getPost(id) {
	        AppDispatcher.dispatch({
	            type: ActionTypes.GET_POST,
	            id: id
	        });
	    },

	    addPost: function addPost(post) {
	        AppDispatcher.dispatch({
	            type: ActionTypes.ADD_POST,
	            data: post
	        });
	    }
	};

/***/ },

/***/ 240:
/***/ function(module, exports) {

	"use strict";

	module.exports = {

	  appendZero: function appendZero(s) {
	    if (s == null) {
	      return "";
	    }
	    return ("00" + s).substr((s + "").length);
	  },

	  formatToDate: function formatToDate(d, cn) {
	    var dd, mm, yyyy;
	    if (cn == null) {
	      cn = false;
	    }
	    if (d == null) {
	      return "";
	    }
	    if ('string' === typeof d) {
	      d = new Date(d);
	    }

	    if (!(d instanceof Date)) {
	      return "";
	    }

	    yyyy = d.getFullYear();
	    mm = this.appendZero(d.getMonth() + 1);
	    dd = this.appendZero(d.getDate());

	    if (!cn) {
	      return yyyy + "-" + mm + "-" + dd;
	    } else {
	      return yyyy + "年" + mm + "月" + dd + "日";
	    }
	  },

	  formatToDateTime: function formatToDateTime(d) {
	    var h, m, s;

	    if (!d) {
	      return "";
	    }
	    if ('string' === typeof d) {
	      d = new Date(d);
	    }
	    if (!(d instanceof Date)) {
	      return "";
	    }
	    h = this.appendZero(d.getHours());
	    m = this.appendZero(d.getMinutes());
	    // s = d.getSeconds();
	    return this.formatToDate(d) + (" " + h + ":" + m);
	  }
	};

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	// import PostStore from '../stores/PostStore';
	// import PostActionCreators from '../actions/PostActionCreators';
	// import { Navigation } from 'react-router';
	// import Disqus from 'react-disqus-thread';
	// import Loading from 'react-loading';

	var _utilsTools = __webpack_require__(240);

	var _utilsTools2 = _interopRequireDefault(_utilsTools);

	var Post = (function (_Component) {
	    _inherits(Post, _Component);

	    function Post(props) {
	        _classCallCheck(this, Post);

	        _get(Object.getPrototypeOf(Post.prototype), 'constructor', this).call(this, props);
	    }

	    _createClass(Post, [{
	        key: 'render',
	        value: function render() {
	            // console.log(this.props.post);
	            var post = this.props.post;

	            var title = post ? post.title : '';
	            var content = post ? post.content : '';
	            // var id = this.state.data._id ? this.state.data._id : null;
	            var createAt = post ? post.createAt : '';
	            // const url = window.location.href;

	            // <Disqus
	            //     shortname="koonkaisite"
	            //     identifier={id}
	            //     url={url}
	            //     title={title}
	            //     categoryId={id} />
	            // var dom = this.state.isLoading ? (<div className="loading"><Loading type="spin" color="#e3e3e3" /></div>) :
	            //     (<article id="post">
	            //         <div className="post-title">
	            //             <span>{title}</span>ou
	            //         </div>
	            //         <div className="post-date">
	            //             {createAt}
	            //         </div>
	            //         <hr/>
	            //         <div className="post-content">
	            //             <span dangerouslySetInnerHTML={{__html: content}} />
	            //         </div>
	            //     </article>);

	            return _react2['default'].createElement(
	                'article',
	                { id: 'post' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'post-title' },
	                    _react2['default'].createElement(
	                        'span',
	                        null,
	                        title
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'post-date' },
	                    _utilsTools2['default'].formatToDateTime(createAt)
	                ),
	                _react2['default'].createElement('hr', null),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'post-content' },
	                    _react2['default'].createElement('span', { dangerouslySetInnerHTML: { __html: content } })
	                )
	            );
	        }
	    }]);

	    return Post;
	})(_react.Component);

	Post.propsTypes = {
	    post: _react.PropTypes.object.isRequired
	};

	exports['default'] = Post;
	module.exports = exports['default'];

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var Router = __webpack_require__(158);
	var Navigation = Router.Navigation;
	var PostStore = __webpack_require__(228);
	var PostActionCreators = __webpack_require__(238);

	var NewForm = React.createClass({
	    displayName: 'NewForm',

	    handleSubmit: function handleSubmit(e) {
	        e.preventDefault();
	        var title = React.findDOMNode(this.refs.title).value.trim();
	        var content = React.findDOMNode(this.refs.content).value.trim();
	        if (!title || !content) {
	            return;
	        }
	        this.props.onPostSubmit({ title: title, content: content });
	    },
	    render: function render() {
	        return React.createElement(
	            'form',
	            { onSubmit: this.handleSubmit },
	            React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('input', { type: 'text', className: 'form-control', placeholder: 'title', ref: 'title' })
	            ),
	            React.createElement(
	                'div',
	                { className: 'form-group' },
	                React.createElement('textarea', { className: 'form-control', rows: '20', placeholder: 'Write your content (support markdown)', ref: 'content' })
	            ),
	            React.createElement(
	                'button',
	                { type: 'submit', className: 'btn btn-default' },
	                'Submit'
	            )
	        );
	    }
	});

	var UploadImage = React.createClass({
	    displayName: 'UploadImage',

	    openSelectWindow: function openSelectWindow(e) {
	        e.preventDefault();
	        $('#upload_image').click();
	    },
	    uploadImage: function uploadImage() {

	        var data = new FormData();
	        $.each($('#upload_image')[0].files, function (i, file) {
	            data.append('imageFile', file);
	            console.log(i);
	            console.log(file.type);
	            console.log(file.name);
	        });

	        $.ajax({
	            url: '/photo/upload',
	            type: 'POST',
	            data: data,
	            cache: false,
	            contentType: false,
	            processData: false,
	            dataType: 'json',
	            success: (function (res) {
	                console.log(res);
	                this.setState({ imageUrl: res.data.imageUrl });
	            }).bind(this),
	            error: (function () {
	                alert('upload error!');
	            }).bind(this)
	        });
	    },
	    getInitialState: function getInitialState() {
	        return { imageUrl: '' };
	    },
	    render: function render() {
	        var url = this.state.imageUrl;
	        if (url != '') {
	            url = url + '?imageView2/1/w/285/q/100/interlace/1';
	        }
	        return React.createElement(
	            'div',
	            { className: 'upload' },
	            React.createElement(
	                'button',
	                { className: 'btn btn-info', onClick: this.openSelectWindow },
	                'Upload Image'
	            ),
	            React.createElement('input', { type: 'file', className: 'hide', id: 'upload_image', onChange: this.uploadImage }),
	            React.createElement(
	                'div',
	                { className: 'alert alert-warning image-url' },
	                React.createElement(
	                    'span',
	                    null,
	                    this.state.imageUrl
	                )
	            ),
	            React.createElement('img', { src: url })
	        );
	    }
	});

	var AddPost = React.createClass({
	    displayName: 'AddPost',

	    mixins: [Navigation],

	    handleFormSubmit: function handleFormSubmit(post) {
	        PostActionCreators.addPost(post);
	    },
	    componentDidMount: function componentDidMount() {
	        PostStore.addChangeListener(this._onChange);
	    },
	    componentWillUnmount: function componentWillUnmount() {
	        PostStore.removeChangeListener(this._onChange);
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { id: 'add-post' },
	            React.createElement(
	                'div',
	                { className: 'row' },
	                React.createElement(
	                    'div',
	                    { className: 'col-lg-8' },
	                    React.createElement(NewForm, { onPostSubmit: this.handleFormSubmit })
	                ),
	                React.createElement(
	                    'div',
	                    { className: 'col-lg-4' },
	                    React.createElement(UploadImage, null)
	                )
	            )
	        );
	    },
	    _onChange: function _onChange() {
	        this.transitionTo('post', { id: PostStore.getPostId() });
	    }
	});

	module.exports = AddPost;

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _storesChatMessageStore = __webpack_require__(244);

	var _storesChatMessageStore2 = _interopRequireDefault(_storesChatMessageStore);

	var _utilsTools = __webpack_require__(240);

	var _utilsTools2 = _interopRequireDefault(_utilsTools);

	var ReactPropTypes = _react2['default'].PropTypes;
	var ENTER_KEY_CODE = 13;

	var MessageComposer = _react2['default'].createClass({
	    displayName: 'MessageComposer',

	    getInitialState: function getInitialState() {
	        return { text: '' };
	    },
	    render: function render() {
	        return _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement('input', { type: 'text', placeholder: 'Nick Name', className: 'message-name' }),
	            _react2['default'].createElement('input', { type: 'email', placeholder: 'Your Email', className: 'message-email' }),
	            _react2['default'].createElement('textarea', {
	                className: 'message-composer',
	                name: 'message',
	                placeholder: 'Say Something.',
	                value: this.state.text,
	                onChange: this._onChange,
	                onKeyDown: this._onKeyDown })
	        );
	    },
	    _onChange: function _onChange(event, value) {
	        this.setState({ text: event.target.value });
	    },
	    _onKeyDown: function _onKeyDown(event) {
	        if (event.keyCode === ENTER_KEY_CODE) {
	            event.preventDefault();
	            var text = this.state.text.trim();
	            if (text) {}
	            this.setState({ text: '' });
	        }
	    }
	});

	var MessageListItem = _react2['default'].createClass({
	    displayName: 'MessageListItem',

	    PropTypes: {
	        message: ReactPropTypes.object
	    },
	    render: function render() {
	        var message = this.props.message;
	        return _react2['default'].createElement(
	            'li',
	            { className: 'message-list-item' },
	            _react2['default'].createElement(
	                'h5',
	                { className: 'message-author-name' },
	                message.authorName
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'message-time' },
	                message.timestamp
	            ),
	            _react2['default'].createElement(
	                'div',
	                { className: 'message-text' },
	                message.text
	            )
	        );
	    }
	});

	var getStateFromStores = function getStateFromStores() {
	    return {
	        messages: _storesChatMessageStore2['default'].getAllMessages()
	    };
	};

	var MessageSection = _react2['default'].createClass({
	    displayName: 'MessageSection',

	    getInitialState: function getInitialState() {
	        return getStateFromStores();
	    },

	    render: function render() {
	        var messageListItems = this.state.messages.map(function (message) {
	            return _react2['default'].createElement(MessageListItem, { key: message.id, message: message });
	        });
	        return _react2['default'].createElement(
	            'div',
	            { className: 'message-section' },
	            _react2['default'].createElement(
	                'ul',
	                { className: 'message-list', ref: 'messageList' },
	                messageListItems
	            ),
	            _react2['default'].createElement(MessageComposer, null)
	        );
	    }
	});

	module.exports = MessageSection;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsWebAPIUtils = __webpack_require__(229);

	var _utilsWebAPIUtils2 = _interopRequireDefault(_utilsWebAPIUtils);

	var AppDispatcher = __webpack_require__(230);
	var EventEmitter = __webpack_require__(234).EventEmitter;
	var Constants = __webpack_require__(478);
	var assign = __webpack_require__(237);

	var ActionTypes = Constants.ActionTypes;
	var CHANGE_EVENT = 'change';

	var _messages = [{
	  id: 'm_1',
	  threadID: 't_1',
	  threadName: 'Jing and Bill',
	  authorName: 'Bill',
	  text: 'Hey Jing, want to give a Flux talk at ForwardJS?',
	  timestamp: Date.now() - 99999
	}, {
	  id: 'm_2',
	  threadID: 't_1',
	  threadName: 'Jing and Bill',
	  authorName: 'Bill',
	  text: 'Seems like a pretty cool conference.',
	  timestamp: Date.now() - 89999
	}, {
	  id: 'm_3',
	  threadID: 't_1',
	  threadName: 'Jing and Bill',
	  authorName: 'Jing',
	  text: 'Sounds good.  Will they be serving dessert?',
	  timestamp: Date.now() - 79999
	}, {
	  id: 'm_4',
	  threadID: 't_2',
	  threadName: 'Dave and Bill',
	  authorName: 'Bill',
	  text: 'Hey Dave, want to get a beer after the conference?',
	  timestamp: Date.now() - 69999
	}, {
	  id: 'm_5',
	  threadID: 't_2',
	  threadName: 'Dave and Bill',
	  authorName: 'Dave',
	  text: 'Totally!  Meet you at the hotel bar.',
	  timestamp: Date.now() - 59999
	}, {
	  id: 'm_6',
	  threadID: 't_3',
	  threadName: 'Functional Heads',
	  authorName: 'Bill',
	  text: 'Hey Brian, are you going to be talking about functional stuff?',
	  timestamp: Date.now() - 49999
	}, {
	  id: 'm_7',
	  threadID: 't_3',
	  threadName: 'Bill and Brian',
	  authorName: 'Brian',
	  text: 'At ForwardJS?  Yeah, of course.  See you there!',
	  timestamp: Date.now() - 39999
	}];

	var MessageStore = assign({}, EventEmitter.prototype, {

	  emitChange: function emitChange() {
	    this.emit(CHANGE_EVENT);
	  },

	  addChangeListener: function addChangeListener(callback) {
	    this.on(CHANGE_EVENT, callback);
	  },

	  removeChangeListener: function removeChangeListener(callback) {
	    this.removeListener(CHANGE_EVENT, callback);
	  },

	  getAllMessages: function getAllMessages() {
	    return _messages;
	  }
	});

	module.exports = MessageStore;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(246);

	var _componentsHeaderReact = __webpack_require__(226);

	var _componentsHeaderReact2 = _interopRequireDefault(_componentsHeaderReact);

	var HearMeApp = (function (_Component) {
	  _inherits(HearMeApp, _Component);

	  function HearMeApp(props) {
	    _classCallCheck(this, HearMeApp);

	    _get(Object.getPrototypeOf(HearMeApp.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(HearMeApp, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;

	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(_componentsHeaderReact2['default'], null),
	        children
	      );
	    }
	  }]);

	  return HearMeApp;
	})(_react.Component);

	HearMeApp.propTypes = {
	  children: _react.PropTypes.node
	};

	function mapStateToProps(state) {
	  return {};
	}

	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(HearMeApp);
	module.exports = exports['default'];

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _componentsProvider = __webpack_require__(247);

	exports.Provider = _interopRequire(_componentsProvider);

	var _componentsConnect = __webpack_require__(249);

	exports.connect = _interopRequire(_componentsConnect);

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _utilsStoreShape = __webpack_require__(248);

	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);

	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }

	  didWarnAboutReceivingStore = true;
	  console.error( // eslint-disable-line no-console
	  '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}

	var Provider = (function (_Component) {
	  _inherits(Provider, _Component);

	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };

	  function Provider(props, context) {
	    _classCallCheck(this, Provider);

	    _Component.call(this, props, context);
	    this.store = props.store;
	  }

	  Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;

	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };

	  Provider.prototype.render = function render() {
	    var children = this.props.children;

	    return _react.Children.only(children);
	  };

	  return Provider;
	})(_react.Component);

	exports['default'] = Provider;

	Provider.propTypes = {
	  store: _utilsStoreShape2['default'].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _utilsStoreShape2['default'].isRequired
	};
	module.exports = exports['default'];

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	exports['default'] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});
	module.exports = exports['default'];

/***/ },

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = connect;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _utilsStoreShape = __webpack_require__(248);

	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);

	var _utilsShallowEqual = __webpack_require__(250);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(251);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(252);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(262);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(263);

	var _invariant2 = _interopRequireDefault(_invariant);

	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	// Helps track hot reloading.
	var nextVersion = 0;

	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	  var shouldSubscribe = Boolean(mapStateToProps);
	  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	  var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	  var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;

	  // Helps track hot reloading.
	  var version = nextVersion++;

	  function computeStateProps(store, props) {
	    var state = store.getState();
	    var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);

	    _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	    return stateProps;
	  }

	  function computeDispatchProps(store, props) {
	    var dispatch = store.dispatch;

	    var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);

	    _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	    return dispatchProps;
	  }

	  function _computeNextState(stateProps, dispatchProps, parentProps) {
	    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	    _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	    return mergedProps;
	  }

	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = (function (_Component) {
	      _inherits(Connect, _Component);

	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        if (!pure) {
	          this.updateStateProps(nextProps);
	          this.updateDispatchProps(nextProps);
	          this.updateState(nextProps);
	          return true;
	        }

	        var storeChanged = nextState.storeState !== this.state.storeState;
	        var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	        var mapStateProducedChange = false;
	        var dispatchPropsChanged = false;

	        if (storeChanged || propsChanged && shouldUpdateStateProps) {
	          mapStateProducedChange = this.updateStateProps(nextProps);
	        }

	        if (propsChanged && shouldUpdateDispatchProps) {
	          dispatchPropsChanged = this.updateDispatchProps(nextProps);
	        }

	        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	          this.updateState(nextProps);
	          return true;
	        }

	        return false;
	      };

	      function Connect(props, context) {
	        _classCallCheck(this, Connect);

	        _Component.call(this, props, context);
	        this.version = version;
	        this.store = props.store || context.store;

	        _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));

	        this.stateProps = computeStateProps(this.store, props);
	        this.dispatchProps = computeDispatchProps(this.store, props);
	        this.state = { storeState: null };
	        this.updateState();
	      }

	      Connect.prototype.computeNextState = function computeNextState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        return _computeNextState(this.stateProps, this.dispatchProps, props);
	      };

	      Connect.prototype.updateStateProps = function updateStateProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        var nextStateProps = computeStateProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	          return false;
	        }

	        this.stateProps = nextStateProps;
	        return true;
	      };

	      Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        var nextDispatchProps = computeDispatchProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }

	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };

	      Connect.prototype.updateState = function updateState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

	        this.nextState = this.computeNextState(props);
	      };

	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };

	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };

	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };

	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };

	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	      };

	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }

	        this.setState({
	          storeState: this.store.getState()
	        });
	      };

	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        _invariant2['default'](withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');

	        return this.refs.wrappedInstance;
	      };

	      Connect.prototype.render = function render() {
	        var ref = withRef ? 'wrappedInstance' : null;
	        return _react2['default'].createElement(WrappedComponent, _extends({}, this.nextState, { ref: ref }));
	      };

	      return Connect;
	    })(_react.Component);

	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _utilsStoreShape2['default']
	    };
	    Connect.propTypes = {
	      store: _utilsStoreShape2['default']
	    };

	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }

	        // We are hot reloading!
	        this.version = version;

	        // Update the state and bindings.
	        this.trySubscribe();
	        this.updateStateProps();
	        this.updateDispatchProps();
	        this.updateState();
	      };
	    }

	    return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 250:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports["default"];

/***/ },

/***/ 251:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(253);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 253:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(254);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(256);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(259);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(260);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(261);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },

/***/ 254:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(255);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};

	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */

	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }

	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;

	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }

	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);

	    return function unsubscribe() {
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }

	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }

	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }

	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }

	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }

	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }

	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }

	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });

	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },

/***/ 255:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};

	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */

	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }

	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;

	  if (proto === null) {
	    return true;
	  }

	  var constructor = proto.constructor;

	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}

	module.exports = exports['default'];

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(254);

	var _utilsIsPlainObject = __webpack_require__(255);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsMapValues = __webpack_require__(257);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	var _utilsPick = __webpack_require__(258);

	var _utilsPick2 = _interopRequireDefault(_utilsPick);

	/* eslint-disable no-console */

	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}

	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }

	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }

	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });

	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}

	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }

	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}

	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */

	function combineReducers(reducers) {
	  var finalReducers = _utilsPick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;

	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }

	  var defaultState = _utilsMapValues2['default'](finalReducers, function () {
	    return undefined;
	  });

	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;

	    if (sanityError) {
	      throw sanityError;
	    }

	    var hasChanged = false;
	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });

	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }

	    return hasChanged ? finalState : state;
	  };
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 257:
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = mapValues;

	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },

/***/ 258:
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = pick;

	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}

	module.exports = exports["default"];

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMapValues = __webpack_require__(257);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}

	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */

	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }

	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    // eslint-disable-line no-eq-null
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }

	  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}

	module.exports = exports['default'];

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(261);

	var _compose2 = _interopRequireDefault(_compose);

	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */

	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];

	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);

	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 261:
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";

	exports.__esModule = true;
	exports["default"] = compose;

	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}

	module.exports = exports["default"];

/***/ },

/***/ 262:
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }

	    return targetComponent;
	};


/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerStateReducer2 = __webpack_require__(265);

	var _routerStateReducer3 = _interopRequireDefault(_routerStateReducer2);

	exports.routerStateReducer = _routerStateReducer3['default'];

	var _ReduxRouter2 = __webpack_require__(267);

	var _ReduxRouter3 = _interopRequireDefault(_ReduxRouter2);

	exports.ReduxRouter = _ReduxRouter3['default'];

	var _client = __webpack_require__(273);

	var _client2 = _interopRequireDefault(_client);

	exports.reduxReactRouter = _client2['default'];

	var _isActive2 = __webpack_require__(279);

	var _isActive3 = _interopRequireDefault(_isActive2);

	exports.isActive = _isActive3['default'];

	var _actionCreators = __webpack_require__(272);

	exports.historyAPI = _actionCreators.historyAPI;
	exports.pushState = _actionCreators.pushState;
	exports.replaceState = _actionCreators.replaceState;
	exports.setState = _actionCreators.setState;
	exports.go = _actionCreators.go;
	exports.goBack = _actionCreators.goBack;
	exports.goForward = _actionCreators.goForward;

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = routerStateReducer;

	var _constants = __webpack_require__(266);

	/**
	 * Reducer of ROUTER_DID_CHANGE actions. Returns a state object
	 * with { pathname, query, params, navigationType }
	 * @param  {Object} state - Previous state
	 * @param  {Object} action - Action
	 * @return {Object} New state
	 */

	function routerStateReducer(state, action) {
	  if (state === undefined) state = null;

	  var _extends2;

	  switch (action.type) {
	    case _constants.ROUTER_DID_CHANGE:
	      return action.payload;
	    case _constants.REPLACE_ROUTES:
	      if (!state) return state;
	      return _extends({}, state, (_extends2 = {}, _extends2[_constants.DOES_NEED_REFRESH] = true, _extends2));
	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },

/***/ 266:
/***/ function(module, exports) {

	// Signals that the router's state has changed. It should
	// never be called by the application, only as an implementation detail of
	// redux-react-router.
	'use strict';

	exports.__esModule = true;
	var ROUTER_DID_CHANGE = '@@reduxReactRouter/routerDidChange';

	exports.ROUTER_DID_CHANGE = ROUTER_DID_CHANGE;
	var HISTORY_API = '@@reduxReactRouter/historyAPI';
	exports.HISTORY_API = HISTORY_API;
	var MATCH = '@@reduxReactRouter/match';
	exports.MATCH = MATCH;
	var REPLACE_ROUTES = '@@reduxReactRouter/replaceRoutes';

	exports.REPLACE_ROUTES = REPLACE_ROUTES;
	var ROUTER_STATE_SELECTOR = '@@reduxReactRouter/routerStateSelector';

	exports.ROUTER_STATE_SELECTOR = ROUTER_STATE_SELECTOR;
	var DOES_NEED_REFRESH = '@@reduxReactRouter/doesNeedRefresh';
	exports.DOES_NEED_REFRESH = DOES_NEED_REFRESH;

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(246);

	var _reactRouter = __webpack_require__(158);

	var _routerStateEquals = __webpack_require__(268);

	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);

	var _constants = __webpack_require__(266);

	var _actionCreators = __webpack_require__(272);

	function memoizeRouterStateSelector(selector) {
	  var previousRouterState = null;

	  return function (state) {
	    var nextRouterState = selector(state);
	    if (_routerStateEquals2['default'](previousRouterState, nextRouterState)) {
	      return previousRouterState;
	    }
	    previousRouterState = nextRouterState;
	    return nextRouterState;
	  };
	}

	function getRoutesFromProps(props) {
	  return props.routes || props.children;
	}

	var ReduxRouter = (function (_Component) {
	  _inherits(ReduxRouter, _Component);

	  _createClass(ReduxRouter, null, [{
	    key: 'propTypes',
	    value: {
	      children: _react.PropTypes.node
	    },
	    enumerable: true
	  }, {
	    key: 'contextTypes',
	    value: {
	      store: _react.PropTypes.object
	    },
	    enumerable: true
	  }]);

	  function ReduxRouter(props, context) {
	    _classCallCheck(this, ReduxRouter);

	    _Component.call(this, props, context);
	    this.receiveRoutes(getRoutesFromProps(props));
	  }

	  ReduxRouter.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    this.receiveRoutes(getRoutesFromProps(nextProps));
	  };

	  ReduxRouter.prototype.receiveRoutes = function receiveRoutes(routes) {
	    if (!routes) return;

	    var store = this.context.store;

	    store.dispatch(_actionCreators.replaceRoutes(routes));
	  };

	  ReduxRouter.prototype.render = function render() {
	    var store = this.context.store;

	    if (!store) {
	      throw new Error('Redux store missing from context of <ReduxRouter>. Make sure you\'re ' + 'using a <Provider>');
	    }

	    var history = store.history;
	    var routerStateSelector = store[_constants.ROUTER_STATE_SELECTOR];

	    if (!history || !routerStateSelector) {
	      throw new Error('Redux store not configured properly for <ReduxRouter>. Make sure ' + 'you\'re using the reduxReactRouter() store enhancer.');
	    }

	    return _react2['default'].createElement(ReduxRouterContext, _extends({
	      history: history,
	      routerStateSelector: memoizeRouterStateSelector(routerStateSelector)
	    }, this.props));
	  };

	  return ReduxRouter;
	})(_react.Component);

	var ReduxRouterContext = (function (_Component2) {
	  _inherits(ReduxRouterContext, _Component2);

	  function ReduxRouterContext() {
	    _classCallCheck(this, _ReduxRouterContext);

	    _Component2.apply(this, arguments);
	  }

	  ReduxRouterContext.prototype.render = function render() {
	    return _react2['default'].createElement(_reactRouter.RoutingContext, this.props);
	  };

	  var _ReduxRouterContext = ReduxRouterContext;
	  ReduxRouterContext = _reactRedux.connect(function (state, _ref) {
	    var routerStateSelector = _ref.routerStateSelector;
	    return routerStateSelector(state) || {};
	  })(ReduxRouterContext) || ReduxRouterContext;
	  return ReduxRouterContext;
	})(_react.Component);

	exports['default'] = ReduxRouter;
	module.exports = exports['default'];

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = routerStateEquals;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(269);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _constants = __webpack_require__(266);

	/**
	 * Check if two router states are equal. Ignores `location.key`.
	 * @returns {Boolean}
	 */

	function routerStateEquals(a, b) {
	  if (!a && !b) return true;
	  if (a && !b || !a && b) return false;
	  if (a[_constants.DOES_NEED_REFRESH] || b[_constants.DOES_NEED_REFRESH]) return false;

	  return a.location.pathname === b.location.pathname && a.location.search === b.location.search && _deepEqual2['default'](a.location.state, b.location.state);
	}

	module.exports = exports['default'];

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(270);
	var isArguments = __webpack_require__(271);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },

/***/ 270:
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },

/***/ 271:
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routerDidChange = routerDidChange;
	exports.replaceRoutes = replaceRoutes;
	exports.historyAPI = historyAPI;

	var _constants = __webpack_require__(266);

	/**
	 * Action creator for signaling that the router has changed.
	 * @private
	 * @param  {RouterState} state - New router state
	 * @return {Action} Action object
	 */

	function routerDidChange(state) {
	  return {
	    type: _constants.ROUTER_DID_CHANGE,
	    payload: state
	  };
	}

	/**
	 * Action creator that replaces the current route config
	 * @private
	 * @param {Array<Route>|ReactElement} routes - New routes
	 */

	function replaceRoutes(routes) {
	  return {
	    type: _constants.REPLACE_ROUTES,
	    payload: routes
	  };
	}

	/**
	 * Creates an action creator for calling a history API method.
	 * @param {string} method - Name of method
	 * @returns {ActionCreator} Action creator with same parameters as corresponding
	 * history method
	 */

	function historyAPI(method) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return {
	      type: _constants.HISTORY_API,
	      payload: {
	        method: method,
	        args: args
	      }
	    };
	  };
	}

	var pushState = historyAPI('pushState');
	exports.pushState = pushState;
	var replaceState = historyAPI('replaceState');
	exports.replaceState = replaceState;
	var setState = historyAPI('setState');
	exports.setState = setState;
	var go = historyAPI('go');
	exports.go = go;
	var goBack = historyAPI('goBack');
	exports.goBack = goBack;
	var goForward = historyAPI('goForward');
	exports.goForward = goForward;

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(253);

	var _actionCreators = __webpack_require__(272);

	var _routerStateEquals = __webpack_require__(268);

	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);

	var _reduxReactRouter = __webpack_require__(274);

	var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);

	var _useDefaults = __webpack_require__(276);

	var _useDefaults2 = _interopRequireDefault(_useDefaults);

	var _routeReplacement = __webpack_require__(277);

	var _routeReplacement2 = _interopRequireDefault(_routeReplacement);

	function historySynchronization(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var onError = options.onError;
	        var routerStateSelector = options.routerStateSelector;

	        var store = next(options)(createStore)(reducer, initialState);
	        var history = store.history;

	        var routerState = undefined;

	        history.listen(function (error, nextRouterState) {
	          if (error) {
	            onError(error);
	            return;
	          }

	          var prevRouterState = routerStateSelector(store.getState());

	          if (!_routerStateEquals2['default'](prevRouterState, nextRouterState)) {
	            store.dispatch(_actionCreators.routerDidChange(nextRouterState));
	          }
	        });

	        store.subscribe(function () {
	          var nextRouterState = routerStateSelector(store.getState());

	          if (nextRouterState && !_routerStateEquals2['default'](routerState, nextRouterState)) {
	            var _nextRouterState$location = nextRouterState.location;
	            var state = _nextRouterState$location.state;
	            var pathname = _nextRouterState$location.pathname;
	            var query = _nextRouterState$location.query;

	            history.replaceState(state, pathname, query);
	          }

	          routerState = nextRouterState;
	        });

	        return store;
	      };
	    };
	  };
	}

	exports['default'] = _redux.compose(_useDefaults2['default'], _routeReplacement2['default'], historySynchronization)(_reduxReactRouter2['default']);
	module.exports = exports['default'];

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = reduxReactRouter;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(253);

	var _reactRouter = __webpack_require__(158);

	var _historyMiddleware = __webpack_require__(275);

	var _historyMiddleware2 = _interopRequireDefault(_historyMiddleware);

	var _constants = __webpack_require__(266);

	function reduxReactRouter(_ref) {
	  var routes = _ref.routes;
	  var createHistory = _ref.createHistory;
	  var parseQueryString = _ref.parseQueryString;
	  var stringifyQuery = _ref.stringifyQuery;
	  var routerStateSelector = _ref.routerStateSelector;

	  return function (createStore) {
	    return function (reducer, initialState) {
	      var history = _reactRouter.useRoutes(createHistory)({
	        routes: routes,
	        parseQueryString: parseQueryString,
	        stringifyQuery: stringifyQuery
	      });

	      var store = _redux.applyMiddleware(_historyMiddleware2['default'](history))(createStore)(reducer, initialState);

	      store.history = history;
	      store[_constants.ROUTER_STATE_SELECTOR] = routerStateSelector;

	      return store;
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = historyMiddleware;

	var _constants = __webpack_require__(266);

	/**
	 * Middleware for interacting with the history API
	 * @param {History} History object
	 */

	function historyMiddleware(history) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === _constants.HISTORY_API) {
	          var _action$payload = action.payload;
	          var method = _action$payload.method;
	          var args = _action$payload.args;

	          return history[method].apply(history, args);
	        }
	        return next(action);
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 276:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = useDefaults;
	var defaults = {
	  onError: function onError(error) {
	    throw error;
	  },
	  routerStateSelector: function routerStateSelector(state) {
	    return state.router;
	  }
	};

	function useDefaults(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var optionsWithDefaults = _extends({}, defaults, options);

	        var baseCreateHistory = optionsWithDefaults.createHistory;
	        var baseHistory = optionsWithDefaults.history;

	        var createHistory = undefined;
	        if (typeof baseCreateHistory === 'function') {
	          createHistory = baseCreateHistory;
	        } else if (baseHistory) {
	          createHistory = function () {
	            return baseHistory;
	          };
	        } else {
	          createHistory = null;
	        }

	        return next(_extends({}, optionsWithDefaults, {
	          createHistory: createHistory
	        }))(createStore)(reducer, initialState);
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = routeReplacement;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(253);

	var _reactRouter = __webpack_require__(158);

	var _replaceRoutesMiddleware = __webpack_require__(278);

	var _replaceRoutesMiddleware2 = _interopRequireDefault(_replaceRoutesMiddleware);

	function routeReplacement(next) {
	  return function (options) {
	    return function (createStore) {
	      return function (reducer, initialState) {
	        var baseRoutes = options.routes;
	        var getRoutes = options.getRoutes;
	        var routerStateSelector = options.routerStateSelector;

	        var store = undefined;

	        var childRoutes = [];
	        var areChildRoutesResolved = false;
	        var childRoutesCallbacks = [];

	        function replaceRoutes(r) {
	          childRoutes = _reactRouter.createRoutes(r);

	          var routerState = routerStateSelector(store.getState());
	          if (routerState) {
	            var _routerState$location = routerState.location;
	            var state = _routerState$location.state;
	            var pathname = _routerState$location.pathname;
	            var query = _routerState$location.query;

	            store.history.replaceState(state, pathname, query);
	          }

	          if (!areChildRoutesResolved) {
	            areChildRoutesResolved = true;
	            childRoutesCallbacks.forEach(function (cb) {
	              return cb(null, childRoutes);
	            });
	          }
	        }

	        var routes = undefined;
	        if (baseRoutes) {
	          routes = baseRoutes;
	        } else if (getRoutes) {
	          routes = getRoutes({
	            dispatch: function dispatch(action) {
	              return store.dispatch(action);
	            },
	            getState: function getState() {
	              return store.getState();
	            }
	          });
	        } else {
	          routes = [{
	            getChildRoutes: function getChildRoutes(location, cb) {
	              if (!areChildRoutesResolved) {
	                childRoutesCallbacks.push(cb);
	                return;
	              }

	              cb(null, childRoutes);
	            }
	          }];
	        }

	        store = _redux.compose(_redux.applyMiddleware(_replaceRoutesMiddleware2['default'](replaceRoutes)), next(_extends({}, options, {
	          routes: _reactRouter.createRoutes(routes)
	        })))(createStore)(reducer, initialState);

	        return store;
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = replaceRoutesMiddleware;

	var _constants = __webpack_require__(266);

	function replaceRoutesMiddleware(replaceRoutes) {
	  return function () {
	    return function (next) {
	      return function (action) {
	        if (action.type === _constants.REPLACE_ROUTES) {
	          replaceRoutes(action.payload);
	        }
	        return next(action);
	      };
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isActive;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouterLibIsActive = __webpack_require__(188);

	var _reactRouterLibIsActive2 = _interopRequireDefault(_reactRouterLibIsActive);

	/**
	 * Creates a router state selector that returns whether or not the given
	 * pathname and query are active.
	 * @param {String} pathname
	 * @param {Object} query
	 * @param {Boolean} indexOnly
	 * @return {Boolean}
	 */

	function isActive(pathname, query) {
	  var indexOnly = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	  return function (state) {
	    if (!state) return false;
	    var location = state.location;
	    var params = state.params;
	    var routes = state.routes;

	    return _reactRouterLibIsActive2['default'](pathname, query, indexOnly, location, routes, params);
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(253);

	var _reduxRouter = __webpack_require__(264);

	// import history from '../utils/history';

	var _historyLibCreateBrowserHistory = __webpack_require__(205);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	var _routes = __webpack_require__(224);

	var _routes2 = _interopRequireDefault(_routes);

	var _reduxThunk = __webpack_require__(283);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(475);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducersRoot = __webpack_require__(281);

	var _reducersRoot2 = _interopRequireDefault(_reducersRoot);

	var composeCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default']), (0, _reduxRouter.reduxReactRouter)({ routes: _routes2['default'], createHistory: _historyLibCreateBrowserHistory2['default'] }))(_redux.createStore);

	function configureStore(initialState) {
	  return composeCreateStore(_reducersRoot2['default'], initialState);
	}

	module.exports = exports['default'];

/***/ },

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(253);

	var _reduxRouter = __webpack_require__(264);

	var _posts = __webpack_require__(282);

	var _posts2 = _interopRequireDefault(_posts);

	var rootReducer = (0, _redux.combineReducers)({
	  postsReducer: _posts2['default'],
	  router: _reduxRouter.routerStateReducer
	});

	exports['default'] = rootReducer;
	module.exports = exports['default'];

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = postsReducer;

	var _constantsActionTypes = __webpack_require__(478);

	var initialState = {
	  isFetching: false,
	  posts: []
	};

	function postsReducer(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _constantsActionTypes.REQUEST_POSTS:
	      return Object.assign({}, state, {
	        isFetching: true
	      });

	    case _constantsActionTypes.RECEIVE_POSTS:
	      return Object.assign({}, state, {
	        isFetching: false,
	        posts: action.posts
	      });

	    case _constantsActionTypes.GET_POST:
	      return state;

	    case _constantsActionTypes.ADD_POST:

	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },

/***/ 283:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = thunkMiddleware;

	function thunkMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	  var getState = _ref.getState;

	  return function (next) {
	    return function (action) {
	      return typeof action === 'function' ? action(dispatch, getState) : next(action);
	    };
	  };
	}

	module.exports = exports['default'];

/***/ },

/***/ 471:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(246);

	var _componentsPostListReact = __webpack_require__(472);

	var _componentsPostListReact2 = _interopRequireDefault(_componentsPostListReact);

	var _actionsPosts = __webpack_require__(473);

	var IndexPage = (function (_Component) {
	  _inherits(IndexPage, _Component);

	  function IndexPage(props) {
	    _classCallCheck(this, IndexPage);

	    _get(Object.getPrototypeOf(IndexPage.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(IndexPage, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actionsPosts.getPosts)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var isFetching = _props.isFetching;
	      var posts = _props.posts;

	      // console.log(posts);
	      return _react2['default'].createElement(
	        'div',
	        null,
	        isFetching && posts.length === 0 && _react2['default'].createElement(
	          'h4',
	          { className: 'loading' },
	          'Loading...'
	        ),
	        posts.length > 0 && _react2['default'].createElement(_componentsPostListReact2['default'], { posts: posts })
	      );
	    }
	  }]);

	  return IndexPage;
	})(_react.Component);

	IndexPage.propsTypes = {
	  posts: _react.PropTypes.array.isRequired,
	  isFetching: _react.PropTypes.bool.isRequired
	};

	function mapStateToProps(state) {
	  // console.log(state);
	  var _state$postsReducer = state.postsReducer;
	  var isFetching = _state$postsReducer.isFetching;
	  var posts = _state$postsReducer.posts;

	  return {
	    posts: posts,
	    isFetching: isFetching
	  };
	}

	//right?
	function mapDispatchToProps(dispatch) {
	  return {
	    posts: function posts() {
	      return dispatch((0, _actionsPosts.getPosts)());
	    }
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(IndexPage);
	module.exports = exports['default'];

/***/ },

/***/ 472:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(158);

	var _utilsTools = __webpack_require__(240);

	var _utilsTools2 = _interopRequireDefault(_utilsTools);

	var PostItem = (function (_Component) {
	  _inherits(PostItem, _Component);

	  function PostItem() {
	    _classCallCheck(this, PostItem);

	    _get(Object.getPrototypeOf(PostItem.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PostItem, [{
	    key: 'render',
	    value: function render() {
	      var post = this.props.post;

	      return _react2['default'].createElement(
	        'section',
	        { className: 'post' },
	        _react2['default'].createElement(
	          'div',
	          { className: 'post-title' },
	          _react2['default'].createElement(
	            _reactRouter.Link,
	            { to: '/posts/' + post._id },
	            post.title
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'post-date' },
	          _utilsTools2['default'].formatToDate(post.createAt)
	        )
	      );
	    }
	  }]);

	  return PostItem;
	})(_react.Component);

	PostItem.propTypes = {
	  post: _react.PropTypes.object.isRequired
	};

	var PostList = (function (_Component2) {
	  _inherits(PostList, _Component2);

	  function PostList() {
	    _classCallCheck(this, PostList);

	    _get(Object.getPrototypeOf(PostList.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(PostList, [{
	    key: 'render',
	    value: function render() {
	      var posts = this.props.posts;

	      return _react2['default'].createElement(
	        'div',
	        { className: 'post-list' },
	        posts.map(function (post) {
	          return _react2['default'].createElement(PostItem, { post: post, key: post._id });
	        })
	      );
	    }
	  }]);

	  return PostList;
	})(_react.Component);

	PostList.propTypes = {
	  posts: _react.PropTypes.array.isRequired
	};

	exports['default'] = PostList;
	module.exports = exports['default'];

/***/ },

/***/ 473:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getPosts = getPosts;
	exports.getPost = getPost;
	exports.addPost = addPost;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _constantsActionTypes = __webpack_require__(478);

	var types = _interopRequireWildcard(_constantsActionTypes);

	var _isomorphicFetch = __webpack_require__(476);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function requestPosts() {
	  return {
	    type: types.REQUEST_POSTS
	  };
	}

	function receivePosts(json) {
	  return {
	    type: types.RECEIVE_POSTS,
	    posts: json,
	    receivedAt: Date.now()
	  };
	}

	function fetchPosts() {
	  return function (dispatch) {
	    dispatch(requestPosts());
	    return (0, _isomorphicFetch2['default'])('/api/posts').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receivePosts(json));
	    });
	  };
	}

	function fetchPost(id) {
	  return function (dispatch) {
	    dispatch(requestPosts());
	    return (0, _isomorphicFetch2['default'])('/api/posts/' + id).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receivePosts(json));
	    });
	  };
	}

	function getPosts() {
	  return function (dispatch) {
	    return dispatch(fetchPosts());
	  };
	}

	function getPost(id) {
	  console.log('getPost');
	  return function (dispatch) {
	    return dispatch(fetchPost(id));
	  };
	}

	function addPost(title, content) {
	  return { type: types.ADD_POST, title: title, content: content };
	}

/***/ },

/***/ 474:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(246);

	var _componentsPostReact = __webpack_require__(241);

	var _componentsPostReact2 = _interopRequireDefault(_componentsPostReact);

	var _actionsPosts = __webpack_require__(473);

	var PostPage = (function (_Component) {
	  _inherits(PostPage, _Component);

	  function PostPage(props) {
	    _classCallCheck(this, PostPage);

	    _get(Object.getPrototypeOf(PostPage.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(PostPage, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var id = _props.id;

	      console.log('dispatch');
	      console.log(id);
	      dispatch((0, _actionsPosts.getPost)(id));
	      // getPost();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var isFetching = _props2.isFetching;
	      var post = _props2.post;

	      return _react2['default'].createElement(
	        'div',
	        null,
	        isFetching && _react2['default'].createElement(
	          'h4',
	          { className: 'loading' },
	          'Loading...'
	        ),
	        !isFetching && _react2['default'].createElement(_componentsPostReact2['default'], { post: post })
	      );
	    }
	  }]);

	  return PostPage;
	})(_react.Component);

	PostPage.propsTypes = {
	  id: _react.PropTypes.string.isRequired,
	  post: _react.PropTypes.object.isRequired,
	  isFetching: _react.PropTypes.bool.isRequired
	};

	function mapStateToProps(state) {
	  var id = state.router.params.id;

	  // console.log(id);
	  var _state$postsReducer = state.postsReducer;
	  var isFetching = _state$postsReducer.isFetching;
	  var posts = _state$postsReducer.posts;

	  // console.log(posts);
	  console.log(isFetching);
	  // console.log(id);
	  // console.log(state);
	  return {
	    id: id,
	    post: posts[0],
	    isFetching: isFetching
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(PostPage);
	module.exports = exports['default'];

/***/ },

/***/ 475:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	var pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};

	// Use the new performance api to get better precision if available
	var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;

	/**
	 * Creates logger with followed options
	 *
	 * @namespace
	 * @property {object} options - options for logger
	 * @property {string} options.level - console[level]
	 * @property {object} options.logger - implementation of the `console` API.
	 * @property {boolean} options.collapsed - is group collapsed?
	 * @property {boolean} options.predicate - condition which resolves logger behavior
	 * @property {bool} options.duration - print duration of each action?
	 * @property {bool} options.timestamp - print timestamp with each action?
	 * @property {function} options.transformer - transform state before print
	 * @property {function} options.actionTransformer - transform action before print
	 */

	function createLogger() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        var level = options.level;
	        var logger = options.logger;
	        var collapsed = options.collapsed;
	        var predicate = options.predicate;
	        var _options$duration = options.duration;
	        var duration = _options$duration === undefined ? false : _options$duration;
	        var _options$timestamp = options.timestamp;
	        var timestamp = _options$timestamp === undefined ? true : _options$timestamp;
	        var _options$transformer = options.transformer;
	        var transformer = _options$transformer === undefined ? function (state) {
	          return state;
	        } : _options$transformer;
	        var _options$actionTransformer = options.actionTransformer;
	        var actionTransformer = _options$actionTransformer === undefined ? function (actn) {
	          return actn;
	        } : _options$actionTransformer;

	        var console = logger || window.console;

	        // exit if console undefined
	        if (typeof console === "undefined") {
	          return next(action);
	        }

	        // exit early if predicate function returns false
	        if (typeof predicate === "function" && !predicate(getState, action)) {
	          return next(action);
	        }

	        var started = timer.now();
	        var prevState = transformer(getState());

	        var returnValue = next(action);
	        var took = timer.now() - started;

	        var nextState = transformer(getState());

	        // formatters
	        var time = new Date();
	        var isCollapsed = typeof collapsed === "function" ? collapsed(getState, action) : collapsed;

	        var formattedTime = timestamp ? " @ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3) : "";
	        var formattedDuration = duration ? " in " + took.toFixed(2) + " ms" : "";
	        var formattedAction = actionTransformer(action);
	        var message = "action " + formattedAction.type + formattedTime + formattedDuration;
	        var startMessage = isCollapsed ? console.groupCollapsed : console.group;

	        // render
	        try {
	          startMessage.call(console, message);
	        } catch (e) {
	          console.log(message);
	        }

	        if (level) {
	          console[level]("%c prev state", "color: #9E9E9E; font-weight: bold", prevState);
	          console[level]("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
	          console[level]("%c next state", "color: #4CAF50; font-weight: bold", nextState);
	        } else {
	          console.log("%c prev state", "color: #9E9E9E; font-weight: bold", prevState);
	          console.log("%c action", "color: #03A9F4; font-weight: bold", formattedAction);
	          console.log("%c next state", "color: #4CAF50; font-weight: bold", nextState);
	        }

	        try {
	          console.groupEnd();
	        } catch (e) {
	          console.log("—— log end ——");
	        }

	        return returnValue;
	      };
	    };
	  };
	}

	exports["default"] = createLogger;
	module.exports = exports["default"];

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(477);
	module.exports = self.fetch.bind(self);


/***/ },

/***/ 477:
/***/ function(module, exports) {

	(function() {
	  'use strict';

	  if (self.fetch) {
	    return
	  }

	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }

	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }

	  function Headers(headers) {
	    this.map = {}

	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)

	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }

	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }

	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }

	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }

	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }

	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }

	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }

	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }

	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }

	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }

	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }

	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }

	  var support = {
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob();
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self
	  }

	  function Body() {
	    this.bodyUsed = false


	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (!body) {
	        this._bodyText = ''
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	    }

	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }

	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }

	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }

	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }

	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }

	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }

	    return this
	  }

	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }

	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }

	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null

	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }

	  Request.prototype.clone = function() {
	    return new Request(this)
	  }

	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }

	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = xhr.getAllResponseHeaders().trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }

	  Body.call(Request.prototype)

	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }

	    this._initBody(bodyInit)
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	  }

	  Body.call(Response.prototype)

	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }

	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }

	  var redirectStatuses = [301, 302, 303, 307, 308]

	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }

	    return new Response(null, {status: status, headers: {location: url}})
	  }

	  self.Headers = Headers;
	  self.Request = Request;
	  self.Response = Response;

	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }

	      var xhr = new XMLHttpRequest()

	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }

	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }

	        return;
	      }

	      xhr.onload = function() {
	        var status = (xhr.status === 1223) ? 204 : xhr.status
	        if (status < 100 || status > 599) {
	          reject(new TypeError('Network request failed'))
	          return
	        }
	        var options = {
	          status: status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText;
	        resolve(new Response(body, options))
	      }

	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }

	      xhr.open(request.method, request.url, true)

	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }

	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }

	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })

	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})();


/***/ },

/***/ 478:
/***/ function(module, exports) {

	

	// var keyMirror = require('keymirror');

	// module.exports = {

	//     ActionTypes: keyMirror({
	//         ADD_POST: null,
	//         GET_POST: null,
	//         GET_POSTS: null,

	//         CREATE_MESSAGE: null,

	//     })
	// }

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	        value: true
	});
	var REQUEST_POSTS = 'REQUEST_POSTS';
	exports.REQUEST_POSTS = REQUEST_POSTS;
	var RECEIVE_POSTS = 'RECEIVE_POSTS';
	exports.RECEIVE_POSTS = RECEIVE_POSTS;
	var GET_POSTS = 'GET_POSTS';
	exports.GET_POSTS = GET_POSTS;
	var GET_POST = 'GET_POST';
	exports.GET_POST = GET_POST;
	var ADD_POST = 'ADD_POST';
	exports.ADD_POST = ADD_POST;

/***/ }

});