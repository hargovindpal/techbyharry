import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import AccountantJobLetter from '../components/employment/AccountantJobLetter';
import WarningLetter from '../components/employment/WarningLetter';
import TerminationLetter from '../components/employment/TerminationLetter';
import JobApplicationCover from '../components/employment/JobApplicationCover';
import InternshipExperienceLetter from '../components/employment/InternshipExperienceLetter';
import HolidayAnnouncement from '../components/employment/HolidayAnnouncement';


function EmployeeManagement() {

  const location = useLocation();
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'Accountant Job Letter (5)', component: <AccountantJobLetter /> },
    { name: 'Warning Letter To Employee (5)', component: <WarningLetter /> },
    { name: 'Termination Letter (5)', component: <TerminationLetter /> },
    { name: 'Job Application Cover Letter (5)', component: <JobApplicationCover /> },
    { name: 'Internship Experience Letter (5)', component: <InternshipExperienceLetter /> },
    { name: 'Holiday Announcement (5)', component: <HolidayAnnouncement /> },
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

export default EmployeeManagement
