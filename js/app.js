
(function ($) {
    "use strict";

    $('.validate-form').on('submit',function(event){
      var validated = event.result;
      if(!validated) {
        return validated;
      }
      $("#response").show();
      $("#response_years").text("10");
      return false;
    });

})(jQuery);
