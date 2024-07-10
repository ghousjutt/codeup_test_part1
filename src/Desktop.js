import Navbar from "./Navbar";
import "./styles.css";

const Desktop = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="product-details">
          <p className="in-stock">In stock</p>
          <h1>Refurbished iPhone 14 Pro</h1>

          <div className="reviews">
            <span><strong>Reviews:</strong></span>
            <span className="rate-number"><strong>4/5</strong></span>
            <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9734;</span>

          </div>
          <p>Bringing you Dynamic Island, access your music while scrolling social media. Apple iPhone 14 Pro colours - Deep Purple, Gold, Silver and Space Black</p>

          <div className="product-variation-images">
            <img className="selected-img" src="iphone.png" alt="iPhone 14 Pro" />
            <img src="iphone.png" alt="iPhone 14 Pro" />
            <img src="iphone.png" alt="iPhone 14 Pro" />
          </div>
        </div>
        <div className="product-image">
          <img src="iphone.png" alt="iPhone 14 Pro" />
        </div>
        <div className="product-options">
          <div className="form-group">
            <label for="condition">CONDITION: Good</label>
            <div id="condition">
              <button className="btn active">Good</button>
              <button className="btn">Great</button>
              <button className="btn">Pristine</button>
            </div>
          </div>
          <div className="form-group">
            <label for="capacity">CAPACITY: 128GB</label>
            <div id="capacity">
              <button className="btn active">128GB</button>
              <button className="btn">256GB</button>
              <button className="btn">512GB</button>
            </div>
          </div>
          <div className="form-group">
            <label for="color">COLOUR: SPACE BLACK</label>
            <div id="color">
              <button className="btn active"> <img src="new-moon.png" alt="" /> </button>
              <button className="btn"> <img src="new-moon (1).png" alt="" /> </button>
              <button className="btn"> <img src="new-moon (2).png" alt="" /> </button>
              <button className="btn"> <img src="new-moon (3).png" alt="" /> </button>
              <button className="btn"> <img src="new-moon (4).png" alt="" /> </button>

            </div>
          </div>
          {/* <div className="product-price">
                <span className="price">$980</span>
                <button className="btn-primary">Add to Cart</button>
            </div> */}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-row">
          <div className="footer-col1"> <img src="visualization.png" alt="" /> VIEW ALL</div>
          <div className="footer-col3">01
            <img src="remove.png" alt="" className="footer-img-margin" />
            <img src="remove.png" alt="" />
            <img src="remove.png" alt="" /> 03
          </div>
          <div className="footer-col4">
            <div className="cart-image"> <img src="trolley.png" alt=""/> </div>
            <div className="total"> <p>ADD TO CART</p> <p>$980</p> </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Desktop;