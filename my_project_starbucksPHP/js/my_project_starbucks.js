if(!window.jQuery){
    throw new Error('my_project_starbucks.js插件库依赖于jQuery！');
}
//左边菜单下拉上收效果
jQuery.fn.dropdown=function(){
    $(this).click(function(e){
        e.preventDefault();
        $(this).siblings().slideToggle(300);
    });
};
//左边菜单a标签字色变化
$('#head ul.down a').mouseover(function(){
    $(this).css('color','#B89F7A');
});
$('#head ul.down a').mouseout(function(){
    $(this).css('color','#fff');
});
$('#head ul.up a').mouseover(function(){
    $(this).css('color','#fff');
});
$('#head ul.up a').mouseout(function(){
    $(this).css('color','#B89F7A');
});
$('ul.down li.hasdropdown>a span').mouseover(function(){
    $(this).css('border-top','4px solid #B89F7A');
});
$('ul.down li.hasdropdown>a span').mouseout(function(){
    $(this).css('border-top','4px solid #fff');
});
//为三条杠杠和左边菜单设置单击事件
$('#head .threelines').on('click',function(){
   $(this).siblings('.left_menu').animate({
       left:'0'
   },1000)
    $(this).siblings('.shelter').show();
    $(this).siblings('.shelter').animate({
        opacity:'.5'
    },1000);
});
//遮罩层
$('#head .shelter').on('click',function () {
    $(this).animate({
        opacity:'0'
    },1000);
        $(this).css('display','none');

    $(this).siblings('.left_menu').animate({
        left:'-260px'
    },1000)
})
$('#head div.login a').mouseover(function(){
    $(this).css('color','#967A50');
});
$('#head div.login a').mouseout(function(){
    $(this).css('color','#B89F7A');
});
//右边弹出菜单
$('#pic .right_block').on('mouseenter','a',function (e) {
    e.preventDefault();
    $(this).parent().addClass('active').siblings('.active').removeClass('active');
    var id=$(this).attr('href');
    $(id).addClass('active').siblings('.active').removeClass('active');
})
$('#pic .five_block a').mouseleave(function (e) {
    e.preventDefault();
    $(this).parent().removeClass('active');
    var id=$(this).attr('href');
    $(id).removeClass('active');

})

//页脚7列表
$('.footer li a').mouseenter(function (e) {
    e.preventDefault();
    var id=$(this).attr('href');
    $(id).slideToggle().siblings().css('display','none');
        $(id).mouseleave(function (e) {
            e.preventDefault();
                $(this).css('display','none');
    })
})
$(window).load(function () {
    var n=sessionStorage['cNum']
    if(n){
        $('#welcome').html('欢迎回来!'+n)
    }
})


















