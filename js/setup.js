
'use strict';
var WizardConfig = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мираббелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  WIZARD_QUANTITY: 4,
  COAT_COLOR: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLOR: ['black', 'red', 'blue', 'yellow', 'green']
};
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');

var getRandomItem = function (min, max, arr) {

  return arr[Math.floor(Math.random() * (max - min) + min)];
};

var conclusionWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
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

userDialog.classList.remove('hidden');

conclusionWizards(wizardsStirs());

document.querySelector('.setup-similar').classList.remove('hidden');
