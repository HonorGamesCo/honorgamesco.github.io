document.addEventListener("DOMContentLoaded", function () {
  var menuBtn = document.querySelector(".mobile-menu-btn");
  var nav = document.querySelector(".site-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var wasActive = item.classList.contains("active");
      faqItems.forEach(function (other) {
        other.classList.remove("active");
      });
      if (!wasActive) {
        item.classList.add("active");
      }
    });
  });
});
