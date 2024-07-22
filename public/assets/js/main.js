$(document).ready(function () {
  
  const toggleClass = (element, addClass, removeClass) => {
      element.addClass(addClass).removeClass(removeClass);
  };


  const toggleLayout = (isMobileOrTablet) => {
      const accordionBodies = $(".accordion-body");
      if (isMobileOrTablet) {
          accordionBodies.addClass("flex-column");
      } else {
          accordionBodies.removeClass("flex-column");
      }
  };

  const toggleFontSizes = (isMobile) => {
      const mainHeadings = $("h1.ftsz-50.pb-2, h1.ftsz-24.pb-2");
      const paragraphs = $("p.ftsz-20, p.ftz-15");

      if (isMobile) {
          mainHeadings.each(function () {
              toggleClass($(this), "ftsz-24", "ftsz-50");
          });
          paragraphs.each(function () {
              toggleClass($(this), "ftz-15", "ftsz-20");
          });
      } else {
          mainHeadings.each(function () {
              toggleClass($(this), "ftsz-50", "ftsz-24");
          });
          paragraphs.each(function () {
              toggleClass($(this), "ftsz-20", "ftz-15");
          });
      }
  };

  const checkWindowSize = () => {
      const width = $(window).width();
      const isMobile = width <= 767;
      const isTablet = width > 767 && width <= 992;
      const isDesktop = width > 992;

      toggleFontSizes(isMobile);

      if (isMobile) {
          $('.desktop-navigation').addClass('d-none');
          $('.mobile-navigation').removeClass('d-none');
          $('.schedule').addClass('text-center');
          toggleLayout(true); 
      } else if (isTablet) {
          $('.desktop-navigation').addClass('d-none');
          $('.mobile-navigation').removeClass('d-none');
          $('.schedule').addClass('text-center');
          toggleLayout(true); 
      } else {
          $('.desktop-navigation').removeClass('d-none');
          $('.mobile-navigation').addClass('d-none');
          $('.schedule').removeClass('text-center');
          toggleLayout(false);
      }
  };

  $(document).ready(checkWindowSize);
  $(window).resize(checkWindowSize);

  const toggleMenu = (showMenu) => {
      const mobileNav = $(".mobile-nav");
      const openBtn = $(".btn_open");
      const closeBtn = $(".btn_close");

      if (showMenu) {
          toggleClass(mobileNav, "d-block", "d-none");
          toggleClass(openBtn, "d-none", "d-block");
          toggleClass(closeBtn, "d-block", "d-none");
      } else {
          toggleClass(mobileNav, "d-none", "d-block");
          toggleClass(openBtn, "d-block", "d-none");
          toggleClass(closeBtn, "d-none", "d-block");
      }
  };

  $(".btn_open").on("click", () => toggleMenu(true));
  $(".btn_close").on("click", () => toggleMenu(false));
});
