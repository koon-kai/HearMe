webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// import 'babel-core/polyfill';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(158);

	var _reactRedux = __webpack_require__(159);

	var _reduxRouter = __webpack_require__(177);

	var _storeConfigureStore = __webpack_require__(433);

	var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

	__webpack_require__(445);

	var store = (0, _storeConfigureStore2['default'])();

	(0, _reactDom.render)(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(_reduxRouter.ReduxRouter, null)
	), document.getElementById('main'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }

	var _componentsProvider = __webpack_require__(160);

	exports.Provider = _interopRequire(_componentsProvider);

	var _componentsConnect = __webpack_require__(162);

	exports.connect = _interopRequire(_componentsConnect);

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _utilsStoreShape = __webpack_require__(161);

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
/* 161 */
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
/* 162 */
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

	var _utilsStoreShape = __webpack_require__(161);

	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);

	var _utilsShallowEqual = __webpack_require__(163);

	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

	var _utilsIsPlainObject = __webpack_require__(164);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsWrapActionCreators = __webpack_require__(165);

	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);

	var _hoistNonReactStatics = __webpack_require__(175);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _invariant = __webpack_require__(176);

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
/* 163 */
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
/* 164 */
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = wrapActionCreators;

	var _redux = __webpack_require__(166);

	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(167);

	var _createStore2 = _interopRequireDefault(_createStore);

	var _utilsCombineReducers = __webpack_require__(169);

	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);

	var _utilsBindActionCreators = __webpack_require__(172);

	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);

	var _utilsApplyMiddleware = __webpack_require__(173);

	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);

	var _utilsCompose = __webpack_require__(174);

	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);

	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsIsPlainObject = __webpack_require__(168);

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
/* 168 */
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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = combineReducers;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createStore = __webpack_require__(167);

	var _utilsIsPlainObject = __webpack_require__(168);

	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);

	var _utilsMapValues = __webpack_require__(170);

	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);

	var _utilsPick = __webpack_require__(171);

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
/* 170 */
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
/* 171 */
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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = bindActionCreators;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utilsMapValues = __webpack_require__(170);

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
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = applyMiddleware;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _compose = __webpack_require__(174);

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
/* 174 */
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
/* 175 */
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
/* 176 */
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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _routerStateReducer2 = __webpack_require__(178);

	var _routerStateReducer3 = _interopRequireDefault(_routerStateReducer2);

	exports.routerStateReducer = _routerStateReducer3['default'];

	var _ReduxRouter2 = __webpack_require__(180);

	var _ReduxRouter3 = _interopRequireDefault(_ReduxRouter2);

	exports.ReduxRouter = _ReduxRouter3['default'];

	var _client = __webpack_require__(232);

	var _client2 = _interopRequireDefault(_client);

	exports.reduxReactRouter = _client2['default'];

	var _isActive2 = __webpack_require__(238);

	var _isActive3 = _interopRequireDefault(_isActive2);

	exports.isActive = _isActive3['default'];

	var _actionCreators = __webpack_require__(231);

	exports.historyAPI = _actionCreators.historyAPI;
	exports.pushState = _actionCreators.pushState;
	exports.replaceState = _actionCreators.replaceState;
	exports.setState = _actionCreators.setState;
	exports.go = _actionCreators.go;
	exports.goBack = _actionCreators.goBack;
	exports.goForward = _actionCreators.goForward;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = routerStateReducer;

	var _constants = __webpack_require__(179);

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
/* 179 */
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
/* 180 */
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

	var _reactRedux = __webpack_require__(159);

	var _reactRouter = __webpack_require__(181);

	var _routerStateEquals = __webpack_require__(227);

	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);

	var _constants = __webpack_require__(179);

	var _actionCreators = __webpack_require__(231);

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
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = routerStateEquals;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(228);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _constants = __webpack_require__(179);

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
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(229);
	var isArguments = __webpack_require__(230);

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
/* 229 */
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
/* 230 */
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
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routerDidChange = routerDidChange;
	exports.replaceRoutes = replaceRoutes;
	exports.historyAPI = historyAPI;

	var _constants = __webpack_require__(179);

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
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _actionCreators = __webpack_require__(231);

	var _routerStateEquals = __webpack_require__(227);

	var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);

	var _reduxReactRouter = __webpack_require__(233);

	var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);

	var _useDefaults = __webpack_require__(235);

	var _useDefaults2 = _interopRequireDefault(_useDefaults);

	var _routeReplacement = __webpack_require__(236);

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
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = reduxReactRouter;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _reactRouter = __webpack_require__(181);

	var _historyMiddleware = __webpack_require__(234);

	var _historyMiddleware2 = _interopRequireDefault(_historyMiddleware);

	var _constants = __webpack_require__(179);

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
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = historyMiddleware;

	var _constants = __webpack_require__(179);

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
/* 235 */
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
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports['default'] = routeReplacement;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _reactRouter = __webpack_require__(181);

	var _replaceRoutesMiddleware = __webpack_require__(237);

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
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = replaceRoutesMiddleware;

	var _constants = __webpack_require__(179);

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
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = isActive;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactRouterLibIsActive = __webpack_require__(211);

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
/* 239 */,
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(241);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(242);

	var _ExecutionEnvironment = __webpack_require__(243);

	var _DOMUtils = __webpack_require__(244);

	var _DOMStateStorage = __webpack_require__(245);

	var _createDOMHistory = __webpack_require__(247);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory(options) {
	  _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'Browser history needs a DOM');

	  var isSupported = _DOMUtils.supportsHistory();

	  function getCurrentLocation(historyState) {
	    historyState = historyState || window.history.state || {};

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
	    }

	    return history.createLocation(path, state, undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (isSupported) {
	        window.history.pushState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.href = path;
	      }
	    } else {
	      // REPLACE
	      if (isSupported) {
	        window.history.replaceState(historyState, null, path);
	      } else {
	        // Use a full-page reload to preserve the URL.
	        window.location.replace(path);
	      }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];

/***/ },
/* 241 */
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
/* 242 */
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },
/* 243 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },
/* 244 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(246);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededError = 'QuotaExceededError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	  } catch (error) {
	    if (error.name === QuotaExceededError || window.sessionStorage.length === 0) {
	      // Probably in Safari "private mode" where sessionStorage quota is 0. #42
	      _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode');

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = window.sessionStorage.getItem(createKey(key));

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(241);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(243);

	var _DOMUtils = __webpack_require__(244);

	var _createHistory = __webpack_require__(248);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    _invariant2['default'](_ExecutionEnvironment.canUseDOM, 'DOM history needs a DOM');

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _deepEqual = __webpack_require__(249);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _AsyncUtils = __webpack_require__(252);

	var _Actions = __webpack_require__(242);

	var _createLocation2 = __webpack_require__(253);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(255);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(256);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var keyLength = options.keyLength;
	  var getUserConfirmation = options.getUserConfirmation;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        finishTransition(nextLocation);
	        updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function pushState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.PUSH, createKey()));
	  }

	  function replaceState(state, path) {
	    transitionTo(createLocation(path, state, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(path) {
	    if (path == null || typeof path === 'string') return path;

	    var pathname = path.pathname;
	    var search = path.search;
	    var hash = path.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(path) {
	    return createPath(path);
	  }

	  function createLocation(path, state, action) {
	    var key = arguments.length <= 3 || arguments[3] === undefined ? createKey() : arguments[3];

	    return _createLocation3['default'](path, state, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    pushState: pushState,
	    replaceState: replaceState,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(250);
	var isArguments = __webpack_require__(251);

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
/* 250 */
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
/* 251 */
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
/* 252 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0;
	  var isDone = false;

	  function done() {
	    isDone = true;
	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) return;

	    if (currentTurn < turns) {
	      work.call(this, currentTurn++, next, done);
	    } else {
	      done.apply(this, arguments);
	    }
	  }

	  next();
	}

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Actions = __webpack_require__(242);

	var _parsePath = __webpack_require__(254);

	var _parsePath2 = _interopRequireDefault(_parsePath);

	function createLocation() {
	  var path = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var state = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	  var action = arguments.length <= 2 || arguments[2] === undefined ? _Actions.POP : arguments[2];
	  var key = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof path === 'string') path = _parsePath2['default'](path);

	  var pathname = path.pathname || '/';
	  var search = path.search || '';
	  var hash = path.hash || '';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(246);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  _warning2['default'](false, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', string);

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}

	exports['default'] = parsePath;
	module.exports = exports['default'];

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(246);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead');
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(246);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    _warning2['default'](false, '[history] ' + message);
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];

/***/ },
/* 257 */
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
/* 258 */
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
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _reduxRouter = __webpack_require__(177);

	var _posts = __webpack_require__(260);

	var _posts2 = _interopRequireDefault(_posts);

	var _chat = __webpack_require__(262);

	var _chat2 = _interopRequireDefault(_chat);

	var rootReducer = (0, _redux.combineReducers)({
	  chatReducer: _chat2['default'],
	  postsReducer: _posts2['default'],
	  router: _reduxRouter.routerStateReducer
	});

	exports['default'] = rootReducer;
	module.exports = exports['default'];

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = postsReducer;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _constantsActionTypes = __webpack_require__(261);

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
	      return Object.assign({}, state, {
	        posts: [action.post].concat(_toConsumableArray(state.posts))
	      });

	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 261 */
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
	var REQUEST_MESSAGES = 'REQUEST_MESSAGES';
	exports.REQUEST_MESSAGES = REQUEST_MESSAGES;
	var RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
	exports.RECEIVE_MESSAGES = RECEIVE_MESSAGES;
	var GET_MESSAGES = 'GET_MESSAGES';
	exports.GET_MESSAGES = GET_MESSAGES;
	var CREATE_MESSAGE = 'CREATE_MESSAGE';
	exports.CREATE_MESSAGE = CREATE_MESSAGE;
	var ADD_MESSAGE = 'ADD_MESSAGE';
	exports.ADD_MESSAGE = ADD_MESSAGE;

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = chatReducer;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _constantsActionTypes = __webpack_require__(261);

	var initialState = {
	  isFetching: false,
	  messages: []
	};

	function chatReducer(state, action) {
	  if (state === undefined) state = initialState;

	  switch (action.type) {
	    case _constantsActionTypes.REQUEST_MESSAGES:
	      return Object.assign({}, state, {
	        isFetching: true
	      });

	    case _constantsActionTypes.RECEIVE_MESSAGES:
	      return Object.assign({}, state, {
	        isFetching: false,
	        messages: action.messages
	      });

	    case _constantsActionTypes.ADD_MESSAGE:
	      return Object.assign({}, state, {
	        messages: [action.message].concat(_toConsumableArray(state.messages))
	      });

	    default:
	      return state;
	  }
	}

	module.exports = exports['default'];

