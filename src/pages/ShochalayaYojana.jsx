import React from 'react'
import ToolsCard from '../components/ToolsCard'

function ShochalayaYojana() {
const ToolsData =[

        
        {
            mainHeadText:'आवेदन के लिए रजिस्ट्रेशन करे​',
            detail:'सबसे पहले आपको रजिस्ट्रेशन करना होगा , निचे क्लिक करे',
            href:'https://sbm.gov.in/SBM_DBT/Secure/DBT/DBT_Registration.aspx',
        },
        {
            mainHeadText:'आवेदन के लिए लॉगिन करे​',
            detail:'रजिस्ट्रेशन करने के बाद यहाँ से लॉगिन होकर आवेदन चालू कर सकते है',
            href:'https://sbm.gov.in/sbm_dbt/secure/login.aspx',
        },
        {
            mainHeadText:'Track Application Status​',
            detail:'मोबाइल नंबर और OTP डालकर लॉगिन करे और View Application पर जाये',
            href:'https://sbm.gov.in/sbm_dbt/secure/login.aspx',
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
export default ShochalayaYojana
