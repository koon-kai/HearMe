webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// import 'babel-core/polyfill';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(157);

	var _reactRedux = __webpack_require__(158);

	var _reduxRouter = __webpack_require__(176);

	var _storeConfigureStore = __webpack_require__(265);

	var _storeConfigureStore2 = _interopRequireDefault(_storeConfigureStore);

	__webpack_require__(281);

	var store = (0, _storeConfigureStore2['default'])();

	(0, _reactDom.render)(_react2['default'].createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2['default'].createElement(_reduxRouter.ReduxRouter, null)
	), document.getElementById('main'));

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = configureStore;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _redux = __webpack_require__(165);

	var _reduxRouter = __webpack_require__(176);

	// import history from '../utils/history';

	var _historyLibCreateBrowserHistory = __webpack_require__(239);

	var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

	var _routes = __webpack_require__(266);

	var _routes2 = _interopRequireDefault(_routes);

	var _reduxThunk = __webpack_require__(256);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _reduxLogger = __webpack_require__(257);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reducersRoot = __webpack_require__(258);

	var _reducersRoot2 = _interopRequireDefault(_reducersRoot);

	var composeCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2['default']), (0, _reduxRouter.reduxReactRouter)({ routes: _routes2['default'], createHistory: _historyLibCreateBrowserHistory2['default'] }))(_redux.createStore);

	function configureStore(initialState) {
	  return composeCreateStore(_reducersRoot2['default'], initialState);
	}

	module.exports = exports['default'];

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(180);

	//custom react component

	var _containersHearMeApp = __webpack_require__(267);

	var _containersHearMeApp2 = _interopRequireDefault(_containersHearMeApp);

	var _containersIndexPage = __webpack_require__(269);

	var _containersIndexPage2 = _interopRequireDefault(_containersIndexPage);

	var _containersPostPage = __webpack_require__(275);

	var _containersPostPage2 = _interopRequireDefault(_containersPostPage);

	var _componentsAddPostReact = __webpack_require__(277);

	var _componentsAddPostReact2 = _interopRequireDefault(_componentsAddPostReact);

	var _componentsNotFoundPageReact = __webpack_require__(264);

	var _componentsNotFoundPageReact2 = _interopRequireDefault(_componentsNotFoundPageReact);

	var _containersChatPage = __webpack_require__(278);

	var _containersChatPage2 = _interopRequireDefault(_containersChatPage);

	var routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { path: '/', component: _containersHearMeApp2['default'] },
	  _react2['default'].createElement(_reactRouter.IndexRoute, { component: _containersIndexPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/posts/:id', component: _containersPostPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/posts', component: _componentsAddPostReact2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '/chat', component: _containersChatPage2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '404', component: _componentsNotFoundPageReact2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { path: '*', component: _componentsNotFoundPageReact2['default'] })
	);

	exports['default'] = routes;
	module.exports = exports['default'];

/***/ },

/***/ 267:
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

	var _reactRedux = __webpack_require__(158);

	var _componentsHeaderReact = __webpack_require__(268);

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

/***/ 268:
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

	var _reactRouter = __webpack_require__(180);

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

/***/ 269:
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

	var _reactRedux = __webpack_require__(158);

	var _componentsPostListReact = __webpack_require__(270);

	var _componentsPostListReact2 = _interopRequireDefault(_componentsPostListReact);

	var _actionsPosts = __webpack_require__(272);

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
	          'h4',
	          { className: 'loading' },
	          'Loading...'
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

/***/ 270:
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

	var _reactRouter = __webpack_require__(180);

	var _utilsTools = __webpack_require__(271);

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

/***/ 271:
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

/***/ 272:
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

	var _constantsActionTypes = __webpack_require__(260);

	var types = _interopRequireWildcard(_constantsActionTypes);

	var _isomorphicFetch = __webpack_require__(273);

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

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	// the whatwg-fetch polyfill installs the fetch() function
	// on the global object (window or self)
	//
	// Return that as the export for use in Webpack, Browserify etc.
	__webpack_require__(274);
	module.exports = self.fetch.bind(self);


/***/ },

/***/ 274:
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

/***/ 275:
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

	var _reactRedux = __webpack_require__(158);

	var _componentsPostReact = __webpack_require__(276);

	var _componentsPostReact2 = _interopRequireDefault(_componentsPostReact);

	var _actionsPosts = __webpack_require__(272);

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