/***/ },
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ImmutabilityHelper = __webpack_require__(268);
	var Styles = __webpack_require__(271);

	// This mixin isn't necessary and will be removed in v0.11

	/**
	 *	@params:
	 *	styles = Current styles.
	 *  props = New style properties that will override the current style.
	 */
	module.exports = {

	  propTypes: {
	    style: React.PropTypes.object
	  },

	  //Moved this function to ImmutabilityHelper.merge
	  mergeStyles: function mergeStyles() {
	    return ImmutabilityHelper.merge.apply(this, arguments);
	  },

	  //Moved this function to /utils/styles.js
	  mergeAndPrefix: function mergeAndPrefix() {
	    return Styles.mergeAndPrefix.apply(this, arguments);
	  },

	  // prepareStyles is used to merge multiple styles, make sure they are flipped to rtl
	  // if needed, and then autoprefix them. It should probably always be used instead of
	  // mergeAndPrefix.
	  //
	  // Never call this on the same style object twice. As a rule of thumb,
	  //   only call it when passing style attribute to html elements.
	  // If you call it twice you'll get a warning anyway.
	  prepareStyles: function prepareStyles() {
	    return Styles.prepareStyles.apply(Styles, [this.state && this.state.muiTheme || this.context.muiTheme].concat([].slice.apply(arguments)));
	  }
	};

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var update = __webpack_require__(269);

	function mergeSingle(objA, objB) {
	  if (!objA) return objB;
	  if (!objB) return objA;
	  return update(objA, { $merge: objB });
	}

	module.exports = {

	  merge: function merge() {
	    var args = Array.prototype.slice.call(arguments, 0);
	    var base = args[0];

	    for (var i = 1; i < args.length; i++) {
	      if (args[i]) {
	        base = mergeSingle(base, args[i]);
	      }
	    }
	    return base;
	  },

	  mergeItem: function mergeItem(obj, key, newValueObject) {
	    var command = {};
	    command[key] = { $merge: newValueObject };
	    return update(obj, command);
	  },

	  push: function push(array, obj) {
	    var newObj = Array.isArray(obj) ? obj : [obj];
	    return update(array, { $push: newObj });
	  },

	  shift: function shift(array) {
	    return update(array, { $splice: [[0, 1]] });
	  }

	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(270);

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var assign = __webpack_require__(39);
	var keyOf = __webpack_require__(79);
	var invariant = __webpack_require__(13);
	var hasOwnProperty = ({}).hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : invariant(false) : undefined;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. ' + 'Did you forget to wrap your parameter in an array?', command, specValue) : invariant(false) : undefined;
	}

	function update(value, spec) {
	  !(typeof spec === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one ' + 'of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : invariant(false) : undefined;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : invariant(false) : undefined;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : invariant(false) : undefined;
	    !(nextValue && typeof nextValue === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : invariant(false) : undefined;
	    assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : invariant(false) : undefined;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. ' + 'Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : invariant(false) : undefined;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : invariant(false) : undefined;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var AutoPrefix = __webpack_require__(272);
	var ImmutabilityHelper = __webpack_require__(268);

	var reTranslate = /((^|\s)translate(3d|X)?\()(\-?[\d]+)/;

	var reSkew = /((^|\s)skew(x|y)?\()\s*(\-?[\d]+)(deg|rad|grad)(,\s*(\-?[\d]+)(deg|rad|grad))?/;

	module.exports = {

	  mergeAndPrefix: function mergeAndPrefix() {
	    var mergedStyles = ImmutabilityHelper.merge.apply(this, arguments);
	    return AutoPrefix.all(mergedStyles);
	  },

	  // This function ensures that `style` supports both ltr and rtl directions by checking
	  //   `styleConstants` in `muiTheme` and replacing attribute keys if necessary.
	  ensureDirection: function ensureDirection(muiTheme, style) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (style.didFlip) {
	        console.warn(new Error('You\'re calling `ensureDirection` on the same style object twice.'));
	      }
	      style = ImmutabilityHelper.merge({
	        didFlip: 'true'
	      }, style);
	    }

	    // Left to right is the default. No need to flip anything.
	    if (!muiTheme.isRtl) return style;

	    var flippedAttributes = {
	      // Keys and their replacements.
	      right: 'left',
	      left: 'right',
	      marginRight: 'marginLeft',
	      marginLeft: 'marginRight',
	      paddingRight: 'paddingLeft',
	      paddingLeft: 'paddingRight',
	      borderRight: 'borderLeft',
	      borderLeft: 'borderRight'
	    };

	    var newStyle = {};

	    Object.keys(style).forEach(function (attribute) {
	      var value = style[attribute];
	      var key = attribute;

	      if (flippedAttributes.hasOwnProperty(attribute)) {
	        key = flippedAttributes[attribute];
	      }

	      switch (attribute) {
	        case 'float':
	        case 'textAlign':
	          if (value === 'right') {
	            value = 'left';
	          } else if (value === 'left') {
	            value = 'right';
	          }
	          break;
	        case 'direction':
	          if (value === 'ltr') {
	            value = 'rtl';
	          } else if (value === 'rtl') {
	            value = 'ltr';
	          }
	          break;
	        case 'transform':
	          var matches = undefined;
	          if (matches = value.match(reTranslate)) {
	            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]));
	          }
	          if (matches = value.match(reSkew)) {
	            value = value.replace(matches[0], matches[1] + -parseFloat(matches[4]) + matches[5] + matches[6] ? ',' + -parseFloat(matches[7]) + matches[8] : '');
	          }
	          break;
	        case 'transformOrigin':
	          if (value.indexOf('right') > -1) {
	            value = value.replace('right', 'left');
	          } else if (value.indexOf('left') > -1) {
	            value = value.replace('left', 'right');
	          }
	          break;
	      }

	      newStyle[key] = value;
	    });

	    return newStyle;
	  },

	  prepareStyles: function prepareStyles(muiTheme) {
	    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      styles[_key - 1] = arguments[_key];
	    }

	    styles = styles.length > 1 ? ImmutabilityHelper.merge.apply(this, styles) : styles[0] || {};
	    var flipped = this.ensureDirection(muiTheme, styles);
	    return AutoPrefix.all(flipped);
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isBrowser = __webpack_require__(273);

	var Modernizr = isBrowser ? __webpack_require__(274) : undefined;

	//Keep track of already prefixed keys so we can skip Modernizr prefixing
	var prefixedKeys = {};

	module.exports = {

	  all: function all(styles) {
	    var prefixedStyle = {};
	    for (var key in styles) {
	      prefixedStyle[this.single(key)] = styles[key];
	    }
	    return prefixedStyle;
	  },

	  set: function set(style, key, value) {
	    style[this.single(key)] = value;
	  },

	  single: function single(key) {

	    //If a browser doesn't exist, we can't prefix with Modernizr so
	    //just return the key
	    if (!isBrowser) return key;

	    //Check if we've prefixed this key before, just return it
	    if (prefixedKeys.hasOwnProperty(key)) return prefixedKeys[key];

	    //Key hasn't been prefixed yet, prefix with Modernizr
	    var prefKey = Modernizr.prefixed(key);

	    // Windows 7 Firefox has an issue with the implementation of Modernizr.prefixed
	    // and is capturing 'false' as the CSS property name instead of the non-prefixed version.
	    if (prefKey === false) return key;

	    //Save the key off for the future and return the prefixed key
	    prefixedKeys[key] = prefKey;
	    return prefKey;
	  },

	  singleHyphened: function singleHyphened(key) {
	    var str = this.single(key);

	    return !str ? key : str.replace(/([A-Z])/g, function (str, m1) {
	      return '-' + m1.toLowerCase();
	    }).replace(/^ms-/, '-ms-');
	  }

	};

/***/ },
/* 273 */
/***/ function(module, exports) {

	'use strict';

	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 274 */
/***/ function(module, exports) {

	/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
	 * Build: http://modernizr.com/download/#-borderradius-boxshadow-opacity-csstransforms-csstransforms3d-csstransitions-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
	 */

	'use strict';

	module.exports = (function (window, document, undefined) {

	    var version = '2.8.3',
	        Modernizr = {},
	        docElement = document.documentElement,
	        mod = 'modernizr',
	        modElem = document.createElement(mod),
	        mStyle = modElem.style,
	        prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
	        omPrefixes = 'Webkit Moz O ms',
	        cssomPrefixes = omPrefixes.split(' '),
	        domPrefixes = omPrefixes.toLowerCase().split(' '),
	        tests = {},
	        classes = [],
	        slice = classes.slice,
	        featureName = undefined,
	        injectElementWithStyles = function injectElementWithStyles(rule, callback, nodes, testnames) {

	        var style = undefined,
	            ret = undefined,
	            node = undefined,
	            docOverflow = undefined,
	            div = document.createElement('div'),
	            body = document.body,
	            fakeBody = body || document.createElement('body');

	        if (parseInt(nodes, 10)) {
	            while (nodes--) {
	                node = document.createElement('div');
	                node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
	                div.appendChild(node);
	            }
	        }

	        style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
	        div.id = mod;
	        (body ? div : fakeBody).innerHTML += style;
	        fakeBody.appendChild(div);
	        if (!body) {
	            fakeBody.style.background = '';
	            fakeBody.style.overflow = 'hidden';
	            docOverflow = docElement.style.overflow;
	            docElement.style.overflow = 'hidden';
	            docElement.appendChild(fakeBody);
	        }

	        ret = callback(div, rule);
	        if (!body) {
	            fakeBody.parentNode.removeChild(fakeBody);
	            docElement.style.overflow = docOverflow;
	        } else {
	            div.parentNode.removeChild(div);
	        }

	        return !!ret;
	    },
	        _hasOwnProperty = ({}).hasOwnProperty,
	        hasOwnProp = undefined;

	    function is(obj, type) {
	        return typeof obj === type;
	    }

	    if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
	        hasOwnProp = function (object, property) {
	            return _hasOwnProperty.call(object, property);
	        };
	    } else {
	        hasOwnProp = function (object, property) {
	            return property in object && is(object.constructor.prototype[property], 'undefined');
	        };
	    }

	    if (!Function.prototype.bind) {
	        Function.prototype.bind = function bind(that) {

	            var target = this;

	            if (typeof target != "function") {
	                throw new TypeError();
	            }

	            var args = slice.call(arguments, 1),
	                bound = function bound() {

	                if (this instanceof bound) {

	                    var F = function F() {};
	                    F.prototype = target.prototype;
	                    var _self = new F();

	                    var result = target.apply(_self, args.concat(slice.call(arguments)));
	                    if (Object(result) === result) {
	                        return result;
	                    }
	                    return _self;
	                } else {

	                    return target.apply(that, args.concat(slice.call(arguments)));
	                }
	            };

	            return bound;
	        };
	    }

	    function setCss(str) {
	        mStyle.cssText = str;
	    }

	    function setCssAll(str1, str2) {
	        return setCss(prefixes.join(str1 + ';') + (str2 || ''));
	    }

	    function contains(str, substr) {
	        return !! ~('' + str).indexOf(substr);
	    }

	    function testProps(props, prefixed) {
	        for (var i in props) {
	            var prop = props[i];
	            if (!contains(prop, "-") && mStyle[prop] !== undefined) {
	                return prefixed == 'pfx' ? prop : true;
	            }
	        }
	        return false;
	    }

	    function testDOMProps(props, obj, elem) {
	        for (var i in props) {
	            var item = obj[props[i]];
	            if (item !== undefined) {

	                if (elem === false) return props[i];

	                if (is(item, 'function')) {
	                    return item.bind(elem || obj);
	                }

	                return item;
	            }
	        }
	        return false;
	    }

	    function testPropsAll(prop, prefixed, elem) {

	        var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
	            props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

	        if (is(prefixed, "string") || is(prefixed, "undefined")) {
	            return testProps(props, prefixed);
	        } else {
	            props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
	            return testDOMProps(props, prefixed, elem);
	        }
	    }

	    tests.borderradius = function () {
	        return testPropsAll('borderRadius');
	    };

	    tests.boxshadow = function () {
	        return testPropsAll('boxShadow');
	    };

	    tests.opacity = function () {
	        setCssAll('opacity:.55');

	        return (/^0.55$/.test(mStyle.opacity)
	        );
	    };
	    tests.csstransforms = function () {
	        return !!testPropsAll('transform');
	    };

	    tests.csstransforms3d = function () {

	        var ret = !!testPropsAll('perspective');

	        if (ret && 'webkitPerspective' in docElement.style) {

	            injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node) {
	                ret = node.offsetLeft === 9 && node.offsetHeight === 3;
	            });
	        }
	        return ret;
	    };

	    tests.csstransitions = function () {
	        return testPropsAll('transition');
	    };

	    for (var feature in tests) {
	        if (hasOwnProp(tests, feature)) {
	            featureName = feature.toLowerCase();
	            Modernizr[featureName] = tests[feature]();

	            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
	        }
	    }

	    Modernizr.addTest = function (feature, test) {
	        if (typeof feature == 'object') {
	            for (var key in feature) {
	                if (hasOwnProp(feature, key)) {
	                    Modernizr.addTest(key, feature[key]);
	                }
	            }
	        } else {

	            feature = feature.toLowerCase();

	            if (Modernizr[feature] !== undefined) {
	                return Modernizr;
	            }

	            test = typeof test == 'function' ? test() : test;

	            if (typeof enableClasses !== "undefined" && enableClasses) {
	                docElement.className += ' ' + (test ? '' : 'no-') + feature;
	            }
	            Modernizr[feature] = test;
	        }

	        return Modernizr;
	    };

	    setCss('');

	    Modernizr._version = version;

	    Modernizr._prefixes = prefixes;
	    Modernizr._domPrefixes = domPrefixes;
	    Modernizr._cssomPrefixes = cssomPrefixes;

	    Modernizr.testProp = function (prop) {
	        return testProps([prop]);
	    };

	    Modernizr.testAllProps = testPropsAll;

	    Modernizr.testStyles = injectElementWithStyles;
	    Modernizr.prefixed = function (prop, obj, elem) {
	        if (!obj) {
	            return testPropsAll(prop, 'pfx');
	        } else {
	            return testPropsAll(prop, obj, elem);
	        }
	    };

	    return Modernizr;
	})(window, window.document);

