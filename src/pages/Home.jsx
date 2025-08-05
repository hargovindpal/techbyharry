import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ListGroup from '../components/Listgroup'
import PrimaryButton from '../components/PrimaryButton'
import Card from '../components/FileCard'
import WarrantyCertificate from '../components/certificates/WarrantyCertificate'
import ModernTemplates from './ModernTemplates'
import ExperienceCertificate from '../components/certificates/ExperienceCertificate';

function Home() {
  const [setSelected] = useState(null);

  return (
    <>
      <div className="jumbotron d-flex justify-content-center flex-column content-center">
        <div className="heading col-8 mx-auto mt-4">
          <h1 className="display-8 text-center">
            All-in-One Document Templates Download Resume, Letters & More for Free!
          </h1>
        </div>
        <div className="para col-8 mx-auto">
          <p className="lead fw-semibold text-center">
            Access 100+ free downloadable templates for resumes, CVs, letters, Excel tools, and more! Streamline your tasks with professionally designed resources.
          </p>
        </div>
        <hr className="my-4" />
      </div>

      <div className="container-fluid">
        <div className="row mb-4 p-4">
        <ListGroup
          className="active"
          title="Modern Templates"
          onSelect={setSelected}
          items={[
            { name: 'Marriage Biodata Templates (120)', component: <WarrantyCertificate /> },
            { name: 'CV / Resume Templates (350)', component: <ExperienceCertificate /> },
            { name: 'Cover Letter for Resume (56)', url: '/ModernTemplates' },
            { name: 'Accountant Resumes (20)', url: '/ModernTemplates' },
            { name: 'Fresher Resumes (10)', url: '/ModernTemplates' },
            { name: 'Computer Operator Resumes (20)', url: '/ModernTemplates' },
          ]}
        />

        <ListGroup
          className="active"
          title="Resume CV Templates"
          items={[
            { name: 'ATS Friendly Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'Web Developer Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'Doctor Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'Engineer Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'Photographer Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'MIS Executive Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'School Teacher Resume (20)', url: '/Resume_CV_Templates' },
          ]}
        />

        <ListGroup
          className="active"
          title="Certificates"
          items={[
            { name: 'Warranty Certificates (20)', url: '/Certificates' },
            { name: 'Experience Certificates (30)', url: '/Certificates' },
            { name: 'Medical Certificates (10)', url: '/Certificates' },
            { name: 'Bonafide Certificate (10)', url: '/Certificates' },
            { name: 'Transfer Certificate (5)', url: '/Certificates' },
            { name: 'Character Certificate (5)', url: '/Certificates' },
            { name: 'Course Certificate (10)', url: '/Certificates' },
          ]}
        />

        <ListGroup
          className="active"
          title="Letterhead Templates"
          items={[
            { name: 'Restaurant Letterhead (20)', url: '/LetterHeads' },
            { name: 'Architecture Letterhead (20)', url: '/LetterHeads' },
            { name: 'Real Estate Letterhead (20)', url: '/LetterHeads' },
            { name: 'Event Planner Letterhead (20)', url: '/LetterHeads' },
            { name: 'Lawyer Letterhead (20)', url: '/LetterHeads' },
            { name: 'Doctor Letterhead (20)', url: '/LetterHeads' },
            { name: 'Pharmacy Letterhead (20)', url: '/LetterHeads' },
          ]}
        />
        </div>
      

      <div className="row mb-4 p-4">
        <ListGroup
          className="active"
          title="Resume CV Templates"
          items={[
            { name: 'ATS Friendly Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'Modern Resume Templates (50)', url: '/Resume_CV_Templates' },
            { name: 'Fresher Resume Templates (70)', url: '/Resume_CV_Templates' },
            { name: 'Business Analyst Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'MIS Executive Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'Accountant Resume (20)', url: '/Resume_CV_Templates' },
            { name: 'School Teacher Resume (20)', url: '/Resume_CV_Templates' },
          ]}
        />

        <ListGroup
          className="active"
          title="Online Tools (Free)"
          items={[
            { name: 'Income Tax Calculator', url: '/OnlineTools' },
            { name: 'WhatsApp without Save No.', url: '/OnlineTools' },
            { name: 'Date to Text Converter', url: '/OnlineTools' },
            { name: 'GST Calculator for Bulk', url: '/OnlineTools' },
            { name: 'Keyboard Tester', url: '/OnlineTools' },
            { name: 'Age Calculator', url: '/OnlineTools' },
            { name: 'EMI Calculator', url: '/OnlineTools' },
          ]}
        />

        <ListGroup
          className="active"
          title="Productive"
          items={[
            { name: 'PowerPoint Templates (20)', url: '/Productive' },
            { name: 'Payment Voucher (50)', url: '/Productive' },
            { name: 'Shortcut Keys (80)', url: '/Productive' },
            { name: 'YouTube Art (30)', url: '/Productive' },
            { name: 'YouTube Name Ideas (2000)', url: '/Productive' },
            { name: 'Photoshop Clip Arts', url: '/Productive' },
            { name: 'Corel Formats', url: '/Productive' },
          ]}
        />

        <ListGroup
          className="active"
          title="Bank & NOC Letters"
          items={[
            { name: 'Bank Statement Request Letter (5)', url: '/Bank_NOC_Letters' },
            { name: 'NOC Letter Format for Bank (5)', url: '/Bank_NOC_Letters' },
            { name: 'NOC Letter for GST (5)', url: '/Bank_NOC_Letters' },
            { name: 'NOC Letter for Visa (5)', url: '/Bank_NOC_Letters' },
            { name: 'NOC Letter for Vehicle (5)', url: '/Bank_NOC_Letters' },
            { name: 'Undertaking Letter (5)', url: '/Bank_NOC_Letters' },
          ]}
        />
      </div>

      <div className="row mb-4 p-4">
        <ListGroup
          className="active"
          title="Bank Forms (PDF)"
          items={[
            { name: 'Citi Bank Forms', url: '/BankForms' },
            { name: 'PNB Forms', url: '/BankForms' },
            { name: 'HDFC Forms', url: '/BankForms' },
            { name: 'Axis Bank Forms', url: '/BankForms' },
          ]}
        />

        <ListGroup
          className="active"
          title="Employee Management"
          items={[
            { name: 'Accountant Job Letter (5)', url: '/EmployeeManagement' },
            { name: 'Warning Letter To Employee (5)', url: '/EmployeeManagement' },
            { name: 'Termination Letter (5)', url: '/EmployeeManagement' },
            { name: 'Job Application Cover Letter (5)', url: '/EmployeeManagement' },
            { name: 'Internship Experience Letter (5)', url: '/EmployeeManagement' },
            { name: 'Holiday Announcement (5)', url: '/EmployeeManagement' },
          ]}
        />

        <ListGroup
          className="active"
          title="HR Letters"
          items={[
            { name: 'Salary Increment Offer Letter (5)', url: '/HRLetters' },
            { name: 'Salary Increment Request (5)', url: '/HRLetters' },
            { name: 'Job Joining Letter (5)', url: '/HRLetters' },
            { name: 'Appointment Letter (20)', url: '/HRLetters' },
            { name: 'Resignation Letter (20)', url: '/HRLetters' },
          ]}
        />

        <ListGroup
          className="active"
          title="Student & Misc Letters"
          items={[
            { name: 'Leave Application to Principal (8)', url: '/Student_Misc_Letters' },
            { name: 'Bank Account Closing Letter (5)', url: '/Student_Misc_Letters' },
            { name: 'Bonafide Certificated Letter (5)', url: '/Student_Misc_Letters' },
            { name: 'TC Letter (5)', url: '/' },
            { name: 'Internship Offer Letter (5)', url: '/Student_Misc_Letters' },
            { name: 'Rent Agreement Format (5)', url: '/Student_Misc_Letters' },
          ]}
        />
      </div>
      </div>
    </>
  );
}

export default Home;
