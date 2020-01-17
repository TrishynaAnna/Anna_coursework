$("button[name='btn_correlation']").click(function () {

    window.location = "../correlation/" + $(this).data('hashtag_name');

});

$("button[name='btn_clustering']").click(function () {

    window.location = "../clustering/" + $(this).data('hashtag_name');

});
