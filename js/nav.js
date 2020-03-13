$(document).ready(function(){
    var index=window.location.href.split("/").length-1;
    var href=window.location.href.split("/")[index].substr(0,4);
    $(".llist li a[href^='"+href+"']").addClass("on");
})