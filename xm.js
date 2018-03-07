/**
 * Created by ow on 2018/1/28.
 */
window.onload = function () {
// banner
    let div = document.querySelector('.banner0')
    let pic = document.querySelectorAll('ul.banner li')
    let left = document.querySelector('.banner-jiantou.left1')
    let right = document.querySelector('.banner-jiantou.right2')
    let cirs = document.querySelectorAll('.yd li')
    let n = 0

    function move() {
        n++;
        if (n >= pic.length) {
            n = 0
        }
        pic.forEach(function (val, ind) {
            val.classList.remove('banlist')
            cirs[ind].classList.remove('active')
        })
        pic[n].classList.add('banlist')
        cirs[n].classList.add('active')
    }

    let time = setInterval(move, 2000);
    div.onmouseover = function () {
        clearInterval(time)
    }
    div.onmouseout = function () {
        time = setInterval(move, 2000)
    }
    let flag = true
    right.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        move()
    }
    left.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        n--;
        if (n < 0) {
            n = pic.length - 1
        }
        pic.forEach(function (val) {
            val.classList.remove('banlist')
        })
        pic[n].classList.add('banlist')
    }

    cirs.forEach(function (val, index) {
        val.onclick = function () {
            if (!flag) {
                return
            }
            flag = false
            pic.forEach(function (va, ind) {
                va.classList.remove('banlist')
                cirs[ind].classList.remove('active')
            })
            pic[index].classList.add('banlist')
            this.classList.add('active')
            n = index
        }
    })

    pic.forEach(function (dom) {
        dom.addEventListener('transitionend', function () {
            flag = true
        })
    })

// banner结束

// 选项卡
    function xxka(a, b) {
        let nav = document.querySelectorAll(a);
        let list = document.querySelectorAll(b)
        nav.forEach(function (val, index) {
            val.onmouseover = function () {
                nav.forEach(function (va, ind) {
                    va.classList.remove('active1')
                    list[ind].classList.remove('active1')
                })
                this.classList.add('active1')
                list[index].classList.add('active1')
            }
        })
    }

    xxka('#jjdd .header_right a', '#jjdd .dibu1 .dibu-right')
    xxka('#zhineng .header_right a', '#zhineng .dibu1 .dibu-right')
    xxka('#dapei .header_right a', '#dapei .dibu1 .dibu-right')
    xxka('#peijian .header_right a', '#peijian .dibu1 .dibu-right')
    xxka('#zhoubian .header_right a', '#zhoubian .dibu1 .dibu-right')
// 选项卡结束

// 底下的双下标轮播
    function box1(box) {
        let now = 0;
        let next = 0;
        let pic1 = box.querySelectorAll('.nrul li')
        let right1 = box.querySelector('.right')
        let left1 = box.querySelector('.left')
        let cirs1 = box.querySelectorAll('.yuandian li')
        let width = parseInt(window.getComputedStyle(box, null).width)
        let flag = true

        right1.onclick = function () {
            next = now + 1
            if(next>=pic1.length){
                return
            }
            if (!flag) {
                return
            }
            flag = false
            // if (next >= pic1.length) {
            //     // next=0
            //     flag = true
            // }
            // pic1[next].style.left = '100%'
            animate(pic1[now], {left: -width}, 400)
            animate(pic1[next], {left: 0}, 400, function () {
                flag = true
            })
            cirs1[now].classList.remove('active')
            cirs1[next].classList.add('active')
            now = next
        }
        left1.onclick = function () {
            next = now - 1
            if(next<0){
                return
            }
            if (!flag) {
                return
            }
            flag = false
            // if (next < 0) {
            //     // next=pic1.length-1
            //     flag = true
            // }
            // pic1[next].style.left = '-100%'
            animate(pic1[now], {left: width}, 400)
            animate(pic1[next], {left: 0}, 400, function () {
                flag = true
            })
            cirs1[now].classList.remove('active')
            cirs1[next].classList.add('active')
            now = next
        }
        cirs1.forEach(function (val, index) {
            val.onclick = function () {
                if (!flag) {
                    return
                }
                flag = false
                next = index
                if (next > now) {
                    pic1[next].style.left = '100%'
                    animate(pic1[now], {left: -width}, 400)
                    animate(pic1[next], {left: 0}, 400, function () {
                        flag = true
                    })
                    cirs1[now].classList.remove('active')
                    cirs1[next].classList.add('active')
                    now = next
                } else if (next < now) {
                    pic1[next].style.left = '-100%'
                    animate(pic1[now], {left: width}, 400)
                    animate(pic1[next], {left: 0}, 400, function () {
                        flag = true
                    })
                    cirs1[now].classList.remove('active')
                    cirs1[next].classList.add('active')
                    now = next
                } else {
                    flag = true
                }
            }
        })
    }

    let box2 = document.querySelectorAll('.nrbox')
    box2.forEach(function (val) {
        box1(val)
    })
