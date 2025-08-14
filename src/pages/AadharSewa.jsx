import React from 'react'
import ToolsCard from '../components/ToolsCard'

function AadharSewa() {
const ToolsData =[

        { 
            mainHeadText:'अपॉइंटमेंट बुक करे',
            detail:'',
            href:'https://appointments.uidai.gov.in/bookappointment.aspx',
        },
        {
            mainHeadText:'आधार कार्ड डाउनलोड करे',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en',
        },
        {
            mainHeadText:'आधार PDF का पासवर्ड',
            detail:'',
            href:'https://sarkaricsc.com/aadhaar-card-password-checker',
        },
        {
            mainHeadText:'मोबाइल नंबर या ईमेल वैरीफाइ करे',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in/verify-email-mobile/en',
        },
         {
            mainHeadText:'PVC आधार कार्ड आर्डर करे',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in/genricPVC/en',
        },
        {
            mainHeadText:'PVC आधार कार्ड का आर्डर स्टेटस जाने',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in/checkStatus/en',
        },
        {
            mainHeadText:'आधार कार्ड का स्टेटस चेक करे',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in/CheckAadhaarStatus/en',
        },
        {
            mainHeadText:'ऑफिसियल वेबसाइट पर जाये',
            detail:' ',
            href:'https://uidai.gov.in',
        },
        {
            mainHeadText:'आधार कार्ड में पता बदले',
            detail:'',
            href:'https://tathya.uidai.gov.in/access/login?role=resident',
        },
        {
            mainHeadText:'आधार कार्ड में संशोधन करे',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in',
        },
        {
            mainHeadText:'आधार में जुड़े मोबाइल नंबर चेक करे',
            detail:'  ',
            href:'https://myaadhaar.uidai.gov.in/check-aadhaar-validity',
        },
        {
            mainHeadText:'नाम और मोबाइल नंबर से आधार कार्ड नंबर जाने',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in/retrieve-eid-uid',
        },
        {
            mainHeadText:'अपने आस पास नजदीकी आधार सेंटर जाने',
            detail:'',
            href:'https://bhuvan-app3.nrsc.gov.in/aadhaar',
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


export default AadharSewa
