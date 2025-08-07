import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import SalaryIncrementOfferLetter from '../components/letters/SalaryIncrementOfferLetter';
import SalaryIncrementRequestLetter from '../components/letters/SalaryIncrementRequestLetter';
import JobJoiningLetter from '../components/letters/JobJoiningLetter';
import AppointmentLetter from '../components/letters/AppointmentLetter';
import ResignationLetter from '../components/letters/ResignationLetter';


function HRLetters() {
   const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'Salary Increment Offer Letter (5)', component: <SalaryIncrementOfferLetter /> },
    { name: 'Salary Increment Request (5)', component: <SalaryIncrementRequestLetter /> },
    { name: 'Job Joining Letter (5)', component: <JobJoiningLetter /> },
    { name: 'Appointment Letter (20)', component: <AppointmentLetter /> },
    { name: 'Resignation Letter (20)', component: <ResignationLetter /> },
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


export default HRLetters
