import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import ListGroup from '../components/ListGroup';
import MainContainer from '../components/MainContainer';
import Layout from '../components/Layout';

import PowerPointTemplates from '../components/productive/PowerPointTemplates';
import PaymentVoucher from '../components/productive/PaymentVoucher';
import ShortcutKeys from '../components/productive/ShortcutKeys';
import YouTubeArt from '../components/productive/YouTubeArt';
import YouTubeNameIdeas from '../components/productive/YouTubeNameIdeas';
import PhotoshopClipArts from '../components/productive/PhotoshopClipArts';
import CorelFormats from '../components/productive/CorelFormats';


function Productive() {
 const location = useLocation(); // ✅ ADD THIS LINE
  const [selected, setSelected] = useState(null);

  const items = [
    { name: 'PowerPoint Templates (20)', component: <PowerPointTemplates /> },
    { name: 'Payment Voucher (50)', component: <PaymentVoucher /> },
    { name: 'Shortcut Keys (80)', component: <ShortcutKeys /> },
    { name: 'YouTube Art (30)', component: <YouTubeArt /> },
    { name: 'YouTube Name Ideas (2000)', component: <YouTubeNameIdeas /> },
    { name: 'Photoshop Clip Arts', component: <PhotoshopClipArts /> },
    { name: 'Corel Formats', component: <CorelFormats /> },
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

export default Productive
