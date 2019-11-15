define(['./module/mainPageModule'], function(mainPageModule) {
    function entry() {
        var module = new mainPageModule();
        module.run();
    }

    return entry;
});