/***/ },
/* 275 */,
/* 276 */
/***/ function(module, exports) {

	// To include this file in your project:
	// let mui = require('mui');
	// let Colors = mui.Styles.Colors;

	'use strict';

	module.exports = {

	  red50: '#ffebee',
	  red100: '#ffcdd2',
	  red200: '#ef9a9a',
	  red300: '#e57373',
	  red400: '#ef5350',
	  red500: '#f44336',
	  red600: '#e53935',
	  red700: '#d32f2f',
	  red800: '#c62828',
	  red900: '#b71c1c',
	  redA100: '#ff8a80',
	  redA200: '#ff5252',
	  redA400: '#ff1744',
	  redA700: '#d50000',

	  pink50: '#fce4ec',
	  pink100: '#f8bbd0',
	  pink200: '#f48fb1',
	  pink300: '#f06292',
	  pink400: '#ec407a',
	  pink500: '#e91e63',
	  pink600: '#d81b60',
	  pink700: '#c2185b',
	  pink800: '#ad1457',
	  pink900: '#880e4f',
	  pinkA100: '#ff80ab',
	  pinkA200: '#ff4081',
	  pinkA400: '#f50057',
	  pinkA700: '#c51162',

	  purple50: '#f3e5f5',
	  purple100: '#e1bee7',
	  purple200: '#ce93d8',
	  purple300: '#ba68c8',
	  purple400: '#ab47bc',
	  purple500: '#9c27b0',
	  purple600: '#8e24aa',
	  purple700: '#7b1fa2',
	  purple800: '#6a1b9a',
	  purple900: '#4a148c',
	  purpleA100: '#ea80fc',
	  purpleA200: '#e040fb',
	  purpleA400: '#d500f9',
	  purpleA700: '#aa00ff',

	  deepPurple50: '#ede7f6',
	  deepPurple100: '#d1c4e9',
	  deepPurple200: '#b39ddb',
	  deepPurple300: '#9575cd',
	  deepPurple400: '#7e57c2',
	  deepPurple500: '#673ab7',
	  deepPurple600: '#5e35b1',
	  deepPurple700: '#512da8',
	  deepPurple800: '#4527a0',
	  deepPurple900: '#311b92',
	  deepPurpleA100: '#b388ff',
	  deepPurpleA200: '#7c4dff',
	  deepPurpleA400: '#651fff',
	  deepPurpleA700: '#6200ea',

	  indigo50: '#e8eaf6',
	  indigo100: '#c5cae9',
	  indigo200: '#9fa8da',
	  indigo300: '#7986cb',
	  indigo400: '#5c6bc0',
	  indigo500: '#3f51b5',
	  indigo600: '#3949ab',
	  indigo700: '#303f9f',
	  indigo800: '#283593',
	  indigo900: '#1a237e',
	  indigoA100: '#8c9eff',
	  indigoA200: '#536dfe',
	  indigoA400: '#3d5afe',
	  indigoA700: '#304ffe',

	  blue50: '#e3f2fd',
	  blue100: '#bbdefb',
	  blue200: '#90caf9',
	  blue300: '#64b5f6',
	  blue400: '#42a5f5',
	  blue500: '#2196f3',
	  blue600: '#1e88e5',
	  blue700: '#1976d2',
	  blue800: '#1565c0',
	  blue900: '#0d47a1',
	  blueA100: '#82b1ff',
	  blueA200: '#448aff',
	  blueA400: '#2979ff',
	  blueA700: '#2962ff',

	  lightBlue50: '#e1f5fe',
	  lightBlue100: '#b3e5fc',
	  lightBlue200: '#81d4fa',
	  lightBlue300: '#4fc3f7',
	  lightBlue400: '#29b6f6',
	  lightBlue500: '#03a9f4',
	  lightBlue600: '#039be5',
	  lightBlue700: '#0288d1',
	  lightBlue800: '#0277bd',
	  lightBlue900: '#01579b',
	  lightBlueA100: '#80d8ff',
	  lightBlueA200: '#40c4ff',
	  lightBlueA400: '#00b0ff',
	  lightBlueA700: '#0091ea',

	  cyan50: '#e0f7fa',
	  cyan100: '#b2ebf2',
	  cyan200: '#80deea',
	  cyan300: '#4dd0e1',
	  cyan400: '#26c6da',
	  cyan500: '#00bcd4',
	  cyan600: '#00acc1',
	  cyan700: '#0097a7',
	  cyan800: '#00838f',
	  cyan900: '#006064',
	  cyanA100: '#84ffff',
	  cyanA200: '#18ffff',
	  cyanA400: '#00e5ff',
	  cyanA700: '#00b8d4',

	  teal50: '#e0f2f1',
	  teal100: '#b2dfdb',
	  teal200: '#80cbc4',
	  teal300: '#4db6ac',
	  teal400: '#26a69a',
	  teal500: '#009688',
	  teal600: '#00897b',
	  teal700: '#00796b',
	  teal800: '#00695c',
	  teal900: '#004d40',
	  tealA100: '#a7ffeb',
	  tealA200: '#64ffda',
	  tealA400: '#1de9b6',
	  tealA700: '#00bfa5',

	  green50: '#e8f5e9',
	  green100: '#c8e6c9',
	  green200: '#a5d6a7',
	  green300: '#81c784',
	  green400: '#66bb6a',
	  green500: '#4caf50',
	  green600: '#43a047',
	  green700: '#388e3c',
	  green800: '#2e7d32',
	  green900: '#1b5e20',
	  greenA100: '#b9f6ca',
	  greenA200: '#69f0ae',
	  greenA400: '#00e676',
	  greenA700: '#00c853',

	  lightGreen50: '#f1f8e9',
	  lightGreen100: '#dcedc8',
	  lightGreen200: '#c5e1a5',
	  lightGreen300: '#aed581',
	  lightGreen400: '#9ccc65',
	  lightGreen500: '#8bc34a',
	  lightGreen600: '#7cb342',
	  lightGreen700: '#689f38',
	  lightGreen800: '#558b2f',
	  lightGreen900: '#33691e',
	  lightGreenA100: '#ccff90',
	  lightGreenA200: '#b2ff59',
	  lightGreenA400: '#76ff03',
	  lightGreenA700: '#64dd17',

	  lime50: '#f9fbe7',
	  lime100: '#f0f4c3',
	  lime200: '#e6ee9c',
	  lime300: '#dce775',
	  lime400: '#d4e157',
	  lime500: '#cddc39',
	  lime600: '#c0ca33',
	  lime700: '#afb42b',
	  lime800: '#9e9d24',
	  lime900: '#827717',
	  limeA100: '#f4ff81',
	  limeA200: '#eeff41',
	  limeA400: '#c6ff00',
	  limeA700: '#aeea00',

	  yellow50: '#fffde7',
	  yellow100: '#fff9c4',
	  yellow200: '#fff59d',
	  yellow300: '#fff176',
	  yellow400: '#ffee58',
	  yellow500: '#ffeb3b',
	  yellow600: '#fdd835',
	  yellow700: '#fbc02d',
	  yellow800: '#f9a825',
	  yellow900: '#f57f17',
	  yellowA100: '#ffff8d',
	  yellowA200: '#ffff00',
	  yellowA400: '#ffea00',
	  yellowA700: '#ffd600',

	  amber50: '#fff8e1',
	  amber100: '#ffecb3',
	  amber200: '#ffe082',
	  amber300: '#ffd54f',
	  amber400: '#ffca28',
	  amber500: '#ffc107',
	  amber600: '#ffb300',
	  amber700: '#ffa000',
	  amber800: '#ff8f00',
	  amber900: '#ff6f00',
	  amberA100: '#ffe57f',
	  amberA200: '#ffd740',
	  amberA400: '#ffc400',
	  amberA700: '#ffab00',

	  orange50: '#fff3e0',
	  orange100: '#ffe0b2',
	  orange200: '#ffcc80',
	  orange300: '#ffb74d',
	  orange400: '#ffa726',
	  orange500: '#ff9800',
	  orange600: '#fb8c00',
	  orange700: '#f57c00',
	  orange800: '#ef6c00',
	  orange900: '#e65100',
	  orangeA100: '#ffd180',
	  orangeA200: '#ffab40',
	  orangeA400: '#ff9100',
	  orangeA700: '#ff6d00',

	  deepOrange50: '#fbe9e7',
	  deepOrange100: '#ffccbc',
	  deepOrange200: '#ffab91',
	  deepOrange300: '#ff8a65',
	  deepOrange400: '#ff7043',
	  deepOrange500: '#ff5722',
	  deepOrange600: '#f4511e',
	  deepOrange700: '#e64a19',
	  deepOrange800: '#d84315',
	  deepOrange900: '#bf360c',
	  deepOrangeA100: '#ff9e80',
	  deepOrangeA200: '#ff6e40',
	  deepOrangeA400: '#ff3d00',
	  deepOrangeA700: '#dd2c00',

	  brown50: '#efebe9',
	  brown100: '#d7ccc8',
	  brown200: '#bcaaa4',
	  brown300: '#a1887f',
	  brown400: '#8d6e63',
	  brown500: '#795548',
	  brown600: '#6d4c41',
	  brown700: '#5d4037',
	  brown800: '#4e342e',
	  brown900: '#3e2723',

	  blueGrey50: '#eceff1',
	  blueGrey100: '#cfd8dc',
	  blueGrey200: '#b0bec5',
	  blueGrey300: '#90a4ae',
	  blueGrey400: '#78909c',
	  blueGrey500: '#607d8b',
	  blueGrey600: '#546e7a',
	  blueGrey700: '#455a64',
	  blueGrey800: '#37474f',
	  blueGrey900: '#263238',

	  grey50: '#fafafa',
	  grey100: '#f5f5f5',
	  grey200: '#eeeeee',
	  grey300: '#e0e0e0',
	  grey400: '#bdbdbd',
	  grey500: '#9e9e9e',
	  grey600: '#757575',
	  grey700: '#616161',
	  grey800: '#424242',
	  grey900: '#212121',

	  black: '#000000',
	  white: '#ffffff',

	  transparent: 'rgba(0, 0, 0, 0)',
	  fullBlack: 'rgba(0, 0, 0, 1)',
	  darkBlack: 'rgba(0, 0, 0, 0.87)',
	  lightBlack: 'rgba(0, 0, 0, 0.54)',
	  minBlack: 'rgba(0, 0, 0, 0.26)',
	  faintBlack: 'rgba(0, 0, 0, 0.12)',
	  fullWhite: 'rgba(255, 255, 255, 1)',
	  darkWhite: 'rgba(255, 255, 255, 0.87)',
	  lightWhite: 'rgba(255, 255, 255, 0.54)'

	};

/***/ },
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var AutoPrefix = __webpack_require__(272);

	module.exports = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {

	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {

	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }
	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },

	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || "linear";

	    return AutoPrefix.singleHyphened(property) + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = {

	  corners: React.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),

	  cornersAndCenter: React.PropTypes.oneOf(['bottom-center', 'bottom-left', 'bottom-right', 'top-center', 'top-left', 'top-right']),

	  stringOrNumber: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),

	  zDepth: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5])

	};

