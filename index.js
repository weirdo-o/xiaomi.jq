/**
 * Created by ow on 2018/3/3.
 */
$(function () {
// banner图
    let div = $('.banner0')
    let pic = $('ul.banner li')
    let left = $('.banner-jiantou.left1')
    let right = $('.banner-jiantou.right2')
    let cirs = $('.yd li')
    let n = 0
    function move() {
        n++;
        if (n >= pic.length) {
            n = 0
        }
        pic.removeClass("banlist").eq(n).addClass("banlist");
        cirs.removeClass("active").eq(n).addClass("active");
    }

    let time = setInterval(move, 2000);
    div.mouseenter(function () {
        clearInterval(time)
    })
    div.mouseleave (function () {
        time = setInterval(move, 2000)
    })
    let flag = true
    cirs.click(function () {
        let index=$(this).index();
        pic.removeClass("banlist").eq(index).addClass("banlist");
        $(".yd li").removeClass("active").eq(index).addClass("active");
        n=index
    })

    right.click(function () {
        clearInterval(time)
        move()
    })
    left.click(function () {
        clearInterval(time)
        n--;
        if (n < 0) {
            n = pic.length - 1
        }
        pic.removeClass("banlist").eq(n).addClass("banlist");
        cirs.removeClass("active").eq(n).addClass("active");
    })



// banner的侧栏选项卡
    $(".celan li").mouseenter(function () {
        let index=$(this).index();
        $(".celanyc li").removeClass("active").eq(index).addClass("active");
        $(".celan li").removeClass("active").eq(index).addClass("active");
    })
    $(".celan li").mouseleave(function () {
        let index=$(this).index();
        $(".celanyc li").filter(".active").removeClass("active");
        $(".celan li").filter(".active").removeClass("active");
    })

// 头部的购物车隐藏
    $(".toubu-yc").mouseenter(function () {
        $(".toubu-yincang").stop(true).slideDown(200)
    })
    $(".toubu-yc").mouseleave(function () {
        $(".toubu-yincang").stop(true).slideUp(100)
    })

// 导航
    let navb = $('.dao')
    let nav = $('.daohang-wenzi li');
    let list = $('.daohangyc li')
    let ycdi = $('.daohangyc')
    nav.mouseenter(function () {
        ycdi.stop(true).slideDown(200)
        list.removeClass("active").eq($(this).index()).addClass("active");
    })
    navb.mouseleave( function () {
        ycdi.stop(true).slideUp(200)
    })

// 第二种方法
    // let navb = $('.dao')
    // let ycdi = $('.daohangyc')
    // navb.mouseenter(function () {
    //     ycdi.slideToggle(300)
    // })
    // navb.mouseleave(function () {
    //     ycdi.slideToggle(300)
    // })


// 选项卡
    function xxka(a,b) {
        $(a).mouseenter(function () {
            let index=$(this).index();
            $(b).removeClass("active1").eq(index).addClass("active1");
            $(a).removeClass("active1").eq(index).addClass("active1");
        })
    }

    xxka('#jjdd .header_right a', '#jjdd .dibu1 .dibu-right')
    xxka('#zhineng .header_right a', '#zhineng .dibu1 .dibu-right')
    xxka('#dapei .header_right a', '#dapei .dibu1 .dibu-right')
    xxka('#peijian .header_right a', '#peijian .dibu1 .dibu-right')
    xxka('#zhoubian .header_right a', '#zhoubian .dibu1 .dibu-right')

// 小米明星单品
    $(".jtrdanpin").click(function () {
        $('.h-dibubox .dibu:eq(0)').animate({left:-($('.h-dibubox').width())}, function () {
            $('.jtldanpin').removeClass('active')
        })
        $('.h-dibubox .dibu:eq(1)').animate( {left: 0}, function () {
            $(".jtrdanpin").addClass('active')
        })
    })
    $(".jtldanpin").click(function () {
        $('.h-dibubox .dibu:eq(1)').animate({left:$('.h-dibubox').width()}, function () {
            $('.jtldanpin').addClass('active')
        })
        $('.h-dibubox .dibu:eq(0)').animate( {left: 0}, function () {
            $(".jtrdanpin").removeClass('active')
        })
    })

// 为你推荐
    function tuijian(a) {
        let box=$(a);
        let lis=$('.wntj-dibu',box);
        let now=0,next=0;
        let width=box.width();
        $('.jtlwnt',box).click(function () {
            next=now+1;
            if(next>=lis.length){
                next=0;
            }
            lis.eq(next).css({'left':'100%'});
            lis.eq(now).animate({left:-width},'fast');
            lis.eq(next).animate({left:0},'fast');
            now=next;
        });
        $('.jtrwnt',box).click(function () {
            next=now-1;
            if(next<0){
                next=lis.length-1;
            }
            lis.eq(next).css({'left':'-100%'});
            lis.eq(now).animate({left:width},'fast');
            lis.eq(next).animate({left:0},'fast');
            now=next;
        });
    }
    tuijian('.wntj');








    function lunbo(a) {
        let box=$(a);
        let lis=$('.nrul li',box);
        let circles=$('.yuandian li',box);
        let width=box.width();
        let now=0,next=0;

        $('.right',box).click(function () {
            next=now+1;
            if(next>=lis.length){
                return;
            }
            lis.eq(now).animate({left:-width},'fast');
            lis.eq(next).animate({left:0},'fast');
            circles.eq(now).removeClass('active').end().eq(next).addClass('active');
            now=next;
        });
        $('.left',box).click(function () {
            next=now-1;
            if(next<0){
                return;
            }
            lis.eq(now).animate({left:width},'fast');
            lis.eq(next).animate({left:0},'fast');
            circles.eq(now).removeClass('active').end().eq(next).addClass('active');
            now=next;
        });
        circles.each(function (index) {
            $(this).click(function () {
                if(index>now){
                    next=index;
                    lis.eq(next).css({'left':'100%'});
                    lis.eq(now).animate({left:-width},'fast');
                    lis.eq(next).animate({left:0},'fast');
                    circles.eq(now).removeClass('active').end().eq(next).addClass('active');
                    now=next;
                }
                else if(index<now){
                    next=index;
                    lis.eq(next).css({'left':'-100%'});
                    lis.eq(now).animate({left:width},'fast');
                    lis.eq(next).animate({left:0},'fast');
                    circles.eq(now).removeClass('active').end().eq(next).addClass('active');
                    now=next;
                }
            })
        })
    }
    lunbo('#List1');
    lunbo('#List2');
    lunbo('#List3');
    lunbo('#List4');









})
