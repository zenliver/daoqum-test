$(function () {

    // 自动添加序号
    function addIndexNumber(selector) {
        $(selector).each(function () {
            var trIndex = $(this).index();
            // console.log(trIndex);
            $(this).children(".bug_index").html(trIndex+1);
        });
    }

    addIndexNumber(".frontend_bugs table tbody tr");
    addIndexNumber(".backend_bugs table tbody tr");

    // 自动添加新窗口打开属性
    $(".bug_page a").attr("target","_blank");

    // 为不同的优先级文字添加不同的样式
    $(".bug_priority:contains(高)").css({
        "color": "#f00",
        "font-weight": "bold"
    });
    $(".bug_priority:contains(中)").css("color","#00f");

    // 去除多余的fancybox属性
    $(".fancybox").removeAttr("data-fancybox-group");

    // fancybox初始化
    $(".fancybox").fancybox();

});
