//https://www.omdbapi.com/?apikey=8c0de454

$('.input-search').on('keyup', function(){
    $.ajax({
        url: "https://www.omdbapi.com/?apikey=8c0de454&s="+$(this).val(),
        success: function (response) {
          const movie = response.Search;
          let cards = ` `;
          movie.forEach((m) => {
            cards += `  <div class="col-md-4">
                          <div class="card" style="width: 18rem">
                              <img src="${m.Poster}" class="card-img-top" >
                              <div class="card-body">
                              <h5 class="card-title">${m.Title}</h5>
                              <p class="card-subtitle text-muted mb-2">${m.Year}</p>
                              <a href="#" class="btn btn-primary modal-detail-button"   data-bs-toggle="modal"
            data-bs-target="#modalViewDetail" data-imdbid="${m.imdbID}">View Detail</a>
                              </div>
                          </div>
                        </div>`;
          });
          $(".movie-container").html(cards);
      
          $('.modal-detail-button').on('click', function(){
            
              $.ajax({  
                  url: "https://www.omdbapi.com/?apikey=8c0de454&i="+$(this).data('imdbid'),
                  success: function (result) {
                      const modal = `
                  <div class="container-fluid">
                      <div class="row">
                          <div class="col-md-3">
                              <img src="${result.Poster}" class="img-fluid" alt="">
                          </div>
                          <div class="col-md">
                              <ul class="list-group">
                                  <li class="list-group-item">
                                      <h4>${result.Title}</h4>
                                  </li>
                                  <li class="list-group-item">
                                      <strong>Director : </strong>${result.Director}
                                  </li>
                                  <li class="list-group-item"><Strong>Genre   : </Strong>${result.Genre} </li>
                                  <li class="list-group-item"><Strong>Actors  : </Strong>${result.Actors}</li>
                                  <li class="list-group-item"><Strong>Writer  : </Strong>${result.Writer}</li>
                                  <li class="list-group-item"><strong>Plot    : </strong><br>${result.Plot}</li>
                                </ul>
                          </div>
                      </div>
                  </div>`
      
                  $('.modal-body').html(modal);
                  }
              });
          })
      
        },
      
        error: (e) => {
          console.log(e.responseText);
        },
      });
})


