'use strict';
(function () {
  var MIN_NAME_LENGTH = 2;

  var setup = document.querySelector('.setup');
  var wizardALL = document.querySelector('.setup-wizard-appearance');
  var wizardEyes = wizardALL.querySelector('.wizard-eyes');
  var wizardEyesColor = wizardALL.querySelector('input[name="eyes-color"]');
  var wizardCoat = wizardALL.querySelector('.wizard-coat');
  var wizardCoatColor = wizardALL.querySelector('input[name="coat-color"]');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColor = fireball.querySelector('input[name="fireball-color"]');


  var userNameInput = setup.querySelector('.setup-user-name');

  var inputFieldHints = function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  };

  var nameLength = function (evt) {
    var target = evt.target;

    if (target.value.length < MIN_NAME_LENGTH) {
      target.setCustomValidity('Имя должно состоять минимум из ' + MIN_NAME_LENGTH + '-х символов'
      );
    } else {
      target.setCustomValidity('');
    }
  };

  userNameInput.addEventListener('invalid', inputFieldHints);

  userNameInput.addEventListener('input', nameLength);

  var getNextColor = function (colors, currentColor) {
    var currentColorIndex = colors.indexOf(currentColor);

    return currentColorIndex !== colors.length - 1 ? colors[currentColorIndex + 1] : colors[0];
  };

  var onCoatClick = function () {
    wizardCoatColor.value = getNextColor(window.util.WizardConfig.COAT_COLOR, wizardCoatColor.value);
    wizardCoat.style.fill = wizardCoatColor.value;
  };

  var onEyesClick = function () {
    wizardEyesColor.value = getNextColor(window.util.WizardConfig.EYES_COLOR, wizardEyesColor.value);
    wizardEyes.style.fill = wizardEyesColor.value;
  };

  var onFireballClick = function () {
    fireballColor.value = getNextColor(window.util.WizardConfig.FIREBALL_COLOR, fireballColor.value);
    fireball.style.background = fireballColor.value;
  };

  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);

})();
