import React, { useState } from "react";
import { FaStar, FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Book from "../components/UI/Book";
import Price from "../components/UI/Price";
import Rating from "../components/UI/Rating";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExists() {
    return cart.find((book) => book.id === +id);
  }

  return (
    <div className="" id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/" className="book__link">
                <FaArrowLeft />
              </Link>
              <Link to="/books">
                <h2 className="book__selected--title--top">{book.title}</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto facere explicabo recusandae eligendi doloribus fuga
                    aut ea corrupti perferendis eaque, distinctio molestiae sunt
                    nulla. Delectus deleniti labore veritatis. Beatae, impedit?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto facere explicabo recusandae eligendi doloribus fuga
                    aut ea corrupti perferendis eaque, distinctio molestiae sunt
                    nulla. Delectus deleniti labore veritatis. Beatae, impedit?
                  </p>
                </div>
                {/* <div>{button}</div> */}
                {bookExists() ? (
                  <Link to={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;

// 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// import React, { useState } from "react";
// import { FaStar, FaArrowLeft } from "react-icons/fa";
// import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import Book from "../components/UI/Book";
// import Price from "../components/UI/Price";
// import Rating from "../components/UI/Rating";

// const BookInfo = ({ books, addToCart, cart }) => {
//   const { id } = useParams();
//   const book = books.find((book) => +book.id === +id);

//   // State to manage the button text
//   const [buttonText, setButtonText] = useState("Add to Cart");

//   function addBookToCart(book) {
//     addToCart(book);
//     setButtonText("Checkout"); // Update button text after adding to cart
//   }

//   function bookExistsOnCart() {
//     return cart.find((book) => book.id === +id);
//   }

//   return (
//     <div className="" id="books__body">
//       <main id="books__main">
//         <div className="books__container">
//           <div className="row">
//             <div className="book__selected--top">
//               <Link to="/" className="book__link">
//                 <FaArrowLeft />
//               </Link>
//               <Link to="/books">
//                 <h2 className="book__selected--title--top">{book.title}</h2>
//               </Link>
//             </div>
//             <div className="book__selected">
//               <figure className="book__selected--figure">
//                 <img src={book.url} alt="" className="book__selected--img" />
//               </figure>
//               <div className="book__selected--description">
//                 <h2 className="book__selected--title">{book.title}</h2>
//                 <Rating rating={book.rating} />
//                 <div className="book__selected--price">
//                   <Price
//                     originalPrice={book.originalPrice}
//                     salePrice={book.salePrice}
//                   />
//                 </div>
//                 <div className="book__summary">
//                   <h3 className="book__summary--title">Summary</h3>
//                   <p className="book__summary--para">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Iusto facere explicabo recusandae eligendi doloribus fuga
//                     aut ea corrupti perferendis eaque, distinctio molestiae sunt
//                     nulla. Delectus deleniti labore veritatis. Beatae, impedit?
//                   </p>
//                   <p className="book__summary--para">
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Iusto facere explicabo recusandae eligendi doloribus fuga
//                     aut ea corrupti perferendis eaque, distinctio molestiae sunt
//                     nulla. Delectus deleniti labore veritatis. Beatae, impedit?
//                   </p>
//                 </div>

//                 {bookExistsOnCart() ? (
//                   <Link to={`/cart`} className="book__link">
//                     <button className="btn">{buttonText}</button>
//                   </Link>
//                 ) : (
//                   <button className="btn" onClick={() => addBookToCart(book)}>
//                     {buttonText}
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="books__container">
//           <div className="row">
//             <div className="book__selected--top">
//               <h2 className="book__selected--title--top">Recommended Books</h2>
//             </div>
//             <div className="books">
//               {books
//                 .filter((book) => book.rating === 5 && +book.id !== +id)
//                 .slice(0, 4)
//                 .map((book) => (
//                   <Book book={book} key={book.id} />
//                 ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BookInfo;
