const books = [
  {
    id: 1,
    name: "Pride and Prejudice",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Jane Austen",
    status: "read",
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Harper Lee",
    status: "reading",
  },
  {
    id: 3,
    name: "1984",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "George Orwell",
    status: "to be read",
  },
  {
    id: 4,
    name: "Moby-Dick",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Herman Melville",
    status: "read",
  },
  {
    id: 5,
    name: "The Great Gatsby",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "F. Scott Fitzgerald",
    status: "reading",
  },
  {
    id: 6,
    name: "War and Peace",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Leo Tolstoy",
    status: "to be read",
  },
  {
    id: 7,
    name: "Jane Eyre",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Charlotte Brontë",
    status: "reading",
  },
  {
    id: 8,
    name: "The Catcher in the Rye",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "J.D. Salinger",
    status: "to be read",
  },
  {
    id: 9,
    name: "Frankenstein",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Mary Shelley",
    status: "read",
  },
  {
    id: 10,
    name: "Don Quixote",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Miguel de Cervantes",
    status: "to be read",
  },
  {
    id: 11,
    name: "To Kill a Mockingbird",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Harper Lee",
    status: "reading",
  },
  {
    id: 12,
    name: "The Picture of Dorian Gray",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Oscar Wilde",
    status: "to be read",
  },
  {
    id: 13,
    name: "The Scarlet Letter",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Nathaniel Hawthorne",
    status: "read",
  },
  {
    id: 14,
    name: "The Count of Monte Cristo",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Alexandre Dumas",
    status: "to be read",
  },
  {
    id: 15,
    name: "Wuthering Heights",
    image:
      "https://cdn.myportfolio.com/15658835-56a5-4669-9d59-ac3bfc57684b/4ce45f83-54b0-4b2a-a982-26121d9a4df5_rw_1920.png?h=264575f403947d7069d4007280363b6c",
    author: "Emily Brontë",
    status: "reading",
  },
];

export default books;
