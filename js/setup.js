
'use strict';
var wizardsStyles = {
  WIZARD_NAMES: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  WIZARD_SURNAMES: ['да Марья', 'Верон', 'Мираббелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  WIZARD_QUANTITY: 4,
  coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColor: ['black', 'red', 'blue', 'yellow', 'green']
};

var getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var conclusionWizards = function (wizards) {
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizardTemplate, wizards[i]));
  }
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

var wizardsStirs = function () {
  var wizards = [];

  for (var i = 0; i < wizardsStyles.WIZARD_QUANTITY; i++) {
    wizards[i] = {
      name: getRandomItem(wizardsStyles.WIZARD_NAMES) + ' ' + getRandomItem(wizardsStyles.WIZARD_SURNAMES),
      coatColor: getRandomItem(wizardsStyles.coatColor),
      eyesColor: getRandomItem(wizardsStyles.eyesColor)
    };
  }
  return wizards;
};

var renderWizard = function (similarWizardTemplate, wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

conclusionWizards(wizardsStirs());

document.querySelector('.setup-similar').classList.remove('hidden');
