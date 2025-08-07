import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import LeaveApplicationPrincipal from '../components/letters/LeaveApplicationPrincipal';
import BankClosingLetter from '../components/letters/BankClosingLetter';
import BonafideCertificateLetter from '../components/letters/BonafideCertificateLetter';
import TCLetter from '../components/letters/TCLetter';
import InternshipOfferLetter from '../components/letters/InternshipOfferLetter';
import RentAgreementFormat from '../components/letters/RentAgreementFormat';


function Student_Misc_Letters() {

 const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'Leave Application to Principal (8)', component: <LeaveApplicationPrincipal /> },
    { name: 'Bank Account Closing Letter (5)', component: <BankClosingLetter /> },
    { name: 'Bonafide Certificated Letter (5)', component: <BonafideCertificateLetter /> },
    { name: 'TC Letter (5)', component: <TCLetter /> },
    { name: 'Internship Offer Letter (5)', component: <InternshipOfferLetter /> },
    { name: 'Rent Agreement Format (5)', component: <RentAgreementFormat /> },
  ];

  useEffect(() => {
    if (location.state?.selectedName) {
      const matched = items.find(item =>
        item.name.startsWith(location.state.selectedName)
      );
      if (matched) {
        setSelected(matched);
      }
    }
  }, [location.state]);

  return (
    <Layout
      left={
        <ListGroup
          listClassName="w-max-content"
          title="All Certificates"
          items={items}
          onSelect={setSelected}
          selectedItem={selected}
        />
      }
      right={<MainContainer selected={selected} />}
    />
  );
}

export default Student_Misc_Letters
