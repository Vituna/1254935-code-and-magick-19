'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var BAR_WIDTH = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;
var shadowColor = 'rgba(0, 0, 0, 0.7)';
var cloudColor = '#fff';
var FONT_SIZE = 16;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, shadowColor);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, cloudColor);

  ctx.fillStyle = '#000';
  ctx.font = FONT_SIZE + 'px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 35);
  ctx.fillText('Список результатов:', 120, 50);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++){
    ctx.fillText(Math.round(times[i]), CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, (CLOUD_X - FONT_GAP) / times[i] * maxTime);
    ctx.fillText(names[i], CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, CLOUD_HEIGHT - (CLOUD_Y) / 2);
    ctx.fillRect(CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, CLOUD_HEIGHT - BAR_HEIGHT, TEXT_WIDTH - GAP, ((GAP - CLOUD_X - TEXT_WIDTH - GAP)* times[i]) / maxTime);

    var getRandomNum = function (min, max) {
      return Math.random() * (max - min) + min;
    };
      if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  }   else {
      ctx.fillStyle = 'hsl(230, ' + getRandomNum(10, 100) + '%, 40%)';
  }
  }

};
