import React from 'react'
import ToolsCard from '../components/ToolsCard'
function AbhaCardSewa() {
const ToolsData =[

        {
            mainHeadText:'नया ABHA Card बनाये',
            detail:'',
            href:'https://abha.abdm.gov.in/abha/v3/register',
        },
        {
            mainHeadText:'ABHA Card Login',
            detail:'',
            href:'https://abha.abdm.gov.in/abha/v3/login',
        },
        {
            mainHeadText:'ABHA Card डाउनलोड करे',
            detail:'',
            href:'https://abha.abdm.gov.in/abha/v3/login',
        },
         {
            mainHeadText:'भूले हुए ABHA नंबर पता करे',
            detail:'',
            href:'https://abha.abdm.gov.in/abha/v3/login/recover',
        },
        {
            mainHeadText:'Enrollment नंबर पता करे',
            detail:'',
            href:'https://abha.abdm.gov.in/abha/v3/login/track',
        },
        {
            mainHeadText:'e-KYC करे',
            detail:'',
            href:'https://abha.abdm.gov.in/abha/v3/login',
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

export default AbhaCardSewa
