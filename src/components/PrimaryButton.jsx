import React from 'react'
import { Link } from 'react-router-dom'

function PrimaryButton({ url,type,buttonName}) {
  return (
    <>
    <Link to={url}>
      <button type={type} className="primaryButton">
        {buttonName}
      </button>
    </Link>
    </>
  )
}

export default PrimaryButton
