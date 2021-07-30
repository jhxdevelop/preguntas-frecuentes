$('.accordion')
  .find('.accordion-title')
  .on('click', function () {
    $(this).toggleClass('active');
    $(this).next().slideToggle('fast');
    $('.accordion-content').not($(this).next()).slideUp('fast');
    $('.accordion-title').not($(this)).removeClass('active');
  });
