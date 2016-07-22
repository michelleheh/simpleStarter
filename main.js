$( document ).ready(function() {
  // click handler
  $('.btn').on('click', function(){

    var searchWords = $('#input').val().replace('/\s/', '+');
    console.log('searchWords', searchWords);
    var url = `http://api.giphy.com/v1/gifs/search?q=${searchWords}&api_key=dc6zaTOxFJmzC`

    // get request
    $.get(url, function(data) {
      console.log(data);

      var gifURL = data.data[0].images.downsized_large.url;
      $('#gif').append(`<img src="${gifURL}"/>`);
    });

  });

});