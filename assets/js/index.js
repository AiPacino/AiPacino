var bannerSwiper = new Swiper('.swiper-container.banner', {
    // autoplay: 2000,//可选选项，自动滑动
    effect: 'fade',
    loop: true,
    pagination: '.swiper-pagination',
    paginationElement: 'li',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<li class=" ' + className + ' "><a href="javascript:;" class=" ">' + index + '</a></li>';
    },
    autoplayDisableOnInteraction: false
});

var partnerSwiper = new Swiper('.swiper-container.partner', {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination.partner',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.partner',
        prevEl: '.swiper-button-prev.partner',
    },
});

$('.swiper-button-next.partner').click(function () {
    partnerSwiper.slideNext();
});

$('.swiper-button-prev.partner').click(function () {
    partnerSwiper.slidePrev();
});

$(".customer-logos li").hover(function(){
    $(this).find('img').attr('src', $(this).attr('data-hover'));
},function(){
    $(this).find('img').attr('src', $(this).attr('data-blur'));
});

/**
 * 首页顶部导航伸缩效果
 */
var t,
head = $('.head-wrap'),
under = function() {
    head.addClass('head-wrap-shrink').hover(function() {
        $(this).removeClass('head-wrap-shrink').addClass('blue')
    }, function() {
        $(this).addClass('head-wrap-shrink').removeClass('blue')
    })
},
upon = function() {
    head.removeClass('head-wrap-shrink').removeClass('blue').unbind()
},
headerNav = function() {
    var scrollTop = $(this).scrollTop()
    t && clearTimeout(t)
    t = setTimeout(function() {
        scrollTop > 10 ? under() : upon()
    }, 50)
}
headerNav()
$(window).scroll(function(e) {
    headerNav()
})

// 配置
var config = {
    vx: 3, // 点x轴速度,正为右，负为左
    vy: 3, // 点y轴速度
    height: 2, // 点高宽，其实为正方形，所以不宜太大
    width: 2,
    count: 120, // 点个数
    color: "250,250,250", // 点颜色
    stroke: "200,200,200", // 线条颜色
    dist: 2000, // 点吸附距离
    e_dist: 10000, // 鼠标吸附加速距离
    max_conn: 10 // 点到点最大连接数
}
//调用
// CanvasParticle(config);
