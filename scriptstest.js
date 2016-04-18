$(document).ready(function() {

  // Keep score
  var counter = 0,
      score = 0,
      type = '';

  var listOfQuotes = [  // All quiz data. Variable in object form.
    {
      quote: "You're disgusting",
      answer: "donald"
    },

    {
      quote: "The beauty of me is that I'm very rich",
      answer: "donald"
    },

    {
      quote: "You're a pimple on society's ass and you'll never amount to anything.",
      answer: "bender"
    },

    {
      quote: "I have never seen a thin person drinking Diet Coke",
      answer: "donald"
    },
    {
      quote: "I never mean to hurt anyone or help anyone",
      answer: "bender"
    },

    {
      quote: "I say the whole world must learn of our peaceful ways...by force.",
      answer: "bender"
    },
    {
      quote: "My IQ is one of the highest and you all know it. Please don't feel stupid or insecure. It's not your fault.",
      answer: "donald"
    },

    {
      quote: "I'm back, baby.",
      answer: "bender"
    },
    {
      quote: "Good people don't go into government",
      answer: "donald"
    },

    {
      quote: "Game's over losers! I have all the money!",
      answer: "bender"
    },

    {
      quote: "That is one crazy, uncircumcised man.",
      answer: "bender"
    },
    {
      quote: "The concept of global warming was created by and for the Chinese in order to make US manufacturing non-competitive.",
      answer: "donald"
    },
    {
      quote: "I don't get along with rich people.",
      answer: "donald"
    },
    {
      quote: "Tiny children are not horses. One vaccine at a time over time.",
      answer: "donald"
    },
    {
      quote: "Get lost! I'd tell you don't quit your day job, but you're awful at that too.",
      answer: "bender"
    },
    {
      quote: "I will build a great wall",
      answer: "donald"
    },
    {
      quote: "I don't recall ever fighting Godzilla, but that is so what I would have done.",
      answer: "bender"
    },
    {
      quote: "There's nobody bigger or better at the military than I am.",
      answer: "donald"
    },
    {
      quote: "I support and oppose many things, but not strongly enough to pick up a pen",
      answer: "bender"
    },
    {
      quote: "All I know is what's on the internet.",
      answer: "donald"
    }



  ];
  // assign dom to variables

  var $quote = $('.quote'),
      $generate = $('.generate'),
      $result = $('.results'),
      $score = $('.score'),
      $thanks = $('.thanks');

  var trumpQuiz = {}; // assign quiz as object. Initial state of the quiz.
  // Begins by showing the first quote in the array above.
  // Hides the next button, the results and the score initially.

  trumpQuiz.init = function() {
    var selection = listOfQuotes[counter];
    type = selection["answer"];
    $quote.html(selection["quote"]);
    $generate.hide();
    $result.hide();
    $score.hide();
    $thanks.hide();
  };

  trumpQuiz.init();

  // move through quiz
  trumpQuiz.generate = function() {

    // show next question if there are still quotes remaining
    if (counter < listOfQuotes.length) {
      var selection = listOfQuotes[counter];
      $quote.html(selection.quote);
      type = selection.answer;

      $result.hide();
      $score.hide();
      $quote.show();


    // When there are no more questions, generates a message that reminds the user to vote.
    // Hides the quote.
    } else {
      $thanks.show();
    }

    $generate.hide();
  };

// Event handler that determines if user was correct.
// Shows result and score and hides the quote after the user selects it.
  $('.choice').click(function(e) {
    var fullAnswer = '';
    var chosenAnswer = e.target.id;
    $result.show();
    $score.show();
    $quote.hide();


    // Give full sentence answer value to user after answering a question.
    if (type == "donald") {
      fullAnswer = "The Donald";
    } else {
      fullAnswer = "Bender";
    }

    // Let's the user know if they were right or wrong. Adds on a point to the counter
    // Displays the full result sentence (string) including the answer.
    //Shows the current counter and score.
    if (chosenAnswer == type) {
      $result.html ("Good job, patriot. It's " + fullAnswer);
      score++;
    } else {
      $result.html ("You are a disgrace to your nation. It's " + fullAnswer);
    }
    counter++;
    $score.html("You're " + score + " for " + counter + ".");
    $generate.show();

  });


  // Event handler to generate the quiz. 
  $generate.on('click', function() {
    trumpQuiz.generate();
  });

});
