import React, { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Explore = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when the component mounts
  }, []);
  return (
    <section id="explore">
      <div className="container">
        <div className="row">
          <div className="row row__column">
            <h2>
              Explore more <span className="purple">Books</span>
            </h2>
            <Link to="/books">
              <button className="btn" type="button">
                Explore Books
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
