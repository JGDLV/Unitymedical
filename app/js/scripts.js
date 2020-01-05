$(document).ready(function () {

  $('.types__item-button').on('click', function () {
    const type = $(this).data('type');
    $('input[type="checkbox"]').eq(type - 1).prop('checked', true);
    $('input:checked').parent('label').addClass('active');
  });

  $('form').each(function () {
    const form = $(this);
    const fileInput = $(this).find('input[type="file"]');
    const fileSpan = $(this).find('input[type="file"] ~ span');
    const fileText = 'Прикрепить файл';
    const phone = $(this).find('input[name*="phone"]');
    const label = $(this).find('label');

    label.each(function () {
      $(this).on('click', function () {
        const input = $(this).find('input');
        if (input.attr('type') == 'checkbox') {
          input.is(':checked')
            ? $(this).addClass('active')
            : $(this).removeClass('active');
        } else if (input.attr('type') == 'radio') {
          input.is(':checked')
            ? ($(this).siblings().removeClass('active'), $(this).addClass('active'))
            : $(this).removeClass('active');
        }
      });
    });

    phone.each(function () {
      $(this).inputmask("+7 (999) 999-99-99");
    });

    fileInput.on('change', function () {
      const fileVal = $(this).val().replace(/.+[\\\/]/, '');
      fileVal !== '' ? fileSpan.text(fileVal) : fileSpan.text(fileText);
    });

    form.on('submit', function () {
      fileSpan.text(fileText);
      label.removeClass('active');
    });
  });

  $(window).scroll(function () {
    $(this).scrollTop() > 600 ? $('#top').fadeIn(500) : $('#top').fadeOut(500);
  });

  $('#top').click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });

  $('.menu-toggle .icon-toggle').click(function () {
    $(this).toggleClass('active');
    $('.main-menu').slideToggle();
    return false;
  });

  $(document).on('click', '.goto, .main-menu__link, .types__item-button', function (event) {
    event.preventDefault();
    let id = $(this).attr('href');
    let top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
  });

  $('.main-menu').append('<div class="main-menu__hover"></div>');

  $('.main-menu__item').on('mouseenter', function () {
    let pseudoWidth = $(this).innerWidth();
    let pseudoHeight = $(this).innerHeight();
    let pseudoOffsetLeft = $(this).position().left;
    let pseudoOffsetTop = $(this).position().top;
    $('.main-menu__hover').css({
      'width': pseudoWidth + 'px',
      'height': pseudoHeight + 'px',
      'left': pseudoOffsetLeft + 'px',
      'top': pseudoOffsetTop + 'px',
      'opacity': 1,
    });
    $(this).addClass('hover');
  });

  $('.main-menu__item').on('mouseleave', function () {
    $(this).removeClass('hover');
    $('.main-menu__hover').css({
      'opacity': 0,
    });
  });

  wow = new WOW(
    {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true
    }
  );
  wow.init();

});
