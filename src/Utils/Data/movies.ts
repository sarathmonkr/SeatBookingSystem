export interface MovieType {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    category?: string;
}

export const MoviesRunning: MovieType[] = [
    {
        id: 2,
        title: "The Dark Knight",
        overview: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        category: "Action" // Added category value
    },
    {
        id: 3,
        title: "Interstellar",
        overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        category: "Sci-Fi" // Added category value
    },
    {
        id: 5,
        title: "The Matrix",
        overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        poster_path: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        category: "Sci-Fi" // Added category value
    },
    {
        id: 6,
        title: "Fight Club",
        overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        poster_path: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
        category: "Drama" // Added category value
    },
    {
        id: 8,
        title: "Forrest Gump",
        overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
        poster_path: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
        category: "Drama" // Added category value
    },
    {
        id: 9,
        title: "The Shawshank Redemption",
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        poster_path: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        category: "Drama" // Added category value
    },
    {
        id: 10,
        title: "The Godfather",
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        poster_path: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        category: "Crime" // Added category value
    },
    {
        id: 11,
        title: "The Lord of the Rings: The Return of the King",
        overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        poster_path: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        category: "Fantasy" // Added category value
    },
    {
        id: 12,
        title: "The Lion King",
        overview: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        poster_path: "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
        category: "Animation" // Added category value
    },
]