/*** AppView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var SlideshowView = require('views/slideshowView');

    // Constructor function for our AppView class
    function AppView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        var slideshowView = new SlideshowView();
        this.add(slideshowView);
    }

    // Establishes prototype chain for AppView class to inherit from View
    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    // Default options for AppView class
    AppView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = AppView;
});
