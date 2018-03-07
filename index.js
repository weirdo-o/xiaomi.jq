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
        $(".toubu-yincang").delay(200).slideDown(200)
    })
    $(".toubu-yc").mouseleave(function () {
        $(".toubu-yincang").delay(200).slideUp(100)
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







// 双下标轮播
//     function box1(box) {
//         let now = 0;
//         let next = 0;
//         let pic1 = $('.nrul li')
//         let right1 = $('.right')
//         let left1 = $('.left')
//         let cirs1 = $('.yuandian li')
//         let width =$(box).width
//         let flag = true
//
//         right1.eq(now).click (function () {
//             next = now + 1
//             if(next>=pic1.length){
//                 return
//             }
//             if (!flag) {
//                 return
//             }
//             flag = false
//             pic1.eq(now).animate({left: -width}, 400)
//             pic1.eq(next).animate({left: 0}, 400, function () {
//                 flag = true
//             })
//             cirs1.eq(now).removeClass('active')end().eq(next).addClass('active')
//             now = next
//         })
//         left1.click (function () {
//             next = now - 1
//             if(next<0){
//                 return
//             }
//             if (!flag) {
//                 return
//             }
//             flag = false
//
//             pic1.eq(now).animate({left: width}, 400)
//             pic1.eq(next).animate({left: 0}, 400, function () {
//                 flag = true
//             })
//            cirs1.eq(now).removeClass('active')end().eq(next).addClass('active')
//             now = next
//         })
//         // cirs1.forEach(function (val, index) {
//         //     val.onclick = function () {
//         //         if (!flag) {
//         //             return
//         //         }
//         //         flag = false
//         //         next = index
//         //         if (next > now) {
//         //             pic1[next].style.left = '100%'
//         //             animate(pic1[now], {left: -width}, 400)
//         //             animate(pic1[next], {left: 0}, 400, function () {
//         //                 flag = true
//         //             })
//         //             cirs1[now].classList.remove('active')
//         //             cirs1[next].classList.add('active')
//         //             now = next
//         //         } else if (next < now) {
//         //             pic1[next].style.left = '-100%'
//         //             animate(pic1[now], {left: width}, 400)
//         //             animate(pic1[next], {left: 0}, 400, function () {
//         //                 flag = true
//         //             })
//         //             cirs1[now].classList.remove('active')
//         //             cirs1[next].classList.add('active')
//         //             now = next
//         //         } else {
//         //             flag = true
//         //         }
//         //     }
//         // })
//     }
//
//     let box2 = document.querySelectorAll('.nrbox')
//     box2.forEach(function (val) {
//         box1(val)
//     })











})