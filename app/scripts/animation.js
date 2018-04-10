var utilities = require('./utilities');

var onPageLoad = utilities.getClasses('on-page-load');

var ANIMATION = {

    parallaxMove: function() {

        $("#oval").mousemove(function(e) {
            parallaxIt(e, ".slide", -100);
            parallaxIt(e, "img", -30);
          });
          
          function parallaxIt(e, target, movement) {
            var $this = $("#oval");
            var relX = e.pageX - $this.offset().left;
            var relY = e.pageY - $this.offset().top;
          
            TweenMax.to(target, 1, {
              x: (relX - $this.width() / 2) / $this.width() * movement,
              y: (relY - $this.height() / 2) / $this.height() * movement
            });
          }
    },

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