import React from 'react'
import FileCard from '../FileCard';
import PreviewFile from '../PreviewFile';

function MarriageBiodataTemplate() {

const cardData = [
  {
    title: 'marriage-biodata-1',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-1.docx',
  },
  {
    title: 'marriage-biodata-2',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-2.docx',
  },
  {
    title: 'marriage-biodata-3',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-3.docx',
  },
  {
    title: 'marriage-biodata-4',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-4.docx',
  },
  {
    title: 'marriage-biodata-5',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-5.docx',
  },
  {
    title: 'marriage-biodata-6',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-6.docx',
  },
  {
    title: 'marriage-biodata-7',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-7.docx',
  },
  {
    title: 'marriage-biodata-8',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-8.docx',
  },
  {
    title: 'marriage-biodata-9',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-9.docx',
  },
  {
    title: 'marriage-biodata-10',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-10.docx',
  },
  {
    title: 'marriage-biodata-11',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-11.docx',
  },
  {
    title: 'marriage-biodata-12',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-12.docx',
  },
  {
    title: 'marriage-biodata-13',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-13.docx',
  },
  {
    title: 'marriage-biodata-14',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-14.docx',
  },
  {
    title: 'marriage-biodata-15',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-15.docx',
  },
  {
    title: 'marriage-biodata-16',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-16.docx',
  },
  {
    title: 'marriage-biodata-17',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-17.docx',
  },
  {
    title: 'marriage-biodata-18',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-18.docx',
  },
  {
    title: 'marriage-biodata-19',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-19.docx',
  },
  {
    title: 'marriage-biodata-20',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-20.docx',
  },
  {
    title: 'marriage-biodata-21',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-21.docx',
  },
  {
    title: 'marriage-biodata-22',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-22.docx',
  },
  {
    title: 'marriage-biodata-23',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-23.docx',
  },
  {
    title: 'marriage-biodata-24',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-24.docx',
  },
  {
    title: 'marriage-biodata-25',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-25.docx',
  },
  {
    title: 'marriage-biodata-26',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-26.docx',
  },
  {
    title: 'marriage-biodata-27',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-27.docx',
  },
  {
    title: 'marriage-biodata-28',
    CardType: '.docx',
    url: '/documents/biodata/Marriage-Biodata-28.docx',
  },
];

const files = [
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-1.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-1.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-2.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-2.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-3.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-3.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-4.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-4.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-5.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-5.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-6.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-6.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-7.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-7.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-8.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-8.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-9.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-9.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-10.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-10.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-11.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-11.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-12.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-12.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-13.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-13.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-14.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-14.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-15.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-15.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-16.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-16.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-17.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-17.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-18.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-18.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-19.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-19.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-20.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-20.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-21.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-21.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-22.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-22.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-23.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-23.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-24.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-24.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-25.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-25.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-26.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-26.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-27.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-27.docx',
  },
  {
    imgUrl: '/documents/biodata/img_biodata/Marriage-Biodata-28.jpg',
    fileUrl: '/documents/biodata/Marriage-Biodata-28.docx',
  },
];


  return (
    <>
      <h5>Marriage Biodata Templates</h5>
      <p>Details about Biodata Template...</p>
      <PreviewFile PreviewFiles={files}/>
      <div className="row mb-4 p-4 g-4">
        <FileCard card={cardData} />
      </div>
  
    </>
  )
}

export default MarriageBiodataTemplate
