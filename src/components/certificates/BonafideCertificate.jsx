import React from 'react'
import FileCard from '../FileCard';
import PreviewFile from '../PreviewFile';

function BonafideCertificate() {


const cardData = [
    {
      title: 'Bonafide-Certificate-Request-Letter-for-College',
      CardType: '.docx',
      url: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-College.docx',
    },
    {
      title: 'Bonafide-Certificate-Request-Letter-for-Employment',
      CardType: '.docx',
      url: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-Employment.docx',
    },
    {
      title: 'Bonafide-Certificate-Request-Letter-for-Scholarship',
      CardType: '.docx',
      url: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-Scholarship.docx',
    },
    {
      title: 'Bonafide-Certificate-Request-Letter-for-School',
      CardType: '.docx',
      url: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-School.docx',
    },
    {
      title: 'Bonafide-Certificate-Request-Letter-for-Visa-Application',
      CardType: '.docx',
      url: 'documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-Visa-Application.docx',
    },

  ];

const files = [
    {
      imgUrl: '/documents/certificates/Img_Certificate/bonafide_certificate/Bonafide-Certificate-Request-Letter-for-College.jpg',
      fileUrl: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-College.docx',
    },

    {
      imgUrl: '/documents/certificates/Img_Certificate/bonafide_certificate/Bonafide-Certificate-Request-Letter-for-Employment.jpg',
      fileUrl: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-Employment.docx',
    },
    {
      imgUrl: '/documents/certificates/Img_Certificate/bonafide_certificate/Bonafide-Certificate-Request-Letter-for-Scholarship.jpg',
      fileUrl: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-Scholarship.docx',
    },

    {
      imgUrl: '/documents/certificates/Img_Certificate/bonafide_certificate/Bonafide-Certificate-Request-Letter-for-School.jpg',
      fileUrl: '/documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-School.docx',
    },

    {
      imgUrl: '/documents/certificates/Img_Certificate/bonafide_certificate/Bonafide-Certificate-Request-Letter-for-Visa-Application.jpg',
      fileUrl: 'documents/certificates/bonafide_Certificates/Bonafide-Certificate-Request-Letter-for-Visa-Application.docx',
    },

  ]



  return (
    <>
      <h5>Experience Certificate</h5>
      <p>Details about experience...</p>
      <PreviewFile PreviewFiles={files} />
      <div className="row mb-4 p-4 g-4">
        <FileCard card={cardData} />
      </div>

    </>
  );
}

export default BonafideCertificate
