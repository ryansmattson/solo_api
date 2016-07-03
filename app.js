$(function(){

$.ajax({
    url: 'http://www.omdbapi.com/?t=the+sandlot&y=&plot=short&r=json',
  }).then(function(data){
    //print to the DOM
    // $('.movie1').append('<h3>Movie 1</h3>');
    $('#movie1').append('<img class="poster" src="' + data.Poster + '" height="375px" width="260px"></img>');
    $('#movie1').append('<ul class="info"></ul>');
    $('#movie1 ul').append('<li class="title">Title: <span class="movie-data">' + data.Title + '</span></li>');
    $('#movie1 ul').append('<li class="year">Year: <span class="movie-data">' + data.Year + '</span></li>');
    $('#movie1 ul').append('<li class="plot">Plot: <span class="movie-data">' + data.Plot + '</span></li>');
  }).catch(function(){
    //give error message
})


$.ajax({
    url: 'http://www.omdbapi.com/?t=Dumb+%26+Dumber&y=1994&plot=short&r=json',
  }).then(function(data){
    //print to the DOM
    // $('.movie2').append('<h3>Movie 2</h3>');
    $('#movie2').append('<img class="poster" src="' + data.Poster + '" height="375px" width="260px"></img>');
    $('#movie2').append('<ul class="info"></ul>');
    $('#movie2 ul').append('<li class="title">Title: <span class="movie-data">' + data.Title + '</span></li>');
    $('#movie2 ul').append('<li class="year">Year: <span class="movie-data">' + data.Year + '</span></li>');
    $('#movie2 ul').append('<li class="plot">Plot: <span class="movie-data">' + data.Plot + '</span></li>');
  }).catch(function(){
    //give error message
})


$.ajax({
    url: 'http://www.omdbapi.com/?t=anchorman&y=2004&plot=short&r=json',
  }).then(function(data){
    //print to the DOM
    $('#movie3').append('<img class="poster" src="' + data.Poster + '" height="375px" width="260px"></img>');
    $('#movie3').append('<ul class="info"></ul>');
    $('#movie3 ul').append('<li class="title">Title: <span class="movie-data">' + data.Title + '</span></li>');
    $('#movie3 ul').append('<li class="year">Year: <span class="movie-data">' + data.Year + '</span></li>');
    $('#movie3 ul').append('<li class="plot">Plot: <span class="movie-data">' + data.Plot + '</span></li>');
  }).catch(function(){
    //give error message
})



$('main').on('click', '.label-info', function(){
  $(this).closest('.menu').find('div').slideToggle();
})


//FINISH GETTING SEARCH BAR AND RESULTS
//FINISH GETTING SEARCH BAR AND RESULTS
//FINISH GETTING SEARCH BAR AND RESULTS
$('form').on('submit', function(event){
  event.preventDefault();
  var tempTitle = $('#movie-title').val();
  var tempYear = $('#movie-year').val();
  var tempURL = 'http://www.omdbapi.com/?t=' + tempTitle + '&y=' + tempYear + '&plot=short&r=json';

  console.log(tempURL);

  // var c = $('#search-by-title-form').serialize();
  //             var d = 'http://www.omdbapi.com/?' + c;
  //             url: '/?' + c,

  $.ajax({
      url: '' + tempURL,
    }).then(function(data){
      //print to the DOM
      $('#searched-movie').empty();
      $('#searched-movie').css('display', 'inherit');
      $('#searched-movie').append('<img class="poster" src="' + data.Poster + '" height="375px" width="260px"></img>');
      $('#searched-movie').append('<ul class="info"></ul>');
      $('#searched-movie ul').append('<li class="title">Title: <span class="movie-data">' + data.Title + '</span></li>');
      $('#searched-movie ul').append('<li class="year">Year: <span class="movie-data">' + data.Year + '</span></li>');
      $('#searched-movie ul').append('<li class="plot">Plot: <span class="movie-data">' + data.Plot + '</span></li>');
    }).catch(function(){
      //give error message
  })

  console.log(tempTitle, tempYear);

})



// var movieArray = [];
//
// $.ajax({
//     url: 'http://www.omdbapi.com/?t=the+sandlot&y=&plot=short&r=json',
//     success: function(data){
//       movieArray.push(data);
//       console.log(movieArray);
//     }
// });
//
// console.log(movieArray);



//END
})
