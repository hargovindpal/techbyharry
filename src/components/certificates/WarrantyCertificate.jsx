import React from 'react'
import FileCard from '../FileCard'

function WarrantyCertificate() {
const cardData = [
    {
      title: 'Warranty A',
      url:'/logo.png',
    },
    {
    title: 'Warranty B',
    url:'/logo.png',
    },
     {
    title: 'Warranty C',
    url:'/logo.png',
    },
    {
      title: 'Warranty A',
      url:'/logo.png',
    },
    {
    title: 'Warranty B',
    url:'/logo.png',
    },
     {
    title: 'Warranty C',
    url:'/logo.png',
    },
  ];


  return (
    <>
      <h5>Warranty Certificate</h5><p>Details about warranty...</p>
      <div className="row mb-4 p-4 g-4">
              <FileCard card={cardData} />
            </div>
    </>
  )
}

export default WarrantyCertificate
