import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import WarrantyCertificate from '../components/certificates/WarrantyCertificate';
import ExperienceCertificate from '../components/certificates/ExperienceCertificate';
import MedicalCertificate from '../components/certificates/MedicalCertificate';
import BonafideCertificate from '../components/certificates/BonafideCertificate';
import TransferCertificate from '../components/certificates/TransferCertificate';
import CharacterCertificate from '../components/certificates/CharacterCertificate';
import CourseCertificate from '../components/certificates/CourseCertificate';
import NocCertificate from '../components/certificates/NocCertificate';

function Certificates() {
  const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: "Warranty Certificates (20)", component: <WarrantyCertificate /> },
    { name: "Bonafide Certificate (10)", component: <BonafideCertificate /> },
    { name: "Experience Certificates (30)", component: <ExperienceCertificate /> },
    { name: "Medical Certificates (10)", component: <MedicalCertificate /> },
    { name: "NOC Certificate (10)", component: <NocCertificate/> },
    { name: "Transfer Certificate (5)", component: <TransferCertificate /> },
    { name: "Character Certificate (5)", component: <CharacterCertificate /> },
    { name: "Course Certificate (10)", component: <CourseCertificate /> },
    
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

export default Certificates;