/***/ },
/* 282 */,
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(284);

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	var shallowCompare = __webpack_require__(285);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(117);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Colors = __webpack_require__(276);
	var ColorManipulator = __webpack_require__(298);
	var Spacing = __webpack_require__(299);

	/*
	 *  Light Theme is the default theme used in material-ui. It is guaranteed to
	 *  have all theme variables needed for every component. Variables not defined
	 *  in a custom theme will default to these values.
	 */

	module.exports = {
	  spacing: Spacing,
	  fontFamily: 'Roboto, sans-serif',
	  palette: {
	    primary1Color: Colors.cyan500,
	    primary2Color: Colors.cyan700,
	    primary3Color: Colors.lightBlack,
	    accent1Color: Colors.pinkA200,
	    accent2Color: Colors.grey100,
	    accent3Color: Colors.grey500,
	    textColor: Colors.darkBlack,
	    alternateTextColor: Colors.white,
	    canvasColor: Colors.white,
	    borderColor: Colors.grey300,
	    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
	  }
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	  /**
	   * The relative brightness of any point in a colorspace, normalized to 0 for
	   * darkest black and 1 for lightest white. RGB colors only. Does not take
	   * into account alpha values.
	   *
	   * TODO:
	   * - Take into account alpha values.
	   * - Identify why there are minor discrepancies for some use cases
	   *   (i.e. #F0F & #FFF). Note that these cases rarely occur.
	   *
	   * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
	   */
	  _luminance: function _luminance(color) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('rgb') > -1) {
	      var rgb = color.values.map(function (val) {
	        val /= 255; // normalized
	        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
	      });

	      return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
	    } else {
	      var message = 'Calculating the relative luminance is not available for ' + 'HSL and HSLA.';
	      console.error(message);
	      return -1;
	    }
	  },

	  /**
	   * @params:
	   * additionalValue = An extra value that has been calculated but not included
	   *                   with the original color object, such as an alpha value.
	   */
	  _convertColorToString: function _convertColorToString(color, additonalValue) {
	    var str = color.type + '(' + parseInt(color.values[0]) + ',' + parseInt(color.values[1]) + ',' + parseInt(color.values[2]);

	    if (additonalValue !== undefined) {
	      str += ',' + additonalValue + ')';
	    } else if (color.values.length === 4) {
	      str += ',' + color.values[3] + ')';
	    } else {
	      str += ')';
	    }

	    return str;
	  },

	  // Converts a color from hex format to rgb format.
	  _convertHexToRGB: function _convertHexToRGB(color) {
	    if (color.length === 4) {
	      var extendedColor = '#';
	      for (var i = 1; i < color.length; i++) {
	        extendedColor += color.charAt(i) + color.charAt(i);
	      }
	      color = extendedColor;
	    }

	    var values = {
	      r: parseInt(color.substr(1, 2), 16),
	      g: parseInt(color.substr(3, 2), 16),
	      b: parseInt(color.substr(5, 2), 16)
	    };

	    return 'rgb(' + values.r + ',' + values.g + ',' + values.b + ')';
	  },

	  // Returns the type and values of a color of any given type.
	  _decomposeColor: function _decomposeColor(color) {
	    if (color.charAt(0) === '#') {
	      return this._decomposeColor(this._convertHexToRGB(color));
	    }

	    var marker = color.indexOf('(');
	    var type = color.substring(0, marker);
	    var values = color.substring(marker + 1, color.length - 1).split(',');

	    return { type: type, values: values };
	  },

	  // Set the absolute transparency of a color.
	  // Any existing alpha values are overwritten.
	  fade: function fade(color, amount) {
	    color = this._decomposeColor(color);
	    if (color.type === 'rgb' || color.type === 'hsl') color.type += 'a';
	    return this._convertColorToString(color, amount);
	  },

	  // Desaturates rgb and sets opacity to 0.15
	  lighten: function lighten(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 + amount;
	        if (color.values[i] > 255) color.values[i] = 255;
	      }
	    }

	    if (color.type.indexOf('a') <= -1) color.type += 'a';

	    return this._convertColorToString(color, '0.15');
	  },

	  darken: function darken(color, amount) {
	    color = this._decomposeColor(color);

	    if (color.type.indexOf('hsl') > -1) {
	      color.values[2] += amount;
	      return this._decomposeColor(this._convertColorToString(color));
	    } else if (color.type.indexOf('rgb') > -1) {
	      for (var i = 0; i < 3; i++) {
	        color.values[i] *= 1 - amount;
	        if (color.values[i] < 0) color.values[i] = 0;
	      }
	    }

	    return this._convertColorToString(color);
	  },

	  // Calculates the contrast ratio between two colors.
	  //
	  // Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
	  contrastRatio: function contrastRatio(background, foreground) {
	    var lumA = this._luminance(background);
	    var lumB = this._luminance(foreground);

	    if (lumA >= lumB) {
	      return ((lumA + 0.05) / (lumB + 0.05)).toFixed(2);
	    } else {
	      return ((lumB + 0.05) / (lumA + 0.05)).toFixed(2);
	    }
	  },

	  /**
	   * Determines how readable a color combination is based on its level.
	   * Levels are defined from @LeaVerou:
	   * https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/contrast-ratio.js
	   */
	  contrastRatioLevel: function contrastRatioLevel(background, foreground) {
	    var levels = {
	      'fail': {
	        range: [0, 3],
	        color: 'hsl(0, 100%, 40%)'
	      },
	      'aa-large': {
	        range: [3, 4.5],
	        color: 'hsl(40, 100%, 45%)'
	      },
	      'aa': {
	        range: [4.5, 7],
	        color: 'hsl(80, 60%, 45%)'
	      },
	      'aaa': {
	        range: [7, 22],
	        color: 'hsl(95, 60%, 41%)'
	      }
	    };

	    var ratio = this.contrastRatio(background, foreground);

	    for (var level in levels) {
	      var range = levels[level].range;
	      if (ratio >= range[0] && ratio <= range[1]) return level;
	    }
	  }
	};

