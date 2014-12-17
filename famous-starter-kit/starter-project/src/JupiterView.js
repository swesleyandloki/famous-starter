/*** JupiterView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Surface = require('famous/core/Surface');
    var Transitionable = require('famous/transitions/Transitionable');
    var View = require('famous/core/View');

    // Constructor function for our AppView class
    function JupiterView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        _planetJupiter.call(this);

    }

    // Establishes prototype chain for AppView class to inherit from View
    JupiterView.prototype = Object.create(View.prototype);
    JupiterView.prototype.constructor = JupiterView;

    // Default options for AppView class
    JupiterView.DEFAULT_OPTIONS = {};

    function _planetJupiter() {

        var initialTime = Date.now();

        var jupiter = new ImageSurface({
            size: [70, 70],
            content: 'http://code.famo.us/assets/famous_logo.png',
            classes: ['double-sided'],
            properties: {
                backgroundColor: 'darkorange',
                borderRadius: '100px'
            }
        });

        var jupiterOrbitTiltModifier = new Modifier({
            transform: function () {
                return Transform.rotateX(Math.PI/20);
            }
        });

        var jupiterOrbitSpeedModifier = new Modifier({
            align: [0.5, 0.5],
            transform : function () {
                return Transform.rotateY(.0014 * (Date.now() - initialTime));
            }
        });

        var jupiterAxisModifier = new Modifier({
            transform : function () {
               return Transform.rotateZ(Math.PI/6);
            }
        });

        var jupiterRoundnessModifier = new Modifier({
            transform : function () {
               return Transform.rotateY(-(.0014 * (Date.now() - initialTime)));
            }
        });

        var jupiterOrbitModifier = new Modifier({
            transform : function () {
                return Transform.translate(0, 0, 420);
            }
        });

        this.add(jupiterOrbitTiltModifier).add(jupiterAxisModifier).add(jupiterOrbitSpeedModifier).add(jupiterOrbitModifier).add(jupiterRoundnessModifier).add(jupiter);

    }


    
    // Define your helper functions and prototype methods here

    module.exports = JupiterView;
});
