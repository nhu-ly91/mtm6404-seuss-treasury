import { useEffect, useState } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        // Randomize and take only 10
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 10);
        setQuotes(selected);
      })
      .catch((err) => {
        console.error("Error fetching quotes:", err);
      });
  }, []);

  return (
    <div className="page-container">
      <h2>Quotes</h2>
      {quotes.length === 0 ? (
        <p>Loading quotes...</p>
      ) : (
        <ul className="quotes-list">
          {quotes.map((quote, index) => (
            <li key={index} className="quote-item">
              <p className="quote-text">"{quote.text}"</p>
              <p className="quote-source">
                — Dr. Seuss in <em>{quote.book.title}</em>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Quotes;