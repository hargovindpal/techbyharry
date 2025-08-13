import React from 'react'
import ToolsCard from '../components/ToolsCard'

function AadharSewa() {
const ToolsData =[

        {
            
            mainHeadText:'आधार सेवा',
            detail:'आधार कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://image.pi7.org/passport-size-photo',
        },
        {
            mainHeadText:'आधार सेवा',
            detail:'आधार कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://image.pi7.org/passport-size-photo',
        },
        {
            mainHeadText:'आधार सेवा',
            detail:'आधार कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://image.pi7.org/passport-size-photo',
        },
        {
            mainHeadText:'आधार सेवा',
            detail:'आधार कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://image.pi7.org/passport-size-photo',
        },
         {
            mainHeadText:'आधार सेवा',
            detail:'आधार कार्ड से जुड़ीं सारी सुविधायें',
            href:'https://image.pi7.org/passport-size-photo',
        },
            
        
    ]

  return (
    <>
    
    <div className="container-fluid">
        <div className="row mb-4 p-4">
              <ToolsCard ToolCard={ToolsData}
                listClassName="col-md-3 mb-3 bg-light-Blue"
                />
        </div>
      </div>
      
    </>
  )
}


export default AadharSewa
