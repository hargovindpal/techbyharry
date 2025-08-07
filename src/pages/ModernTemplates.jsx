import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import MarriageBiodataTemplate from '../components/templates/MarriageBiodataTemplate';
import CVResumeTemplate from '../components/templates/CVResumeTemplate';
import CoverLetter from '../components/templates/CoverLetter';
import AccountantResume from '../components/templates/AccountantResume';
import FresherResume from '../components/templates/FresherResume';
import ComputerOperatorResume from '../components/templates/ComputerOperatorResume';



function ModernTemplates() {
  const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'Marriage Biodata Templates (120)', component: <MarriageBiodataTemplate /> },
    { name: 'CV / Resume Templates (350)', component: <CVResumeTemplate /> },
    { name: 'Cover Letter for Resume (56)', component: <CoverLetter /> },
    { name: 'Accountant Resumes (20)', component: <AccountantResume /> },
    { name: 'Fresher Resumes (10)', component: <FresherResume /> },
    { name: 'Computer Operator Resumes (20)', component: <ComputerOperatorResume /> },
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

export default ModernTemplates
