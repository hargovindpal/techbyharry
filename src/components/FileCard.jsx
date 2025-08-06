import React from 'react'
import DownloadButton from './DownloadButton';



function FileCard({card = [] }) {
   return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>SrNo</th>
            <th>Title</th>
            <th>Type</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {card.map((cardItem, index) => (
            <tr key={index}>
              <td>{index +1}</td>
              <td>{cardItem.title}</td>
              <td>{cardItem.CardType}</td>
              <td>
                <a href={cardItem.url} download>
                  
                  <DownloadButton type="button" buttonName="Download" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileCard
