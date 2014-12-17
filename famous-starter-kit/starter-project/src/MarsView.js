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
    function MarsView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        _planetMars.call(this);

    }

    // Establishes prototype chain for AppView class to inherit from View
    MarsView.prototype = Object.create(View.prototype);
    MarsView.prototype.constructor = MarsView;

    // Default options for AppView class
    MarsView.DEFAULT_OPTIONS = {};

    function _planetMars () {

        var initialTime = Date.now();

            
        var mars = new ImageSurface({
        size: [30, 30],
        content: 'http://code.famo.us/assets/famous_logo.png',
        classes: ['double-sided'],
        properties: {
            backgroundColor: 'red',
            borderRadius: '100px'
        }
    });

    var marsOrbitTiltModifier = new Modifier({
        transform: function () {
            return Transform.rotateX(-Math.PI/18);
        }
    });

    var marsOrbitSpeedModifier = new Modifier({
        align: [0.5, 0.5],
        transform : function () {
            return Transform.rotateY(.0018 * (Date.now() - initialTime));
        }
    });

    var marsRoundnessModifier = new Modifier({
        transform : function () {
           return Transform.rotateY(-(.0018 * (Date.now() - initialTime)));
        }
    });

    var marsAxisModifier = new Modifier({
        transform : function () {
           return Transform.rotateZ(Math.PI/-7);
        }
    });


    var marsOrbitModifier = new Modifier({
        transform : function () {
            return Transform.translate(0, 0, 385);
        }
    });


        this.add(marsOrbitTiltModifier).add(marsAxisModifier).add(marsOrbitSpeedModifier).add(marsOrbitModifier).add(marsRoundnessModifier).add(mars);

    }


    
    // Define your helper functions and prototype methods here

    module.exports = MarsView;
});
