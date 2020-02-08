
'use strict';
var MIN_NAME_LENGTH = 2;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var HIDDEN = 'hidden';

var WizardConfig = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мираббелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  WIZARD_QUANTITY: 4,
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green'],
  FIREBALL_COLOR: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setup = document.querySelector('.setup');
var similarListElement = setup.querySelector('.setup-similar-list');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardALL = document.querySelector('.setup-wizard-appearance');
var wizardEyes = wizardALL.querySelector('.wizard-eyes');
var wizardEyesColor = wizardALL.querySelector('input[name="eyes-color"]');
var wizardCoat = wizardALL.querySelector('.wizard-coat');
var wizardCoatColor = wizardALL.querySelector('input[name="coat-color"]');
var fireball = document.querySelector('.setup-fireball-wrap');
var fireballColor = fireball.querySelector('input[name="fireball-color"]');

var openPopup = function () {
  setup.classList.toggle(HIDDEN);
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.toggle(HIDDEN);
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);

setupClose.addEventListener('click', closePopup);

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openEnter = function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
};

var closeEnter = function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
};

setupOpen.addEventListener('keydown', openEnter);

setupClose.addEventListener('keydown', closeEnter);

setupOpen.addEventListener('click', openPopup);

setupClose.addEventListener('click', closePopup);

var getRandomItem = function (min, max, arr) {

  return arr[Math.floor(Math.random() * (max - min) + min)];
};

var conclusionWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove(HIDDEN);
};

var wizardsStirs = function () {
  var wizards = [];

  for (var i = 0; i < WizardConfig.WIZARD_QUANTITY; i++) {
    wizards.push({
      name: getRandomItem(1, 8, WizardConfig.WIZARD_NAMES) + ' ' + getRandomItem(1, 8, WizardConfig.WIZARD_SURNAMES),
      COAT_COLOR: getRandomItem(1, 6, WizardConfig.COAT_COLOR),
      EYES_COLOR: getRandomItem(1, 5, WizardConfig.EYES_COLOR)
    });
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.COAT_COLOR;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.EYES_COLOR;

  return wizardElement;
};

conclusionWizards(wizardsStirs());

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
  wizardCoatColor.value = getNextColor(WizardConfig.COAT_COLOR, wizardCoatColor.value);
  wizardCoat.style.fill = wizardCoatColor.value;
};

var onEyesClick = function () {
  wizardEyesColor.value = getNextColor(WizardConfig.EYES_COLOR, wizardEyesColor.value);
  wizardEyes.style.fill = wizardEyesColor.value;
};

var onFireballClick = function () {
  fireballColor.value = getNextColor(WizardConfig.FIREBALL_COLOR, fireballColor.value);
  fireball.style.background = fireballColor.value;
};

wizardCoat.addEventListener('click', onCoatClick);
wizardEyes.addEventListener('click', onEyesClick);
fireball.addEventListener('click', onFireballClick);
