import React from 'react'
import ToolsCard from '../components/ToolsCard'

function OnlineTools() {
    const ToolsData =[
        {
            imgUrl:'/onlineToolsImg/FileConvertImg.jpg',
            innerText:'Free Document Convertor',
            mainHeadText:'Free Document Convertor',
            detail:'Your Reliable Solution for Document Convertor',
            href:'https://www.ilovepdf.com',
        },
        {
            imgUrl:'/onlineToolsImg/Bulk-resizer.jpg',
            innerText:'Bulk Image Resizer',
            mainHeadText:'Bulk Image Resizer',
            detail:'Your Reliable Solution for Bulk Image Resize',
            href:'https://www.iloveimg.com/resize-image#resize-options,pixels',
        },
        {
            imgUrl:'/onlineToolsImg/compressImages.png',
            innerText:'Compress Image Size',
            mainHeadText:'Compress Image Size',
            detail:'Your Reliable Solution for Image Compress',
            href:'https://www.iloveimg.com/compress-image',
        },
        {
            imgUrl:'/onlineToolsImg/ResizeImg.jpg',
            innerText:'Resize Multiple Images',
            mainHeadText:'Resize Multiple Images',
            detail:'Your Reliable Solution for Resizing Photos',
            href:'https://www.birme.net/',
        },
        {
            imgUrl:'/onlineToolsImg/freePPT_Img.jpg',
            innerText:'Free PPT Templates',
            mainHeadText:'Free PPT Templates',
            detail:'Your Reliable Solution for PPT Templates',
            href:'https://www.free-powerpoint-templates-design.com',
        },
        {
            imgUrl:'/onlineToolsImg/PassportPhoto.jpeg',
            innerText:'Passport Size Photo',
            mainHeadText:'Passport Size Photo',
            detail:'Your Reliable Solution for Passport Size Photo',
            href:'https://image.pi7.org/passport-size-photo',
        },
        {
            imgUrl:'/onlineToolsImg/qr_code_generate.jpg',
            innerText:'QR Code Generator',
            mainHeadText:'QR Code Generator',
            detail:'QR Code from Anything Like..Image, Contact, Links, Text, Whatsapp, Files..',
            href:'https://me-qr.com/qr-code-generator',
        },
        {
            imgUrl:'/onlineToolsImg/ImageUpscaler.jpg',
            innerText:'Image Upscalar ',
            mainHeadText:'Image Upscalar',
            detail:'increase the resolution of your images with our advanced tool.',
            href:'https://www.iloveimg.com/upscale-image',
        },
        {
            imgUrl:'/onlineToolsImg/ResumeBanaao.jpg',
            innerText:'Resume Banao',
            mainHeadText:'Create Resume',
            detail:'Build Professional Resume and CV Effortlessly and Get Hired Faster!',
            href:'https://www.resumeground.com/create-resume',
        },
        
        
        
         
         
         
        
    ]
  return (
    <>
        <div className="jumbotron d-flex justify-content-center flex-column content-center">
            <div className="heading col-8 mx-auto mt-4">
            <h1 className="display-8 text-center">
                All-in-One Free Online Tools!
            </h1>
            </div>
            <div className="para col-10 mx-auto">
            <p className="lead fw-semibold text-center">
                Access all Free Online Tools to Streamline your tasks with professionally designed resources.
            </p>
            </div>
            <hr className="my-4" />
        </div>
    
    
       <div className="container-fluid">
        <div className="row mb-4 p-4">
              <ToolsCard ToolCard={ToolsData} ImgBackGround="white"
                listClassName="col-md-3 mb-3 bg-dark"
                MainTextColor="black"
                ImgToggle="rounded-border"
                />
        </div>
      </div>
    </>
  )
}

export default OnlineTools
