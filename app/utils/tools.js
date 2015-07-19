
module.exports = {

    appendZero: function(s) {
        if (s == null) {
          return "";
        }
        return ("00" + s).substr((s + "").length);
    },

    formatToDate: function(d, cn) {
        var dd, mm, yyyy;
        if (cn == null) {
          cn = false;
        }
        if (d == null) {
          return "";
        }
        if ('string' === typeof d) {
            d = new Date(d)
        }

        if (!(d instanceof Date)) {
            return "";
        }

        yyyy = d.getFullYear();
        mm = d.getMonth() + 1;
        dd = d.getDate();

        if (!cn) {
          return yyyy + "-" + mm + "-" + dd;
        } else {
          return yyyy + "年" + mm + "月" + dd + "日";
        }
    },

  

    formatToDateTime: function(d) {
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
        h = d.getHours();
        m = d.getMinutes();
        // s = d.getSeconds();
        return this.formatToDate(d) + (" " + h + ":" + m);
    }
}
