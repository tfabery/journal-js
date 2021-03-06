function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function() {
  var words = this.body.split(' ');
  return words.length;
};

Journal.prototype.letterCount = function(type) {
  var words = this.body.toLowerCase().split(' ');
  var typeCount = [];
  var letters = [];
  words.forEach(function(word) {
    letters = letters.concat(word.split(''));
  });
  letters.forEach(function(letter) {
    if (type === 'vowels' && letter === ('a' || 'e' || 'i' || 'o' || 'u')) {
      typeCount.push(letter);
    }
    else if (type === 'consonants' && letter !== ('a' || 'e' || 'i' || 'o' || 'u')) {
      typeCount.push(letter);
    }
  });
  return typeCount.length;
};

Journal.prototype.getTeaser = function() {
  var firstEight = [];
  var words = this.body.split(' ');
  if (words.length <= 7)  {
    firstEight = words;
  }
  else {
    for (var i = 0; i <= 7; i++) {
      firstEight.push(words[i]);
    }
  }
  return firstEight.join(" ");
};

exports.journalModule = Journal;
