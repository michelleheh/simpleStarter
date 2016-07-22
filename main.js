$( document ).ready(function() {
  // click handler
  $('.btn').on('click', function(){

    var searchWords = $('#input').val().replace('/\s/', '+');
    console.log('searchWords', searchWords);
    var url = `http://api.giphy.com/v1/gifs/search?q=${searchWords}&api_key=dc6zaTOxFJmzC`

    // get request
    $.get(url, function(data) {
      console.log(data);
      $('div#gifs').empty();
      data.data.forEach(function(item) {
        var gifURL = item.images.downsized_large.url;
        var $gif = $("<img>", {src: gifURL, class: "gif"});
        var $gif = $("<div>").append($gif);
        $('div#gifs').append($gif);
      });
    });

  });

});