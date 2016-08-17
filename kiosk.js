
var exec = require('cordova/exec');

var KioskPlugin = {
    
    exitKiosk: function () {
        exec(null, null, "KioskPlugin", "exitKiosk", []);
    },
    
    isInKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.isInKiosk failed: "+error);
        }, "KioskPlugin", "isInKiosk", []);
    },

    initKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.initKiosk failed: "+error);
        }, "KioskPlugin", "initKiosk", []);
    },
    
    suspentKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.suspentKiosk failed: "+error);
        }, "KioskPlugin", "suspentKiosk", []);
    }
    
    
}

module.exports = KioskPlugin;

