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
var timeY = CLOUD_X - FONT_GAP;
var maxBar = GAP - CLOUD_X - TEXT_WIDTH - GAP;
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

var getFinalText = function (ctx, text, x, y) {
  ctx.fillText(text, x, y);
};

var renderCloud = function (ctx) {
  renderRectangle(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, SHADOW_COLOR);
  renderRectangle(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
};

window.renderStatistics = function (ctx, names, times) {
  var maxTime = getMaxElement(times);
  var getRandomNum = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  renderCloud(ctx);

  ctx.fillStyle = TEXT_COLOR;
  ctx.font = FONT_SIZE + TEXT_STYLE;
  getFinalText(ctx, TEXT_FIRST, TEXT_X, TEXT_Y);
  getFinalText(ctx, TEXT_SECOND, TEXT_X, TEXT_Y + FONT_SIZE);



  names.forEach(function (player, i) {

    ctx.fillStyle = player === 'Вы' ? COLOR_YOU : 'hsl(230, ' + getRandomNum(10, 100) + '%, 40%)';
    renderRectangle(ctx, CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, BAR_Y, BAR_HEIGHT, (maxBar * times[i]) / maxTime);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(Math.round(times[i]), CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, timeY / times[i] * maxTime);
    ctx.fillText(player, CLOUD_X + TEXT_WIDTH + (CLOUD_X - GAP) * i, CLOUD_HEIGHT - (CLOUD_Y) / 2);
  });


};
