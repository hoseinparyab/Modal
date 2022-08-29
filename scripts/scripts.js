$(document).ready(function () {
    let openModel = $('.openModel');
    let modal = $('.modal');
    let closeModelBtn = $('.modal .close');


    openModel.click(function () {
        modal.fadeIn(500);
    });
    closeModelBtn.click(function () {
        modal.fadeOut(600)
    });
});