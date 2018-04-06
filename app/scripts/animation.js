var utilities = require('./utilities');

var onPageLoad = utilities.getClasses('on-page-load');

var ANIMATION = {

    scrollMagic: {

        controller: new ScrollMagic.Controller(),

        init: function() {

            onPageLoad.forEach( function(item, index) {
                var  onPageLoad = new ScrollMagic.Scene({
                    triggerElement: '.' + item,
                    triggerHook: 1
                });
                onPageLoad.setTween(TweenMax.from('.' + item, 0.8, {
                    opacity: 0,
                    offset: 50,
                    y: 50
                }));
                ANIMATION.scrollMagic.controller.addScene([
                    onPageLoad
                ]);

            });

        }
    },

    init: function() {
        ANIMATION.scrollMagic.init();
    },
};

module.exports = {
    init : ANIMATION.init
};