$(document).ready(function() {
  var chance=0;
  var   match=0;
  var   score=0;
  var app = {
    cards: ['A','A' , 'B', 'B', 'C', 'D', 'C', 'D', 'E', 'E', 'F', 'F','G','G','H','H','I','I'],
     
    play: function() {
      app.shuffle();
    },
    //I am Aman Deep and I have used the object and class approach to construct the game.
    
    shuffle: function() {
      var random = 0;
      var temp = 0;
      for (i = 1; i < app.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = app.cards[i];
        app.cards[i] = app.cards[random];
        app.cards[random] = temp;//Randomizing the array i.e reshuffling the cards.
      }
      app.assignCards();
      //console.log('Shuffled Card Array: ' + app.cards);
    },
    assignCards: function() {
      $('.card').each(function(index) {
        $(this).attr('data-card-value', app.cards[index]);
      });
      app.click();
    },
    click: function() {
      $('.card').on('click', function() {
        $(this).html('<p>' + $(this).data('cardValue') + '</p>').addClass('selected');
        app.check();
      });
    },
    check: function() {
      if ($('.selected').length === 2) {
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).animate({
              opacity: 0
            }).removeClass('unmatched');
           
            score+=20;
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
            chance++;
            score+= -10;
          });
          app.checkWin();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 750);
        }
      }
    },
    checkWin: function() {
      if ($('.unmatched').length === 0) {
        alert('You Won!! ' +'Your score is: '+score +' You took a total of '+chance+' chances.');
      }
    }
  };
  $(".container").hide();
$("footer").hide();
$("#rules").hide();
$(".status").hide();
$("#play").click(function(){
  $("#play").hide(750);
  app.play();
  $(".container").show(750);
  $("footer").show(1000);
  $("#rules").show(1000);
  $(".rules").hide(1000);
  $(".status").show(1000);
  $(".head").css('height', '30%');
});
$("#rules").click(function(){
  $(".container").hide();
  $("footer").hide();
    $("#rules").hide();
    $(".rules").show(2000);
    $("#play").show(2000);

});
  //app.play();
});