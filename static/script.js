$(document).ready(function () {
  $("#intramural").click(function () {
    if ($("#intramural_block").is(":hidden")) {
      $("#intramural_block").show("slow");
      $("#in_absentia_block").hide("slow");
      $(this).toggleClass("active");
      $("#in_absentia").removeClass("active");
    }
    return false;
  });
  $("#in_absentia").click(function () {
    if ($("#in_absentia_block").is(":hidden")) {
      $("#in_absentia_block").show("slow");
      $("#intramural_block").hide("slow");
      $(this).toggleClass("active");
      $("#intramural").removeClass("active");
    }
    return false;
  });
  $("#11Б").click(function () {
    if ($("#11Б_block").is(":hidden")) {
      $("#11Б_block").show("slow");
      $("#11Г_block").hide("slow");
      $("#shedule_calls_block").hide("slow");
      $(this).toggleClass("active");
      $("#11Г").removeClass("active");
      $("#shedule_calls").removeClass("active");
    }
    return false;
  });
  $("#11Г").click(function () {
    if ($("#11Г_block").is(":hidden")) {
      $("#11Г_block").show("slow");
      $("#11Б_block").hide("slow");
      $("#shedule_calls_block").hide("slow");
      $(this).toggleClass("active");
      $("#11Б").removeClass("active");
      $("#shedule_calls").removeClass("active");
    }
    return false;
  });
  $("#shedule_calls").click(function () {
    if ($("#shedule_calls_block").is(":hidden")) {
      $("#shedule_calls_block").show("slow");
      $("#11Б_block").hide("slow");
      $("#11Г_block").hide("slow");
      $(this).toggleClass("active");
      $("#11Г").removeClass("active");
      $("#11Б").removeClass("active");
    }
    return false;
  });
  $("#11Б_удал").click(function () {
    if ($("#11Б_block_удал").is(":hidden")) {
      $("#11Б_block_удал").show("slow");
      $("#11Г_block_удал").hide("slow");
      $("#shedule_calls_block_удал").hide("slow");
      $(this).toggleClass("active");
      $("#11Г_удал").removeClass("active");
      $("#shedule_calls_удал").removeClass("active");
    }
    return false;
  });
  $("#11Г_удал").click(function () {
    if ($("#11Г_block_удал").is(":hidden")) {
      $("#11Г_block_удал").show("slow");
      $("#11Б_block_удал").hide("slow");
      $("#shedule_calls_block_удал").hide("slow");
      $(this).toggleClass("active");
      $("#11Б_удал").removeClass("active");
      $("#shedule_calls_удал").removeClass("active");
    }
    return false;
  });
  $("#shedule_calls_удал").click(function () {
    if ($("#shedule_calls_block_удал").is(":hidden")) {
      $("#shedule_calls_block_удал").show("slow");
      $("#11Б_block_удал").hide("slow");
      $("#11Г_block_удал").hide("slow");
      $(this).toggleClass("active");
      $("#11Г_удал").removeClass("active");
      $("#11Б_удал").removeClass("active");
    }
    return false;
  });

});
