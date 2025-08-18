import React from 'react'
import ToolsCard from '../components/ToolsCard'

function PmKishanSammanNidhi() {
  const ToolsData =[

        
        {
            mainHeadText:'e-KYC करे​',
            detail:'',
            href:'https://pmkisan.gov.in/aadharekyc.aspx',
        },
        {
            mainHeadText:'e-KYC हुआ की नहीं जाने​',
            detail:'',
            href:'https://pmkisan.gov.in/aadharekyc.aspx',
        },
        {
            mainHeadText:'नए किसान का रजिस्ट्रेशन',
            detail:'',
            href:'https://pmkisan.gov.in/RegistrationFormupdated.aspx',
        },
        {
            mainHeadText:'सेल्फ रजिस्टर्ड किसान का स्टेटस /CSC',
            detail:'',
            href:'https://pmkisan.gov.in/FarmerStatus.aspx',
        },
        {
            mainHeadText:'सेल्फ रजिस्टर्ड किसान का अपडेट',
            detail:'',
            href:'https://pmkisan.gov.in/FarmerStatus.aspx',
        },
        {
            mainHeadText:'अपना स्टेटस चेक करे',
            detail:'',
            href:'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx',
        },
        {
            mainHeadText:'रजिस्ट्रेशन नम्वर जाने',
            detail:'',
            href:'https://pmkisan.gov.in/KnowYour_Registration.aspx',
        },
        {
            mainHeadText:'मोबाइल नंबर अपडेट करे',
            detail:'',
            href:'https://pmkisan.gov.in/MobileUpdation_Pub.aspx',
        },
        {
            mainHeadText:'नाम में सुधार करे',
            detail:'',
            href:'https://pmkisan.gov.in/NameCorrection.aspx',
        },
        {
            mainHeadText:'नई लाभार्थी सूची देखे',
            detail:'',
            href:'https://pmkisan.gov.in/Rpt_BeneficiaryStatus_pub.aspx',
        },
        {
            mainHeadText:'Official Website',
            detail:'',
            href:'https://pmkisan.gov.in',
        },
        {
            mainHeadText:'PM Kisan App डाउनलोड करे',
            detail:'',
            href:'https://play.google.com/store/apps/details?id=com.nic.project.pmkisan',
        },
        {
            mainHeadText:'सहायता',
            detail:'',
            href:'https://pmkisan.gov.in/Grievance.aspx',
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

export default PmKishanSammanNidhi
