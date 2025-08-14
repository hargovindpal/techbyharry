import React from 'react'
import ToolsCard from '../components/ToolsCard'
import { Button } from 'bootstrap'

function PanCardSewa() {
  const ToolsData =[

        {
            mainHeadText:'नया (PAN Card)पैनकार्ड बनाये(uti)',
            detail:'',
            href:'https://myaadhaar.uidai.gov.in/genricDownloadAadhaar/en',
        },
        {
            mainHeadText:'पैनकार्ड ट्रैक करे(uti)',
            detail:'',
            href:'https://www.trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp#forward',
        },
        {
            mainHeadText:'e PAN डाउनलोड करे(uti)',
            detail:'',
            href:'https://www.pan.utiitsl.com/PAN_ONLINE/ePANCardHome',
        },
         {
            mainHeadText:'पैनकार्ड पुनः प्रिंट करे(uti)',
            detail:'',
            href:'https://www.pan.utiitsl.com/newA.html',
        },
        {
            mainHeadText:'फ्री में पैनकार्ड बनाये',
            detail:'',
            href:'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan/getNewEpan',
        },
        {
            mainHeadText:'Instant PAN स्टेटस चेक करे',
            detail:'',
            href:'https://www.trackpan.utiitsl.com/PANONLINE/forms/TrackPan/trackApp#forward',
        },
        {
            mainHeadText:'Instant PAN डाउनलोड करे',
            detail:' ',
            href:'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/instant-e-pan/checkStatusDownloadEpan',
        },
        {
            mainHeadText:'आधार कार्ड लिंक करे',
            detail:'',
            href:'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/bl-link-aadhaar',
        },
        {
            mainHeadText:'18 वर्ष से कम उम्र के लिए माइनर पैनकार्ड बनाये',
            detail:'',
            href:'https://onlineservices.proteantech.in/paam/endUserRegisterContact.html',
        },
        {
            mainHeadText:'आधार लिंक का स्टेटस चेक करे',
            detail:'  ',
            href:'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status',
        },
        {
            mainHeadText:'पैनकार्ड में संशोधन करे(uti)',
            detail:'',
            href:'https://www.pan.utiitsl.com/csf.html',
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


export default PanCardSewa
