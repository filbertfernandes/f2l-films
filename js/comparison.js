// search
function searchMovie(number) {
	$(`.film-detail-${number}`).empty()
	$.ajax({
		url: 'https://www.omdbapi.com',
		type: 'get',
		dataType: 'json',
		data: {
			apikey: 'dca61bcc',
			s: $(`#search-input-${number}`).val()
		},
		success: function(result) {
			if(result.Response == "True") {
				let films = result.Search;
				console.log(number)
				$(`.film-detail-${number}`).removeClass('grid');

				$.each(films, function(i, data) {
					$(`.film-detail-${number}`).append(`
						<div class="card">
			              <ul class="list-group list-group-flush">
			                  <li class="list-group-item result" data-id="${data.imdbID}">
							  	<img src="${data.Poster}" height="50px">
							  	${data.Title} (${data.Year})
							  </li>
			              </ul>
			            </div>	  
					`)
				})

				$(`#search-input-${number}`).val('');

			} else {
				$(`.film-detail-${number}`).html(`
					<li class="list-group-item font-weight-bold" style="color: red;">Film not found.</li>
				`)
			}
		}
	});
}

$('#search-button-1').on('click', function() {
	searchMovie('1');
});
$('#search-input-1').on('keyup', function(e) {
	if( e.keyCode === 13 ) {
		searchMovie('1');
	}
});

$('#search-button-2').on('click', function() {
	searchMovie('2');
});
$('#search-input-2').on('keyup', function(e) {
	if( e.keyCode === 13 ) {
		searchMovie('2');
	}
});


// see detail
function seeDetail(number, id) {
	$.ajax({
		url: 'https://www.omdbapi.com',
		type: 'get',
		dataType: 'json',
		data: {
			apikey: 'dca61bcc',
			i: id
		},
		success: function(film) {
			if( film.Response === "True" ) {
				$(`.film-detail-${number}`).addClass('grid')

				$(`.film-detail-${number}`).html(`
					<div class="image text-center">
			        	<img src="${film.Poster}" class="poster" height="300px">
			        </div>
			        <div class="info">
			            <h4 class="font-weight-bold film-title">${film.Title} (${film.Year})</h4>
			            <p class="text-muted film-genre">${film.Genre}</p>
			            <hr>
			            <p>${film.Plot}</p>
			        </div>
			        <div class="card awards-${number} mb-3 mt-4">
			            <div class="card-body">
			              <h2 class="font-weight-bold awards-h2">${film.Awards}</h2>
			              <h5>Awards</h5>
			            </div>
			        </div>
			        <div class="card box-office-${number} mb-3">
			            <div class="card-body">
			              <h2 class="font-weight-bold box-office-h2">${film.BoxOffice}</h2>
			              <h5>Box Office</h5>
			            </div>
			        </div>
			        <div class="card metascore-${number} mb-3">
			            <div class="card-body">
			              <h2 class="font-weight-bold metascore-h2">${film.Metascore}</h2>
			              <h5>Metascore</h5>
			            </div>
			        </div>
			        <div class="card rating-${number} mb-3">
			            <div class="card-body">
			              <h2 class="font-weight-bold rating-h2">${film.imdbRating}</h2>
			              <h5>IMDb Rating</h5>
			            </div>
			        </div>
			        <div class="card votes-${number} mb-3">
			            <div class="card-body">
			              <h2 class="font-weight-bold votes-h2">${film.imdbVotes}</h2>
			              <h5>IMDb Votes</h5>
			            </div>
			        </div>
				`)

			}
		}
	})
}

$('.film-detail-1').on('click', '.result', function() {
	seeDetail('1', $(this).data('id'));
});

$('.film-detail-2').on('click', '.result', function() {
	seeDetail('2', $(this).data('id'));
});