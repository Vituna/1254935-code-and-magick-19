'use strict';
(function () {

  var HIDDEN = 'hidden';

  var dialogHandler = document.querySelector('.upload');
  var setupDialogElement = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setupDialogElement.querySelector('.setup-close');

  var openPopup = function () {
    setupDialogElement.classList.remove(HIDDEN);
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupDialogElement.classList.add(HIDDEN);
    document.removeEventListener('keydown', onPopupEscPress);
    setupDialogElement.removeAttribute('style');
  };

  setupOpen.addEventListener('click', openPopup);

  setupClose.addEventListener('click', closePopup);


  var onPopupEscPress = function (evt) {
    window.util.onPopupEsc(evt, closePopup);
  };

  var openEnter = function (evt) {
    window.util.openEnter(evt, openPopup);
  };

  var closeEnter = function (evt) {
    window.util.openEnter(evt, closePopup);
  };

  setupOpen.addEventListener('keydown', openEnter);

  setupClose.addEventListener('keydown', closeEnter);


  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupDialogElement.style.top = (setupDialogElement.offsetTop - shift.y) + 'px';
      setupDialogElement.style.left = (setupDialogElement.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }

    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


})();
