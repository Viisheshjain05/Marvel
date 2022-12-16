(function () {
  window.onload = function () {
    var on = 30,
      off = 10,
      duration = 500;
    Haptics.pwm(duration, on, off);
    "use strict";
    var siActive = 'si-active';
    var siRemove = 'si-remove';
    var body = document.querySelector('body');
    var popWrap = document.querySelector('.in');
    var windowClick = document.querySelector('window');
    var leaderBoardCalender = document.querySelector('.si-lb__dropdown');

    // Popup OPEN
    var openBtn = document.querySelector('.si-header__logo');
    if (openBtn) {
      openBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        Haptics.pwm(duration, on, off);
        addClass(popWrap, 'in');
        addClass(body, 'bodyNoScroll');
        removeClass(popWrap, 'out');
      });
    }

    // Popup CLOSE
    var closeBtn = document.querySelectorAll('.si-popup__close');
    if (closeBtn) {
      closeBtn.forEach(function (item) {
        item.addEventListener('click', function () {
          addClass(popWrap, 'out');
          Haptics.pwm(duration, on, off);
          removeClass(popWrap, 'in');
          removeClass(body, 'bodyNoScroll');
        })
      });
    }

    setTimeout(function () {
      Haptics.pwm(duration, on, off);
      $(".si-card__deck").removeClass('si-onLoad');
      $(".si-card__deck").addClass('si-reset');
    }, 2450);

    document.addEventListener("mousemove", parallax);

    leaderBoardCalender.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleClass(this, 'si-active');
      toggleClass(body, 'bodyNoScroll');
    });

    // Haptics.vibrate([400, 200, 1000, 200, 400]);
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
      }, false);
    }

    function parallax(event) {
      this.querySelectorAll(".parallax-mouse").forEach((shift) => {
        const position = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX * position) / 100;
        const y = (window.innerHeight - event.pageY * position) / 100;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    }

    // global functions
    function addClass(eleName, className) {
      return eleName.classList.add(className);
    }

    function removeClass(eleName, className) {
      return eleName.classList.remove(className);
    }

    function toggleClass(eleName, className) {
      return eleName.classList.toggle(className);
    }
  };
})();