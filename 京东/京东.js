$(function () {
    //关闭广告
    $('.heard-right').on('click', function () {
        $('.heard-top ').css("display", "none");
    })
    //导航拓展
    $(' .fl .shortcut_btn ').hover(
        function () {
            $('.fl .shortcut_btn').css("backgroundColor", '#fff');
            $('.fl .shortcut_btn  .dt').css('color', 'red');
            $('.fl .shortcut_btn .dd').css('display', 'block');
            $('.selected').css("backgroundColor", 'red').css('color', '#fff')
        }, function () {
            $('.shortcut_btn').css("backgroundColor", '#e3e4e5');
            $('.shortcut_btn  .dt').css('color', '#8f8f8f');
            $('.shortcut_btn .dd').css('display', 'none');
        })
    $('.fl .item a').hover(
        function () {
            $(this).css("backgroundColor", '#ccc').css('color', 'red');
        }, function () {
            $(this).css("backgroundColor", '#fff').css('color', '#8f8f8f');
        })
    $('.areamini_inter_lk').hover(
        function () {
            $('.areamini_inter_name').css('color', 'red');
        }, function () {
            $('.areamini_inter_name').css('color', '#8f8f8f');
        }
    )

    $('#di3').hover(
        function () {
            $('#di3').css("backgroundColor", '#fff');
            $('#di3 .dd').css('display', 'block');
        }, function () {
            $('#di3').css("backgroundColor", '#e3e4e5');
            $('#di3 .dd').css('display', 'none');
        }
    )
    $('.fr .item a').hover(
        function () {
            $(this).css('color', 'red');
        }, function () {
            $(this).css('color', '#8f8f8f');
        })
    $('.fr .shortcut_btn_company').hover(
        function () {
            $('.fr .shortcut_btn_company .dd').css("backgroundColor", '#fff');
            $('.fr .shortcut_btn_company .dd').css('display', 'block');
        }, function () {
            $('.fr .shortcut_btn_company .dd').css("backgroundColor", '#e3e4e5');
            $('.fr .shortcut_btn_company .dd').css('display', 'none');
        }
    )
    $('#ttbar-serv').hover(
        function () {
            $('#ttbar-serv').css("backgroundColor", '#fff');
            $(' #ttbar-serv .dd').css('display', 'block');
        }, function () {
            $('#ttbar-serv').css("backgroundColor", '#e3e4e5');
            $('#ttbar-serv .dd').css('display', 'none');
        }
    )
    $('#ttbar-navs').hover(
        function () {
            $('#ttbar-navs').css("backgroundColor", '#fff');
            $('#ttbar-navs .dd').css('display', 'block');
        }, function () {
            $('#ttbar-navs').css("backgroundColor", '#e3e4e5');
            $('#ttbar-navs .dd').css('display', 'none');
        }
    )
    $('#J_mobile').hover(
        function () {
            $(' #J_mobile_pop ').css('display', 'block');
        }, function () {
            $(' #J_mobile_pop ').css('display', 'none');
        }
    )
    $('#settleup').hover(
        function () {
            $('#settleup .dropdown-layer').css('display', 'block')
        }, function () {
            $('#settleup .dropdown-layer').css('display', 'none')
        })

    //左侧栏
    $('#J_cate').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
        }, function () {
            $('#J_popCtn').css('display', 'none');
        })

    $('#one1').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item1').css('display', 'block');
        }, function () {
            $('#cate_item1').css('display', 'none');
            $('#J_popCtn').css('display', 'none');
        })
    $('#one2').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item2').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item2').css('display', 'none');
        })
    $('#one3').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item3').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item3').css('display', 'none');
        })
    $('#one4').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item4').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item4').css('display', 'none');
        })
    $('#one5').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item5').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item5').css('display', 'none');
        })
    $('#one6').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item6').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item6').css('display', 'none');
        })
    $('#one7').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item7').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item7').css('display', 'none');
        })
    $('#one8').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item8').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item8').css('display', 'none');
        })
    $('#one9').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item9').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item9').css('display', 'none');
        })
    $('#one10').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item10').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item10').css('display', 'none');
        })
    $('#one11').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item11').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item11').css('display', 'none');
        })
    $('#one12').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item12').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item12').css('display', 'none');
        })
    $('#one13').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item13').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item13').css('display', 'none');
        })
    $('#one14').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item14').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item14').css('display', 'none');
        })
    $('#one15').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item15').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item15').css('display', 'none');
        })
    $('#one16').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item16').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item16').css('display', 'none');
        })
    $('#one17').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item17').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item17').css('display', 'none');
        })
    $('#one18').hover(
        function () {
            $('#J_popCtn').css('display', 'block');
            $('#cate_item18').css('display', 'block');

        }, function () {
            $('#J_popCtn').css('display', 'none');
            $('#cate_item18').css('display', 'none');
        })
    $('#J_popCtn li').mouseover(function(){
            var index = $(this).index();       
        })    
    $('.JS_navCtn li').hover(
        function () {
            index = $(this).index();
            // $('#J_popCtn div').eq(index).css('display', 'block').siblings().css('display', 'none');
            $('#J_popCtn div').hover(
                
            )
        }, function () {
            index = $(this).index();
            // $('#J_popCtn li').eq(index).css('display', 'none');
        })
})
    //轮播
    window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay:true,
      })        
    }

