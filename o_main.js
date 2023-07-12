const ol = document.querySelector("ol");

const movies = [{
        name: "Elf",
        year: 2003,
        director: "Jon Favreau",
        picture: "https://m.media-amazon.com/images/I/61OD9xhgQ-L.jpg"
    },
    {
        name: "School of Rock",
        year: 2003,
        director: "Richard Linklater",
        picture: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/24/1465832467-school-of-rock-school-of-rock-25392520-1024-768.jpg?resize=1200:*"
    },
    {
        name: "Ratatouille",
        year: 2007,
        director: "Brad Bird",
        picture: "https://m.media-amazon.com/images/I/51bOQKCq1ZL.jpg"
    }
];

const template = movies.map(movie => `
<li>
    <p>Name: ${movie.name}</p>
    <p>Year: ${movie.year}</p>
    <p>Director: ${movie.director}</p>
    <p>Picture:</p>
    <img src="${movie.picture}" width=300>
</li>
`)

ol.innerHTML = template.join('');