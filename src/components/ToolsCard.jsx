import React from 'react'
import { Link } from "react-router-dom";

function ToolsCard({ ToolCard = [], listClassName = "", MainTextColor="" }) {
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
            <div className="bg-white text-center p-3">
              {card.imgUrl && (
                  <img
                    src={card.imgUrl}
                    alt="Card"
                    className="img-fluid mb-2"
                    style={{ maxHeight: "150px" }}
                  />
                )}
              <h5 className="fw-bold text-success">{card.innerText}</h5>
            </div>
            <div className="card-body text-center">
              <div className="mb-3">
                <i className="fa-solid fa-pen-to-square" style={{ fontSize: "2rem" }}></i>
              </div>
              <h5 className={`fw-bold ${MainTextColor}`}> {card.mainHeadText}</h5>
              <p style={{ fontSize: "0.9rem", color: "#ffffff", fontWeight: "500" }}>
                {card.detail}
              </p>

              {isExternal ? (
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info text-white fw-bold px-4"
                >
                  Click Here
                </a>
              ) : (
                <Link
                  to={card.href}
                  className="btn btn-info text-white fw-bold px-4"
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
