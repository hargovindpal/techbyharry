import React from 'react'
import ToolsCard from '../components/ToolsCard'

function GasSubsidy() {
  const ToolsData =[

        {
            mainHeadText:'Indane गैस सब्सिडी',
            detail:'',
            href:'https://cx.indianoil.in/EPICIOCL/faces/GrievanceMainPage.jspx',
        },
        {
            mainHeadText:'Know Your Indane LPG ID​',
            detail:'',
            href:'https://cx.indianoil.in/webcenter/portal/LPG/pages_findyourlpgid',
        },
        {
            mainHeadText:'HP गैस सब्सिडी​',
            detail:'',
            href:'https://myhpgas.in/myHPGas/HPGas/OptOutSubsidy.aspx',
        },
         {
            mainHeadText:'Know Your HP LPG ID',
            detail:'',
            href:'https://myhpgas.in/myHPGas/HPGas/FindYourLPGID.aspx',
        },
        {
            mainHeadText:'BHARAT गैस सब्सिडी​',
            detail:'',
            href:'https://my.ebharatgas.com/GiveUpSubsidy/Index',
        },
        {
            mainHeadText:'Know Your BHARAT LPG ID',
            detail:'',
            href:'https://my.ebharatgas.com/LPGServices/FindLPGID',
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
export default GasSubsidy
