import React from 'react'
import DownloadButton from './DownloadButton';



function FileCard({ card = [] }) {
  return (
    <>
      {card.map((cardItem, index) => (
        <div className="col-md-4 " key={index}>
          <div className="file card h-100 text-center p-3">
            <div className='cardtitle'>
              <h4>{cardItem.title}</h4>
              <a href={cardItem.url} download>
                <DownloadButton type="button" buttonName="Download"           
                />
                </a>
              
            </div>
    
          </div>
        </div>
      ))}
    </>
  );
}

export default FileCard
