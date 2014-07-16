(function ($) {

  function Emoji() {
    this.replace();
    this.draw();
  }

  Emoji.prototype.replace = function () {
    var self = this;
    $('.emoji').each(function each() {
      self.replaceWith(this);
    });
  };

  Emoji.prototype.replaceWith = function (element) {
    var height = element.offsetHeight;

    var text = $(element).text();
    var newText = text.replace(/💩/g, '<canvas class="poo" width="' + height + '" height="' + height + '"></canvas>');
    $(element).html(newText);
  };

  Emoji.prototype.draw = function () {
    var self = this;
    $('.poo').each(function each() {
      self.drawWith(this);
    });
  };

  Emoji.prototype.drawWith = function (element) {
    var context = element.getContext('2d');
    var image = new Image();
    image.onload = function () {
      context.drawImage(image, 0, 0, element.width, element.height);
    };
    image.src = '/emoji-crying.png';
  };

  window.Emoji = Emoji;

})(jQuery);