/***/ },
/* 299 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  iconSize: 24,

	  desktopGutter: 24,
	  desktopGutterMore: 32,
	  desktopGutterLess: 16,
	  desktopGutterMini: 8,
	  desktopKeylineIncrement: 64,
	  desktopDropDownMenuItemHeight: 32,
	  desktopDropDownMenuFontSize: 15,
	  desktopLeftNavMenuItemHeight: 48,
	  desktopSubheaderHeight: 48,
	  desktopToolbarHeight: 56
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Colors = __webpack_require__(276);
	var ColorManipulator = __webpack_require__(298);
	var Extend = __webpack_require__(301);
	var update = __webpack_require__(269);

	module.exports = {

	  //get the MUI theme corresponding to a raw theme
	  getMuiTheme: function getMuiTheme(rawTheme) {
	    var returnObj = {
	      appBar: {
	        color: rawTheme.palette.primary1Color,
	        textColor: rawTheme.palette.alternateTextColor,
	        height: rawTheme.spacing.desktopKeylineIncrement
	      },
	      avatar: {
	        borderColor: 'rgba(0, 0, 0, 0.08)'
	      },
	      button: {
	        height: 36,
	        minWidth: 88,
	        iconButtonSize: rawTheme.spacing.iconSize * 2
	      },
	      cardText: {
	        textColor: rawTheme.palette.textColor
	      },
	      checkbox: {
	        boxColor: rawTheme.palette.textColor,
	        checkedColor: rawTheme.palette.primary1Color,
	        requiredColor: rawTheme.palette.primary1Color,
	        disabledColor: rawTheme.palette.disabledColor,
	        labelColor: rawTheme.palette.textColor,
	        labelDisabledColor: rawTheme.palette.disabledColor
	      },
	      datePicker: {
	        color: rawTheme.palette.primary1Color,
	        textColor: rawTheme.palette.alternateTextColor,
	        calendarTextColor: rawTheme.palette.textColor,
	        selectColor: rawTheme.palette.primary2Color,
	        selectTextColor: rawTheme.palette.alternateTextColor
	      },
	      dropDownMenu: {
	        accentColor: rawTheme.palette.borderColor
	      },
	      flatButton: {
	        color: rawTheme.palette.alternateTextColor,
	        textColor: rawTheme.palette.textColor,
	        primaryTextColor: rawTheme.palette.accent1Color,
	        secondaryTextColor: rawTheme.palette.primary1Color
	      },
	      floatingActionButton: {
	        buttonSize: 56,
	        miniSize: 40,
	        color: rawTheme.palette.accent1Color,
	        iconColor: rawTheme.palette.alternateTextColor,
	        secondaryColor: rawTheme.palette.primary1Color,
	        secondaryIconColor: rawTheme.palette.alternateTextColor,
	        disabledTextColor: rawTheme.palette.disabledColor
	      },
	      gridTile: {
	        textColor: Colors.white
	      },
	      inkBar: {
	        backgroundColor: rawTheme.palette.accent1Color
	      },
	      leftNav: {
	        width: rawTheme.spacing.desktopKeylineIncrement * 4,
	        color: rawTheme.palette.canvasColor
	      },
	      listItem: {
	        nestedLevelDepth: 18
	      },
	      menu: {
	        backgroundColor: rawTheme.palette.canvasColor,
	        containerBackgroundColor: rawTheme.palette.canvasColor
	      },
	      menuItem: {
	        dataHeight: 32,
	        height: 48,
	        hoverColor: 'rgba(0, 0, 0, .035)',
	        padding: rawTheme.spacing.desktopGutter,
	        selectedTextColor: rawTheme.palette.accent1Color
	      },
	      menuSubheader: {
	        padding: rawTheme.spacing.desktopGutter,
	        borderColor: rawTheme.palette.borderColor,
	        textColor: rawTheme.palette.primary1Color
	      },
	      paper: {
	        backgroundColor: rawTheme.palette.canvasColor
	      },
	      radioButton: {
	        borderColor: rawTheme.palette.textColor,
	        backgroundColor: rawTheme.palette.alternateTextColor,
	        checkedColor: rawTheme.palette.primary1Color,
	        requiredColor: rawTheme.palette.primary1Color,
	        disabledColor: rawTheme.palette.disabledColor,
	        size: 24,
	        labelColor: rawTheme.palette.textColor,
	        labelDisabledColor: rawTheme.palette.disabledColor
	      },
	      raisedButton: {
	        color: rawTheme.palette.alternateTextColor,
	        textColor: rawTheme.palette.textColor,
	        primaryColor: rawTheme.palette.accent1Color,
	        primaryTextColor: rawTheme.palette.alternateTextColor,
	        secondaryColor: rawTheme.palette.primary1Color,
	        secondaryTextColor: rawTheme.palette.alternateTextColor
	      },
	      refreshIndicator: {
	        strokeColor: rawTheme.palette.borderColor,
	        loadingStrokeColor: rawTheme.palette.primary1Color
	      },
	      slider: {
	        trackSize: 2,
	        trackColor: rawTheme.palette.primary3Color,
	        trackColorSelected: rawTheme.palette.accent3Color,
	        handleSize: 12,
	        handleSizeDisabled: 8,
	        handleSizeActive: 18,
	        handleColorZero: rawTheme.palette.borderColor,
	        handleFillColor: rawTheme.palette.alternateTextColor,
	        selectionColor: rawTheme.palette.primary1Color,
	        rippleColor: rawTheme.palette.primary1Color
	      },
	      snackbar: {
	        textColor: rawTheme.palette.alternateTextColor,
	        backgroundColor: rawTheme.palette.textColor,
	        actionColor: rawTheme.palette.accent1Color
	      },
	      table: {
	        backgroundColor: rawTheme.palette.canvasColor
	      },
	      tableHeader: {
	        borderColor: rawTheme.palette.borderColor
	      },
	      tableHeaderColumn: {
	        textColor: rawTheme.palette.primary3Color,
	        height: 56,
	        spacing: 24
	      },
	      tableFooter: {
	        borderColor: rawTheme.palette.borderColor,
	        textColor: rawTheme.palette.primary3Color
	      },
	      tableRow: {
	        hoverColor: rawTheme.palette.accent2Color,
	        stripeColor: ColorManipulator.lighten(rawTheme.palette.primary1Color, 0.55),
	        selectedColor: rawTheme.palette.borderColor,
	        textColor: rawTheme.palette.textColor,
	        borderColor: rawTheme.palette.borderColor
	      },
	      tableRowColumn: {
	        height: 48,
	        spacing: 24
	      },
	      timePicker: {
	        color: rawTheme.palette.alternateTextColor,
	        textColor: rawTheme.palette.accent3Color,
	        accentColor: rawTheme.palette.primary1Color,
	        clockColor: rawTheme.palette.primary3Color,
	        selectColor: rawTheme.palette.primary2Color,
	        selectTextColor: rawTheme.palette.alternateTextColor
	      },
	      toggle: {
	        thumbOnColor: rawTheme.palette.primary1Color,
	        thumbOffColor: rawTheme.palette.accent2Color,
	        thumbDisabledColor: rawTheme.palette.borderColor,
	        thumbRequiredColor: rawTheme.palette.primary1Color,
	        trackOnColor: ColorManipulator.fade(rawTheme.palette.primary1Color, 0.5),
	        trackOffColor: rawTheme.palette.primary3Color,
	        trackDisabledColor: rawTheme.palette.primary3Color,
	        labelColor: rawTheme.palette.textColor,
	        labelDisabledColor: rawTheme.palette.disabledColor
	      },
	      toolbar: {
	        backgroundColor: ColorManipulator.darken(rawTheme.palette.accent2Color, 0.05),
	        height: 56,
	        titleFontSize: 20,
	        iconColor: 'rgba(0, 0, 0, .40)',
	        separatorColor: 'rgba(0, 0, 0, .175)',
	        menuHoverColor: 'rgba(0, 0, 0, .10)'
	      },
	      tabs: {
	        backgroundColor: rawTheme.palette.primary1Color,
	        textColor: ColorManipulator.fade(rawTheme.palette.alternateTextColor, 0.6),
	        selectedTextColor: rawTheme.palette.alternateTextColor
	      },
	      textField: {
	        textColor: rawTheme.palette.textColor,
	        hintColor: rawTheme.palette.disabledColor,
	        floatingLabelColor: rawTheme.palette.textColor,
	        disabledTextColor: rawTheme.palette.disabledColor,
	        errorColor: Colors.red500,
	        focusColor: rawTheme.palette.primary1Color,
	        backgroundColor: 'transparent',
	        borderColor: rawTheme.palette.borderColor
	      },
	      isRtl: false
	    };

	    //add properties to objects inside 'returnObj' that depend on existing properties
	    returnObj.flatButton.disabledTextColor = ColorManipulator.fade(returnObj.flatButton.textColor, 0.3);
	    returnObj.raisedButton.disabledColor = ColorManipulator.darken(returnObj.raisedButton.color, 0.1);
	    returnObj.raisedButton.disabledTextColor = ColorManipulator.fade(returnObj.raisedButton.textColor, 0.3);
	    returnObj.toggle.trackRequiredColor = ColorManipulator.fade(returnObj.toggle.thumbRequiredColor, 0.5);

	    //append the raw theme object to 'returnObj'
	    returnObj.rawTheme = rawTheme;

	    //set 'static' key as true (by default) on return object. This is to support the ContextPure mixin.
	    returnObj['static'] = true;

	    return returnObj;
	  },

	  //functions to modify properties of raw theme, namely spacing, palette
	  //and font family. These functions use the React update immutability helper
	  //to create a new object for the raw theme, and return a new MUI theme object

	  //function to modify the spacing of the raw theme. This function recomputes
	  //the MUI theme and returns it based on the new theme.
	  modifyRawThemeSpacing: function modifyRawThemeSpacing(muiTheme, newSpacing) {
	    var newRawTheme = update(muiTheme.rawTheme, { spacing: { $set: newSpacing } });
	    return this.getMuiTheme(newRawTheme);
	  },

	  //function to modify the palette of the raw theme. This function recomputes
	  //the MUI theme and returns it based on the new raw theme.
	  //keys inside 'newPalette' override values for existing keys in palette
	  modifyRawThemePalette: function modifyRawThemePalette(muiTheme, newPaletteKeys) {
	    var newPalette = Extend(muiTheme.rawTheme.palette, newPaletteKeys);
	    var newRawTheme = update(muiTheme.rawTheme, { palette: { $set: newPalette } });
	    return this.getMuiTheme(newRawTheme);
	  },

	  //function to modify the font family of the raw theme. This function recomputes
	  //the MUI theme and returns it based on the new raw theme.
	  modifyRawThemeFontFamily: function modifyRawThemeFontFamily(muiTheme, newFontFamily) {
	    var newRawTheme = update(muiTheme.rawTheme, { fontFamily: { $set: newFontFamily } });
	    return this.getMuiTheme(newRawTheme);
	  }

	};

/***/ },
/* 301 */
/***/ function(module, exports) {

	'use strict';

	function isObject(obj) {
	  return typeof obj === 'object' && obj !== null;
	}

	/**
	*  A recursive merge between two objects.
	*
	*  @param base     - the object whose properties are to be overwritten. It
	*                    should be either the root level or some nested level.
	*  @param override - an object containing properties to be overwritten. It
	*                    should have the same structure as the object object.
	*/
	var extend = function extend(base, override) {

	  var mergedObject = {};

	  //Loop through each key in the base object
	  Object.keys(base).forEach(function (key) {

	    var baseProp = base[key];
	    var overrideProp = undefined;

	    if (isObject(override)) overrideProp = override[key];

	    //Recursive call extend if the prop is another object, else just copy it over
	    mergedObject[key] = isObject(baseProp) && !Array.isArray(baseProp) ? extend(baseProp, overrideProp) : baseProp;
	  });

	  //Loop through each override key and override the props in the
	  //base object
	  if (isObject(override)) {

	    Object.keys(override).forEach(function (overrideKey) {

	      var overrideProp = override[overrideKey];

	      //Only copy over props that are not objects
	      if (!isObject(overrideProp) || Array.isArray(overrideProp)) {
	        mergedObject[overrideKey] = overrideProp;
	      }
	    });
	  }

	  return mergedObject;
	};

	module.exports = extend;

/***/ },
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var React = __webpack_require__(1);
	var PureRenderMixin = __webpack_require__(283);
	var StylePropable = __webpack_require__(267);
	var PropTypes = __webpack_require__(281);
	var Transitions = __webpack_require__(280);
	var DefaultRawTheme = __webpack_require__(297);
	var ThemeManager = __webpack_require__(300);

	var Paper = React.createClass({
	  displayName: 'Paper',

	  mixins: [PureRenderMixin, StylePropable],

	  contextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: React.PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  propTypes: {
	    circle: React.PropTypes.bool,
	    rounded: React.PropTypes.bool,
	    transitionEnabled: React.PropTypes.bool,
	    zDepth: PropTypes.zDepth
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      circle: false,
	      rounded: true,
	      transitionEnabled: true,
	      zDepth: 1
	    };
	  },

	  render: function render() {
	    var _props = this.props;
	    var children = _props.children;
	    var circle = _props.circle;
	    var rounded = _props.rounded;
	    var style = _props.style;
	    var transitionEnabled = _props.transitionEnabled;
	    var zDepth = _props.zDepth;

	    var other = _objectWithoutProperties(_props, ['children', 'circle', 'rounded', 'style', 'transitionEnabled', 'zDepth']);

	    var styles = {
	      backgroundColor: this.state.muiTheme.paper.backgroundColor,
	      transition: transitionEnabled && Transitions.easeOut(),
	      boxSizing: 'border-box',
	      fontFamily: this.state.muiTheme.rawTheme.fontFamily,
	      WebkitTapHighlightColor: 'rgba(0,0,0,0)',
	      boxShadow: this._getZDepthShadows(zDepth),
	      borderRadius: circle ? '50%' : rounded ? '2px' : '0px'
	    };

	    return React.createElement(
	      'div',
	      _extends({}, other, { style: this.prepareStyles(styles, style) }),
	      children
	    );
	  },

	  _getZDepthShadows: function _getZDepthShadows(zDepth) {
	    var shadows = [null, '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)', '0 3px 10px rgba(0, 0, 0, 0.16), 0 3px 10px rgba(0, 0, 0, 0.23)', '0 10px 30px rgba(0, 0, 0, 0.19), 0 6px 10px rgba(0, 0, 0, 0.23)', '0 14px 45px rgba(0, 0, 0, 0.25), 0 10px 18px rgba(0, 0, 0, 0.22)', '0 19px 60px rgba(0, 0, 0, 0.30), 0 15px 20px rgba(0, 0, 0, 0.22)'];

	    return shadows[zDepth];
	  }

	});

	module.exports = Paper;

