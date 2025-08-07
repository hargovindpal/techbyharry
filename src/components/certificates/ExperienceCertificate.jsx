import React from 'react'
import FileCard from '../FileCard';
import PreviewFile from '../PreviewFile';

function ExperienceCertificate() {
  const cardData = [
    {
      title: 'Experience A',
      CardType:'.docx',
      preview:'',
      url:'/logo.png',
    },
    {
    title: 'Experience B',
    CardType:'.docx',
    url:'/logo.png',
    },
     {
    title: 'Experience C',
    CardType:'.docx',
    url:'/logo.png',
    },
    {
      title: 'Experience A',
      CardType:'.docx',
      url:'/logo.png',
    },
    {
    title: 'Experience B',
    CardType:'.docx',
    url:'/logo.png',
    },
     {
    title: 'Experience C',
    CardType:'.docx',
    url:'/logo.png',
    },
  ];
  const files=[
    { 
      imgUrl: '/documents/application/Img_applications/Entry-Level-Accountant-Application-Letter.jpg',
      fileUrl: '/documents/application/Entry-Level-Accountant-Application-Letter.docx',
    },

    { 
      imgUrl: '/documents/application/Img_applications/Promotion-and-Salary-Increment-Request.jpg',
      fileUrl: '/documents/application/Promotion-and-Salary-Increment-Request.docx',
    },
    { 
      imgUrl: '/documents/application/Img_applications/Entry-Level-Accountant-Application-Letter.jpg',
      fileUrl: '/documents/application/Entry-Level-Accountant-Application-Letter.docx',
    },

    { 
      imgUrl: '/documents/application/Img_applications/Promotion-and-Salary-Increment-Request.jpg',
      fileUrl: '/documents/application/Promotion-and-Salary-Increment-Request.docx',
    },
    { 
      imgUrl: '/documents/application/Img_applications/Entry-Level-Accountant-Application-Letter.jpg',
      fileUrl: '/documents/application/Entry-Level-Accountant-Application-Letter.docx',
    },

    { 
      imgUrl: '/documents/application/Img_applications/Promotion-and-Salary-Increment-Request.jpg',
      fileUrl: '/documents/application/Promotion-and-Salary-Increment-Request.docx',
    },
    { 
      imgUrl: '/documents/application/Img_applications/Entry-Level-Accountant-Application-Letter.jpg',
      fileUrl: '/documents/application/Entry-Level-Accountant-Application-Letter.docx',
    },

    { 
      imgUrl: '/documents/application/Img_applications/Promotion-and-Salary-Increment-Request.jpg',
      fileUrl: '/documents/application/Promotion-and-Salary-Increment-Request.docx',
    },

  ]


  return (
    <>
      <h5>Experience Certificate</h5>
      <p>Details about experience...</p>
      <PreviewFile PreviewFiles={files}/>
      <div className="row mb-4 p-4 g-4">
        <FileCard card={cardData} />
      </div>
  
    </>
  );
}

export default ExperienceCertificate
