const { start } = require('bindings')('addon');

start(function () {
    console.log("JavaScript callback called with arguments", Array.from(arguments));
}, 5);

// call second time it throw an error
start(function () {
    console.log("JavaScript callback called with arguments", Array.from(arguments));
}, 5);