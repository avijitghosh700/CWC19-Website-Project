$(function() {
  let srchBtn = $('.header__form').find('.search');
  let iconClass = srchBtn.find('.pe');

  let classSwap = function() {
    let classCheck = iconClass.hasClass('pe-7s-search');
    if (classCheck == true) {
      iconClass.removeClass('pe-7s-search');
      iconClass.addClass('pe-7s-close');
      // alert(classCheck);
    }
    else {
      iconClass.addClass('pe-7s-search');
      iconClass.removeClass('pe-7s-close');
    }
  };

  let toggleSrch = function(e) {
    $('.isInactiveSrch').toggleClass('isActiveSrch');
    srchBtn.toggleClass('cls');
    classSwap();
    e.stopPropagation();
  }

  srchBtn.off('click').on('click', toggleSrch);

  $(window).off('scroll').on('scroll', function() {
    let dist = 50;
    let row = $('.header > .header__row');
    let mainNav = row.find('.header__mainnav');

    if ($(this).scrollTop() > dist) {
      row.removeClass('rowUnscrolled');
      mainNav.removeClass('mainnavUnscrolled');
    }
    else {
      row.addClass('rowUnscrolled');
      mainNav.addClass('mainnavUnscrolled');
    }
  });

  // Mobile Nav
  let mobileNavBtn = $('[class$="__navTogglerBtn"]');
  let navIcon = mobileNavBtn.find('[class$="--bars"]');
  let mobileNavbar = $('[class$="__mobileNavbar"]');
  
  let navOpen = function() {
    navIcon.toggleClass('cross');
    mobileNavBtn.toggleClass('rotateNav');
    mobileNavbar.toggleClass('navOpen');
  }

  mobileNavBtn.off('click').on('click', navOpen);

  // Matches Page filters
  let country = $('.countries');
  let countryItem = country.next();
  let venue = $('.venues');
  let venueItem = venue.next();

  country.off('click').on('click', function() {
    countryItem.toggleClass('open');
    $(this).find('.fa').toggleClass('fa-caret-up');
  });

  venue.off('click').on('click', function() {
    venueItem.toggleClass('open');
    $(this).find('.fa').toggleClass('fa-caret-up');
  });

  // Matches Page filters (Desktop)
  let filterItem = $('[class*="__filterCont"]').find('[class*="--items"]');

  filterItem.off('click').on('click', function() {
    $(this).toggleClass('filterItemActive').siblings().removeClass('filterItemActive');
  });

  // Matches Page filters (Mobile)
  let filterBtn = $('[class$="__filterBtn"]');
  let filterModal = $('[class$="__filterModal"]');
  let filterModalListCont = filterModal.find('[class*="__modalListCont"]')
  let filterModalItem = filterModalListCont.find('[class*="--items"]');
  let filterModalCls = filterModal.find('[class*="--close"]');
  let filterResetBtn = filterModal.find('[class*="__filterApply"]');

  filterBtn.off('click').on('click', function() {
    filterModal.addClass('modalOpen');
  });

  filterModalCls.off('click').on('click', function() {
    filterModal.removeClass('modalOpen');
  });

  filterModalItem.off('click').on('click', function() {
    $(this).addClass('filterItemActiveMob').siblings().removeClass('filterItemActiveMob');
  });

  filterResetBtn.off('click').on('click', function() {
    // filterModalListCont.each(function(i) {
      filterModalItem.removeClass('filterItemActiveMob').eq(0).addClass('filterItemActiveMob');
      filterModalItem.eq(11).addClass('filterItemActiveMob');
      console.log(i);
    // });
  });

  // Carousel Code
  $('.upmatchCarousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: 
      '<button class="slick-prev prev upmatch__prev" aria-label="Previous" type="button"><i class="fa fa-angle-left fa-2x"></i></button>',
    nextArrow: 
      '<button class="slick-next next upmatch__next" aria-label="Next" type="button"><i class="fa fa-angle-right fa-2x"></i></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.insiderCarousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<button class="slick-prev prev insider__prev" aria-label="Previous" type="button"><i class="fa fa-angle-left fa-2x"></i></button>',
    nextArrow:
      '<button class="slick-next next insider__next" aria-label="Next" type="button"><i class="fa fa-angle-right fa-2x"></i></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.matchHLCarousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<button class="slick-prev prev matchHL__prev" aria-label="Previous" type="button"><i class="fa fa-angle-left fa-2x"></i></button>',
    nextArrow:
      '<button class="slick-next next matchHL__next" aria-label="Next" type="button"><i class="fa fa-angle-right fa-2x"></i></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.lvsCarousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<button class="slick-prev prev lvs__prev" aria-label="Previous" type="button"><i class="fa fa-angle-left fa-2x"></i></button>',
    nextArrow:
      '<button class="slick-next next lvs__next" aria-label="Next" type="button"><i class="fa fa-angle-right fa-2x"></i></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.venueCarousel').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:
      '<button class="slick-prev prev venue__prev" aria-label="Previous" type="button"><i class="fa fa-angle-left fa-2x"></i></button>',
    nextArrow:
      '<button class="slick-next next venue__next" aria-label="Next" type="button"><i class="fa fa-angle-right fa-2x"></i></button>',
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Magnific_Pop
  $('.youtube').magnificPopup({
    disableOn: 200,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'http://www.youtube.com/embed/%id%?autoplay=1'
        }
      }
    }
  });
});

// Animate on Scroll
AOS.init();