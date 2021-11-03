
 /**
  * Regole per definire i filtri in bootstrap
  */
  $(document).ready(function(){
    $("#ricerca").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#raccolta .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });