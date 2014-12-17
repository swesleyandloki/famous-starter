/*** MercuryView ***/

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
    function MercuryView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        _planetMercury.call(this);

    }

    // Establishes prototype chain for AppView class to inherit from View
    MercuryView.prototype = Object.create(View.prototype);
    MercuryView.prototype.constructor = MercuryView;

    // Default options for AppView class
    MercuryView.DEFAULT_OPTIONS = {};

    function _planetMercury () {

        var initialTime = Date.now();

        var mercury = new ImageSurface({
            size: [35, 35],
            content: 'http://code.famo.us/assets/famous_logo.png',
            classes: ['double-sided'],
            properties: {
                backgroundColor: 'papayawhip',
                borderRadius: '100px'
            }
        });

        var mercuryOrbitTiltModifier = new Modifier({
            transform: function () {
                return Transform.rotateX(Math.PI/12);
            }
        });
        
        var mercuryOrbitSpeedModifier = new Modifier({
            align: [0.5, 0.5],
            transform : function () {
                return Transform.rotateY(.0045 * (Date.now() - initialTime));
            }
        });
        
        var mercuryRoundnessModifier = new Modifier({
            transform : function () {
               return Transform.rotateY(-(.0045 * (Date.now() - initialTime)));
            }
        });

        var mercuryAxisModifier = new Modifier({
            transform : function () {
               return Transform.rotateZ(Math.PI/6);
            }
        });

        var mercuryOrbitModifier = new Modifier({
            transform : function () {
                return Transform.translate(0, 0, 175);
            }
        });

        this.add(mercuryOrbitTiltModifier).add(mercuryAxisModifier).add(mercuryOrbitSpeedModifier).add(mercuryOrbitModifier).add(mercuryRoundnessModifier).add(mercury);

    }


    
    // Define your helper functions and prototype methods here

    module.exports = MercuryView;
});
