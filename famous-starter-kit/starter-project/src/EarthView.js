/*** EarthView ***/

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
    function EarthView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        _planetEarth.call(this);

    }

    // Establishes prototype chain for AppView class to inherit from View
    EarthView.prototype = Object.create(View.prototype);
    EarthView.prototype.constructor = EarthView;

    // Default options for AppView class
    EarthView.DEFAULT_OPTIONS = {};

    function _planetEarth() {

        var initialTime = Date.now();

        var earth = new ImageSurface({
            size: [53, 53],
            content: 'http://code.famo.us/assets/famous_logo.png',
            classes: ['double-sided'],
            properties: {
                backgroundColor: 'cyan',
                borderRadius: '100px'
            }
        });

        var earthOrbitTiltModifier = new Modifier({
            transform: function () {
                return Transform.rotateX(Math.PI/20);
            }
        });

        var earthOrbitSpeedModifier = new Modifier({
            align: [0.5, 0.5],
            transform : function () {
                return Transform.rotateY(.0027 * (Date.now() - initialTime));
            }
        });

        var earthAxisModifier = new Modifier({
            transform : function () {
               return Transform.rotateZ(Math.PI/9);
            }
        });

        var earthRoundnessModifier = new Modifier({
            transform : function () {
               return Transform.rotateY(-(.0027 * (Date.now() - initialTime)));
            }
        });

        var earthOrbitModifier = new Modifier({
            transform : function () {
                return Transform.translate(0, 0, 350);
            }
        });

        this.add(earthOrbitTiltModifier).add(earthAxisModifier).add(earthOrbitSpeedModifier).add(earthOrbitModifier).add(earthRoundnessModifier).add(earth);

    }


    
    // Define your helper functions and prototype methods here

    module.exports = EarthView;
});
