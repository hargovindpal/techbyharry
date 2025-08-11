import React from 'react'
import FileCard from '../FileCard';
import PreviewFile from '../PreviewFile';

function NocCertificate() {

const cardData = [
    {
      title: 'NOC-for-Vehicle-Loan-Settlement-and-Transfer',
      CardType: '.docx',
      url: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Loan-Settlement-and-Transfer.docx',
    },
    {
      title: 'Bonafide-Certificate-Request-Letter-for-Employment',
      CardType: '.docx',
      url: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Sale-and-Transfer.docx',
    },
    {
      title: 'Bonafide-Certificate-Request-Letter-for-Scholarship',
      CardType: '.docx',
      url: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Transfer-Due-to-Relocation.docx',
    },
    {
      title: 'Bonafide-Certificate-Request-Letter-for-School',
      CardType: '.docx',
      url: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Transfer-to-a-Family-Member.docx',
    },
    {
      title: 'Notice-to-Vacate-Letter',
      CardType: '.docx',
      url: '/documents/certificates/NOC_certificates/Notice-to-Vacate-Letter.docx',
    },
    {
      title: 'Simple-NOC-for-Vehicle-Transfer',
      CardType: '.docx',
      url: '/documents/certificates/NOC_certificates/Simple-NOC-for-Vehicle-Transfer.docx',
    },

  ];

const files = [
  {
    imgUrl: '/documents/certificates/Img_Certificate/noc_certificate/NOC-for-Vehicle-Loan-Settlement-and-Transfer.jpg',
    fileUrl: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Loan-Settlement-and-Transfer.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/noc_certificate/NOC-for-Vehicle-Sale-and-Transfer.jpg',
    fileUrl: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Sale-and-Transfer.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/noc_certificate/NOC-for-Vehicle-Transfer-Due-to-Relocation.jpg',
    fileUrl: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Transfer-Due-to-Relocation.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/noc_certificate/NOC-for-Vehicle-Transfer-to-a-Family-Member.jpg',
    fileUrl: '/documents/certificates/NOC_certificates/NOC-for-Vehicle-Transfer-to-a-Family-Member.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/noc_certificate/Notice-to-Vacate-Letter.jpg',
    fileUrl: '/documents/certificates/NOC_certificates/Notice-to-Vacate-Letter.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/noc_certificate/Simple-NOC-for-Vehicle-Transfer.jpg',
    fileUrl: '/documents/certificates/NOC_certificates/Simple-NOC-for-Vehicle-Transfer.docx',
  },
];



  return (
    <>
      <h5>NOC Certificates</h5>
      <p>Details about NOC Certificates...</p>
      <PreviewFile PreviewFiles={files}/>
      <div className="row mb-4 p-4 g-4">
        <FileCard card={cardData} />
      </div>
  
    </>
  );
}

export default NocCertificate
