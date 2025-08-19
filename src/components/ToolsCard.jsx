import React from 'react'
import { Link } from "react-router-dom";

function ToolsCard({ ToolCard = [], listClassName = "", MainTextColor="", ImgToggle = "", noWhiteBg=""}) {
  return (
    <>
      {ToolCard.map((card, index) => {
        const isExternal = card.href.startsWith("http");
      
        return (
          <div
            className={`card shadow border-0 ${listClassName}`}
            style={{ maxWidth: "300px", margin: "auto" }}
            key={index}
          >
            <div className={`text-center p-3 ${!noWhiteBg ? "bg-white" : ""} ${ImgToggle === "disp-none" ? "p-0 m-0" : ""}`}
                style={{ backgroundColor: "transparent" }}>
              {ImgToggle !== "disp-none" && card.imgUrl && (
                <img
                  src={card.imgUrl}
                  alt=""
                  className={`img-fluid mb-2 ${ImgToggle}`}
                  style={{ maxHeight: "150px" }}
                />
              )}
              <h5 className="fw-bold text-success" style={{ position: "relative", zIndex: 2 }}>{card.innerText}</h5>
            </div>
            <div className="card-body text-center" style={{ position: "relative", zIndex: 2 }}>
              
              <h5 className={`fw-bold ${MainTextColor}`}> {card.mainHeadText}</h5>
              <p style={{ fontSize: "0.9rem", color: "green", fontWeight: "600" }}>
                {card.detail}
              </p>

              {isExternal ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn card-btn fw-bold px-4"
                >
                  Click Here
                </a>
              ) : (
                <Link
                  to={card.href}
                  className="btn card-btn fw-bold px-4"
                >
                  Click Here
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ToolsCard;
