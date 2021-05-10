$('.click-here').on('click', function() {
	$('#film-recommendation').empty()

	let filmId = randomFilm();

	$.ajax( {
		url: 'https://www.omdbapi.com',
		type: 'get',
		dataType: 'json',
		data: {
			apikey: 'e0617a12',
			i: filmId[0]
		},
		success: function(film) {
			if( film.Response === "True" ) {
				$('#film-recommendation').html(`
						  <div class="col-lg-12 fade-in-faster mb-4">
						  	<h2 class="text-center">Here is a film you should watch tonight..</h2>
						  </div>
					      <div class="col-lg-4 text-center mb-3 fade-in">
					      	<img src="${film.Poster}" class="img-fluid">
					      </div>
					      <div class="col-lg-5 fade-in">
							<h1 class="font-weight-bold film-title">${film.Title}</h1>
							<h6 class="text-muted film-year">${film.Year}</h6>
							<h6 class="text-muted film-genre">${film.Genre}</h6>
							<hr>
							<p>${film.Plot}</p>
							<hr>
							<p>Director: ${film.Director}</p>
							<p>Writer: ${film.Writer}</p>
							<p>Actors: ${film.Actors}</p>
					      </div>
					      <div class="col-lg-10 col-12 mb-3 mt-3 fade-in">
						    <div class="card card-1">
						      <div class="card-body">
						        <h2 class="font-weight-bold awards-h2">${film.Awards}</h2>
						        <h5 class="awards-h5">Awards</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-lg-5 col-12 mb-3 fade-in">
						    <div class="card card-2">
						      <div class="card-body">
						        <h2 class="font-weight-bold box-office-h2">${film.BoxOffice}</h2>
						        <h5 class="box-office-h5">Box Office</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-lg-5 col-12 mb-3 fade-in">
						    <div class="card card-3">
						      <div class="card-body">
						        <h2 class="font-weight-bold metascore-h2">${film.Metascore}</h2>
						        <h5 class="metascore-h5">Metascore</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-lg-5 col-12 mb-3 fade-in">
						    <div class="card card-4">
						      <div class="card-body">
						        <h2 class="font-weight-bold rating-h2">${film.imdbRating}</h2>
						        <h5 class="rating-h5">IMDb Rating</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-lg-5 col-12 mb-3 fade-in">
						    <div class="card card-5">
						      <div class="card-body">
						        <h2 class="font-weight-bold votes-h2">${film.imdbVotes}</h2>
						        <h5 class="votes-h5">IMDb Votes</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-lg-10 col-12 mb-3 fade-in">
						    <div class="card card-6">
						      <div class="card-body">
						        <h2 class="font-weight-bold short-review-h2">"${filmId[1]}"</h2>
						        <h5 class="short-review-h5">My Short Review</h5>
						      </div>
						    </div>
						  </div>
				`)
			}
		}
	})

})

function randomFilm() {
	let random = Math.floor(Math.random() * 6);
	let film = [];

	if( random === 0 ) film = ['tt9000302', 'One of the best Indonesian psychological horror movie.'];
	if( random === 1 ) film = ['tt5052448', 'I will always love great thriller-mystery film, and this is one of them.'];
	if( random === 2 ) film = ['tt1727824', 'As a huge fan of the band Queen, I watched this film on theater 3 times.'];
	if( random === 3 ) film = ['tt6751668', 'The best work from Bong Joon-Ho, very well-deserved Oscar Best Picture.'];
	if( random === 4 ) film = ['tt7286456', 'Joaquin Phoenix totally deserved an oscar for his role as Joker.'];
	if( random === 5 ) film = ['tt8579674', 'One continuous shot with a very beautiful cinematography, 1917 is definitely one of my favorite world war film.'];

	return film;
}

// 0 = Impetigore (2019)
// 1 = Get Out (2017)
// 2 = Bohemian Rhapsody (2018)
// 3 = Parasite (2019)
// 4 = Joker (2019)
// 5 = 1917 (2019)