/**
 * Created by qoder on 17-1-6.
 */
'use strict';

var Promise=require('es6-promise').Promise;
var defferd={}

defferd.promise=new Promise(function(resolve,reject){
    defferd.resolve=resolve;
    defferd.reject=reject;
})

defferd.reject('error')

function test() {
    setTimeout(function () {
        console.log(2);
    })

    return 3
}


console.log(test())
// setTimeout(function () {
//
// },2000)