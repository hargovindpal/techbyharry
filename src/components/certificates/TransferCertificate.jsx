import React from 'react'

function TransferCertificate() {
  const cardData = [
    {
      title: 'Experience A',
      url:'/logo.png',
    },
    {
    title: 'Experience B',
    url:'/logo.png',
    },
     {
    title: 'Experience C',
    url:'/logo.png',
    },
    {
      title: 'Experience A',
      url:'/logo.png',
    },
    {
    title: 'Experience B',
    url:'/logo.png',
    },
     {
    title: 'Experience C',
    url:'/logo.png',
    },
  ];

  return (
    <>
      <h5>Experience Certificate</h5>
      <p>Details about experience...</p>
      <div className="row mb-4 p-4 g-4">
        <FileCard card={cardData} />
      </div>
  
    </>
  )
}

export default TransferCertificate
