/*global famous*/
// import dependencies
define(function(require, exports, module) {
	
	var Engine = require('famous/core/Engine');
	var Modifier = require('famous/core/Modifier');
	var Transform = require('famous/core/Transform');
	var ImageSurface = require('famous/surfaces/ImageSurface');
	var Surface = require('famous/core/Surface');
	var Transitionable = require('famous/transitions/Transitionable');
	var AppView = require('AppView');
	var MercuryView = require('MercuryView');
	var VenusView = require('VenusView');
	var EarthView = require('EarthView');
	var MarsView = require('MarsView');
	var JupiterView = require('JupiterView');
	var PlanetView = require('PlanetView');

	// create the main context
	var mainContext = Engine.createContext();
	var initialTime = Date.now();

	// THE SUN
	var logo = new ImageSurface({
	    size: [200, 200],
	    content: 'http://code.famo.us/assets/famous_logo.png',
	    classes: ['double-sided'],
	    properties: {
	    	backgroundColor: '#ffeb7f',
	    	borderRadius: '100px'
	    }
	});

	var centerSpinModifier = new Modifier({
	    origin: [0.5, 0.5],
	    align: [0.5, 0.5],
	    transform : function () {
	        return Transform.rotateZ(.002 * (Date.now() - initialTime));
	    }
	});

	var logoZModifier = new Modifier({
	    transform : function () {
	        return Transform.translate(0,0,1000);
	    }
	});


	// NEBULA
	var nebulaModifier = new Modifier({
		transform : function () {
			return Transform.translate(0, 0, 3);
		}
	});



	// View Instances

	var appView = new AppView();

	var background = new Surface({
        size: [undefined, undefined],
        properties: {
            backgroundImage: 'url(http://yda.fc2web.com/hoshi/M31ed.jpg)',
            backgroundRepeat: 'no-repeat'

        }
    });


    // var planetMercury = new MercuryView();
    // var planetVenus = new VenusView();
    // var planetEarth = new EarthView();
    // var planetMars = new MarsView();
    // var planetJupiter = new JupiterView();

    // var planetArray = [planetJupiter, planetMars, planetEarth, planetVenus, planetMercury];

	// Throw some shiznatch together

	mainContext.add(appView);
	mainContext.setPerspective(2500);
    appView.add(background);

    var system = appView.add(logoZModifier);
    system.add(centerSpinModifier).add(logo);
    system.add(deploy).add(raider);
    
  	logo.on('click', function(){
  		var planetView = new PlanetView();
  		system.add(planetView);
  	});
  	
  	
});
