import React from 'react'
import DownloadButton from './DownloadButton'

function PreviewFile({PreviewFiles = []}) {


  return (
    <>
        <div className="row mb-4 p-4 g-4">
            
                {PreviewFiles.map((file, index)=>(
                    <div className="previewFile" key={index}>
                        <img src={file.imgUrl} alt={`Preview ${index}`} />
                        <a href={file.fileUrl} download>Click here to Download...
                        <DownloadButton type="button" buttonName="Download" />
                        </a>
                        </div>
                )
                ) 
            }
            
        </div>
      
    </>
  )
}

export default PreviewFile
