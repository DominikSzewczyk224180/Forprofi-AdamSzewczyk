document.addEventListener("DOMContentLoaded", function() {
  // Loader
  var text = "FORPROFI";
  var logo = document.getElementById("loaderLogo");
  if (logo) {
    for (var i = 0; i < text.length; i++) {
      var span = document.createElement("span");
      span.textContent = text[i];
      span.style.animationDelay = (i * 0.08) + "s";
      logo.appendChild(span);
    }
  }
  setTimeout(function() {
    var loader = document.getElementById("loader");
    if (loader) { loader.classList.add("hidden"); }
  }, 2000);

  // Fallback - force hide loader after 4s
  setTimeout(function() {
    var loader = document.getElementById("loader");
    if (loader) { loader.style.display = "none"; }
  }, 4000);

  // Navbar scroll
  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function() {
    if (!navbar) return;
    if (window.pageYOffset > 60) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Hamburger
  var hamburger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobileNav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("active");
      document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "";
    });
  }
  var mLinks = document.querySelectorAll(".mobile-nav a");
  for (var j = 0; j < mLinks.length; j++) {
    mLinks[j].addEventListener("click", function() {
      if (hamburger) { hamburger.classList.remove("active"); }
      if (mobileNav) { mobileNav.classList.remove("active"); }
      document.body.style.overflow = "";
    });
  }

  // Smooth scroll
  var anchors = document.querySelectorAll("a[href^='#']");
  for (var k = 0; k < anchors.length; k++) {
    anchors[k].addEventListener("click", function(e) {
      e.preventDefault();
      var href = this.getAttribute("href");
      var target = document.querySelector(href);
      if (target) {
        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  }

  // Scroll reveal
  var reveals = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(function(entries) {
    for (var m = 0; m < entries.length; m++) {
      if (entries[m].isIntersecting) {
        entries[m].target.classList.add("visible");
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  for (var n = 0; n < reveals.length; n++) {
    observer.observe(reveals[n]);
  }

  // Active nav highlight
  var sections = document.querySelectorAll("[data-nav-section]");
  var navLinks = document.querySelectorAll(".nav-link:not(.nav-cta)");
  window.addEventListener("scroll", function() {
    var current = "";
    for (var p = 0; p < sections.length; p++) {
      if (window.pageYOffset >= sections[p].offsetTop - 140) {
        current = sections[p].getAttribute("id") || "";
      }
    }
    for (var q = 0; q < navLinks.length; q++) {
      navLinks[q].style.opacity = (navLinks[q].getAttribute("href") === "#" + current) ? "1" : "0.7";
    }
  });
});
