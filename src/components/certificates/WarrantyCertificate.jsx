import React from 'react'
import FileCard from '../FileCard';
import PreviewFile from '../PreviewFile';

function WarrantyCertificate() {
const cardData = [
    {
      title: '1-Blank-Warranty-Certificate-FREE-Word-PDF-Download.jpg',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/1-Blank-Warranty-Certificate-FREE-Word-PDF-Download.docx',
    },
    {
      title: '2-Free-Warranty-Certificate-Template-Word-PDF-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/2-Free-Warranty-Certificate-Template-Word-PDF-Download.docx',
    },
     {
      title: '3-Guarantee-Warranty-Certificate-FREE-Word-PDF-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/3-Guarantee-Warranty-Certificate-FREE-Word-PDF-Download.docx',
    },
    {
      title: '4-Material-Warranty-Certificate-Format-FREE-Word-PDF',
      CardType: '.docx',
      url: 'public/documents/certificates/warranty_certificates/4-Material-Warranty-Certificate-Format-FREE-Word-PDF.docx',
    },
    {
      title: '5-Product-Warranty-Certificate-Letter-FREE-Word-PDF',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/5-Product-Warranty-Certificate-Letter-FREE-Word-PDF.docx',
    },
    {
      title: '6-Sample-Warranty-Certificate-Format-In-Word-PDF-FREE',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/6-Sample-Warranty-Certificate-Format-In-Word-PDF-FREE.docx',
    },
    {
      title: '7-Warranty-Certificate-for-Equipment-FREE-Word-PDF',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/7-Warranty-Certificate-for-Equipment-FREE-Word-PDF.docx',
    },
    {
      title: '8-1-Year-Warranty-Certificate-FREE-Word-PDF-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/8-1-Year-Warranty-Certificate-FREE-Word-PDF-Download.docx',
    },
    {
      title: '9-Warranty-Certificate-for-Interior-Work-Word-PDF-File',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/9-Warranty-Certificate-for-Interior-Work-Word-PDF-File.docx',
    },
    {
      title: '10-Warranty-Certificate-for-Product-FREE-Word-PDF',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/10-Warranty-Certificate-for-Product-FREE-Word-PDF.docx',
    },
    {
      title: '11-2-Year-Warranty-Certificate-FREE-Word-PDF-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/11-2-Year-Warranty-Certificate-FREE-Word-PDF-Download.docx',
    },
    {
      title: '12-Warranty-Certificate-Format-for-Equipment-.docx-.pdf',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/12-Warranty-Certificate-Format-for-Equipment-.docx-.pdf.docx',
    },
    {
      title: '13-Warranty-Certificate-Format-PDF-Word-File-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/13-Warranty-Certificate-Format-PDF-Word-File-Download.docx',
    },
    {
      title: '14-Warranty-Certificate-Format-Word-PDF-File-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/14-Warranty-Certificate-Format-Word-PDF-File-Download.docx',
    },
    {
      title: '15-Modern-Warranty-Certificate-Letter-.docx-.pdf-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/15-Modern-Warranty-Certificate-Letter-.docx-.pdf-Download.docx',
    },
    {
      title: '16-Warranty-Certificate-Letter-Format-FREE-Word-PDF',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/16-Warranty-Certificate-Letter-Format-FREE-Word-PDF.docx',
    },
    {
      title: '17-Warranty-Certificate-Template-Free-Word-PDF-Download',
      CardType: '.docx',
      url: '17-Warranty-Certificate-Template-Free-Word-PDF-Download',
    },
    {
      title: '18-Latest-Warranty-Certificate-Template-Word-PDF-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/18-Latest-Warranty-Certificate-Template-Word-PDF-Download.docx',
    },
    {
      title: '19-Certificate-Of-Warranty-FREE-Word-PDF-Download',
      CardType: '.docx',
      url: '/documents/certificates/warranty_certificates/19-Certificate-Of-Warranty-FREE-Word-PDF-Download.docx',
    },
      
  ];

const files = [
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/1-Blank-Warranty-Certificate-FREE-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/1-Blank-Warranty-Certificate-FREE-Word-PDF-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/2-Free-Warranty-Certificate-Template-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/2-Free-Warranty-Certificate-Template-Word-PDF-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/3-Guarantee-Warranty-Certificate-FREE-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/3-Guarantee-Warranty-Certificate-FREE-Word-PDF-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/4-Material-Warranty-Certificate-Format-FREE-Word-PDF.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/4-Material-Warranty-Certificate-Format-FREE-Word-PDF.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/5-Product-Warranty-Certificate-Letter-FREE-Word-PDF.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/5-Product-Warranty-Certificate-Letter-FREE-Word-PDF.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/6-Sample-Warranty-Certificate-Format-In-Word-PDF-FREE.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/6-Sample-Warranty-Certificate-Format-In-Word-PDF-FREE.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/7-Warranty-Certificate-for-Equipment-FREE-Word-PDF.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/7-Warranty-Certificate-for-Equipment-FREE-Word-PDF.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/8-1-Year-Warranty-Certificate-FREE-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/8-1-Year-Warranty-Certificate-FREE-Word-PDF-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/9-Warranty-Certificate-for-Interior-Work-Word-PDF-File.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/9-Warranty-Certificate-for-Interior-Work-Word-PDF-File.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/10-Warranty-Certificate-for-Product-FREE-Word-PDF.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/10-Warranty-Certificate-for-Product-FREE-Word-PDF.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/11-2-Year-Warranty-Certificate-FREE-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/11-2-Year-Warranty-Certificate-FREE-Word-PDF-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/12-Warranty-Certificate-Format-for-Equipment-.docx-.pdf.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/12-Warranty-Certificate-Format-for-Equipment-.docx-.pdf.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/13-Warranty-Certificate-Format-PDF-Word-File-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/13-Warranty-Certificate-Format-PDF-Word-File-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/14-Warranty-Certificate-Format-Word-PDF-File-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/14-Warranty-Certificate-Format-Word-PDF-File-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/15-Modern-Warranty-Certificate-Letter-.docx-.pdf-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/15-Modern-Warranty-Certificate-Letter-.docx-.pdf-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/16-Warranty-Certificate-Letter-Format-FREE-Word-PDF.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/16-Warranty-Certificate-Letter-Format-FREE-Word-PDF.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/17-Warranty-Certificate-Template-Free-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/17-Warranty-Certificate-Template-Free-Word-PDF-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/18-Latest-Warranty-Certificate-Template-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/18-Latest-Warranty-Certificate-Template-Word-PDF-Download.docx',
  },
  {
    imgUrl: '/documents/certificates/Img_Certificate/warranty_certificate/19-Certificate-Of-Warranty-FREE-Word-PDF-Download.jpg',
    fileUrl: '/documents/certificates/warranty_certificates/19-Certificate-Of-Warranty-FREE-Word-PDF-Download.docx',
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

export default WarrantyCertificate
