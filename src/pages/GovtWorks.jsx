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
            href:'/PanCardSewa',
        },
        {
            imgUrl:'/govtWorksImg/PM_AVAAS.jpg',
            mainHeadText:'पीएम आवास योजना',
            detail:'पीएम आवास से जुड़ीं सारी सुविधायें',
            href:'/PmAwaas',
        },
        {
            imgUrl:'/govtWorksImg/uppcl.jpg',
            mainHeadText:'UPPCL ELECTRICITY',
            detail:'UPPCL से जुड़ीं सारी सुविधायें',
            href:'https://consumer.uppcl.org/wss/home',
        },
        {
            imgUrl:'/govtWorksImg/abhaCard.png',
            mainHeadText:'(ABHA) आभा कार्ड',
            detail:'आभा कार्ड से जुड़ीं सारी सुविधायें',
            href:'/AbhaCardSewa',
        },
         {
            imgUrl:'/govtWorksImg/VOTER_CARD.jpg',
            mainHeadText:'(VOTER)वोटर कार्ड ',
            detail:'वोटर कार्ड से जुड़ीं सारी सुविधायें',
            href:'/VoterIdCardSewa',
        },
       {
            imgUrl:'/govtWorksImg/apaar_card.webp',
            mainHeadText:'(APAAR ID) कार्ड ',
            detail:'(APAAR ID) कार्ड से जुड़ीं सारी सुविधायें',
            href:'/ApaarIdSewa',
        },
        {
            imgUrl:'/govtWorksImg/gas_subsidy.webp',
            mainHeadText:'गैस सब्सिडी ',
            detail:'गैस सब्सिडी से जुड़ीं सारी सुविधायें',
            href:'/GasSubsidy',
        },
        {
            imgUrl:'/govtWorksImg/Ration_Card.jpg',
            mainHeadText:'राशन कार्ड ',
            detail:'राशन कार्ड से जुड़ीं सारी सुविधायें',
            href:'/RationCardSewa',
        },
       {
            imgUrl:'/govtWorksImg/NSP_NationalScholarship.jpg',
            mainHeadText:'NSP नेशनल स्कालरशिप ',
            detail:'NSP नेशनल स्कालरशिप से जुड़ीं सारी सुविधायें',
            href:'/ScholarshipYojana',
        },
        {
            imgUrl:'/govtWorksImg/shochlayaYojana.jpg',
            mainHeadText:'शौचालय योजना (रू.12000) ',
            detail:'शौचालय योजना से जुड़ीं सारी सुविधायें',
            href:'/ShochalayaYojana',
        },
        {
            imgUrl:'/govtWorksImg/Pm_KishanYojana.jpg',
            mainHeadText:'पीएम किसान ',
            detail:'पीएम किसान से जुड़ीं सारी सुविधायें',
            href:'/PmKishanSammanNidhi',
        },
        {
            imgUrl:'/govtWorksImg/bhoolekh.png',
            mainHeadText:'भूलेख ',
            detail:'भूलेख से जुड़ीं सारी सुविधायें',
            href:'/BhoolekhSewa',
        },
        
    ]

  return (
    <>
    <div className="jumbotron d-flex justify-content-center flex-column content-center">
        <div className="heading col-8 mx-auto mt-4">
          <h1 className="display-8 text-center">
            All-in-One Website for Government Portals!
          </h1>
        </div>
        <div className="para col-10 mx-auto">
          <p className="lead fw-semibold text-center">
            आज के डिजिटल युग में हर नागरिक को सरकारी काम जैसे आधार कार्ड, पैन कार्ड, नरेगा जॉब कार्ड, राशन कार्ड, और विभिन्न योजनाओं की जानकारी की जरूरत होती है। हम आपके लिए लाए हैं एक ऐसा प्लेटफॉर्म जहाँ ये सभी सरकारी काम एक क्लिक में उपलब्ध हैं।
          </p>
        </div>
        <hr className="my-4" />
      </div>


    <div className="container-fluid">
        <div className="row mb-4 p-4">
              <ToolsCard ToolCard={ToolsData} style={{ backgroundColor: "0f172a" }}
                listClassName="col-md-3 mb-3 bg-dark"
                MainTextColor="black"
                />
        </div>
      </div>
      
    </>
  )
}

export default GovtWorks
