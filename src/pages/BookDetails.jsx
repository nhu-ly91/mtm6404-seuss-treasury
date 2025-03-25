import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const { state: book } = useLocation();

  if (!book) return <p>No book data found.</p>;

  return (
    <div className="page-container">
        <div className="book-detail">
            <img src={book.image} alt={book.title} className="detail-cover" />
            <div className="book-info">
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            </div>
        </div>
    </div>
  );
};

export default BookDetails;