/***/ },
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var ReactDOM = __webpack_require__(158);
	var StylePropable = __webpack_require__(267);
	var AutoPrefix = __webpack_require__(272);
	var Transitions = __webpack_require__(280);
	var Paper = __webpack_require__(309);
	var DefaultRawTheme = __webpack_require__(297);
	var ThemeManager = __webpack_require__(300);

	var VIEWBOX_SIZE = 32;
	var RefreshIndicator = _react2['default'].createClass({
	  displayName: 'RefreshIndicator',

	  mixins: [StylePropable],

	  contextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },

	  propTypes: {
	    left: _react2['default'].PropTypes.number.isRequired,
	    percentage: _react2['default'].PropTypes.number,
	    size: _react2['default'].PropTypes.number,
	    status: _react2['default'].PropTypes.oneOf(['ready', 'loading', 'hide']),
	    style: _react2['default'].PropTypes.object,
	    top: _react2['default'].PropTypes.number.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      percentage: 0,
	      size: 40,
	      status: 'hide'
	    };
	  },

	  //for passing default theme context to children
	  childContextTypes: {
	    muiTheme: _react2['default'].PropTypes.object
	  },

	  getChildContext: function getChildContext() {
	    return {
	      muiTheme: this.state.muiTheme
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme)
	    };
	  },

	  //to update theme inside state whenever a new theme is passed down
	  //from the parent / owner using context
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps, nextContext) {
	    var newMuiTheme = nextContext.muiTheme ? nextContext.muiTheme : this.state.muiTheme;
	    this.setState({ muiTheme: newMuiTheme });
	  },

	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    this._scalePath(ReactDOM.findDOMNode(this.refs.path), 0);
	    this._rotateWrapper(ReactDOM.findDOMNode(this.refs.wrapper));
	  },

	  render: function render() {
	    var rootStyle = this._getRootStyle();
	    return _react2['default'].createElement(
	      Paper,
	      {
	        circle: true,
	        style: this.mergeStyles(rootStyle, this.props.style),
	        ref: 'indicatorCt'
	      },
	      this._renderChildren()
	    );
	  },

	  _renderChildren: function _renderChildren() {
	    var paperSize = this._getPaperSize();
	    var childrenCmp = null;
	    if (this.props.status !== 'ready') {
	      var circleStyle = this._getCircleStyle(paperSize);
	      childrenCmp = _react2['default'].createElement(
	        'div',
	        { ref: 'wrapper', style: this.prepareStyles({
	            transition: Transitions.create('transform', '20s', null, 'linear'),
	            width: '100%',
	            height: '100%'
	          })
	        },
	        _react2['default'].createElement(
	          'svg',
	          { style: {
	              width: paperSize,
	              height: paperSize
	            },
	            viewBox: '0 0 ' + VIEWBOX_SIZE + ' ' + VIEWBOX_SIZE
	          },
	          _react2['default'].createElement('circle', _extends({ ref: 'path',
	            style: this.prepareStyles(circleStyle.style, {
	              transition: Transitions.create('all', '1.5s', null, 'ease-in-out')
	            })
	          }, circleStyle.attr))
	        )
	      );
	    } else {
	      var circleStyle = this._getCircleStyle(paperSize);
	      var polygonStyle = this._getPolygonStyle(paperSize);
	      childrenCmp = _react2['default'].createElement(
	        'svg',
	        { style: {
	            width: paperSize,
	            height: paperSize
	          },
	          viewBox: '0 0 ' + VIEWBOX_SIZE + ' ' + VIEWBOX_SIZE
	        },
	        _react2['default'].createElement('circle', _extends({
	          style: this.prepareStyles(circleStyle.style)
	        }, circleStyle.attr)),
	        _react2['default'].createElement('polygon', _extends({
	          style: this.prepareStyles(polygonStyle.style)
	        }, polygonStyle.attr))
	      );
	    }

	    return childrenCmp;
	  },

	  _getTheme: function _getTheme() {
	    return this.state.muiTheme.refreshIndicator;
	  },

	  _getPaddingSize: function _getPaddingSize() {
	    var padding = this.props.size * 0.1;
	    return padding;
	  },

	  _getPaperSize: function _getPaperSize() {
	    return this.props.size - this._getPaddingSize() * 2;
	  },

	  _getCircleAttr: function _getCircleAttr() {
	    return {
	      radiu: VIEWBOX_SIZE / 2 - 5,
	      originX: VIEWBOX_SIZE / 2,
	      originY: VIEWBOX_SIZE / 2,
	      strokeWidth: 3
	    };
	  },

	  _getArcDeg: function _getArcDeg() {
	    var p = this.props.percentage / 100;

	    var beginDeg = p * 120;
	    var endDeg = p * 410;
	    return [beginDeg, endDeg];
	  },

	  _getFactor: function _getFactor() {
	    var p = this.props.percentage / 100;
	    var p1 = Math.min(1, p / 0.4);

	    return p1;
	  },

	  _getRootStyle: function _getRootStyle() {
	    var padding = this._getPaddingSize();
	    return {
	      position: "absolute",
	      zIndex: 2,
	      width: this.props.size,
	      height: this.props.size,
	      padding: padding,
	      top: -10000,
	      left: -10000,
	      transform: 'translate3d(' + (10000 + this.props.left) + 'px, ' + (10000 + this.props.top) + 'px, 0)',
	      opacity: this.props.status === 'hide' ? 0 : 1,
	      transition: this.props.status === 'hide' ? Transitions.create('all', '.3s', 'ease-out') : 'none'
	    };
	  },

	  _getCircleStyle: function _getCircleStyle() {
	    var isLoading = this.props.status === 'loading';
	    var p1 = isLoading ? 1 : this._getFactor();
	    var circle = this._getCircleAttr();
	    var perimeter = Math.PI * 2 * circle.radiu;

	    var _getArcDeg2 = this._getArcDeg();

	    var _getArcDeg22 = _slicedToArray(_getArcDeg2, 2);

	    var beginDeg = _getArcDeg22[0];
	    var endDeg = _getArcDeg22[1];

	    var arcLen = (endDeg - beginDeg) * perimeter / 360;
	    var dashOffset = -beginDeg * perimeter / 360;

	    var theme = this._getTheme();
	    return {
	      style: {
	        strokeDasharray: arcLen + ', ' + (perimeter - arcLen),
	        strokeDashoffset: dashOffset,
	        stroke: isLoading || this.props.percentage === 100 ? theme.loadingStrokeColor : theme.strokeColor,
	        strokeLinecap: 'round',
	        opacity: p1,
	        strokeWidth: circle.strokeWidth * p1,
	        fill: 'none'
	      },
	      attr: {
	        cx: circle.originX,
	        cy: circle.originY,
	        r: circle.radiu
	      }
	    };
	  },

	  _getPolygonStyle: function _getPolygonStyle() {
	    var p1 = this._getFactor();
	    var circle = this._getCircleAttr();

	    var triangleCx = circle.originX + circle.radiu;
	    var triangleCy = circle.originY;
	    var dx = circle.strokeWidth * 7 / 4 * p1;
	    var trianglePath = triangleCx - dx + ',' + triangleCy + ' ' + (triangleCx + dx) + ',' + triangleCy + ' ' + triangleCx + ',' + (triangleCy + dx);

	    var _getArcDeg3 = this._getArcDeg();

	    var _getArcDeg32 = _slicedToArray(_getArcDeg3, 2);

	    var endDeg = _getArcDeg32[1];

	    var theme = this._getTheme();
	    return {
	      style: {
	        fill: this.props.percentage === 100 ? theme.loadingStrokeColor : theme.strokeColor,
	        transform: 'rotate(' + endDeg + 'deg)',
	        transformOrigin: circle.originX + 'px ' + circle.originY + 'px',
	        opacity: p1
	      },
	      attr: {
	        points: trianglePath
	      }
	    };
	  },

	  _scalePath: function _scalePath(path, step) {
	    if (this.props.status !== 'loading' || !this.isMounted()) return;

	    var currStep = (step || 0) % 3;

	    clearTimeout(this._timer1);
	    this._timer1 = setTimeout(this._scalePath.bind(this, path, currStep + 1), currStep ? 750 : 250);

	    var circle = this._getCircleAttr();
	    var perimeter = Math.PI * 2 * circle.radiu;
	    var arcLen = perimeter * 0.64;

	    if (currStep === 0) {
	      path.style.strokeDasharray = '1, 200';
	      path.style.strokeDashoffset = 0;
	      path.style[this.prefixed('transitionDuration')] = '0ms';
	    } else if (currStep === 1) {
	      path.style.strokeDasharray = arcLen + ', 200';
	      path.style.strokeDashoffset = -15;
	      path.style[this.prefixed('transitionDuration')] = '750ms';
	    } else {
	      path.style.strokeDasharray = arcLen + ',200';
	      path.style.strokeDashoffset = -(perimeter - 1);
	      path.style[this.prefixed('transitionDuration')] = '850ms';
	    }
	  },

	  _rotateWrapper: function _rotateWrapper(wrapper) {
	    var _this = this;

	    if (this.props.status !== 'loading' || !this.isMounted()) return;

	    clearTimeout(this._timer2);
	    this._timer2 = setTimeout(this._rotateWrapper.bind(this, wrapper), 10050);

	    AutoPrefix.set(wrapper.style, "transform", null);
	    AutoPrefix.set(wrapper.style, "transform", "rotate(0deg)");
	    AutoPrefix.set(wrapper.style, "transitionDuration", "0ms");

	    setTimeout(function () {
	      if (_this.isMounted()) {
	        AutoPrefix.set(wrapper.style, "transform", "rotate(1800deg)");
	        wrapper.style.transitionDuration = "10s";
	        AutoPrefix.set(wrapper.style, "transitionTimingFunction", "linear");
	      }
	    }, 50);
	  },

	  prefixed: function prefixed(key) {
	    return AutoPrefix.single(key);
	  }

	});

	module.exports = RefreshIndicator;

