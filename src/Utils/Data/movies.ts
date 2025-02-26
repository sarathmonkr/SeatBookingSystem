export interface MovieType {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    category?: string;
    release_date: string;
    duration: number;
    language: string;
    genre: string[];
    plot_summary: string;
    director: string;
    cast: string[];
    rating: number;
}

export const MoviesRunning: MovieType[] = [
    {
        id: 2,
        title: "The Dark Knight",
        overview: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        category: "Action",
        release_date: "2008-07-18",
        duration: 152,
        language: "English",
        genre: ["Action", "Crime", "Drama"],
        plot_summary: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        rating: 9.0
    },
    {
        id: 3,
        title: "Interstellar",
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        category: "Sci-Fi",
        release_date: "2014-11-07",
        duration: 169,
        language: "English",
        genre: ["Adventure", "Drama", "Sci-Fi"],
        plot_summary: "A group of astronauts travel through a wormhole near Saturn in search of a new home for humanity.",
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        rating: 8.6
    },
    {
        id: 5,
        title: "The Matrix",
        overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        category: "Sci-Fi",
        release_date: "1999-03-31",
        duration: 136,
        language: "English",
        genre: ["Action", "Sci-Fi"],
        plot_summary: "A hacker discovers the reality he lives in is a simulation and joins a rebellion against its controllers.",
        director: "Lana Wachowski, Lilly Wachowski",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        rating: 8.7
    },
    {
        id: 6,
        title: "Fight Club",
        overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        poster_path: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
        category: "Drama",
        release_date: "1999-10-15",
        duration: 139,
        language: "English",
        genre: ["Drama"],
        plot_summary: "Two men form an underground fight club that evolves into something much more.",
        director: "David Fincher",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        rating: 8.8
    },
    {
        id: 8,
        title: "Forrest Gump",
        overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        category: "Drama",
        release_date: "1994-07-06",
        duration: 142,
        language: "English",
        genre: ["Drama", "Romance"],
        plot_summary: "The life story of Forrest Gump, a man with a low IQ who achieves great things in life.",
        director: "Robert Zemeckis",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        rating: 8.8
    },
    {
        id: 9,
        title: "The Shawshank Redemption",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        category: "Drama",
        release_date: "1994-09-23",
        duration: 142,
        language: "English",
        genre: ["Drama"],
        plot_summary: "Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.",
        director: "Frank Darabont",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        rating: 9.3
    },
    {
        id: 10,
        title: "The Godfather",
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        category: "Crime",
        release_date: "1972-03-24",
        duration: 175,
        language: "English",
        genre: ["Crime", "Drama"],
        plot_summary: "The patriarch of an organized crime dynasty transfers control of his empire to his reluctant son.",
        director: "Francis Ford Coppola",
        cast: ["Marlon Brando", "Al Pacino", "James Caan"],
        rating: 9.2
    },
    {
        id: 11,
        title: "The Lord of the Rings: The Return of the King",
        overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        poster_path: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        category: "Fantasy",
        release_date: "2003-12-17",
        duration: 201,
        language: "English",
        genre: ["Action", "Adventure", "Drama"],
        plot_summary: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
        rating: 9.0
    },
    {
        id: 12,
        title: "The Lion King",
        overview: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        poster_path: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTv0REMOInqkdMG-8AbTQIVTv9bmlN6O6CM0yh12hG_uQ_U66Q2k0aQVj2ajafAYWOrWUJt3A",
        category: "Animation",
        release_date: "1994-06-24",
        duration: 88,
        language: "English",
        genre: ["Animation", "Adventure", "Drama"],
        plot_summary: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        director: "Roger Allers, Rob Minkoff",
        cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        rating: 8.5
    },
    {
        id: 15,
        title: "Schindler's List",
        overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        poster_path: "https://image.tmdb.org/t/p/w500/c8Ass7acuOe4za6DhSattE359gr.jpg",
        category: "Biography",
        release_date: "1993-12-15",
        duration: 195,
        language: "English",
        genre: ["Biography", "Drama", "History"],
        plot_summary: "Oskar Schindler becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        director: "Steven Spielberg",
        cast: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
        rating: 8.9
    },
    {
        id: 16,
        title: "The Lord of the Rings: The Fellowship of the Ring",
        overview: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        poster_path: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        category: "Fantasy",
        release_date: "2001-12-19",
        duration: 178,
        language: "English",
        genre: ["Action", "Adventure", "Drama"],
        plot_summary: "A Hobbit and eight companions set out to destroy the powerful One Ring and save Middle-earth from Sauron.",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        rating: 8.8
    },
    {
        id: 17,
        title: "Star Wars: Episode V - The Empire Strikes Back",
        overview: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
        poster_path: "https://image.tmdb.org/t/p/w500/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
        category: "Sci-Fi",
        release_date: "1980-05-21",
        duration: 124,
        language: "English",
        genre: ["Action", "Adventure", "Fantasy"],
        plot_summary: "Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
        director: "Irvin Kershner",
        cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        rating: 8.7
    },
    {
        id: 18,
        title: "The Lord of the Rings: The Two Towers",
        overview: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        poster_path: "https://image.tmdb.org/t/p/w500/rrGlNlzFTrXFNGXsD7NNlxq4BPb.jpg",
        category: "Fantasy",
        release_date: "2002-12-18",
        duration: 179,
        language: "English",
        genre: ["Action", "Adventure", "Drama"],
        plot_summary: "Frodo and Sam edge closer to Mordor with the help of Gollum, while the divided fellowship makes a stand against Saruman.",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        rating: 8.7
    },
    {
        id: 19,
        title: "The Good, the Bad and the Ugly",
        overview: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
        poster_path: "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        category: "Western",
        release_date: "1966-12-23",
        duration: 161,
        language: "Italian",
        genre: ["Western"],
        plot_summary: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold.",
        director: "Sergio Leone",
        cast: ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
        rating: 8.8
    },
    {
        id: 22,
        title: "Gladiator",
        overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        poster_path: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        category: "Action",
        release_date: "2000-05-05",
        duration: 155,
        language: "English",
        genre: ["Action", "Adventure", "Drama"],
        plot_summary: "A former Roman General seeks vengeance against the corrupt emperor who murdered his family.",
        director: "Ridley Scott",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        rating: 8.5
    }
];