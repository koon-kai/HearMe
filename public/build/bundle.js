webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(3),a=r(o),i=n(79),u=n(16),s=n(34),l=n(146),c=r(l),p=c["default"]();i.render(a["default"].createElement(u.Provider,{store:p},a["default"].createElement(s.ReduxRouter,null)),document.getElementById("main"))},46:function(e,t){"use strict";e.exports={appendZero:function(e){return null==e?"":("00"+e).substr((e+"").length)},formatToDate:function(e,t){var n,r,o;return null==t&&(t=!1),null==e?"":("string"==typeof e&&(e=new Date(e)),e instanceof Date?(o=e.getFullYear(),r=this.appendZero(e.getMonth()+1),n=this.appendZero(e.getDate()),t?o+"年"+r+"月"+n+"日":o+"-"+r+"-"+n):"")},formatToDateTime:function(e){var t,n;return e?("string"==typeof e&&(e=new Date(e)),e instanceof Date?(t=this.appendZero(e.getHours()),n=this.appendZero(e.getMinutes()),this.formatToDate(e)+(" "+t+":"+n)):""):""}}},71:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(){return{type:d.REQUEST_POSTS}}function i(e){return{type:d.RECEIVE_POSTS,posts:e,receivedAt:Date.now()}}function u(){return function(e){return e(a()),m["default"]("/api/posts").then(function(e){return e.json()}).then(function(t){return e(i(t))})}}function s(e){return function(t){return t(a()),m["default"]("/api/posts/"+e).then(function(e){return e.json()}).then(function(e){return t(i(e))})}}function l(){return function(e){return e(u())}}function c(e){return console.log("getPost"),function(t){return t(s(e))}}function p(e,t){return{type:d.ADD_POST,title:e,content:t}}Object.defineProperty(t,"__esModule",{value:!0}),t.getPosts=l,t.getPost=c,t.addPost=p;var f=n(35),d=o(f),h=n(78),m=r(h)},78:function(e,t,n){n(158),e.exports=self.fetch.bind(self)},130:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(){return{type:f.REQUEST_MESSAGES}}function i(e){return{type:f.RECEIVE_MESSAGES,messages:e,receivedAt:Date.now()}}function u(){return function(e){return e(a()),h["default"]("/api/messages").then(function(e){return e.json()}).then(function(t){return e(i(t))})}}function s(e){return console.log(e),{type:f.ADD_MESSAGE,message:e}}function l(){return function(e){return e(u())}}function c(e,t){var n=new FormData;n.append("name",e),n.append("text",t);var r={method:"POST",body:n};return function(e){return h["default"]("/api/messages",r).then(function(e){return e.json()}).then(function(t){return e(s(t))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.getMessages=l,t.createMessage=c;var p=n(35),f=o(p),d=n(78),h=r(d)},131:function(e,t,n){"use strict";var r=n(3),o=r.createClass({displayName:"NewForm",handleSubmit:function(e){e.preventDefault();var t=r.findDOMNode(this.refs.title).value.trim(),n=r.findDOMNode(this.refs.content).value.trim();t&&n&&this.props.onPostSubmit({title:t,content:n})},render:function(){return r.createElement("form",{onSubmit:this.handleSubmit},r.createElement("div",{className:"form-group"},r.createElement("input",{type:"text",className:"form-control",placeholder:"title",ref:"title"})),r.createElement("div",{className:"form-group"},r.createElement("textarea",{className:"form-control",rows:"20",placeholder:"Write your content (support markdown)",ref:"content"})),r.createElement("button",{type:"submit",className:"btn btn-default"},"Submit"))}}),a=r.createClass({displayName:"UploadImage",openSelectWindow:function(e){e.preventDefault(),$("#upload_image").click()},uploadImage:function(){var e=new FormData;$.each($("#upload_image")[0].files,function(t,n){e.append("imageFile",n),console.log(t),console.log(n.type),console.log(n.name)}),$.ajax({url:"/photo/upload",type:"POST",data:e,cache:!1,contentType:!1,processData:!1,dataType:"json",success:function(e){console.log(e),this.setState({imageUrl:e.data.imageUrl})}.bind(this),error:function(){alert("upload error!")}.bind(this)})},getInitialState:function(){return{imageUrl:""}},render:function(){var e=this.state.imageUrl;return""!=e&&(e+="?imageView2/1/w/285/q/100/interlace/1"),r.createElement("div",{className:"upload"},r.createElement("button",{className:"btn btn-info",onClick:this.openSelectWindow},"Upload Image"),r.createElement("input",{type:"file",className:"hide",id:"upload_image",onChange:this.uploadImage}),r.createElement("div",{className:"alert alert-warning image-url"},r.createElement("span",null,this.state.imageUrl)),r.createElement("img",{src:e}))}}),i=r.createClass({displayName:"AddPost",handleFormSubmit:function(e){PostActionCreators.addPost(e)},componentDidMount:function(){PostStore.addChangeListener(this._onChange)},componentWillUnmount:function(){PostStore.removeChangeListener(this._onChange)},render:function(){return r.createElement("div",{id:"add-post"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8"},r.createElement(o,{onPostSubmit:this.handleFormSubmit})),r.createElement("div",{className:"col-lg-4"},r.createElement(a,null))))},_onChange:function(){this.transitionTo("post",{id:PostStore.getPostId()})}});e.exports=i},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},s=n(3),l=r(s),c=n(46),p=r(c),f=function(e){function t(e){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.handeSubmit=this.handeSubmit.bind(this),this.handeKeyDown=this.handeKeyDown.bind(this)}return a(t,e),i(t,[{key:"handeKeyDown",value:function(e){13===e.keyCode&&this.handeSubmit()}},{key:"handeSubmit",value:function(){var e=this.refs.text,t=this.refs.name;return e.value.trim()?t.value.trim()?(this.props.handeSubmit(t.value,e.value),void(e.value="")):void t.focus():void e.focus()}},{key:"render",value:function(){return l["default"].createElement("div",{className:"message-form"},l["default"].createElement("textarea",{className:"message-composer",ref:"text",placeholder:"Say something.",onKeyDown:this.handeKeyDown}),l["default"].createElement("input",{type:"text",placeholder:"Nick name",className:"message-name",ref:"name",onKeyDown:this.handeKeyDown}),l["default"].createElement("button",{className:"btn btn-info",onClick:this.handeSubmit},"Send"))}}]),t}(s.Component);t.MessageComposer=f,f.propsTypes={value:s.PropTypes.string.isRequired,handeSubmit:s.PropTypes.func.isRequired};var d=function(e){function t(e){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.message;return l["default"].createElement("li",{className:"message-list-item"},l["default"].createElement("h5",{className:"message-author-name"},e.name),l["default"].createElement("div",{className:"message-time"},p["default"].formatToDateTime(e.createAt)),l["default"].createElement("div",{className:"message-text"},e.text))}}]),t}(s.Component);t.MessageListItem=d,d.propsTypes={message:s.PropTypes.object.isRequired}},133:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},s=n(3),l=r(s),c=n(17),p=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),i(t,[{key:"render",value:function(){return l["default"].createElement("div",null,l["default"].createElement("header",null,l["default"].createElement("div",{className:"logo"},l["default"].createElement(c.IndexLink,{to:"/"},l["default"].createElement("h1",null,"HearMe"))),l["default"].createElement("nav",null,l["default"].createElement(c.Link,{to:"/"},"Blog"),l["default"].createElement("span",null,"|"),l["default"].createElement(c.Link,{to:"/photo"},"Photo"),l["default"].createElement("span",null,"|"),l["default"].createElement(c.Link,{to:"/note"},"Note"),l["default"].createElement("span",null,"|"),l["default"].createElement(c.Link,{to:"/chat"},"Chat"))),l["default"].createElement("div",{className:"page-divider"}))}}]),t}(s.Component);t["default"]=p,e.exports=t["default"]},134:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},s=n(3),l=r(s),c=n(46),p=r(c),f=function(e){function t(e){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.post,t=e?e.title:"",n=e?e.content:"",r=e?e.createAt:"";return l["default"].createElement("article",{id:"post"},l["default"].createElement("div",{className:"post-title"},l["default"].createElement("span",null,t)),l["default"].createElement("div",{className:"post-date"},p["default"].formatToDateTime(r)),l["default"].createElement("hr",null),l["default"].createElement("div",{className:"post-content"},l["default"].createElement("span",{dangerouslySetInnerHTML:{__html:n}})))}}]),t}(s.Component);f.propsTypes={post:s.PropTypes.object.isRequired},t["default"]=f,e.exports=t["default"]},135:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},s=n(3),l=r(s),c=n(17),p=n(46),f=r(p),d=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.post;return l["default"].createElement("section",{className:"post"},l["default"].createElement("div",{className:"post-title"},l["default"].createElement(c.Link,{to:"/posts/"+e._id},e.title)),l["default"].createElement("div",{className:"post-date"},f["default"].formatToDate(e.createAt)))}}]),t}(s.Component);d.propTypes={post:s.PropTypes.object.isRequired};var h=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.posts;return l["default"].createElement("div",{className:"post-list"},e.map(function(e){return l["default"].createElement(d,{post:e,key:e._id})}))}}]),t}(s.Component);h.propTypes={posts:s.PropTypes.array.isRequired},t["default"]=h,e.exports=t["default"]},137:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.chatReducer,n=t.isFetching,r=t.messages;return{messages:r,isFetching:n}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},l=n(3),c=r(l),p=n(16),f=n(132),d=n(130),h=function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e(d.getMessages())}},{key:"handeSubmit",value:function(e,t){var n=this.props.dispatch;n(d.createMessage(e,t))}},{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.messages;return c["default"].createElement("div",{className:"message-section"},c["default"].createElement(f.MessageComposer,{handeSubmit:this.handeSubmit.bind(this)}),c["default"].createElement("hr",null),t&&c["default"].createElement("h4",{className:"loading"},"Loading..."),!t&&c["default"].createElement("ul",{className:"message-list",ref:"messageList"},n.map(function(e){return c["default"].createElement(f.MessageListItem,{key:e._id,message:e})})))}}]),t}(l.Component);h.propsTypes={messages:l.PropTypes.array.isRequired,isFetching:l.PropTypes.bool.isRequired},t["default"]=p.connect(i)(h),e.exports=t["default"]},138:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){return{}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},l=n(3),c=r(l),p=n(16),f=n(133),d=r(f),h=function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props.children;return c["default"].createElement("div",null,c["default"].createElement(d["default"],null),e)}}]),t}(l.Component);h.propTypes={children:l.PropTypes.node},t["default"]=p.connect(i)(h),e.exports=t["default"]},139:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.postsReducer,n=t.isFetching,r=t.posts;return{posts:r,isFetching:n}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},l=n(3),c=r(l),p=n(16),f=n(135),d=r(f),h=n(71),m=function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props.dispatch;e(h.getPosts())}},{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.posts;return c["default"].createElement("div",null,t&&c["default"].createElement("h4",{className:"loading"},"Loading..."),!t&&c["default"].createElement(d["default"],{posts:n}))}}]),t}(l.Component);m.propsTypes={posts:l.PropTypes.array.isRequired,isFetching:l.PropTypes.bool.isRequired},t["default"]=p.connect(i)(m),e.exports=t["default"]},140:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){var t=e.router.params.id,n=e.postsReducer,r=n.isFetching,o=n.posts;return console.log(r),{id:t,post:o[0],isFetching:r}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=function(e,t,n){for(var r=!0;r;){var o=e,a=t,i=n;u=l=s=void 0,r=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var s=u.get;return void 0===s?void 0:s.call(i)}var l=Object.getPrototypeOf(o);if(null===l)return void 0;e=l,t=a,n=i,r=!0}},l=n(3),c=r(l),p=n(16),f=n(134),d=r(f),h=n(71),m=function(e){function t(e){o(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e)}return a(t,e),u(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.dispatch,n=e.id;console.log("dispatch"),console.log(n),t(h.getPost(n))}},{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.post;return c["default"].createElement("div",null,t&&c["default"].createElement("h4",{className:"loading"},"Loading..."),!t&&c["default"].createElement(d["default"],{post:n}))}}]),t}(l.Component);m.propsTypes={id:l.PropTypes.string.isRequired,post:l.PropTypes.object.isRequired,isFetching:l.PropTypes.bool.isRequired},t["default"]=p.connect(i)(m),e.exports=t["default"]},144:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),a=r(o),i=n(17),u=n(138),s=r(u),l=n(139),c=r(l),p=n(140),f=r(p),d=n(131),h=r(d),m=n(72),y=r(m),v=n(137),g=r(v),b=a["default"].createElement(i.Route,{path:"/",component:s["default"]},a["default"].createElement(i.IndexRoute,{component:c["default"]}),a["default"].createElement(i.Route,{path:"/posts/:id",component:f["default"]}),a["default"].createElement(i.Route,{path:"/posts",component:h["default"]}),a["default"].createElement(i.Route,{path:"/chat",component:g["default"]}),a["default"].createElement(i.Route,{path:"404",component:y["default"]}),a["default"].createElement(i.Route,{path:"*",component:y["default"]}));t["default"]=b,e.exports=t["default"]},146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){return y(m["default"],e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var a=n(26),i=n(34),u=n(76),s=r(u),l=n(144),c=r(l),p=n(125),f=r(p),d=n(123),h=(r(d),n(73)),m=r(h),y=a.compose(a.applyMiddleware(f["default"]),i.reduxReactRouter({routes:c["default"],createHistory:s["default"]}))(a.createStore);e.exports=t["default"]},158:function(e,t){!function(){"use strict";function e(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function t(e){return"string"!=typeof e&&(e=String(e)),e}function n(e){this.map={},e instanceof n?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function r(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function o(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function a(e){var t=new FileReader;return t.readAsArrayBuffer(e),o(t)}function i(e){var t=new FileReader;return t.readAsText(e),o(t)}function u(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,"string"==typeof e)this._bodyText=e;else if(d.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(d.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else{if(e)throw new Error("unsupported BodyInit type");this._bodyText=""}},d.blob?(this.blob=function(){var e=r(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this.blob().then(a)},this.text=function(){var e=r(this);if(e)return e;if(this._bodyBlob)return i(this._bodyBlob);if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)}):this.text=function(){var e=r(this);return e?e:Promise.resolve(this._bodyText)},d.formData&&(this.formData=function(){return this.text().then(c)}),this.json=function(){return this.text().then(JSON.parse)},this}function s(e){var t=e.toUpperCase();return h.indexOf(t)>-1?t:e}function l(e,t){t=t||{};var r=t.body;if(l.prototype.isPrototypeOf(e)){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new n(e.headers)),this.method=e.method,this.mode=e.mode,r||(r=e._bodyInit,e.bodyUsed=!0)}else this.url=e;if(this.credentials=t.credentials||this.credentials||"omit",(t.headers||!this.headers)&&(this.headers=new n(t.headers)),this.method=s(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function c(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function p(e){var t=new n,r=e.getAllResponseHeaders().trim().split("\n");return r.forEach(function(e){var n=e.trim().split(":"),r=n.shift().trim(),o=n.join(":").trim();t.append(r,o)}),t}function f(e,t){t||(t={}),this._initBody(e),this.type="default",this.status=t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText,this.headers=t.headers instanceof n?t.headers:new n(t.headers),this.url=t.url||""}if(!self.fetch){n.prototype.append=function(n,r){n=e(n),r=t(r);var o=this.map[n];o||(o=[],this.map[n]=o),o.push(r)},n.prototype["delete"]=function(t){delete this.map[e(t)]},n.prototype.get=function(t){var n=this.map[e(t)];return n?n[0]:null},n.prototype.getAll=function(t){return this.map[e(t)]||[]},n.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},n.prototype.set=function(n,r){this.map[e(n)]=[t(r)]},n.prototype.forEach=function(e,t){Object.getOwnPropertyNames(this.map).forEach(function(n){this.map[n].forEach(function(r){e.call(t,r,n,this)},this)},this)};var d={blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self},h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];l.prototype.clone=function(){return new l(this)},u.call(l.prototype),u.call(f.prototype),f.prototype.clone=function(){return new f(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new n(this.headers),url:this.url})},f.error=function(){var e=new f(null,{status:0,statusText:""});return e.type="error",e};var m=[301,302,303,307,308];f.redirect=function(e,t){if(-1===m.indexOf(t))throw new RangeError("Invalid status code");return new f(null,{status:t,headers:{location:e}})},self.Headers=n,self.Request=l,self.Response=f,self.fetch=function(e,t){return new Promise(function(n,r){function o(){return"responseURL"in i?i.responseURL:/^X-Request-URL:/m.test(i.getAllResponseHeaders())?i.getResponseHeader("X-Request-URL"):void 0}var a;a=l.prototype.isPrototypeOf(e)&&!t?e:new l(e,t);var i=new XMLHttpRequest;i.onload=function(){var e=1223===i.status?204:i.status;if(100>e||e>599)return void r(new TypeError("Network request failed"));var t={status:e,statusText:i.statusText,headers:p(i),url:o()},a="response"in i?i.response:i.responseText;n(new f(a,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.open(a.method,a.url,!0),"include"===a.credentials&&(i.withCredentials=!0),"responseType"in i&&d.blob&&(i.responseType="blob"),a.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof a._bodyInit?null:a._bodyInit)})},self.fetch.polyfill=!0}}()}});