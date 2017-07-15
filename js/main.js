$(function() {

    animateLine = function(canvas, hoverDivName, colorNumber, pathString) {
        $('#' + hoverDivName).hover(

        function() {
            var line = canvas.path(pathString).attr({
                stroke: colorNumber
            });
            var length = line.getTotalLength();

            $('path[fill*="none"]').animate({
                'to': 1
            }, {
                duration: 800,
                step: function(pos, fx) {
                    var offset = length * fx.pos;
                    var subpath = line.getSubpath(0, offset);
                    canvas.clear();
                    canvas.path(subpath).attr({
                        'stroke-width': 1,
                        stroke: colorNumber
                    });

                },
            });
        }, function() {
            $('path[fill*="none"]').stop(true, false).fadeOut();
        });
    };

    var canvas = Raphael('canvas', 200, 200);
    var pathString = "m33 200, l0, -50,l100,0, l0,10";

    animateLine(canvas, "canvas", "#000", pathString);


});