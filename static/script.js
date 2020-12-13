$(document).ready(function () {
  $("#intramural").click(function () {
    if ($("#intramural_block").is(":hidden")) {
      $("#intramural_block").show("slow");
      $("#in_absentia_block").hide("slow");
      $(this).toggleClass("active");
      $("#in_absentia").removeClass("active")
    }
    return false;
  });
  $("#in_absentia").click(function () {
    if ($("#in_absentia_block").is(":hidden")) {
      $("#in_absentia_block").show("slow");
      $("#intramural_block").hide("slow");
      $(this).toggleClass("active");
      $("#intramural").removeClass("active")
    }
    return false;
  });
});
