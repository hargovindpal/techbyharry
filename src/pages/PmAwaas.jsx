import React from 'react'
import ToolsCard from '../components/ToolsCard'

function PmAwaas() {
 const ToolsData =[

        {
            mainHeadText:'आवास लिस्ट',
            detail:'',
            href:'https://rhreporting.nic.in/netiay/SocialAuditReport/BeneficiaryDetailForSocialAuditReport.aspx',
        },
        {
            mainHeadText:'IAY/PMAYG Beneficiary',
            detail:'',
            href:'https://awaassoft.nic.in/netiay/Benificiary.aspx',
        },
        {
            mainHeadText:'आधिकारिक वेबसाइट',
            detail:'',
            href:'https://pmayg.dord.gov.in/netiayHome/home.aspx',
        },
         {
            mainHeadText:'FTO Tracking',
            detail:'',
            href:'https://awaassoft.nic.in/netiay/AwaasPlus/secc_fm_details.aspx',
        },
        {
            mainHeadText:'SECC Family Member Details',
            detail:'',
            href:'https://awaassoft.nic.in/netiay/fto_transaction_details.aspx',
        },
        {
            mainHeadText:'Awas+ App Download',
            detail:'',
            href:'https://play.google.com/store/apps/details?id=r.rural.awaasplus_2_0',
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

export default PmAwaas
