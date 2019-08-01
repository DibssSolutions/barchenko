import { OPEN, BODY } from '../constants';

const trigger = $('.js-servicesmenu-trigger');
trigger.on('click', function() {
  const parent = $(this).parents('.js-servicesmenu');
  (!parent.hasClass(OPEN)) 
    ? parent.addClass(OPEN)
    : parent.removeClass(OPEN);
});
BODY.on('click', e => {
  if ($(e.target).closest('.js-servicesmenu-trigger').length || $(e.target).closest('.js-servicesmenu-wrap').length) return;
  $('.js-servicesmenu').removeClass(OPEN);
});
