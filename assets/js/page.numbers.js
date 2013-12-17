/* © 2011-2013 33cube, Inc. All rights reserved. */

// jQuery Easing v1.3, copyright 2001 Robert Penner, licensed under BSD
// Easing Functions, copyright 2001 Robert Penner
(function(j) {j.easing["jswing"]=j.easing["swing"];j.extend(j.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return j.easing[j.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b}});})(jQuery);

// jQuery ScrollTo v1.4.7, copyright 2007-2013 Ariel Flesler, licensed under MIT
(function(d){function h(b){return"object"==typeof b?b:{top:b,left:b}}var n=d.scrollTo=function(b,c,a){return d(window).scrollTo(b,c,a)};n.defaults={axis:"xy",duration:1.3<=parseFloat(d.fn.jquery)?0:1,limit:!0};n.window=function(b){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){if(this.nodeName&&-1==d.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"]))return this;var b=(this.contentWindow||this).document||this.ownerDocument||this;return/webkit/i.test(navigator.userAgent)|| "BackCompat"==b.compatMode?b.body:b.documentElement})};d.fn.scrollTo=function(b,c,a){"object"==typeof c&&(a=c,c=0);"function"==typeof a&&(a={onAfter:a});"max"==b&&(b=9E9);a=d.extend({},n.defaults,a);c=c||a.duration;a.queue=a.queue&&1<a.axis.length;a.queue&&(c/=2);a.offset=h(a.offset);a.over=h(a.over);return this._scrollable().each(function(){function q(b){k.animate(e,c,a.easing,b&&function(){b.call(this,g,a)})}if(null!=b){var l=this,k=d(l),g=b,p,e={},s=k.is("html,body");switch(typeof g){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(g)){g= h(g);break}g=d(g,this);if(!g.length)return;case "object":if(g.is||g.style)p=(g=d(g)).offset()}d.each(a.axis.split(""),function(b,d){var c="x"==d?"Left":"Top",m=c.toLowerCase(),f="scroll"+c,h=l[f],r=n.max(l,d);p?(e[f]=p[m]+(s?0:h-k.offset()[m]),a.margin&&(e[f]-=parseInt(g.css("margin"+c))||0,e[f]-=parseInt(g.css("border"+c+"Width"))||0),e[f]+=a.offset[m]||0,a.over[m]&&(e[f]+=g["x"==d?"width":"height"]()*a.over[m])):(c=g[m],e[f]=c.slice&&"%"==c.slice(-1)?parseFloat(c)/100*r:c);a.limit&&/^\d+$/.test(e[f])&& (e[f]=0>=e[f]?0:Math.min(e[f],r));!b&&a.queue&&(h!=e[f]&&q(a.onAfterFirst),delete e[f])});q(a.onAfter)}}).end()};n.max=function(b,c){var a="x"==c?"Width":"Height",h="scroll"+a;if(!d(b).is("html,body"))return b[h]-d(b)[a.toLowerCase()]();var a="client"+a,l=b.ownerDocument.documentElement,k=b.ownerDocument.body;return Math.max(l[h],k[h])-Math.min(l[a],k[a])}})(jQuery);

// jQuery Throttle v1.1, copyright 2010 "Cowboy" Ben Alman, licensed under MIT and GPL
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};})(this);

$(function() {
  var $window = $(window),
      $sections = $("#main").find("section"),
      $links = $("#sectionNav").find("a"),
      updateSectionsOnChange = true,
      mainTop = $("#main").offset().top;

  function switchToSection(id) {
    var $section = $sections.filter("[id='"+id+"']"),
        currentScroll;

    if ($section.length && !$section.hasClass("selected")) {
      if (window.history.replaceState) {
        window.history.replaceState(null, null, "#"+id);
      }

      // Toggle classes
      $sections.filter(".selected").removeClass("selected");
      $section.addClass("selected");
      $links.filter(".selected").removeClass("selected");
      $links.filter("[href='#"+id+"']").addClass("selected");

      return $section;
    } else {
      return false;
    }
  }

  $links.on("click", function(e) {
    var $th = $(this),
        id = $th.attr("href").substr(1),
        $section = switchToSection(id);

    if (!!$section) {
      setTimeout(function() {
        updateSectionsOnChange = false;

        $.scrollTo($section, {
          duration : 500,
          easing : "easeInOutQuad",
          offset : {
              top : Math.round($window.height() / -4)
            },
          onAfter : function() {
              updateSectionsOnChange = true;
            }
        });
      }, 0);
    }

    e.preventDefault();
  });

  $window.on("scroll resize orientationchange", function() {
    var scrollTop = $window.scrollTop(),
        windowHeight,
        documentHeight,
        thirdLine,
        $sectionToSelect;

    $("#sectionNav").css("top", scrollTop > mainTop ? scrollTop - mainTop : 0);

    if (updateSectionsOnChange) {
      windowHeight = $window.height();
      documentHeight = $(document).height();

      if (scrollTop + windowHeight >= $(document).height()) {
        $sectionToSelect = $sections.last();
      } else {
        thirdLine = scrollTop + Math.round(windowHeight / 4);

        $sections.each(function() {
          var $th = $(this);

          if ($th.offset().top <= thirdLine) {
            $sectionToSelect = $th;
          } else {
            return false;
          }
        });
      }

      if (!!$sectionToSelect) {
        switchToSection($sectionToSelect.attr("id"));
      }
    }
  });

  // Expandoids
  $(".expandoid").each(function() {
    var $container = $(this);

    $container.find(".expandoid-expand").one("click", function() {
      var totalHt = 0;

      $container.children().each(function() {
        var $child = $(this),
            position = $child.css("position");

        if (position === "static" || position === "relative") {
          totalHt += $(this).outerHeight(true);
        }
      });

      $container.css("height", totalHt).addClass("expanded");
    });
  });

  // Graphs
  $("#bar-graph").find(".graph").plot(
    [
        {
            label : "Unique Open Rate",
            color : 0,
            bars : {
                order : 0
              },
            data : [
                [27, 0.64200000000000002],
                [28, 0.67159999999999997],
                [29, 0.67910000000000004],
                [30, 0.68640000000000001],
                [31, 0.67949999999999999],
                [32, 0.67530000000000001],
                [33, 0.67559999999999998],
                [34, 0.68779999999999997],
                [35, 0.69499999999999995],
                [36, 0.76419999999999999]
              ]
          },
        {
            label : "Unique Click Rate",
            color : 1,
            bars : {
                order : 1
              },
            data : [
                [27, 0.14299999999999999],
                [28, 0.12839999999999999],
                [29, 0.126],
                [30, 0.1162],
                [31, 0.1211],
                [32, 0.1173],
                [33, 0.1168],
                [34, 0.11990000000000001],
                [35, 0.11600000000000001],
                [36, 0.1179]
              ]
          }
      ],
    {
        series : {
            bars : {
                show : true,
                fill : 1,
                barWidth : 0.26
              }
          },
        xaxis : {
            min : 26.5,
            max : 36.5,
            ticks : [
                [27, "Jul 01"],
                [28, "Jul 08"],
                [29, "Jul 15"],
                [30, "Jul 22"],
                [31, "Jul 29"],
                [32, "Aug 05"],
                [33, "Aug 12"],
                [34, "Aug 19"],
                [35, "Aug 26"],
                [36, "Sep 02"]
              ],
            tickLength : 0,
            font : {
                color : "#000"
              }
          },
        yaxis : {
            min : 0,
            max : 1,
            ticks : 6,
            tickFormatter : function(val) {
                return Math.floor(val * 100) + "%";
              },
            tickColor : "#ccc",
            font : {
                color : "#000"
              }
          },
        grid : {
            margin : {
                top : 0,
                right : 0,
                bottom : 0,
                left : 5
              },
            labelMargin : 10,
            axisMargin : 0,
            borderWidth : {
                top : 0,
                right : 0,
                bottom : 1,
                left : 0
              },
            borderColor : "#000"
          },
        legend : {
            noColumns : 3,
            container : $("#section2").find(".legend")
          },
        colors : ["#008cdd", "#e57300", "#5dadb0"]
      }
  );

});