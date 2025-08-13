
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ModernTemplates from "./pages/ModernTemplates"
import Resume_CV_Templates from "./pages/Resume_CV_Templates"
import Certificates from "./pages/Certificates"
import LetterHeads from "./pages/LetterHeads"
import Productive from "./pages/Productive"
import Bank_NOC_Letters from "./pages/Bank_NOC_Letters"
import BankForms from "./pages/BankForms"
import EmployeeManagement from "./pages/EmployeeManagement"
import HRLetters from "./pages/HRLetters"
import Student_Misc_Letters from "./pages/Student_Misc_Letters"
import OnlineTools from "./pages/OnlineTools"
import GovtWorks from "./pages/GovtWorks"
import AadharSewa from "./pages/AadharSewa"



function App() {


  return (
    <>
      <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ModernTemplates" element={<ModernTemplates/>}/>
            <Route path="/Resume_CV_Templates" element={<Resume_CV_Templates />}/>
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/LetterHeads" element={<LetterHeads/>}/>
            <Route path="/OnlineTools"  element={<OnlineTools/>}/>
            <Route path="/Productive" element={<Productive />}/>
            <Route path="/Bank_NOC_Letters" element={<Bank_NOC_Letters />}/>
            <Route path="/BankForms" element={<BankForms/>}/>
            <Route path="/EmployeeManagement" element={<EmployeeManagement />}/>
            <Route path="/HRLetters" element={<HRLetters />}/>
            <Route path="/Student_Misc_Letters" element={<Student_Misc_Letters />}/>
            <Route path="/GovtWorks"  element={<GovtWorks/>}/>
            <Route path="/AadharSewa" element={<AadharSewa/>}/>
  
          </Routes>
      <Footer />
    </>
  )
}

export default App
