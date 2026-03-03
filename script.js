document.addEventListener("DOMContentLoaded", function() {
  // Navbar scroll
  var n = document.getElementById("navbar");
  if (n) {
    window.addEventListener("scroll", function() {
      n.classList.toggle("scrolled", window.pageYOffset > 60);
    });
  }

  // Hamburger
  var h = document.getElementById("hamburger");
  var m = document.getElementById("mobileNav");
  if (h && m) {
    h.addEventListener("click", function() {
      h.classList.toggle("active");
      m.classList.toggle("active");
      document.body.style.overflow = m.classList.contains("active") ? "hidden" : "";
    });
    var ml = document.querySelectorAll(".mobile-nav a");
    for (var j = 0; j < ml.length; j++) {
      ml[j].addEventListener("click", function() {
        h.classList.remove("active");
        m.classList.remove("active");
        document.body.style.overflow = "";
      });
    }
  }

  // Smooth scroll
  var anchors = document.querySelectorAll("a[href^='#']");
  for (var k = 0; k < anchors.length; k++) {
    anchors[k].addEventListener("click", function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: "smooth"
        });
      }
    });
  }

  // Scroll reveal - show all elements
  var reveals = document.querySelectorAll(".rv");

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add("v");
          observer.unobserve(entries[i].target);
        }
      }
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

    for (var q = 0; q < reveals.length; q++) {
      observer.observe(reveals[q]);
    }
  } else {
    // Fallback - just show everything
    for (var r = 0; r < reveals.length; r++) {
      reveals[r].classList.add("v");
    }
  }

  // Safety net: after 3 seconds, show any still-hidden elements
  setTimeout(function() {
    var hidden = document.querySelectorAll(".rv:not(.v)");
    for (var s = 0; s < hidden.length; s++) {
      hidden[s].classList.add("v");
    }
  }, 3000);
});
