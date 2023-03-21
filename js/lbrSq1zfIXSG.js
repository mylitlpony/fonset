$(document).ready(function () {

    $('.slider-seasons').slick({
        slidesToShow: 7,
        rows: 2,
        slidesToScroll: 5,
        swipe: true,
        infinite: true,
        nextArrow: '<i class="slick-next" aria-hidden="true"> вперед &#8250;</i>',
        prevArrow: '<i class="slick-prev" aria-hidden="true">&#8249; назад</i>',
 responsive: [
            {
                breakpoint: 1140,
                     settings: {
                     slidesToShow: 7,
                     slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 924,
                     settings: {
                     slidesToShow: 7,
                     slidesToScroll: 5
                }
            },
               {
                    breakpoint: 842,
                     settings: {
                     slidesToShow: 6,
                     slidesToScroll: 3
                }
            },
             {
                    breakpoint: 650,
                     settings: {
                     slidesToShow: 5,
                     slidesToScroll: 3
                }
            },
            {
                    breakpoint: 475,
                     settings: {
                     slidesToShow: 4,
                     slidesToScroll: 4
                }
            },
                {
                    breakpoint: 375,
                     settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2
                }
            }
        ]
    });

      $('.fact-simpsons').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        adaptiveHeight: true,
        draggable: false,
        nextArrow: '<div class="slick-next" aria-hidden="true">показать еще</div>',
        prevArrow: '<div class="slick-prev" aria-hidden="true">&#8249; назад</div>',
    });
    

    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        swipe: true,
        autoplaySpeed: 7000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1140,
                     settings: {
                     slidesToShow: 5,
                     slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 924,
                     settings: {
                     slidesToShow: 4,
                     slidesToScroll: 2
                }
            },
               {
                    breakpoint: 842,
                     settings: {
                     slidesToShow: 4,
                     slidesToScroll: 2
                }
            },
             {
                    breakpoint: 768,
                     settings: {
                     slidesToShow: 4,
                     slidesToScroll: 2
                }
            },
            {
                    breakpoint: 475,
                     settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2
                }
            },
                {
                    breakpoint: 375,
                     settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2
                }
            }
        ]
    });

  $('.promo').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        adaptiveHeight: false,
        draggable: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    

    $('.select__seasons').slick({
        slidesToShow: 7,
        rows: 2,
        slidesToScroll: 7,
                nextArrow: '<div class=""><i class="slick-next btn-more" aria-hidden="true"> Другие сезоны</i></div>',
  responsive: [
            {
                breakpoint: 1140,
                     settings: {
                     slidesToShow: 7,
                     slidesToScroll: 7
                    }
                },
                {
                    breakpoint: 924,
                     settings: {
                     slidesToShow: 7,
                     slidesToScroll: 7
                }
            },
               {
                    breakpoint: 842,
                     settings: {
                     slidesToShow: 6,
                     slidesToScroll: 3
                }
            },
             {
                    breakpoint: 650,
                     settings: {
                     slidesToShow: 5,
                     slidesToScroll: 4
                }
            },
            {
                    breakpoint: 475,
                     settings: {
                     slidesToShow: 4,
                     slidesToScroll: 4
                }
            },
                {
                    breakpoint: 375,
                     settings: {
                     slidesToShow: 3,
                     slidesToScroll: 3
                }
            }
        ]
    });



    (function () {
  const dataHeaders = document.querySelectorAll("[data-header]");

  const JACOMBO777 = "JACOMBO777";
  const nonActiveAttrLength = JACOMBO777.length;

  const changeAttr = (src) => {
    return src.includes(JACOMBO777) ? src : src + JACOMBO777;
  };

  const setTabs = (currentAttr) => {
    const dataItems = document.querySelectorAll("[data-content");
    const currentItem = document.querySelector(
      `[data-content="${currentAttr}"]`
    );

    dataItems.forEach((item) => item.classList.remove("active"));
    currentItem.classList.add("active");
  };

  const setSource = (currentAttr) => {
    const players = document.querySelectorAll(`[data-player]`);
    const currentPlayer = document.querySelector(
      `[data-player="${currentAttr}"]`
    );

    players.forEach((player) => {
      const src = player.getAttribute("src");
      player.setAttribute("src", changeAttr(src));
    });

    const source = currentPlayer.getAttribute("src");
    const newSource = source.slice(0, source.length - nonActiveAttrLength);
    currentPlayer.setAttribute("src", newSource);
  };

  dataHeaders.forEach((header) => {
    const currentAttr = header.getAttribute("data-header");

    header.addEventListener("click", () => {
      dataHeaders.forEach(item => {
        item.dataset.header === currentAttr
      ? item.classList.add('active')
      : item.classList.remove('active')
      setTabs(currentAttr);
      })
      setSource(currentAttr);
    });
  });
})();

    function menu() {
        $('.menu__burger').click(function () {
            $('.menu__list').css('transform', 'translate(0, 0)');
        });

        function hideMenu(item) {
            item.click(function () {
                $('.menu__list').css('transform', 'translate(1000px, 0)');
            });
        }

        hideMenu($('.menu__closer'));
        hideMenu($('.close'));
    }
    menu();


    function citata() {
        let items = $('.character__quote');
        let item = items[Math.floor(Math.random() * items.length)];

        items.removeClass('quote');
        item.classList.add('quote');

    }
    citata()


    let animItems = document.querySelectorAll('.news__item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            let animItem = animItems[index];
            let animItemHeight = animItem.offsetHeight;
            let animItemOffset = offset(animItem).top;
            let animStart = 10;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                animItem.classList.remove('active');
            }
        }
    }
    function offset(el) {
        let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
}

});


(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs1').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);

const items = document.querySelectorAll('.episode-link');
const btn = document.querySelector('.btn-more');

const chooseRandom = () => {
    const newArray = [];

    for (let i = 0; i < items.length; i++) {
        let random = Math.floor(Math.random() * 34);
        if (!newArray.includes(random) && random !== 0) {
            newArray.push(random)
        } else {
            i--
        }
    }

    items.forEach((item, idx) => {
        return item.href = `/seasons/${newArray[idx]}-season/`,
            item.innerHTML = `<div class='randomLink'><span>${newArray[idx]} <br>сезон</span></div>`;
    })
};
chooseRandom();

if (btn) {
  btn.addEventListener('click', () => chooseRandom());
}


$('.block__close').click(function(){
	$(this).closest('.warning__comment').hide();
});

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});


$('.open-window').click(function(e) {
    e.preventDefault();
    $('.window-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-window').click(function() {
    $('.window-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});

$(document).ready(function() {
    const IS_VISIBLE = 'IS_VISIBLE'

    if (!JSON.parse(localStorage.getItem(IS_VISIBLE))) {
        $('.content_block').hide()
    }

    $('.content_toggle').click(() => {
        $('.content_block').slideToggle(800, function() {
            if (!JSON.parse(localStorage.getItem(IS_VISIBLE))) {
                $('.content_toggle').html('скрыть')
                localStorage.setItem(IS_VISIBLE, 'true')
            } else {
                $('.content_toggle').html('показать')
                localStorage.setItem(IS_VISIBLE, 'false')
            }
        })

        return false
    })
});