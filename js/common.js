$(function () {
    let t;
    $('.xiala-box>li').hover(function () {
        clearTimeout(t);
        t=setTimeout(()=>{
            $(this).children('.xiala').slideDown(200)

        },200)
    },function () {
        clearTimeout(t)
        $(this).children('.xiala').slideUp(200)
    })
})