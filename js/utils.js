'use strict';

window.util = (function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  return {
    WizardConfig: {
      WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
      WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мираббелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
      WIZARD_QUANTITY: 4,
      COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
      EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
      FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    },

    onPopupEsc: function (evt, action) {
      if (evt.key === ESC_KEY) {
        action();
      }
    },

    openEnter: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        action();
      }
    },

    closeEnter: function (evt, action) {
      if (evt.key === ENTER_KEY) {
        action();
      }
    },

    getRandomItem: function (min, max, arr) {
      return arr[Math.floor(Math.random() * (max - min) + min)];
    },

  };
})();

