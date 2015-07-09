
var qiniu = require('qiniu');

qiniu.conf.ACCESS_KEY = 'ye6MKq9RX78IpEXsCv47h0NG_6DDZePgjfBpO8GS';
qiniu.conf.SECRET_KEY ='E1jbLdFDPOjbMgPsAVdVxw1G2tpO7cxPoqc8l39d';

var BUCKET = 'hearme';
var DOMAIN = '';

var Qiniu = {};

//生成上传凭证
function _uptoken() {
    var putPolicy = new qiniu.rs.PutPolicy(BUCKET);
    return putPolicy.token();
}

//上传二进制文件
Qiniu.uploadBuffer = function(body, key, uptoken) {
    var extra = new qiniu.io.PutExtra();
    //extra.params = params;
    //extra.mimeType = mimeType;
    //extra.crc32 = crc32;
    //extra.checkCrc = checkCrc;
    var uptoken = _uptoken();

    qiniu.io.put(uptoken, key, body, extra, function(err, ret) {
        if (!err) {
            // 上传成功， 处理返回值
            console.log(ret.key, ret.hash);
            // ret.key & ret.hash
        } else {
            // 上传失败， 处理返回代码
            console.log(err)
            // http://developer.qiniu.com/docs/v6/api/reference/codes.html
        }
    });
}

//上传本地文件
Qiniu.uploadFile = function(localFile, key, uptoken) {
    var extra = new qiniu.io.PutExtra();
    //extra.params = params;
    //extra.mimeType = mimeType;
    //extra.crc32 = crc32;
    //extra.checkCrc = checkCrc;
    var uptoken = _uptoken();

    qiniu.io.putFile(uptoken, key, localFile, extra, function(err, ret) {
        if(!err) {
            // 上传成功， 处理返回值
            console.log(ret.key, ret.hash);
            // ret.key & ret.hash
        } else {
            // 上传失败， 处理返回代码
            console.log(err);
            // http://developer.qiniu.com/docs/v6/api/reference/codes.html
        }
    });
}

module.exports = Qiniu;

