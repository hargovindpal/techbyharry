import React from 'react'
import ToolsCard from '../components/ToolsCard'

function RationCardSewa() {
  const ToolsData =[

        
        {
            mainHeadText:'राशन कार्ड (उत्तर प्रदेश)​',
            detail:'',
            href:'https://fcs.up.gov.in',
        },
        {
            mainHeadText:'राशन कार्ड (मध्यप्रदेश)​',
            detail:'',
            href:'https://csmsmpscsc.mp.gov.in/rationmitra',
        },
       {
            mainHeadText:'राशन कार्ड (बिहार)​',
            detail:'',
            href:'https://epds.bihar.gov.in/#',
        },
        {
            mainHeadText:'राशन कार्ड (राजस्थान)​',
            detail:'',
            href:'https://food.rajasthan.gov.in',
        },

         {
            mainHeadText:'राशन कार्ड (हरियाणा)​',
            detail:'',
            href:'https://epos.haryanafood.gov.in',
        },
         {
            mainHeadText:'राशन कार्ड (उत्तराखंड)​',
            detail:'',
            href:'https://rcmspds.uk.gov.in',
        },
         {
            mainHeadText:'राशन कार्ड (झारखण्ड)​',
            detail:'',
            href:'https://aahar.jharkhand.gov.in/secc-districts/districts',
        },
         {
            mainHeadText:'राशन कार्ड (छत्तीसगढ़)​',
            detail:'',
            href:'https://fcs.cg.gov.in/citizen',
        },
         {
            mainHeadText:'राशन कार्ड (हिमाचल प्रदेश)​',
            detail:'',
            href:'https://epds.hp.gov.in',
        },
        {
            mainHeadText:'राशन कार्ड (दिल्ली)​',
            detail:'',
            href:'https://epos.delhi.gov.in',
        },
        {
            mainHeadText:'राशन कार्ड (गुजरात)​',
            detail:'',
            href:'https://ipds.gujarat.gov.in',
        },
        {
            mainHeadText:'राशन कार्ड (पंजाब)​',
            detail:'',
            href:'https://ercms.punjab.gov.in',
        },
        {
            mainHeadText:'मोबाइल एप डाउनलोड करें ',
            detail:'',
            href:'https://scm.up.gov.in/food/DownloadAppMobile.aspx',
        },
       
    ]

  return (
    <>
    
    <div className="container-fluid">
        <div className="row mb-4 p-4">
              <ToolsCard ToolCard={ToolsData}
                listClassName="col-md-3 mb-3 bg-light-Blue"
                MainTextColor = "txt-yellow bg"
                ImgToggle ="disp-none"
                noWhiteBg={true}
                />
        </div>
      </div>
      
    </>
  )
}
export default RationCardSewa
