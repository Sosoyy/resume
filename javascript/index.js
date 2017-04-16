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
        anchors: ['intro', 'aa', 'bb', 'cc', 'dd'],
        sectionsColor: ['#292929', '#292929', '#292929', '#292929'],
        loopTop: true,
        loopBottom: true
    });
});