import React from 'react'
import FileCard from '../FileCard';

function PNBForms() {
  const cardData = [
    {
      title: 'Punjab-National-Bank-Account-Opening-Form-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Account-Opening-Form-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Account-Opening-Form-for-Non-Individual-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Account-Opening-Form-for-Non-Individual-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Application-Form-for-ATM-Debit-Card-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Application-Form-for-ATM-Debit-Card-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Application-Form-For-Car-Loan-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Application-Form-For-Car-Loan-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Application-Form-for-Education-Loan-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Application-Form-for-Education-Loan-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Application-Form-For-Housing-Loan-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Application-Form-For-Housing-Loan-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Application-Form-For-Two-Wheeler-Loan-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Application-Form-For-Two-Wheeler-Loan-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Fixed-Deposit-Opening-Form-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Fixed-Deposit-Opening-Form-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Form-No-60-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Form-No-60-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-MSME-Loans-above-2-Crore-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-MSME-Loans-above-2-Crore-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-MSMELoans-Up-To-50-Lakh-Along-With-Check-List-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-MSMELoans-Up-To-50-Lakh-Along-With-Check-List-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-Nomination-Claim-Form-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-Nomination-Claim-Form-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-PNB-Suvidha-Card-Application-Form-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-PNB-Suvidha-Card-Application-Form-Download-in-PDF.pdf',
    },
    {
      title: 'Punjab-National-Bank-PPF-Forms-Download-in-PDF',
      CardType: '.pdf',
      url: '/documents/pnbletters/Punjab-National-Bank-PPF-Forms-Download-in-PDF.pdf',
    },
   

  ];

  return (
    <>
      <h5>PMB Bank Forms</h5>
      <p>All Forms are downloaded from <a href="https://www.pnbindia.in/" target="_blank">https://www.pnbindia.in/...</a></p>
      <div className="row mb-4 p-4 g-4">
        <FileCard card={cardData} />
      </div>
  
    </>
  )
}

export default PNBForms
