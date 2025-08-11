import React from 'react'
import FileCard from '../FileCard';
import PreviewFile from '../PreviewFile';

function MedicalCertificate() {
  
  const cardData = [
    {
      title: 'Medical-Certificate-1',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-1.docx',
    },
    {
      title: 'Medical-Certificate-2',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-2.docx',
    },
     {
      title: 'Medical-Certificate-3',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-3.docx',
    },
    {
      title: 'Medical-Certificate-4',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-4.docx',
    },
    {
     title: 'Medical-Certificate-5',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-5.docx',
    },
    {
      title: 'Medical-Certificate-6',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-6.docx',
    },
    {
      title: 'Medical-Certificate-7',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-7.docx',
    },
    {
      title: 'Medical-Certificate-8',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-8.docx',
    },
    {
      title: 'Medical-Certificate-9',
      CardType: '.docx',
      url: 'public/documents/certificates/medical_certificates/Medical-Certificate-9.docx',
    },
      
  ];

  const files = [
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-1.jpg',
      fileUrl: 'public/documents/certificates/medical_certificates/Medical-Certificate-1.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-2.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-2.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-3.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-3.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-4.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-4.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-5.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-5.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-6.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-6.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-7.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-7.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-8.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-8.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/medical_certificate/Medical-Certificate-9.jpg',
      fileUrl: '/documents/certificates/medical_certificates/Medical-Certificate-9.docx',
    },
  ];



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

export default MedicalCertificate
