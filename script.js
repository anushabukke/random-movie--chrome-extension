async function fetchData() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a8f5e61c89msh745f5c924098f81p1bd51ejsned941d1ec283",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const response = await fetch(
    "https://imdb-top-100-movies.p.rapidapi.com/",
    options
  );
  const record = await response.json();
  const data = record[Math.floor(Math.random() * record.length)];

  const { title, genre, rating, year, rank, thumbnail } = data;
  document.querySelector(".movies").classList.remove("loading");
  document.querySelector(".thumbnail").src = thumbnail;
  document.querySelector(".title").innerText = title;
  document.querySelector(".genre").innerText = "🎥Genre: " + genre[0];
  document.querySelector(".rating").innerText = "🍿Rating: " + rating;
  document.querySelector(".year").innerText = "🎞️Year: " + data.year;
  document.querySelector(".rank").innerText = "👍IMDb Rank: " + rank;
}

fetchData();
