import React, {useState} from 'react'
import ListGroup from '../components/Listgroup'
import MainContainer from '../components/MainContainer'
import Layout from '../components/Layout'
import WarrantyCertificate from '../components/certificates/WarrantyCertificate'
import ExperienceCertificate from '../components/certificates/ExperienceCertificate'

function Certificates() {

  const [selected, setSelected] = useState(null)

  const items = [
    { name: "Warranty Certificates (20)",  component: <WarrantyCertificate />},
    { name: "Experience Certificates (30)",  component: <ExperienceCertificate /> },
    { name: "Medical Certificates (10)", url: "/Certificates" },
    { name: "Bonafide Certificate (10)", url: "/Certificates" },
    { name: "Transfer Certificate (5)", url: "/Certificates" },
    { name: "Character Certificate (5)", url: "/Certificates" },
    { name: "Course Certificate (10)", url: "/Certificates" },
  ];
  
  return (
    
    <>
          <Layout
            left={
              <ListGroup listClassName="w-max-content"
                title="All Certificates"
                items={items}
                onSelect={setSelected}
              />
            }

            right={<MainContainer selected={selected}/>}
          
        />
                
        
    </>
  )
}

export default Certificates
