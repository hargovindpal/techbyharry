import React from 'react'
import FileCard from '../FileCard';

function HDFCForms() {

  const cardData = [
    {
      title: 'HDFC-Bank-Account-Opening-Form-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Account-Opening-Form-in-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-Account-Opening-Form',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Account-Opening-Form.pdf',
    },
    {
      title: 'HDFC-Bank-Account-Transfer-Form-for-Current-and-Saving-account-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Account-Transfer-Form-for-Current-and-Saving-account-in-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-Application-for-Change-in-EMI-Due-Date',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Application-for-Change-in-EMI-Due-Date.pdf',
    },
    {
      title: 'HDFC-Bank-Combined-Address-Change-on-Savings-demat-Assets-and-Credit-card',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Combined-Address-Change-on-Savings-demat-Assets-and-Credit-card.pdf',
    },
    {
      title: 'HDFC-Bank-Customer-Profile-Updation-Form-for-Individual-Non-Individual-Account',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Customer-Profile-Updation-Form-for-Individual-Non-Individual-Account.pdf',
    },
    {
      title: 'HDFC-Bank-DBT-Consent-form-for-Aadhar-Seeding-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-DBT-Consent-form-for-Aadhar-Seeding-in-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-DD-MC-and-RTGS-NEFT-Application-Form',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-DD-MC-and-RTGS-NEFT-Application-Form.pdf',
    },
    {
      title: 'HDFC-Bank-Deposit-Slip-for-cash-and-cheques-only',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Deposit-Slip-for-cash-and-cheques-only.pdf',
    },
    {
      title: 'HDFC-Bank-Dormant-Activation-Form-For-Resident-Individual-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Dormant-Activation-Form-For-Resident-Individual-in-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-Education-Loan-Application-Form',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Education-Loan-Application-Form.pdf',
    },
    {
      title: 'HDFC-BANK-Form-60-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-BANK-Form-60-in-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-KYC-Documents',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-KYC-Documents.pdf',
    },
    {
      title: 'HDFC-Bank-Loan-Application-Form',
      CardType: '.pdf',
      url: 'public/documents/hdfcletters/HDFC-Bank-Loan-Application-Form.pdf',
    },
    {
      title: 'HDFC-Bank-Name-OR-Signature-OR-Mode-of-Operations-Form-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Name-OR-Signature-OR-Mode-of-Operations-Form-in-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-NEFT-Standing-Instruction-Form',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-NEFT-Standing-Instruction-Form.pdf',
    },
    {
      title: 'HDFC-Bank-Nomination-Addition-Form',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Nomination-Addition-Form.pdf',
    },
    {
      title: 'HDFC-Bank-Product-Conversion-Form-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Product-Conversion-Form-in-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-Re-KYC-form-for-Resident-Individuals-In-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Re-KYC-form-for-Resident-Individuals-In-PDF-Download.pdf',
    },
    {
      title: 'HDFC-Bank-Salary-Account-Opening-Form-in-PDF-Download',
      CardType: '.pdf',
      url: '/documents/hdfcletters/HDFC-Bank-Salary-Account-Opening-Form-in-PDF-Download.pdf',
    },


  ];

  return (
    <>
      <h5>HDFC Bank Forms</h5>
      <p>All Forms are downloaded from <a href="https://www.hdfcbank.com/" target="_blank">https://www.hdfcbank.com/...</a></p>
      <div className="row mb-4 p-4 g-4">
        <FileCard card={cardData} />
      </div>
  
    </>
  )
}

export default HDFCForms
