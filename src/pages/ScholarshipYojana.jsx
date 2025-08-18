import React from 'react'
import ToolsCard from '../components/ToolsCard'

function ScholarshipYojana() {
const ToolsData =[

        
        {
            mainHeadText:'UP Scholarship (Official Website)​',
            detail:'',
            href:'https://scholarship.up.gov.in',
        },
        {
            mainHeadText:'NSP Scholarship (Official Website)​',
            detail:'',
            href:'https://scholarships.gov.in',
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

export default ScholarshipYojana
