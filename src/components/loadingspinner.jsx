import React from 'react'
import { RotateLoader } from "react-spinners";
import '../index.css'
const Loading = () => {

  return (
    <>
    <div className="spinnerContainer">
    <RotateLoader className="spinner"/>
    </div>
    </>
  )
}

export default Loading