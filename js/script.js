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
					      <div class="col-md-10 col-12 mb-3 mt-3 fade-in">
						    <div class="card card-1">
						      <div class="card-body">
						        <h2 class="font-weight-bold awards-h2">${film.Awards}</h2>
						        <h5 class="awards-h5">Awards</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-md-5 col-sm-6 col-12 mb-3 fade-in">
						    <div class="card card-2">
						      <div class="card-body">
						        <h2 class="font-weight-bold box-office-h2">${film.BoxOffice}</h2>
						        <h5 class="box-office-h5">Box Office</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-md-5 col-sm-6 col-12 mb-3 fade-in">
						    <div class="card card-3">
						      <div class="card-body">
						        <h2 class="font-weight-bold metascore-h2">${film.Metascore}</h2>
						        <h5 class="metascore-h5">Metascore</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-md-5 col-sm-6 col-12 mb-3 fade-in">
						    <div class="card card-4">
						      <div class="card-body">
						        <h2 class="font-weight-bold rating-h2">${film.imdbRating}</h2>
						        <h5 class="rating-h5">IMDb Rating</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-md-5 col-sm-6 col-12 mb-3 fade-in">
						    <div class="card card-5">
						      <div class="card-body">
						        <h2 class="font-weight-bold votes-h2">${film.imdbVotes}</h2>
						        <h5 class="votes-h5">IMDb Votes</h5>
						      </div>
						    </div>
						  </div>
						  <div class="col-md-10 col-12 mb-3 fade-in">
						    <div class="card card-6">
						      <div class="card-body">
						        <h2 class="font-weight-bold short-review-h2">${filmId[1]}</h2>
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
	let random = Math.floor(Math.random() * 45);
	let film = [];

	if( random === 0 ) film = ['tt9000302', '"One of the best Indonesian psychological horror movie."'];
	if( random === 1 ) film = ['tt5052448', '"I will always love great thriller-mystery film, and this is one of them."'];
	if( random === 2 ) film = ['tt1727824', '"As a huge fan of the band Queen, I watched this film on theater 3 times."'];
	if( random === 3 ) film = ['tt6751668', '"The best work from Bong Joon-Ho, very well-deserved Oscar Best Picture."'];
	if( random === 4 ) film = ['tt7286456', '"Joaquin Phoenix totally deserved an oscar for his role as Joker."'];
	if( random === 5 ) film = ['tt8579674', '"One continuous shot with a beautiful cinematography, 1917 is definitely one of my favorite world war film."'];
	if( random === 6 ) film = ['tt5753856', '"DARK is the GREATEST series on Netflix. Period."'];
	if( random === 7 ) film = ['tt1899353', '"No other action films better than The Raid duology, so far."'];
	if( random === 8 ) film = ['tt2265171', '"No other action films better than The Raid duology, so far."'];
	if( random === 9 ) film = ['tt4911656', '"Realistic, romantic, and terrific. My most favorite work from Joko Anwar."'];
	if( random === 10 ) film = ['tt1392214', '"One of the best thriller-mystery film I have ever seen, until now."'];
	if( random === 11 ) film = ['tt4574334', '"One of my favorite Netflix show. 80s era is the best."'];
	if( random === 12 ) film = ['tt12361974', '"ZSJL is more than just a comicbook film, it is a masterpiece of cinema."'];
	if( random === 13 ) film = ['tt2085059', '"Watch the 1st episode of Black Mirror and you\'re gonna see how amazing this show is."'];
	if( random === 14 ) film = ['tt0088763', '"A very entertaining time travel movie, never gets old."'];
	if( random === 15 ) film = ['tt0120338', '"It feels like you\'re in Titanic when watching this, beautiful and terrifying."'];
	if( random === 16 ) film = ['tt2015381', '"The film that made me love MCU even more."'];
	if( random === 17 ) film = ['tt2119532', '"This film proved that Andrew Garfield is an amazing actor."'];
	if( random === 18 ) film = ['tt4154756', '"The hype on this film is beyond infinity."'];
	if( random === 19 ) film = ['tt4154796', '"Felt goosebumps, nostalgia, and emotional watching this."'];
	if( random === 20 ) film = ['tt3896198', '"One of the best Marvel films."'];
	if( random === 21 ) film = ['tt0110912', '"Jules will always be my favorite character in cinema history!"'];
	if( random === 22 ) film = ['tt7221388', '"This show is badass!"'];
	if( random === 23 ) film = ['tt0111161', '"Rewatching this whenever I feel down."'];
	if( random === 24 ) film = ['tt1457767', '"James Wan\'s horror films will always be my favorite."'];
	if( random === 25 ) film = ['tt6763664', '"One of the best horror show I\'ve ever seen."'];
	if( random === 26 ) film = ['tt1190634', '"Bored of superhero \'save the world\' kind of film? This show is what you need!"'];
	if( random === 27 ) film = ['tt0264464', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 28 ) film = ['tt0137523', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 29 ) film = ['tt2861424', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 30 ) film = ['tt0353969', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 31 ) film = ['tt0095327', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 32 ) film = ['tt3331846', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 33 ) film = ['tt8946378', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 34 ) film = ['tt0948470', '"From the bottom of my heart I would say this is the best Spider-Man. The suit, actors, theme, and more."'];
	if( random === 35 ) film = ['tt0454876', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 36 ) film = ['tt2103281', '"The best one from Planet of the Apes trilogy."'];
	if( random === 37 ) film = ['tt2380307', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 38 ) film = ['tt1232829', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 39 ) film = ['tt2294449', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 40 ) film = ['tt0109830', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 41 ) film = ['tt0107048', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 42 ) film = ['tt0099653', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 43 ) film = ['tt0118571', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 44 ) film = ['tt0103064', '<span style="color: red;font-style: italic;">no review added yet</span>'];
	if( random === 45 ) film = ['tt0499549', '<span style="color: red;font-style: italic;">no review added yet</span>'];

	return film;
}