/***/ },
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var NotFoundPage = (function (_Component) {
	  _inherits(NotFoundPage, _Component);

	  function NotFoundPage() {
	    _classCallCheck(this, NotFoundPage);

	    _get(Object.getPrototypeOf(NotFoundPage.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(NotFoundPage, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        { className: "not-found" },
	        _react2["default"].createElement(
	          "h3",
	          null,
	          "404 Not Found."
	        )
	      );
	    }
	  }]);

	  return NotFoundPage;
	})(_react.Component);

	exports["default"] = NotFoundPage;
	module.exports = exports["default"];

/***/ },
/* 425 */,
/* 426 */
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

	var _constantsActionTypes = __webpack_require__(261);

	var types = _interopRequireWildcard(_constantsActionTypes);

	var _isomorphicFetch = __webpack_require__(427);

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

	function savePost(newPost) {
	  return function (dispatch) {
	    var formData = new FormData(newPost);
	    formData.append('title', newPost.title);
	    formData.append('content', newPost.content);
	    formData.append('public', newPost['public']);
	    formData.append('createAt', newPost.createAt);
	    return (0, _isomorphicFetch2['default'])('/api/posts', {
	      method: 'POST',
	      body: formData
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(savePostReturn(json));
	    });
	  };
	}

	function savePostReturn(newPost) {
	  return { type: types.ADD_POST, post: newPost };
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

	function addPost(newPost) {
	  return function (dispatch) {
	    return dispatch(savePost(newPost));
	  };
	}

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(428);
	module.exports = self.fetch.bind(self);


/***/ },
/* 428 */
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
/* 429 */,
/* 430 */
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
	    var h, m; //, s;

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
/* 431 */,
/* 432 */,
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(166);

	var _reduxRouter = __webpack_require__(177);

	// import history from '../utils/history';

	var _historyLibCreateBrowserHistory = __webpack_require__(240);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	var _routes = __webpack_require__(434);

	var _routes2 = _interopRequireDefault(_routes);

	var _reduxThunk = __webpack_require__(257);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(258);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducersRoot = __webpack_require__(259);

	var _reducersRoot2 = _interopRequireDefault(_reducersRoot);

	var composeCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default']), (0, _reduxRouter.reduxReactRouter)({ routes: _routes2['default'], createHistory: _historyLibCreateBrowserHistory2['default'] }))(_redux.createStore);

	function configureStore(initialState) {
	  return composeCreateStore(_reducersRoot2['default'], initialState);
	}

	module.exports = exports['default'];

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(181);

	//custom react component

	var _containersHearMeApp = __webpack_require__(435);

	var _containersHearMeApp2 = _interopRequireDefault(_containersHearMeApp);

	var _containersIndexPage = __webpack_require__(438);

	var _containersIndexPage2 = _interopRequireDefault(_containersIndexPage);

	var _containersPostPage = __webpack_require__(440);

	var _containersPostPage2 = _interopRequireDefault(_containersPostPage);

	var _componentsNotFoundPageReact = __webpack_require__(424);

	var _componentsNotFoundPageReact2 = _interopRequireDefault(_componentsNotFoundPageReact);

	var _containersChatPage = __webpack_require__(442);

	var _containersChatPage2 = _interopRequireDefault(_containersChatPage);

	var routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { path: '/', component: _containersHearMeApp2['default'] },
	  _react2['default'].createElement(_reactRouter.IndexRoute, { component: _containersIndexPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/posts/:id', component: _containersPostPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/chat', component: _containersChatPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '404', component: _componentsNotFoundPageReact2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsNotFoundPageReact2['default'] })
	);

	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },
/* 435 */
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

	var _reactRedux = __webpack_require__(159);

	var _componentsHeaderReact = __webpack_require__(436);

	var _componentsHeaderReact2 = _interopRequireDefault(_componentsHeaderReact);

	var _ComponentsFooterReact = __webpack_require__(437);

	var _ComponentsFooterReact2 = _interopRequireDefault(_ComponentsFooterReact);

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
	        children,
	        _react2['default'].createElement(_ComponentsFooterReact2['default'], null)
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
/* 436 */
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

	var _reactRouter = __webpack_require__(181);

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
/* 437 */
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

	var _reactRouter = __webpack_require__(181);

	var Footer = (function (_Component) {
	  _inherits(Footer, _Component);

	  function Footer() {
	    _classCallCheck(this, Footer);

	    _get(Object.getPrototypeOf(Footer.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(Footer, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'footer',
	        null,
	        _react2['default'].createElement(
	          'p',
	          null,
	          '@2015 ',
	          _react2['default'].createElement(
	            'a',
	            { href: 'mailto:koon.kaip@gmail.com' },
	            'koonkai'
	          )
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          'Power By Node.js & React'
	        ),
	        _react2['default'].createElement(
	          'p',
	          null,
	          _react2['default'].createElement(
	            'a',
	            { href: '/admin/signin' },
	            'Admin'
	          )
	        )
	      );
	    }
	  }]);

	  return Footer;
	})(_react.Component);

	exports['default'] = Footer;
	module.exports = exports['default'];

/***/ },
/* 438 */
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

	var _reactRedux = __webpack_require__(159);

	var _componentsPostListReact = __webpack_require__(439);

	var _componentsPostListReact2 = _interopRequireDefault(_componentsPostListReact);

	var _actionsPosts = __webpack_require__(426);

	var RefreshIndicator = __webpack_require__(386);

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
	        isFetching && _react2['default'].createElement(
	          'div',
	          { className: 'loading' },
	          _react2['default'].createElement(RefreshIndicator, { size: 40, style: { left: '50%', top: '100px', marginLeft: '-20px' }, status: 'loading' })
	        ),
	        !isFetching && _react2['default'].createElement(_componentsPostListReact2['default'], { posts: posts })
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
	// function mapDispatchToProps(dispatch) {
	//   return {
	//     posts: () => dispatch(getPosts())
	//   }
	// }

	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(IndexPage);
	module.exports = exports['default'];

