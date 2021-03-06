

var API_URL = '/api/v2';
var TIMEOUT = 10000;

var _pendingRequests = {};


function abortPendingRequests(key) {
    if (_pendingRequests[key]) {
        _pendingRequests[key]._callback = function(){};
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
    var payload = {actionType: key, response: response};
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
    return request
        .get(url)
        .timeout(TIMEOUT)
        .query({authtoken: token()});
}

var Api = {
    getEntityData: function(entityId) {
        var url = makeUrl("/entities/" + entityId);
        var key = Constants.api.GET_ENTITY_DATA;
        var params = {entityId: entityId};
        abortPendingRequests(key);
        dispatch(key, Constants.request.PENDING, params);
        _pendingRequests[key] = get(url).end(
            makeDigestFun(key, params)
        );
    },

    getPosts: function() {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                url: "/api/posts",
                dataType: 'json',
                success: function(data) {
                     resolve(data);
                }.bind(this),
                error: function(xhr, status, err) {
                    reject(err);
                }.bind(this)
            });
        });
        return promise;
    },

    getPost: function(id) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                type: "get",
                url: "/api/posts/" + id,
                dataType: 'json',
                success: function(data) {
                    resolve(data);
                }.bind(this),
                error: function(err) {
                    reject(err);
                    // console.error("/post", status, err.toString());
                }.bind(this)
            });
        });
        return promise;
    },

    addPost: function(post) {
        var promise = new Promise(function(resolve, reject) {
            $.ajax({
                type: "post",
                url: "/api/posts",
                data: post,
                dataType: 'json',
                success: function(data) {
                    resolve(data);
                }.bind(this),
                error: function(err) {
                    reject(err);
                }.bind(this)
            });
        });
        return promise;
    }
};

module.exports = Api;