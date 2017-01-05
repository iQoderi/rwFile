"use strict";

var Promise = require('es6-promise').Promise;

module.exports = {
    /**
     * 获取Deffer对象
     */
    getDefer: function () {
        var defferred = {}
        defferred.promise = new Promise(function (resolve, reject) {
            defferred.resolve = resolve;
            defferred.reject = reject;
        })

        return defferred;
    },
    when: function (promises) {
        var deffered = this.getDefer();
        Promise.all(promises).then(function (data) {
            deffered.resolve(data);
        }, function (err) {
            deffered.reject(err);
        });
        return deffered.promise;
    }
}