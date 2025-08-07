import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import CitiBankForms from '../components/bankforms/CitiBankForms';
import PNBForms from '../components/bankforms/PNBForms';
import HDFCForms from '../components/bankforms/HDFCForms';
import AxisBankForms from '../components/bankforms/AxisBankForms';


function BankForms() {
  const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'Citi Bank Forms', component: <CitiBankForms /> },
    { name: 'PNB Forms', component: <PNBForms /> },
    { name: 'HDFC Forms', component: <HDFCForms /> },
    { name: 'Axis Bank Forms', component: <AxisBankForms /> },
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

export default BankForms