/***/ },
/* 439 */
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

	var _reactRouter = __webpack_require__(181);

	var _utilsTools = __webpack_require__(430);

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
/* 440 */
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

	var _reactRedux = __webpack_require__(159);

	var _componentsPostReact = __webpack_require__(441);

	var _componentsPostReact2 = _interopRequireDefault(_componentsPostReact);

	var _actionsPosts = __webpack_require__(426);

	var RefreshIndicator = __webpack_require__(386);

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
	          'div',
	          { className: 'loading' },
	          _react2['default'].createElement(RefreshIndicator, { size: 40, style: { left: '50%', top: '100px', marginLeft: '-20px' }, status: 'loading' })
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
/* 441 */
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

	var _utilsTools = __webpack_require__(430);

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
	                    title
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
/* 442 */
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

	var _reactRedux = __webpack_require__(159);

	var _componentsChatReact = __webpack_require__(443);

	var _actionsChat = __webpack_require__(444);

	var ChatPage = (function (_Component) {
	  _inherits(ChatPage, _Component);

	  function ChatPage(props) {
	    _classCallCheck(this, ChatPage);

	    _get(Object.getPrototypeOf(ChatPage.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(ChatPage, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actionsChat.getMessages)());
	    }
	  }, {
	    key: 'handeSubmit',
	    value: function handeSubmit(name, text) {
	      var dispatch = this.props.dispatch;

	      dispatch((0, _actionsChat.createMessage)(name, text));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var isFetching = _props.isFetching;
	      var messages = _props.messages;

	      // console.log(messages);
	      return _react2['default'].createElement(
	        'div',
	        { className: 'message-section' },
	        _react2['default'].createElement(_componentsChatReact.MessageComposer, { handeSubmit: this.handeSubmit.bind(this) }),
	        _react2['default'].createElement('hr', null),
	        isFetching && _react2['default'].createElement(
	          'h4',
	          { className: 'loading' },
	          'Loading...'
	        ),
	        !isFetching && _react2['default'].createElement(
	          'ul',
	          { className: 'message-list', ref: 'messageList' },
	          messages.map(function (message) {
	            return _react2['default'].createElement(_componentsChatReact.MessageListItem, { key: message._id, message: message });
	          })
	        )
	      );
	    }
	  }]);

	  return ChatPage;
	})(_react.Component);

	ChatPage.propsTypes = {
	  messages: _react.PropTypes.array.isRequired,
	  isFetching: _react.PropTypes.bool.isRequired
	};

	function mapStateToProps(state) {
	  // console.log(state);
	  var _state$chatReducer = state.chatReducer;
	  var isFetching = _state$chatReducer.isFetching;
	  var messages = _state$chatReducer.messages;

	  // console.log(messages);
	  return {
	    messages: messages,
	    isFetching: isFetching
	  };
	}

	exports['default'] = (0, _reactRedux.connect)(mapStateToProps)(ChatPage);
	module.exports = exports['default'];

/***/ },
/* 443 */
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

	var _utilsTools = __webpack_require__(430);

	var _utilsTools2 = _interopRequireDefault(_utilsTools);

	var MessageComposer = (function (_Component) {
	  _inherits(MessageComposer, _Component);

	  function MessageComposer(props) {
	    _classCallCheck(this, MessageComposer);

	    _get(Object.getPrototypeOf(MessageComposer.prototype), 'constructor', this).call(this, props);
	    this.handeSubmit = this.handeSubmit.bind(this);
	    this.handeKeyDown = this.handeKeyDown.bind(this);
	  }

	  _createClass(MessageComposer, [{
	    key: 'handeKeyDown',
	    value: function handeKeyDown(e) {
	      if (e.keyCode === 13) {
	        this.handeSubmit();
	      }
	    }
	  }, {
	    key: 'handeSubmit',
	    value: function handeSubmit() {
	      var text = this.refs.text;
	      var name = this.refs.name;
	      if (!text.value.trim()) {
	        text.focus();
	        return;
	      }
	      if (!name.value.trim()) {
	        name.focus();
	        return;
	      }
	      this.props.handeSubmit(name.value, text.value);
	      text.value = '';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'message-form' },
	        _react2['default'].createElement('textarea', {
	          className: 'message-composer',
	          ref: 'text',
	          placeholder: 'Say something.',
	          onKeyDown: this.handeKeyDown }),
	        _react2['default'].createElement('input', {
	          type: 'text',
	          placeholder: 'Nick name',
	          className: 'message-name',
	          ref: 'name',
	          onKeyDown: this.handeKeyDown }),
	        _react2['default'].createElement(
	          'button',
	          { className: 'btn btn-info', onClick: this.handeSubmit },
	          'Send'
	        )
	      );
	    }
	  }]);

	  return MessageComposer;
	})(_react.Component);

	exports.MessageComposer = MessageComposer;

	MessageComposer.propsTypes = {
	  value: _react.PropTypes.string.isRequired,
	  handeSubmit: _react.PropTypes.func.isRequired
	};

	var MessageListItem = (function (_Component2) {
	  _inherits(MessageListItem, _Component2);

	  function MessageListItem(props) {
	    _classCallCheck(this, MessageListItem);

	    _get(Object.getPrototypeOf(MessageListItem.prototype), 'constructor', this).call(this, props);
	  }

	  _createClass(MessageListItem, [{
	    key: 'render',
	    value: function render() {
	      var message = this.props.message;

	      return _react2['default'].createElement(
	        'li',
	        { className: 'message-list-item' },
	        _react2['default'].createElement(
	          'h5',
	          { className: 'message-author-name' },
	          message.name
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'message-time' },
	          _utilsTools2['default'].formatToDateTime(message.createAt)
	        ),
	        _react2['default'].createElement(
	          'div',
	          { className: 'message-text' },
	          message.text
	        )
	      );
	    }
	  }]);

	  return MessageListItem;
	})(_react.Component);

	exports.MessageListItem = MessageListItem;

	MessageListItem.propsTypes = {
	  message: _react.PropTypes.object.isRequired
	};

	// export MessageComposer;
	// export MessageListItem;

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getMessages = getMessages;
	exports.createMessage = createMessage;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _constantsActionTypes = __webpack_require__(261);

	var types = _interopRequireWildcard(_constantsActionTypes);

	var _isomorphicFetch = __webpack_require__(427);

	var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

	function requestMessages() {
	  return {
	    type: types.REQUEST_MESSAGES
	  };
	}

	function receiveMessages(json) {
	  return {
	    type: types.RECEIVE_MESSAGES,
	    messages: json,
	    receivedAt: Date.now()
	  };
	}

	function fetchMessages() {
	  return function (dispatch) {
	    dispatch(requestMessages());
	    return (0, _isomorphicFetch2['default'])('/api/messages').then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(receiveMessages(json));
	    });
	  };
	}

	function addMessage(message) {
	  console.log(message);
	  return {
	    type: types.ADD_MESSAGE,
	    message: message
	  };
	}

	function getMessages() {
	  return function (dispatch) {
	    return dispatch(fetchMessages());
	  };
	}

	function createMessage(name, text) {
	  var message = new FormData();
	  message.append('name', name);
	  message.append('text', text);
	  var options = {
	    method: 'POST',
	    body: message
	  };
	  return function (dispatch) {
	    return (0, _isomorphicFetch2['default'])('/api/messages', options).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      return dispatch(addMessage(json));
	    });
	  };
	}

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(446);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(448)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(447)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nhtml {\n  position: relative;\n  min-height: 100%; }\n\nbody {\n  margin: 0;\n  font-family: 'Avenir Next',Avenir,'Helvetica Neue',Helvetica,'Lantinghei SC','Hiragino Sans GB','Microsoft YaHei',\"\\5FAE\\8F6F\\96C5\\9ED1\",STHeiti,'WenQuanYi Micro Hei',SimSun,sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333333; }\n\na {\n  outline: none !important; }\n\n.container {\n  max-width: 960px;\n  padding: 0 60px; }\n\nheader, footer, section, article {\n  display: block; }\n\nheader {\n  text-align: center; }\n  header .logo {\n    margin: 38px 0; }\n    header .logo a {\n      text-decoration: none; }\n    header .logo h1 {\n      font-family: 'FuturaStdMediumTrItalic';\n      font-size: 34px;\n      font-weight: normal;\n      line-height: 38px;\n      color: #DBD4D4; }\n  header nav {\n    margin-bottom: 10px;\n    display: inline-block;\n    color: #dde1e4; }\n    header nav a {\n      float: left;\n      display: block;\n      margin: 0 10px 0 10px;\n      font-size: 16px;\n      text-decoration: none;\n      color: #aaa; }\n    header nav span {\n      float: left;\n      display: block;\n      font-family: 'FuturaStdLightTrRegular';\n      font-size: 24px; }\n\n.post-list {\n  margin: 50px 100px 0 100px; }\n  .post-list .post {\n    margin: 30px 0;\n    border-bottom: 1px #eee dashed; }\n    .post-list .post .post-title {\n      font-size: 18px;\n      margin-bottom: 10px; }\n      .post-list .post .post-title a {\n        color: #444; }\n    .post-list .post .post-date {\n      color: #999;\n      margin: 5px 0; }\n\n#post {\n  margin-top: 60px; }\n  #post hr {\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 1px #eee dashed; }\n  #post .post-title {\n    font-size: 24px; }\n  #post .post-date {\n    margin-top: 10px;\n    color: #999; }\n  #post .post-content {\n    line-height: 27px;\n    font-size: 15px;\n    margin-bottom: 50px; }\n\n.message-section {\n  width: 65%;\n  margin: 30px auto; }\n\n.message-form {\n  padding: 0 10px; }\n\n.message-list {\n  font-size: 16px;\n  margin: 0;\n  padding: 0; }\n\n.message-list-item {\n  list-style: none;\n  padding: 12px 14px 14px; }\n\n.message-list-item:hover {\n  background-color: #efefff; }\n\n.message-author-name {\n  color: #66c;\n  float: left;\n  font-size: 13px;\n  margin: 0; }\n\n.message-time {\n  color: #aad;\n  float: right;\n  font-size: 12px; }\n\n.message-text {\n  clear: both;\n  font-size: 14px;\n  padding-top: 10px; }\n\n.message-name {\n  margin-top: 15px;\n  margin-right: 10px;\n  height: 2.5em;\n  padding: 5px; }\n\n.message-composer {\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 14px;\n  height: 4em;\n  width: 100%;\n  margin: 15px 0 0;\n  padding: 10px; }\n\n.loading {\n  position: relative;\n  height: 200px; }\n\nfooter {\n  margin: 50px auto;\n  text-align: center; }\n  footer a:hover {\n    text-decoration: none; }\n", ""]);

	// exports


/***/ },
/* 447 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
]);