import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import FileConvertor from '../components/tools/FileConvertor';
import IncomeTaxCalculator from '../components/tools/IncomeTaxCalculator';
import WhatsAppNoSaver from '../components/tools/WhatsAppNoSaver';
import DateToTextConverter from '../components/tools/DateToTextConverter';
import GSTBulkCalculator from '../components/tools/GSTBulkCalculator';
import AgeCalculator from '../components/tools/AgeCalculator';
import EMICalculator from '../components/tools/EMICalculator';


function OnlineTools() {
  
  const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'File Convertor', component: <FileConvertor /> },
    { name: 'Income Tax Calculator', component: <IncomeTaxCalculator /> },
    { name: 'WhatsApp without Save No.', component: <WhatsAppNoSaver /> },
    { name: 'Date to Text Converter', component: <DateToTextConverter /> },
    { name: 'GST Calculator for Bulk', component: <GSTBulkCalculator /> },
    { name: 'Age Calculator', component: <AgeCalculator /> },
    { name: 'EMI Calculator', component: <EMICalculator /> },
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

export default OnlineTools
