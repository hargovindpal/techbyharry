import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import SchoolTeacherResume from '../components/resumes/SchoolTeacherResume';
import ATSFriendlyResume from '../components/resumes/ATSFriendlyResume';
import WebDeveloperResume from '../components/resumes/WebDeveloperResume';
import DoctorResume from '../components/resumes/DoctorResume';
import EngineerResume from '../components/resumes/EngineerResume';
import PhotographerResume from '../components/resumes/PhotographerResume';
import MISExecutiveResume from '../components/resumes/MISExecutiveResume';



function Resume_CV_Templates() {
  
  const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'School Teacher Resume (20)', component: <SchoolTeacherResume /> },
    { name: 'ATS Friendly Resume (20)', component: <ATSFriendlyResume /> },
    { name: 'Web Developer Resume (20)', component: <WebDeveloperResume /> },
    { name: 'Doctor Resume (20)', component: <DoctorResume /> },
    { name: 'Engineer Resume (20)', component: <EngineerResume /> },
    { name: 'Photographer Resume (20)', component: <PhotographerResume /> },
    { name: 'MIS Executive Resume (20)', component: <MISExecutiveResume /> },
    
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


export default Resume_CV_Templates
