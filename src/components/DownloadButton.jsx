import React from 'react'

function DownloadButton({ url, type, buttonName}) {
  return (
    <d>
        <a href={url} Download>
            <button type={type} className="DownloadBtn" >
            {buttonName}
            </button>
        </a>
      
    </d>
  );
}

export default DownloadButton

