
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
	
	activateKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.activateKiosk failed: "+error);
        }, "KioskPlugin", "activateKiosk", []);
    },

    suspentKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.suspentKiosk failed: "+error);
        }, "KioskPlugin", "suspentKiosk", []);
    },
    
    resumeKiosk: function (callback) {
        exec(function(out){
            callback(out=="true");
        }, function(error){
            alert("KioskPlugin.resumeKiosk failed: "+error);
        }, "KioskPlugin", "resumeKiosk", []);
    }
    
    
}

module.exports = KioskPlugin;

