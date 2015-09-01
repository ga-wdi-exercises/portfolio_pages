$("document").ready(function() {
  $(".homeButton").on("click", function() {
    $(".about").css({"display": "none"});
    $(".music").css({"display": "none"});
    $(".contact").css({"display": "none"});
    $(".merch").css({"display": "none"});
    $(".mellish_practice").css({"display": "block"});
  })
  $(".musicButton").on("click", function() {
    $(".mellish_practice").css({"display": "none"});
    $(".about").css({"display": "none"});
    $(".contact").css({"display": "none"});
    $(".merch").css({"display": "none"});
    $(".music").css({"display": "block"});
  })
  $(".aboutButton").on("click", function() {
    $(".mellish_practice").css({"display": "none"});
    $(".music").css({"display": "none"});
    $(".contact").css({"display": "none"});
    $(".merch").css({"display": "none"});
    $(".about").css({"display": "block"});
  })
  $(".contactButton").on("click", function() {
    $(".mellish_practice").css({"display": "none"});
    $(".music").css({"display": "none"});
    $(".about").css({"display": "none"});
    $(".merch").css({"display": "none"});
    $(".contact").css({"display": "block"});
  })
  $(".merchButton").on("click", function() {
    $(".mellish_practice").css({"display": "none"});
    $(".music").css({"display": "none"});
    $(".about").css({"display": "none"});
    $(".contact").css({"display": "none"});
    $(".merch").css({"display": "block"});
  })
  $(".amazonButton").on("click", function() {
    window.location.href="http://www.amazon.com/Mellish-Country-Ep/dp/B00F1J6AZE/ref=sr_1_1?s=music&ie=UTF8&qid=1440903209&sr=1-1&keywords=the+mellish";
  })
  $(".bandcampButton").on("click", function() {
    window.location.href="http://www.themellish.bandcamp.com";
  })
  $(".itunesButton").on("click", function() {
    window.location.href="https://itunes.apple.com/us/artist/the-mellish/id702913224";
  })
  $(".soundcloudButton").on("click", function() {
    window.location.href="http://soundcloud.com/themellish";
  })
  $(".spotifyButton").on("click", function() {
    window.location.href="https://play.spotify.com/artist/4SJRKt6voR9fyzfPwGQHUY?play=true&utm_source=open.spotify.com&utm_medium=open";
  })
  $(".facebookButton").on("click", function() {
    window.location.href="http://facebook.com/TheMellish";
  })
  $(".instagramButton").on("click", function() {
    window.location.href="http://instagram.com/themellishofficial";
  })
  $(".twitterButton").on("click", function() {
    window.location.href="http://twitter.com/mellishtweets";
  })
})
