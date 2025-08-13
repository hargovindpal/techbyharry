import React from 'react'
import ToolsCard from '../components/ToolsCard'
function GovtWorks() {

    const ToolsData =[

        {
            imgUrl:'/govtWorksImg/aadhaarCard.jpg',
            mainHeadText:'आधार सेवा',
            detail:'आधार कार्ड से जुड़ीं सारी सुविधायें',
            href:'/AadharSewa',
        },
        {
            imgUrl:'/govtWorksImg/panCard.jpg',
            mainHeadText:'पैन सेवा',
            detail:'पैन कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://www.resumeground.com/create-resume',
        },
        {
            imgUrl:'/govtWorksImg/PM_AVAAS.jpg',
            mainHeadText:'पीएम आवास योजना',
            detail:'पीएम आवास से जुड़ीं सारी सुविधायें',
            href:'https://www.iloveimg.com/upscale-image',
        },
        {
            imgUrl:'/govtWorksImg/abhaCard.png',
            mainHeadText:'(ABHA) आभा कार्ड',
            detail:'आभा कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://me-qr.com/qr-code-generator',
        },
         {
            imgUrl:'/govtWorksImg/VOTER_CARD.jpg',
            mainHeadText:'(VOTER)वोटर कार्ड ',
            detail:'वोटर कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://me-qr.com/qr-code-generator',
        },
       {
            imgUrl:'/govtWorksImg/apaar_card.webp',
            mainHeadText:'(APAAR ID) कार्ड ',
            detail:'(APAAR ID) कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://me-qr.com/qr-code-generator',
        },
        {
            imgUrl:'/govtWorksImg/gas_subsidy.webp',
            mainHeadText:'गैस सब्सिडी ',
            detail:'गैस सब्सिडी से जुड़ीं सारी सुविधायें',
            href:'https://me-qr.com/qr-code-generator',
        },
        {
            imgUrl:'/govtWorksImg/Ration_Card.jpg',
            mainHeadText:'राशन कार्ड ',
            detail:'राशन कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://me-qr.com/qr-code-generator',
        },
       
        
    ]

  return (
    <>
    
    <div className="container-fluid">
        <div className="row mb-4 p-4">
              <ToolsCard ToolCard={ToolsData} style={{ backgroundColor: "0f172a" }}
                listClassName="col-md-3 mb-3 bg-dark"
                />
        </div>
      </div>
      
    </>
  )
}

export default GovtWorks
