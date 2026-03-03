document.addEventListener("DOMContentLoaded", function() {
  var loaderText = "FORPROFI";
  var loaderLogo = document.getElementById("loaderLogo");
  if (loaderLogo) {
    for (var i = 0; i < loaderText.length; i++) {
      var span = document.createElement("span");
      span.textContent = loaderText[i];
      span.style.animationDelay = (i * 0.08) + "s";
      loaderLogo.appendChild(span);
    }
  }
  setTimeout(function() {
    var loader = document.getElementById("loader");
    if (loader) loader.classList.add("hidden");
  }, 2000);

  var navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function() {
    if (!navbar) return;
    if (window.pageYOffset > 60) { navbar.classList.add("scrolled"); }
    else { navbar.classList.remove("scrolled"); }
  });

  var hamburger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobileNav");
  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("active");
      mobileNav.classList.toggle("active");
      document.body.style.overflow = mobileNav.classList.contains("active") ? "hidden" : "";
    });
  }
  var mobileLinks = document.querySelectorAll(".mobile-nav a");
  for (var j = 0; j < mobileLinks.length; j++) {
    mobileLinks[j].addEventListener("click", function() {
      if (hamburger) hamburger.classList.remove("active");
      if (mobileNav) mobileNav.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  var anchors = document.querySelectorAll("a[href^='#']");
  for (var k = 0; k < anchors.length; k++) {
    anchors[k].addEventListener("click", function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    });
  }

  var revealEls = document.querySelectorAll(".reveal");
  var revealObs = new IntersectionObserver(function(entries) {
    for (var m = 0; m < entries.length; m++) {
      if (entries[m].isIntersecting) { entries[m].target.classList.add("visible"); }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  for (var n = 0; n < revealEls.length; n++) { revealObs.observe(revealEls[n]); }

  var navSections = document.querySelectorAll("[data-nav-section]");
  var navLinks = document.querySelectorAll(".nav-link:not(.nav-cta)");
  window.addEventListener("scroll", function() {
    var current = "";
    for (var p = 0; p < navSections.length; p++) {
      if (window.pageYOffset >= navSections[p].offsetTop - 140) {
        current = navSections[p].getAttribute("id") || "";
      }
    }
    for (var q = 0; q < navLinks.length; q++) {
      navLinks[q].style.opacity = navLinks[q].getAttribute("href") === "#" + current ? "1" : "0.7";
    }
  });
});
