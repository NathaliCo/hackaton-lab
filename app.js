

const data={
  "series": [
    {
      "Actors": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
      "Awards": "Won 4 Oscars. Another 34 wins & 48 nominations.",
      "BoxOffice": "N/A",
      "Country": "USA",
      "DVD": "21 Sep 1999",
      "Director": "Lana Wachowski, Lilly Wachowski",
      "Genre": "Action, Sci-Fi",
      "Language": "English",
      "Metascore": "73",
      "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Production": "Warner Bros. Pictures",
      "Rated": "R",
      "Ratings": [
        { "Source": "Internet Movie Database",
        "Value": "8.7/10"
        }],
      "Released": "31 Mar 1999",
      "Response": "True",
      "Runtime": "136 min",
      "Title": "The Matrix",
      "Type": "movie",
      "Website": "http://www.whatisthematrix.com",
      "Writer": "Lilly Wachowski, Lana Wachowski",
      "Year": "1999",
      "imdbID": "tt0133093"
    }
  ]
}

let movies = [];
const allMovies= ["tt0133093", "tt0234215", "tt0242653", "tt0120783"];

/*for (let i=0; i< allMovies.length; i++){
  fetch ("./data.json" )
  .then((data) =>{ return data.json();
  }).then((DataAsJSON) => {
    movies[i]=DataAsJSON;
    //Traducción de la data newData
     
  });
}*/
document.querySelector(".screenContainer").style.display = "none";
document.querySelector(".redirectingScreen").style.display="none";
document.querySelector(".list").style.display="none";

console.log(movies);

// document.getElementById("showSearch").style.display="none";
    //Función que imprime en pantalla la imagen e información de la película buscada
  function printShow(){
    //document.getElementById("showSearch").style.display="block";
    document.getElementById("searchScreen").style.display="none";
    document.querySelector(".screenContainer").style.display = "block";
    let tvShow=findTitle (data.series, "The Matrix");
    //printSearchTitle(tvShow);
    displayMovies(tvShow);
  }
  document.querySelector(".searchButton").addEventListener("click", printShow);
 //cierre de fetch

//Función que busca las peliculas por título
function  findTitle (data,condition){  
    const tvShow=data.filter(tvShow => (tvShow.Title== condition));
    return tvShow[0];
  }


//Función para llenar los divs con data
function displayMovies(movie) {
    document.getElementById("movie-picture").src = movie.Poster;
    document.getElementById("movie-title").innerHTML = movie.Title;
    document.getElementById("movie-year").innerHTML = movie.Year;
    document.getElementById("movie-rating").innerHTML = movie.Ratings[0].Value;
    document.getElementById("movie-director").innerHTML = movie.Director;
    document.getElementById("movie-actors").innerHTML = movie.Actors;
}

function redirection () {
  document.querySelector(".redirectingScreen").style.display="block";
  document.getElementById("movieContainer").style.display="none";
 
}

document.getElementById("btn1").addEventListener("click", redirection )

function addList(){
  document.querySelector(".list").style.display="block";
  document.getElementById("movieContainer").style.display="none";
}

document.getElementById("addToList").addEventListener("click", addList);