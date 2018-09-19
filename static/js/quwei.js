/*******************************************************************************
 *
 ******************************************************************************/

$(function () {

    /***************************************************************************
    * 默认初始化及事件处理
    */

    var conSwiper = new Swiper(
        ".ws-qw-container",
        {
            direction: 'vertical',
             pagination: {
              el: '.swiper-pagination',
              clickable :true,
            },
            // 切换page事件
            on:{
                // 索引会改变时执行
                slideChange: function(){
                    resetAni();//重置动画
                }
            }
        });

// 循环初始化二级滑动页
var mySwiper = new Array();
$(".ws-qw-page .swiper-container").each(function(e){
    var page = $(this).attr('data');
    // 二级滑动，当前最后一页索引
    var indexes = $(this).find(".swiper-slide").length -1;

    mySwiper[(e+1)] = new Swiper('.swiper-container-page' + page, {
            direction : 'vertical',

            on:{
                slideChange: function(){
                    updateMenuStatu( $(".page"+page+"-menu img").eq(this.activeIndex) );
                    // $('.pt_img').hide();
                    // $('.pt_switch').removeClass('action');
                },
                // 最后一页继续拖动执行，当前二级滑动页是第一页／最后一页，一级滑动相对切换到上一页／下一页
                touchEnd: function(event){
                  if(this.activeIndex == indexes && this.swipeDirection == 'next'){
                        conSwiper.slideTo( (conSwiper.activeIndex+1), 1000, true);
                    }
                    if(this.activeIndex == 0 && this.swipeDirection == 'prev'){
                        conSwiper.slideTo( (conSwiper.activeIndex-1), 1000, true);
                    }
                }
            }
    });
});
 // 处理二级菜单的点击事件（区位详情切换）
    $(".page-secondmenuV img").click(function () {
        updateMenuStatu($(this));

        var page = parseInt( $(this).closest('.swiper-container').attr('data') );

        mySwiper[page].slideTo($(this).index(), 500, true);

    });

    $('.pt_switch').click(function(){
        if($(this).hasClass('action')){
            $('.pt_img').hide();
            $(this).removeClass('action');
        }else{
            $(this).addClass('action').siblings().removeClass('action');
            $(this).siblings('.pt_img').attr('src','images/03/pt'+$(this).attr('name')+'.png').show()
        }
    })
});
//重置动画
function resetAni(){
   $('.reset-ani').hide();
   $('.reset-ani').width();
   $('.reset-ani').show();
}
// 更新按钮菜单状态，使用png
function updateMenuStatu(curMenu) {
    // 清除旧状态
    var oldActionMenu = curMenu.parent().find('.action');
    oldActionMenu.attr('src', oldActionMenu.attr('src').replace('_h.png', '.png'));

    //更新Action
    curMenu.addClass("action").siblings().removeClass("action");

    // 添加新高亮
    curMenu.attr('src', curMenu.attr('src').replace('.png', '_h.png'));
}

