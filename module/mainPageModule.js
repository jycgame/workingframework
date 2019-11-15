define(['jquery', 'vue'], function ($, Vue) {
    function mainPageModule() { };

    mainPageModule.prototype.run = function () {
        $('#mainLayout').css('background-color', 'yellow');
        $('#mainLayout').load('sub.html', function() {
            var vm = new Vue({
                el: '#vue_det',
                data: {
                    firstname: "Ria",
                    lastname: "Singh",
                    htmlcontent: "<div><h1>Vue Js Template</h1></div>"
                }
            });
        });
    };

    return mainPageModule;
});