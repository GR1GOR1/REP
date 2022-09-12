$('.ValueArea').html($('input[type="range"]').val());

$(document).on('input change', 'input[type="range"]', function() {
  $('.ValueArea').html($(this).val());
});