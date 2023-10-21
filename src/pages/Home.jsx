import React from "react";
import TopButton from "../components/TopButton";
import Carousel from "../components/Carousel";
import NavButton from "../components/NavButton";
import {Link} from "react-router-dom";
import * as icon from "react-feather";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <Carousel />

        <div className="header__card">
          <h1>Welcome to my playground </h1>
          <p>
            Making magic with web development skills 👩🏻‍💻 <br />
            documenting my journey ✍️ and telling sweet stories 📖
          </p>
        </div>
      </header>

      <div className="story">
        <h1>Some stories you might love</h1>
        <div className="card__wrapper">
          <Link className="story__link">
            <div className="card">Story 1</div>
          </Link>

          <Link className="story__link">
            {" "}
            <div className="card">Story 2</div>
          </Link>

          <Link className="story__link">
            {" "}
            <div className="card">Story 3</div>
          </Link>
        </div>
      </div>

      <div className="more">
        <div className="more__wrapper">
          <h2>More like these...</h2>
          <NavButton label="Go to Blog" path="/blog" />
        </div>
      </div>

      <div className="cta">
        <div className="features">
          <div>
            <h1>Special Features 🚀🚀</h1>
            <p>What's new?</p>
          </div>

          <div className="cta__button">
            <p>Be the first to get notified. </p>
            <button type="submit">Sign up now</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="thanks">
          <h2 className="footer__Logo">RoselineMo</h2>
          <small>Thanks for reading!</small>
        </div>
        <div className="footer__middle">
          <div className="contact__links">
            <Link>
              <icon.Mail size={18} />
            </Link>
            <Link>
              {" "}
              <icon.Twitter size={18} />
            </Link>
            <Link>
              <icon.Instagram size={18} />
            </Link>
            <Link>
              <icon.Linkedin size={18} />
            </Link>
            <Link>
              <icon.GitHub size={18} />
            </Link>
          </div>

          <div className="copyright">
            <small>© 2023 Roseline Morenikeji. All Rights Reserved.</small>
          </div>
        </div>

        <TopButton />
      </div>
    </div>
  );
};

export default Home;
