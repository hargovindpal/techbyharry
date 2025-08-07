import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import BankStatementRequestLetter from '../components/NOC/BankStatementRequestLetter';
import NOCBankLetter from '../components/noc/NOCBankLetter';
import NOCGSTLetter from '../components/NOC/NOCGSTLetter';
import NOCVisaLetter from '../components/NOC/NOCVisaLetter';
import NOCVehicleLetter from '../components/NOC/NOCVehicleLetter';
import UndertakingLetter from '../components/NOC/UndertakingLetter';


function Bank_NOC_Letters() {

    const location = useLocation(); 
    const [selected, setSelected] = useState(null);

  const items = [
    { name: 'Bank Statement Request Letter (5)', component: <BankStatementRequestLetter /> },
    { name: 'NOC Letter Format for Bank (5)', component: <NOCBankLetter /> },
    { name: 'NOC Letter for GST (5)', component: <NOCGSTLetter /> },
    { name: 'NOC Letter for Visa (5)', component: <NOCVisaLetter /> },
    { name: 'NOC Letter for Vehicle (5)', component: <NOCVehicleLetter /> },
    { name: 'Undertaking Letter (5)', component: <UndertakingLetter /> },
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


export default Bank_NOC_Letters
