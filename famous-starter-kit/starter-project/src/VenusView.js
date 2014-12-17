/*** VenusView ***/

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
    function VenusView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        _planetVenus.call(this);

    }

    // Establishes prototype chain for AppView class to inherit from View
    VenusView.prototype = Object.create(View.prototype);
    VenusView.prototype.constructor = VenusView;

    // Default options for AppView class
    VenusView.DEFAULT_OPTIONS = {};

    function _planetVenus () {

        var initialTime = Date.now();

            
        var venus = new ImageSurface({
            size: [50, 50],
            content: 'http://code.famo.us/assets/famous_logo.png',
            classes: ['double-sided'],
            properties: {
                backgroundColor: 'palegoldenrod',
                borderRadius: '100px'
            }
        });

        var venusOrbitTiltModifier = new Modifier({
            transform: function () {
                return Transform.rotateX(-Math.PI/8);
            }
        });

        var venusAxisModifier = new Modifier({
            transform : function () {
               return Transform.rotateZ(Math.PI/-8);
            }
        });

        var venusOrbitSpeedModifier = new Modifier({
            align: [0.5, 0.5],
            transform : function () {
                return Transform.rotateY(.004 * (Date.now() - initialTime));
            }
        });

        var venusRoundnessModifier = new Modifier({
            transform : function () {
               return Transform.rotateY(-(.004 * (Date.now() - initialTime)));
            }
        });

        var venusOrbitModifier = new Modifier({
            transform : function () {
                return Transform.translate(0, 0, 300);
            }
        });


        this.add(venusOrbitTiltModifier).add(venusAxisModifier).add(venusOrbitSpeedModifier).add(venusOrbitModifier).add(venusRoundnessModifier).add(venus);

    }


    
    // Define your helper functions and prototype methods here

    module.exports = VenusView;
});
