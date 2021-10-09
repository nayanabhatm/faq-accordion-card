$(".faq1").click(function () {
  faqOnClick(".faq1");
});

$(".faq2").click(function () {
  faqOnClick(".faq2");
});

$(".faq3").click(function () {
  faqOnClick(".faq3");
});

$(".faq4").click(function () {
  faqOnClick(".faq4");
});

$(".faq5").click(function () {
  faqOnClick(".faq5");
});

function faqOnClick(className) {
  var content = $(className + " .content");
  var label = $(className + " .label");
  if (content.css("display") === "block") {
    label.css("font-weight", "400");
    content.css("display", "none");
  } else {
    label.css("font-weight", "700");
    label.css("color", "var(--very-dark-grayish-blue)");
    content.css("display", "block");
  }

  var accordianIcon = $(className + " .accordian-icon");
  if (accordianIcon.css("transform") === "matrix(1, 0, 0, 1, 0, 0)") {
    accordianIcon.css("transform", "matrix(-1, 0, 0, -1, 0, 0)");
  } else {
    accordianIcon.css("transform", "matrix(1, 0, 0, 1, 0, 0)");
  }
}
