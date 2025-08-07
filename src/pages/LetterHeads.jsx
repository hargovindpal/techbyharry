import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import RestaurantLetterhead from '../components/letterhead/RestaurantLetterhead';
import ArchitectureLetterhead from '../components/letterhead/ArchitectureLetterhead';
import RealEstateLetterhead from '../components/letterhead/RealEstateLetterhead';
import EventPlannerLetterhead from '../components/letterhead/EventPlannerLetterhead';
import LawyerLetterhead from '../components/letterhead/LawyerLetterhead';
import DoctorLetterhead from '../components/letterhead/DoctorLetterhead';
import PharmacyLetterhead from '../components/letterhead/PharmacyLetterhead';
import OtherLetterhead from '../components/letterhead/OtherLetterhead'


function LetterHeads() {
 const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'Restaurant Letterhead (20)', component: <RestaurantLetterhead /> },
    { name: 'Architecture Letterhead (20)', component: <ArchitectureLetterhead /> },
    { name: 'Real Estate Letterhead (20)', component: <RealEstateLetterhead /> },
    { name: 'Event Planner Letterhead (20)', component: <EventPlannerLetterhead /> },
    { name: 'Lawyer Letterhead (20)', component: <LawyerLetterhead /> },
    { name: 'Doctor Letterhead (20)', component: <DoctorLetterhead /> },
    { name: 'Pharmacy Letterhead (20)', component: <PharmacyLetterhead /> },
    { name: 'OtherLetterhead (20)', component: <OtherLetterhead/> },
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

export default LetterHeads
