;
(function (win) {
    var deviceWidth = document.documentElement.clientWidth;
    WindowResize();
    $(window).resize(function () {
        WindowResize();
    });

    function WindowResize() {
        deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) deviceWidth = 750;
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    }
})(window);

var deleteLog = false;

$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#292929', '#292929', '#292929', '#292929'],
        onLeave: function (index, nextIndex, direction) {
            if (deleteLog) {
                $('#callbacksDiv').html('');
            }
            $('#callbacksDiv').append('<p>onLeave - index:' + index + ' nextIndex:' + nextIndex + ' direction:' + direction + '</p>')
        },
        afterRender: function () {
            $('#callbacksDiv').append('<p>afterRender</p>');
        },
        afterLoad: function (anchorLink, index) {
            $('#callbacksDiv').append('<p>afterLoad - anchorLink:' + anchorLink + " index:" + index + '</p>');

            //section 2
            if (index == 2) {
                //moving the image
                $('#section2').find('.intro').delay(100).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo', function () {
                    $('#section2').find('p').first().fadeIn(700, function () {
                        $('#section2').find('p').last().fadeIn(600);
                    });
                });


            }

            //section 3
            if (anchorLink == 'page3') {
                //section 3
                $('#section3').find('.intro').delay(100).animate({
                    left: '0%'
                }, 1500, 'easeOutExpo');
            }

            deleteLog = true;
        }
    });
});