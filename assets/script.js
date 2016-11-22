var quotes = [
  {
    quote: "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
    author: "Stephen Hawking"
  }, 
  {
    quote: "We need to find God, and he cannot be found in noise and restlessness. God is the friend of silence. See how nature - trees, flowers, grass- grows in silence; see the stars, the moon and the sun, how they move in silence... We need silence to be able to touch souls.",
    author: "Mother Teresa"
  },
  {
    quote: "We are all in the gutter, but some of us are looking at the stars.",
    author: "Oscar Wilde"
  },
  {
    quote: "We are all of us stars, and we deserve to twinkle.",
    author: "Marilyn Monroe"
  }, 
  {
    quote: "Of all things visible, the highest is the heaven of the fixed stars.",
    author: "Nicolaus Copernicus"
  },
  {
    quote: "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
    author: "Harriet Tubman"
  },
  {
    quote: "You can search throughout the entire universe for someone who is more deserving of your love and affection than you are yourself, and that person is not to be found anywhere. You yourself, as much as anybody in the entire universe deserve your love and affection.",
    author: "Buddha"
  },
  {
    quote: "The clearest way into the Universe is through a forest wilderness",
    author: "John Muir"
  },
  {
    quote: "If the whole universe has no meaning, we should never have found out that it has no meaning: just as, if there were no light in the universe and therefore no creatures with eyes, we should never know it was dark. Dark would be without meaning.",
    author: "C. S. Lewis"
  },
  {
    quote: "Who are we? We find that we live on an insignificant planet of a humdrum star lost in a galaxy tucked away in some forgotten corner of a universe in which there are far more galaxies than people.",
    author: "Carl Sagan"
  }
];

var currentInd;
changeStars();
changeQuote();

function changeQuote() {
  var randIndex = Math.floor(Math.random() * (quotes.length));
  $("#quote").html('" '+quotes[randIndex].quote+ ' "');
  $("#author").html("- "+quotes[randIndex].author);
  setTimeout(changeQuote, 6000);
}

function changeStars() {
  var canvas = document.createElement("canvas");
  var stars = canvas.getContext('2d');
  var horizontal=0;
  var vertical=0;
  canvas.width = 1000;
  canvas.height = 1000;
  for (horizontal = 0; horizontal < canvas.width; horizontal++) {
    for (vertical = 0; vertical < canvas.height; vertical++) {
      var starpotential = Math.floor(Math.random() * 100000);
      var opacity = Math.random();
      if (starpotential > 99950) {
          stars.fillStyle = "rgba(255, 255, 255, "+opacity+")";
          stars.fillRect(horizontal, vertical, 1, 1);
      }
      else if(starpotential <5) {
          stars.fillStyle = "rgba(255, 255, 0, "+opacity+")";
          stars.fillRect(horizontal, vertical, 1, 1);
      }
    }
  }
  $("body").css('background-image', "url("+canvas.toDataURL('image/png') +")");
  setTimeout(changeStars, 300);
}