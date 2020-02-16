'use strict';

window.making = (function () {

  var HIDDEN = 'hidden';

  var setup = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = setup.querySelector('.setup-similar-list');


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

    for (var i = 0; i < window.util.WizardConfig.WIZARD_QUANTITY; i++) {
      wizards.push({
        name: window.util.getRandomItem(1, 8, window.util.WizardConfig.WIZARD_NAMES) + ' ' + window.util.getRandomItem(1, 8, window.util.WizardConfig.WIZARD_SURNAMES),
        COAT_COLOR: window.util.getRandomItem(1, 6, window.util.WizardConfig.COAT_COLOR),
        EYES_COLOR: window.util.getRandomItem(1, 5, window.util.WizardConfig.EYES_COLOR)
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


})();
