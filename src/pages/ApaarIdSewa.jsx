import React from 'react'
import ToolsCard from '../components/ToolsCard'

function ApaarIdSewa() {
  const ToolsData =[

        {
            mainHeadText:'New Registration',
            detail:'',
            href:'https://digilocker.meripehchaan.gov.in/signup/oauth_partner/%252Foauth2%252F1%252Fconsent%253Flogo%253D1722497944_abc.png%2526amr%253Dpan%252Bdriving_licence%252Baadhaar%252Bapaar%2526response_type%253Dcode%2526client_id%253D08627FE5%2526state%253D102%2526redirect_uri%253Dhttps%25253A%25252F%25252Fabc.digilocker.gov.in%25252Fsignup%25252Fcallback_data%2526scope%253Dopenid%252Bpicture%2526orgid%253D002585%2526txn%253D67aaff6723afcoauth21739259751%2526hashkey%253Dab0c2c431c2eb7b15b19509b61a5bd6db75964a2b0d1b90a34867c228e4df3ca%2526requst_pdf%253DY%2526app_name%253DQWNhZGVtaWMgQmFuayBvZiBDcmVkaXRz%2526signup%253Dsignup',
        },
        {
            mainHeadText:'login',
            detail:'',
            href:'https://digilocker.meripehchaan.gov.in/signin/oauth_partner/%252Foauth2%252F1%252Fconsent%253Flogo%253D1722497944_abc.png%2526amr%253Dpan%252Bdriving_licence%252Baadhaar%252Bapaar%2526response_type%253Dcode%2526client_id%253D08627FE5%2526state%253D102%2526redirect_uri%253Dhttps%25253A%25252F%25252Fabc.digilocker.gov.in%25252Fsignup%25252Fcallback_data%2526scope%253Dopenid%252Bpicture%2526orgid%253D002585%2526txn%253D67ab015eb5a95oauth21739260254%2526hashkey%253D3aaf05b860d567039e10703a5e2b9bf7b414abe173a9fb0b27179e3a8867403d%2526requst_pdf%253DY%2526app_name%253DQWNhZGVtaWMgQmFuayBvZiBDcmVkaXRz%2526signup%253Dsignup',
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


export default ApaarIdSewa
