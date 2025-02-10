$(function () {
  $("#faqQ1").click(function () {
    $("#faqA1").slideToggle();
    $("#faqA2").slideUp();
    $("#faqA3").slideUp();
    $("#faqA4").slideUp();
  });
  $("#faqQ2").click(function () {
    $("#faqA2").slideToggle();
    $("#faqA1").slideUp();
    $("#faqA3").slideUp();
    $("#faqA4").slideUp();
  });
  $("#faqQ3").click(function () {
    $("#faqA3").slideToggle();
    $("#faqA1").slideUp();
    $("#faqA2").slideUp();
    $("#faqA4").slideUp();
  });
  $("#faqQ4").click(function () {
    $("#faqA4").slideToggle();
    $("#faqA1").slideUp();
    $("#faqA2").slideUp();
    $("#faqA3").slideUp();
  });
  $(".faqQ").dblclick(function () {
    $(".faqA").slideUp();
  });
});
