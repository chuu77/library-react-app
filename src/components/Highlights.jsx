import React from "react";
import { FaBolt, FaBookOpen, FaTags } from "react-icons/fa";
import Highlight from "./UI/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why Choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FaBolt />}
              title="Easy and Quick"
              para=" Get access to the book you purchased online instantly."
            />

            <Highlight
              icon={<FaBookOpen icon="book-open" />}
              title="10,000+ Books"
              para="Library has books in all your favourite categories."
            />

            <Highlight
              icon={<FaTags icon="tags" />}
              title="Affordable"
              para="Get access to the book you purchased online instantly"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
