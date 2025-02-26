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
        poster_path: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
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
];