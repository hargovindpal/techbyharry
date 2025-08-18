import React from 'react'
import ToolsCard from '../components/ToolsCard'

function BhoolekhSewa() {
   const ToolsData =[

        {
            mainHeadText:'उत्तर प्रदेश',
            detail:'',
            href:'https://upbhulekh.gov.in/#/selection',
        },
        {
            mainHeadText:'राजस्थान',
            detail:'',
            href:'https://apnakhata.rajasthan.gov.in',
        },
        {
            mainHeadText:'बिहार',
            detail:'',
            href:'https://parimarjan.bihar.gov.in/biharBhumireport/ViewJamabandi',
        },
         {
            mainHeadText:'मध्यप्रदेश',
            detail:'',
            href:'https://mpbhulekh.gov.in/mpbhulekh.do',
        },
        {
            mainHeadText:'हरियाणा',
            detail:'',
            href:'https://jamabandi.nic.in/defaultpages/default',
        },
        {
            mainHeadText:'उत्तराखंड',
            detail:'',
            href:'https://bhulekh.uk.gov.in/public/public_ror/Public_ROR.jsp',
        },
         {
            mainHeadText:'झारखण्ड',
            detail:'',
            href:'https://jharbhoomi.jharkhand.gov.in/MISRegister2/DistrictMap',
        },
         {
            mainHeadText:'छत्तीसगढ़',
            detail:'',
            href:'https://revenue.cg.nic.in/bhuiyanuser/User/Selection_Report_For_KhasraDetail.aspx',
        },
         {
            mainHeadText:'हिमाचल प्रदेश',
            detail:'',
            href:'https://himbhoomilmk.nic.in',
        },
         {
            mainHeadText:'महाराष्ट्र',
            detail:'',
            href:'https://bhulekh.mahabhumi.gov.in',
        },
         {
            mainHeadText:'ओडिशा',
            detail:'',
            href:'https://bhulekh.ori.nic.in/RoRView.aspx',
        },
         {
            mainHeadText:'पश्चिम बंगाल',
            detail:'',
            href:'https://banglarbhumi.gov.in/BanglarBhumi/Home.action#',
        },
         {
            mainHeadText:'दिल्ली',
            detail:'',
            href:'https://dlrc.delhi.gov.in/Default.aspx',
        },
         {
            mainHeadText:'गुजरात',
            detail:'',
            href:'https://anyror.gujarat.gov.in',
        },
         {
            mainHeadText:'असम',
            detail:'',
            href:'https://ilrms.assam.gov.in',
        },
        {
            mainHeadText:'अरुणाचल प्रदेश',
            detail:'',
            href:'https://eservice.arunachal.gov.in',
        },
        {
            mainHeadText:'पंजाब',
            detail:'',
            href:'https://jamabandi.punjab.gov.in',
        },
        {
            mainHeadText:'चंडीगढ़',
            detail:'',
            href:'https://revenue.chd.gov.in',
        },
        {
            mainHeadText:'गोवा',
            detail:'',
            href:'https://dslr.goa.gov.in',
        },
        {
            mainHeadText:'सिक्किम',
            detail:'',
            href:'https://www.sikkimlrdm.gov.in/lrd/LandReg.html',
        },
        {
            mainHeadText:'मणिपुर',
            detail:'',
            href:'https://louchapathap.nic.in/egras/frmPayTax.aspx',
        },
        {
            mainHeadText:'मेघालय',
            detail:'',
            href:'https://megrevenuedm.gov.in/dlrs/dlrs_aboutus.html',
        },
        {
            mainHeadText:'मिजोरम',
            detail:'',
            href:'https://megrevenuedm.gov.in',
        },
        {
            mainHeadText:'कर्नाटक',
            detail:'',
            href:'https://landrecords.karnataka.gov.in',
        },
        {
            mainHeadText:'तेलंगाना',
            detail:'',
            href:'https://bhubharati.telangana.gov.in/homePage?lang=en',
        },
        {
            mainHeadText:'आँध्रप्रदेश',
            detail:'',
            href:'https://meebhoomi.ap.gov.in',
        },
        {
            mainHeadText:'तमिलनाडु',
            detail:'',
            href:'https://eservices.tn.gov.in/eservicesnew/index.html',
        },
        {
            mainHeadText:'केरल',
            detail:'',
            href:'https://dslr.kerala.gov.in/en/erekha',
        },
        {
            mainHeadText:'त्रिपुरा',
            detail:'',
            href:'https://jami.tripura.gov.in/Citizen_Service/citiz_ror.aspx',
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


export default BhoolekhSewa
