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
    var text = $(element).text();
    var index = text.indexOf('💩');
    if (index !== -1) {
      var newText = text.substr(0, index) + '<canvas class="poo" width="30" height="30"></canvas>' + text.substr(index + 1);
      $(element).html(newText);
    }
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
      context.drawImage(image, 0, 0, 30, 30);
    };
    image.src = '/emoji-crying.png';
  };

  window.Emoji = Emoji;

})(jQuery);
