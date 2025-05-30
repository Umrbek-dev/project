import React from "react";
import Header from "../Components/Header/Header";
import "./Home.css";
import coffee from "./images/Coffee.png";
import hotdog from "./images/HotDog.png";
import calendar from "./images/calendar.png";
import toast from "./images/toast.png";
import fruitPlate from "./images/plate.png";
import yogurtBowl from "./images/bowl.png";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <section className="section" id="1">
          <div className="heading">
            <h2>Promoting your business and services with Propel:</h2>
            <p>
              A responsive, multi-page business template with everything you
              need propel your business.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={coffee} alt="Coffee" />
              </div>
              <h3>Pro ad constituto</h3>
              <p>
                Ne usu illud albucius abhor reant, partiendo scriptorem mel ne.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={hotdog} alt="hotdog" />
              </div>
              <h3>Eam commodo</h3>
              <p>
                Fuisset intellegat delicatissimi ex mea. Cu probo integre nec.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={calendar} alt="calendar" />
              </div>
              <h3>Reformidans eis</h3>
              <p>
                Facet nostro causae ei sed. Vix ex quidam detraxit, vis ad
                nostro laoreet.
              </p>
            </div>
          </div>
        </section>
        <section className="food-section" id="2">
          <div className="image-container">
            <img
              src={toast}
              alt="Toast with egg and avocado"
              className="food-image"
            />
          </div>
          <div className="text-container">
            <p className="headline">
              <strong>Illud decore voluptaria has at.</strong> Hinc invenire
              atomorum no vel.
            </p>
            <p className="subheadline">
              Ut vis nullam erat neglegentur, omittam perpetua voluptatum qui
              eu. Iusto laoreet suscipit vis ad, ad ferri tempor duo.
            </p>
            <a href="#" className="more-link">
              More About Us
            </a>
          </div>
        </section>
        <div className="section-divider container" />
        <section className="features-section" id="3">
          <div className="feature-block">
            <div className="image-wrapper">
              <img
                src={fruitPlate}
                alt="Fruit plate"
                className="feature-image"
              />
            </div>
            <div className="feature-text">
              <h3 className="feature-heading">
                <strong>Ex tempor euismod sapientem ouis lexo.</strong> Ad vix
                dicta iudico singulis, ius ex mollis veritus.
              </h3>
              <p className="feature-subtext">
                Possit tritani consectetuer eu his, nusquam minimum ut per, eu
                eos ocurreret splendide hendrerit. Dicant placerat democritum
                eos id, sit mollis invidunt mediocritatem ei, ne fuisset dolores
                periculis sed.
              </p>
            </div>
          </div>

          <div className="feature-block">
            <div className="feature-text">
              <h3 className="feature-heading">
                <strong>Te elit antiopam vix zril recusabo ut pri.</strong> Quas
                suscipit ad mea verear vivendo tincidunt.
              </h3>
              <p className="feature-subtext">
                Pri cu dico labores offendit, odio principes complectitur sea.
                Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid
                definitiones id cum, ad melior perpetua referrentur sed. Quas
                suscipit ad mea verear vivendo tincidunt.
              </p>
            </div>
            <div className="image-wrapper">
              <img
                src={yogurtBowl}
                alt="Yogurt bowl"
                className="feature-image"
              />
            </div>
          </div>

          <div className="cta-text">
            <strong>Wanna know more about the Premium deal?</strong>
            <a href="#" className="cta-link">
              See the full range of Premium
            </a>
          </div>
        </section>
        <div className="section-divider container" />
        <section className="cta-container" id="4">
          <div className="cta-content">
            <div className="cta-text">
              <div className="cta-label">
                <span className="label-text">Party On</span>
                <span className="label-line"></span>
              </div>
              <h2 className="cta-heading">
                <strong>Quas suscipit ad mea.</strong> Pri cu dico labores
                officiis odio principes complectitur ad sea.
              </h2>
            </div>
            <button className="cta-button">Get Started</button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
