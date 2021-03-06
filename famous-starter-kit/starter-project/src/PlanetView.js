/*** PlanetView ***/

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
    function PlanetView() {

        // Applies View's constructor function to AppView class
        View.apply(this, arguments);

        _planetPlanet.call(this);

    }

    // Establishes prototype chain for AppView class to inherit from View
    PlanetView.prototype = Object.create(View.prototype);
    PlanetView.prototype.constructor = PlanetView;

    // Default options for AppView class
    PlanetView.DEFAULT_OPTIONS = {};

    function _planetPlanet () {

        var initialTime = Date.now();

        var size = (Math.random() * 50 + 20);

        var r = Math.floor(100 + Math.random() * 155);
        var g = Math.floor(74 + Math.random() * 181);
        var b = Math.floor(88 + Math.random() * 167);


        var planet = new ImageSurface({
            size: [size,size],
            content: 'http://code.famo.us/assets/famous_logo.png',
            classes: ['double-sided'],
            properties: {
                backgroundColor: 'rgb('+r+','+g+','+b+')',
                borderRadius: '100px'
            }
        });

        var factor = Math.random();

        var speedFactor;

        var speedSetter = function(){
            var speed = Math.floor(Math.random()*35-20) * .0001;
            if(speed > 0.0001 || speed < -0.0001){
                speedFactor = speed;
            }else{
                speedSetter();
            }
        }

        speedSetter();


        var planetOrbitTiltModifier = new Modifier({
            transform: function () {
                return Transform.rotateX(Math.PI*2);
            }
        });
        
        var planetOrbitSpeedModifier = new Modifier({
            align: [0.5, 0.5],
            transform : function () {
                return Transform.rotateY(speedFactor * (Date.now() - initialTime));
            }
        });
        
        var planetRoundnessModifier = new Modifier({
            transform : function () {
               return Transform.rotateY(-(speedFactor * (Date.now() - initialTime)));
            }
        });

        var rando = Math.random();
        var planetAxisModifier = new Modifier({
            transform : function () {
               return Transform.rotateZ(Math.PI*rando/3);
            }
        });

        var randy = Math.random() * 400 + 175;
        var planetOrbitModifier = new Modifier({
            transform : function () {
                return Transform.translate(0, 0, randy);
            }
        });

        this.add(planetOrbitTiltModifier).add(planetAxisModifier).add(planetOrbitSpeedModifier).add(planetOrbitModifier).add(planetRoundnessModifier).add(planet);

    }


    
    // Define your helper functions and prototype methods here

    module.exports = PlanetView;
});
