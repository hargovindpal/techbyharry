import React from 'react'
import ToolsCard from '../components/ToolsCard'

function OnlineTools() {
    const ToolsData =[

        {
            imgUrl:'/onlineToolsImg/PassportPhoto.jpeg',
            innerText:'Passport Size Photo',
            mainHeadText:'Passport Size Photo',
            detail:'Your Reliable Solution for Passport Size Photo',
            href:'https://image.pi7.org/passport-size-photo',
        },
        {
            imgUrl:'/onlineToolsImg/ResumeBanaao.jpg',
            innerText:'Resume Banao',
            mainHeadText:'Create Resume',
            detail:'Build Professional Resume and CV Effortlessly and Get Hired Faster!',
            href:'https://www.resumeground.com/create-resume',
        },
        {
            imgUrl:'/onlineToolsImg/ImageUpscaler.jpg',
            innerText:'Image Upscalar ',
            mainHeadText:'Image Upscalar',
            detail:'increase the resolution of your images with our advanced tool.',
            href:'https://www.iloveimg.com/upscale-image',
        },
        {
            imgUrl:'/onlineToolsImg/qr_code_generate.jpg',
            innerText:'QR Code Generator',
            mainHeadText:'QR Code Generator',
            detail:'QR Code from Anything Like..Image, Contact, Links, Text, Whatsapp, Files..',
            href:'https://me-qr.com/qr-code-generator',
        },
        {
            imgUrl:'/onlineToolsImg/PassportPhoto.jpeg',
            innerText:'Passport Size Photo',
            mainHeadText:'Passport Size Photo',
            detail:'Your Reliable Solution for Passport Size Photo',
            href:'https://image.pi7.org/passport-size-photo',
        },
         {
            imgUrl:'/onlineToolsImg/PassportPhoto.jpeg',
            innerText:'Passport Size Photo',
            mainHeadText:'Passport Size Photo',
            detail:'Your Reliable Solution for Passport Size Photo',
            href:'https://image.pi7.org/passport-size-photo',
        },
         {
            imgUrl:'/onlineToolsImg/PassportPhoto.jpeg',
            innerText:'Passport Size Photo',
            mainHeadText:'Passport Size Photo',
            detail:'Your Reliable Solution for Passport Size Photo',
            href:'https://image.pi7.org/passport-size-photo',
        },
         {
            imgUrl:'/onlineToolsImg/PassportPhoto.jpeg',
            innerText:'Passport Size Photo',
            mainHeadText:'Passport Size Photo',
            detail:'Your Reliable Solution for Passport Size Photo',
            href:'https://image.pi7.org/passport-size-photo',
        },
        
    ]
  return (
    <>
    
       <div className="container-fluid">
        <div className="row mb-4 p-4">
              <ToolsCard ToolCard={ToolsData} ImgBackGround="white"
                listClassName="col-md-3 mb-3 bg-dark"
                />
        </div>
      </div>
    </>
  )
}

export default OnlineTools
