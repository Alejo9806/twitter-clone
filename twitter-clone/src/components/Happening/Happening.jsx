import React from "react";
import "../../styles/happening.css";
import Follow from "../Follow/Follow";

const Happening = () => {
  return (
    <>
      <div className="happen">
        <h3 className="title">What’s happening</h3>
        <div className="cardHappend">
          <div>
            <span className="spanTitle">US national news · Last night</span>
            <br />
            <span className="textCard">
              Tulsa gunman targeted doctor he blamed for pain after surgery,
              police say
            </span>
          </div>
          <div className="imgBox">
            <img
              src="https://pbs.twimg.com/semantic_core_img/1532148480436645888/UbkbtqWg?format=jpg&name=120x120"
              alt="news"
              className="imgNews"
            />
          </div>
        </div>
        <div className="cardHappend">
          <div>
            <span className="spanTitle">Trending in Colombia</span>
            <br />
            <span className="textCard">UdeA</span>
          </div>
          <div className="iconBox">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="cardHappend">
          <div>
            <span className="spanTitle">Trending in Colombia</span>
            <br />
            <span className="textCard">Shakira</span>
          </div>
          <div className="iconBox">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
              <g>
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
        </div>
        <div className="cardHappend">
          <div>
            <span className="spanTitle">
              Vogue Mex y Latam · 51 minutes ago
            </span>
            <br />
            <span className="textCard">
              Así ha sido la celebración del Jubileo de Platino de la Reina
              Isabel II
            </span>
          </div>
          <div className="imgBox">
            <img
              src="https://pbs.twimg.com/media/FURI4fIWUAg2Z6c?format=jpg&name=120x120"
              alt="news"
              className="imgNews"
            />
          </div>
        </div>
        <div className="cardHappend">
          <div>
            <span className="spanTitle">War in Ukraine · LIVE</span>
            <br />
            <span className="textCard">
              Ukrainian military reports fighting near Sloviansk as Russian
              forces continue attacks
            </span>
          </div>
          <div className="imgBox">
            <img
              src="https://pbs.twimg.com/semantic_core_img/1532242925186260992/sj9mnTKd?format=jpg&name=120x120"
              alt="news"
              className="imgNews"
            />
          </div>
        </div>

        <div className="showMore">
          <a href="/">Show more</a>
        </div>
      </div>
    </>
  );
};

export default Happening;
