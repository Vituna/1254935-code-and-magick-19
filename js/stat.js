'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 40;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_COLOR = '#fff';
var FONT_SIZE = 16;
var TEXT_X = 120;
var TEXT_Y = 43;
var TEXT_COLOR = '#000';
var TEXT_STYLE = 'PT Mono';
var TEXT_FIRST = 'Ура вы победили!';
var TEXT_SECOND = 'Список результатов:';
var COLOR_YOU = 'rgba(255, 0, 0, 1)';
var TIME_Y = CLOUD_X - FONT_GAP;
var MAX_BAR = GAP - CLOUD_X - TEXT_WIDTH - GAP;
var BAR_Y = 247;

var renderRectangle = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
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

var getFinalText = function (ctx, text, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var renderCloud = function (ctx) {
  renderRectangle(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);
  renderRectangle(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
};

var getRandomNum = function (min, max) {
  return Math.random() * (max - min) + min;
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);

  var renderBars = function (player, i) {
    ctx.fillStyle = player === 'Вы' ? COLOR_YOU : 'hsl(230, ' + getRandomNum(10, 100) + '%, 40%)';
    renderRectangle(ctx, CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, BAR_Y, BAR_HEIGHT, (MAX_BAR * times[i]) / maxTime);

    getFinalText(ctx, Math.round(times[i]), CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, TIME_Y, TEXT_COLOR);
    getFinalText(ctx, player, CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, CLOUD_HEIGHT - (CLOUD_Y) / 2, TEXT_COLOR);
  };

  renderCloud(ctx);

  ctx.font = FONT_SIZE + TEXT_STYLE;
  getFinalText(ctx, TEXT_FIRST, TEXT_X, TEXT_Y, TEXT_COLOR);
  getFinalText(ctx, TEXT_SECOND, TEXT_X, TEXT_Y + FONT_SIZE, TEXT_COLOR);

  names.forEach(renderBars);


};

