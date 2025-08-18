import React from 'react'
import ToolsCard from '../components/ToolsCard'

function VoterIdCardSewa() {
  const ToolsData =[

        {
            mainHeadText:'NEW Voter Card Registration',
            detail:'',
            href:'https://voters.eci.gov.in/signup',
        },
        {
            mainHeadText:'Voter Card login',
            detail:'',
            href:'https://voters.eci.gov.in/login',
        },
        {
            mainHeadText:'मतदाता सूची में नाम चेक करे',
            detail:'',
            href:'https://electoralsearch.eci.gov.in',
        },
         {
            mainHeadText:'आवेदन का स्टेटस चेक करे',
            detail:'',
            href:'https://voters.eci.gov.in/login',
        },
        {
            mainHeadText:'वोटर कार्ड में गलती सुधारे',
            detail:'',
            href:'वोटर कार्ड में गलती सुधारे',
        },
        {
            mainHeadText:'वोटर कार्ड EPIC नंबर जाने',
            detail:'',
            href:'https://electoralsearch.eci.gov.in',
        },
        {
            mainHeadText:'वोटर कार्ड(EPIC) डाउनलोड करे',
            detail:' ',
            href:'voters.eci.gov.in/home/e-epic-download',
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


export default VoterIdCardSewa
