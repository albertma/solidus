//= require solidus_admin/select2
jQuery(function($) {
  // Make select beautiful
  $('select.select2').select2({
    allowClear: true,
    dropdownAutoWidth: true,
    minimumResultsForSearch: 8
  });
})