/***/ 276:
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

	var _utilsTools = __webpack_require__(271);

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

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	// var Router = require('react-router');
	// var Navigation = Router.Navigation;
	// var PostStore = require('../stores/PostStore');
	// var PostActionCreators = require('../actions/PostActionCreators');

	var NewForm = React.createClass({
	    displayName: "NewForm",

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
	            "form",
	            { onSubmit: this.handleSubmit },
	            React.createElement(
	                "div",
	                { className: "form-group" },
	                React.createElement("input", { type: "text", className: "form-control", placeholder: "title", ref: "title" })
	            ),
	            React.createElement(
	                "div",
	                { className: "form-group" },
	                React.createElement("textarea", { className: "form-control", rows: "20", placeholder: "Write your content (support markdown)", ref: "content" })
	            ),
	            React.createElement(
	                "button",
	                { type: "submit", className: "btn btn-default" },
	                "Submit"
	            )
	        );
	    }
	});

	var UploadImage = React.createClass({
	    displayName: "UploadImage",

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
	            "div",
	            { className: "upload" },
	            React.createElement(
	                "button",
	                { className: "btn btn-info", onClick: this.openSelectWindow },
	                "Upload Image"
	            ),
	            React.createElement("input", { type: "file", className: "hide", id: "upload_image", onChange: this.uploadImage }),
	            React.createElement(
	                "div",
	                { className: "alert alert-warning image-url" },
	                React.createElement(
	                    "span",
	                    null,
	                    this.state.imageUrl
	                )
	            ),
	            React.createElement("img", { src: url })
	        );
	    }
	});

	var AddPost = React.createClass({
	    displayName: "AddPost",

	    // mixins: [Navigation],

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
	            "div",
	            { id: "add-post" },
	            React.createElement(
	                "div",
	                { className: "row" },
	                React.createElement(
	                    "div",
	                    { className: "col-lg-8" },
	                    React.createElement(NewForm, { onPostSubmit: this.handleFormSubmit })
	                ),
	                React.createElement(
	                    "div",
	                    { className: "col-lg-4" },
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

/***/ 278:
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

	var _reactRedux = __webpack_require__(158);

	var _componentsChatReact = __webpack_require__(279);

	var _actionsChat = __webpack_require__(280);

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

/***/ 279:
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

	var _utilsTools = __webpack_require__(271);

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

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getMessages = getMessages;
	exports.createMessage = createMessage;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _constantsActionTypes = __webpack_require__(260);

	var types = _interopRequireWildcard(_constantsActionTypes);

	var _isomorphicFetch = __webpack_require__(273);

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

/***/ 281:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(282);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(284)(content, {});
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

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(283)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\nhtml {\n  position: relative;\n  min-height: 100%; }\n\nbody {\n  margin: 0;\n  font-family: 'Avenir Next',Avenir,'Helvetica Neue',Helvetica,'Lantinghei SC','Hiragino Sans GB','Microsoft YaHei',\"\\5FAE\\8F6F\\96C5\\9ED1\",STHeiti,'WenQuanYi Micro Hei',SimSun,sans-serif;\n  font-size: 14px;\n  line-height: 20px;\n  color: #333333; }\n\na {\n  outline: none !important; }\n\n.container {\n  max-width: 960px;\n  padding: 0 60px; }\n\nheader, footer, section, article {\n  display: block; }\n\nheader {\n  text-align: center; }\n  header .logo {\n    margin: 38px 0; }\n    header .logo a {\n      text-decoration: none; }\n    header .logo h1 {\n      font-family: 'FuturaStdMediumTrItalic';\n      font-size: 34px;\n      font-weight: normal;\n      line-height: 38px;\n      color: #DBD4D4; }\n  header nav {\n    margin-bottom: 10px;\n    display: inline-block;\n    color: #dde1e4; }\n    header nav a {\n      float: left;\n      display: block;\n      margin: 0 10px 0 10px;\n      font-size: 16px;\n      text-decoration: none;\n      color: #aaa; }\n    header nav span {\n      float: left;\n      display: block;\n      font-family: 'FuturaStdLightTrRegular';\n      font-size: 24px; }\n\n.post-list {\n  margin: 50px 100px 0 100px; }\n  .post-list .post {\n    margin: 30px 0;\n    border-bottom: 1px #eee dashed; }\n    .post-list .post .post-title {\n      font-size: 18px;\n      margin-bottom: 10px; }\n      .post-list .post .post-title a {\n        color: #444; }\n    .post-list .post .post-date {\n      color: #999;\n      margin: 5px 0; }\n\n#post {\n  margin-top: 60px; }\n  #post hr {\n    margin-top: 20px;\n    margin-bottom: 30px;\n    border: 1px #eee dashed; }\n  #post .post-title {\n    font-size: 24px; }\n  #post .post-date {\n    margin-top: 10px;\n    color: #999; }\n  #post .post-content {\n    line-height: 27px;\n    font-size: 15px;\n    margin-bottom: 50px; }\n\n.message-section {\n  width: 65%;\n  margin: 30px auto; }\n\n.message-form {\n  padding: 0 10px; }\n\n.message-list {\n  font-size: 16px;\n  margin: 0;\n  padding: 0; }\n\n.message-list-item {\n  list-style: none;\n  padding: 12px 14px 14px; }\n\n.message-list-item:hover {\n  background-color: #efefff; }\n\n.message-author-name {\n  color: #66c;\n  float: left;\n  font-size: 13px;\n  margin: 0; }\n\n.message-time {\n  color: #aad;\n  float: right;\n  font-size: 12px; }\n\n.message-text {\n  clear: both;\n  font-size: 14px;\n  padding-top: 10px; }\n\n.message-name {\n  margin-top: 15px;\n  margin-right: 10px;\n  height: 2.5em;\n  padding: 5px; }\n\n.message-composer {\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 14px;\n  height: 4em;\n  width: 100%;\n  margin: 15px 0 0;\n  padding: 10px; }\n\n.loading {\n  margin: 100px 0;\n  text-align: center; }\n\nfooter {\n  margin: 50px auto;\n  text-align: center; }\n  footer a:hover {\n    text-decoration: none; }\n", ""]);

	// exports


/***/ },

/***/ 283:
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

/***/ 284:
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

});