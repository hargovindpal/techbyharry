import React from 'react'
import FileCard from '../FileCard';
import PreviewFile from '../PreviewFile';

function ExperienceCertificate() {
  const cardData = [
    {
      title: 'Employee-Experience-Certificate-1',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-1.docx',
    },
    {
      title: 'Employee-Experience-Certificate-2',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-2.docx',
    },
     {
      title: 'Experience-Certificate-Format-3',
      CardType: '.docx',
      url: 'public/documents/certificates/experience_certificates/Experience-Certificate-Format-3.docx',
    },
    {
      title: 'Employee-Experience-Certificate-4',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-4.docx',
    },
    {
      title: 'Employee-Experience-Certificate-5',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-5.docx',
    },
    {
      title: 'Employee-Experience-Certificate-6',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-6.docx',
    },
    {
      title: 'Employee-Experience-Certificate-7',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-7.docx',
    },
    {
      title: 'Employee-Experience-Certificate-8',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-8.docx',
    },
    {
      title: 'Employee-Experience-Certificate-9',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-9.docx',
    },
    {
      title: 'Employee-Experience-Certificate-10',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-10.docx',
    },
   
    {
      title: 'Experience-certificate-for-girls-hostel-warden',
      CardType: '.docx',
      url: '/documents/certificates/experience_certificates/Letter-6-Experience-certificate-for-girls-hostel-warden.docx',
    },
    
  ];




const files = [
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-1.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-1.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-2.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-2.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Experience-Certificate-Format-3.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Experience-Certificate-Format-3.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-4.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-4.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-5.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-5.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-6.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-6.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-7.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-7.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-8.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-8.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-9.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-9.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Employee-Experience-Certificate-10.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Employee-Experience-Certificate-10.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/experience_certificate/Letter-6-Experience-certificate-for-girls-hostel-warden.jpg',
    fileUrl: '/documents/certificates/experience_certificates/Letter-6-Experience-certificate-for-girls-hostel-warden.docx',
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

export default ExperienceCertificate
