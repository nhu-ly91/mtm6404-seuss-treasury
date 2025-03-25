import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(setBooks)
      .catch(err => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="page-container">
      <h1>Seuss Treasury</h1>
      <h2>Books</h2>
      <div className="book-list">
        {books.map(book => (
          <div
            className="book-item"
            key={book.id}
            onClick={() => navigate(`/book/${book.id}`, { state: book })}
          >
            <img
              src={book.image}
              alt={book.title}
              className="book-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;