// 底下的双下标轮播结束

// banner的侧栏选项卡
    let bncelan = document.querySelectorAll('.celan li')
    let bncly = document.querySelectorAll('.celanyc li')
    bncelan.forEach(function (val, index) {
        val.onmouseenter = function () {
            bncelan.forEach(function (va, ind) {
                va.classList.remove('active')
                bncly[ind].classList.remove('active')
            })
            bncly[index].setAttribute('class', 'active')
            this.setAttribute('class', 'active')
        }
        val.onmouseleave = function () {
            bncly[index].classList.remove('active')
            this.classList.remove('active')
        }
    })
    bncly.forEach(function (val, index) {
        val.onmouseover = function () {
            val.setAttribute('class', 'active')
            bncelan[index].setAttribute('class', 'active')
        }
        val.onmouseout = function () {
            val.classList.remove('active')
            bncelan[index].classList.remove('active')
        }
    })
// banner的侧栏选项卡结束


// 小米明星单品
    let danpin = document.querySelector('.header')
    let dibu = document.querySelector('.h-dibubox')
    let hea = document.querySelectorAll('.h-dibubox .dibu')
    let jtleft = document.querySelector('.jtleft')
    let jtright = document.querySelector('.jtright')
    let dw = dibu.offsetWidth;
    let gsd = true;

    function asd() {
        if (gsd) {
            animate(hea[0], {left: -dw}, function () {
                jtleft.classList.remove('active')
            })
            animate(hea[1], {left: 0}, function () {
                jtright.classList.add('active')
            })
            gsd = false;

        } else {
            animate(hea[1], {left: dw}, function () {
                jtleft.classList.add('active')
            })
            animate(hea[0], {left: 0}, function () {
                jtright.classList.remove('active')
            })
            gsd = true;
        }
    }

    let ase = setInterval(asd, 5000)
    danpin.onmouseenter = function () {
        clearInterval(ase)
    }
    danpin.onmouseleave = function () {
        ase = setInterval(asd, 5000)
    }
    jtright.onclick = function () {
        if (gsd) {
            animate(hea[0], {left: -dw}, function () {
                jtleft.classList.remove('active')
            })
            animate(hea[1], {left: 0}, function () {
                jtright.classList.add('active')
            })
            gsd = false;
        } else {
            return
        }
    }
    jtleft.onclick = function () {
        if (!gsd) {
            animate(hea[1], {left: dw}, function () {
                jtleft.classList.add('active')
            })
            animate(hea[0], {left: 0}, function () {
                jtright.classList.remove('active')
            })
            gsd = true;
        } else {
            return
        }
    }

// 为你推荐
    let big = document.querySelector('.wn-big')
    let wnright = document.querySelector('.wntj-toubu .jtright')
    let wnleft = document.querySelector('.wntj-toubu  .jtleft')
    let flag=true
    let w = big.offsetWidth
    function movewn() {
        if (!flag) {
            return
        }
        flag = false
        let first = big.firstElementChild
        animate(big, {left: -w}, function () {
            big.appendChild(first)
            big.style.left = 0
            flag = true
        })
    }

    wnright.onclick = function () {
        movewn()
    }
    wnleft.onclick = function () {
        if (!flag) {
            return
        }
        flag = false
        let last = big.lastElementChild
        let first = big.firstElementChild
        big.insertBefore(last, first)
        big.style.left = -w + 'px'
        animate(big, {left: 0}, function () {
            flag = true
        })
    }

// 导航
    let navb = document.querySelector('.daohang-wenzi')
    let nav = document.querySelectorAll('.daohang-wenzi a');
    let list = document.querySelectorAll('.daohangyc li')
    let ycdi = document.querySelector('.daohangyc')
    navb.onmouseenter = function () {
        ycdi.style.display='block'
        animate(ycdi, {height: 220}, 200)
        nav.forEach(function (val, index) {
            val.onmouseenter = function () {
                list.forEach(function (val) {
                    val.classList.remove('active')
                })
                list[index].classList.add('active')
            }
        })

    }
    navb.onmouseleave = function () {
        ycdi.style.display='none'
        animate(ycdi, {height: 0}, 200)
    }


// 头部购物车隐藏
    let navli=document.querySelector('.toubu-yc')
    navli.onmouseenter=function () {
        let hidden=this.querySelector('.toubu-yincang')
        if(!hidden){
            return
        }
        animate(hidden,{height:85},200)
    }
    navli.onmouseleave=function () {
        let hidden=this.querySelector('.toubu-yincang')
        if(!hidden){
            return
        }
        animate(hidden,{height:0},200)
    }



}