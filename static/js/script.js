 // JavaScript to trigger the animation when the element is in the viewport
  document.addEventListener("DOMContentLoaded", function () {
    var services = document.querySelectorAll(".service-content");

    function checkInView() {
      services.forEach(function (service) {
        var rect = service.getBoundingClientRect();
        var isInView = (rect.top >= 0 && rect.bottom <= window.innerHeight);

        if (isInView) {
          service.classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    }

    window.addEventListener("scroll", checkInView);
    window.addEventListener("resize", checkInView);
    checkInView();
  });
function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}