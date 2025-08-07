import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import ListGroup from '../components/ListGroup'
import PrimaryButton from '../components/PrimaryButton'

function Home() {

  const navigate = useNavigate();
  const listGroups = [
  {
    title: 'Modern Templates',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/ModernTemplates', { state: { selectedName } });
    },
    items: [
      { name: 'Marriage Biodata Templates (120)' },
      { name: 'CV / Resume Templates (350)' },
      { name: 'Cover Letter for Resume (56)' },
      { name: 'Accountant Resumes (20)' },
      { name: 'Fresher Resumes (10)' },
      { name: 'Computer Operator Resumes (20)' },
    ],
  },
  {
    title: 'Resume CV Templates',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/Resume_CV_Templates', { state: { selectedName } });
    },
    items: [
      { name: 'ATS Friendly Resume (20)' },
      { name: 'Web Developer Resume (20)' },
      { name: 'Doctor Resume (20)' },
      { name: 'Engineer Resume (20)' },
      { name: 'Photographer Resume (20)' },
      { name: 'MIS Executive Resume (20)' },
      { name: 'School Teacher Resume (20)' },
    ],
  },
  {
    title: 'Certificates',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/certificates', { state: { selectedName } });
    },
    items: [
      { name: 'Warranty Certificates (20)' },
      { name: 'Bonafide Certificate (10)' },
      { name: 'Experience Certificates (30)' },
      { name: 'Medical Certificates (10)' },
      { name: 'Transfer Certificate (5)' },
      { name: 'Character Certificate (5)' },
      { name: 'Course Certificate (10)' },
    ],
  },
  {
    title: 'Letterhead Templates',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/LetterHeads', { state: { selectedName } });
    },
    items: [
      { name: 'Restaurant Letterhead (20)' },
      { name: 'Architecture Letterhead (20)' },
      { name: 'Real Estate Letterhead (20)' },
      { name: 'Event Planner Letterhead (20)' },
      { name: 'Lawyer Letterhead (20)' },
      { name: 'Doctor Letterhead (20)' },
      { name: 'Pharmacy Letterhead (20)' },
    ],
  },
  {
    title: 'Online Tools (Free)',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/OnlineTools', { state: { selectedName } });
    },
    items: [
      { name: 'Income Tax Calculator' },
      { name: 'WhatsApp without Save No.' },
      { name: 'Date to Text Converter' },
      { name: 'GST Calculator for Bulk' },
      { name: 'Keyboard Tester' },
      { name: 'Age Calculator' },
      { name: 'EMI Calculator' },
    ],
  },
  {
    title: 'Productive',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/Productive', { state: { selectedName } });
    },
    items: [
      { name: 'PowerPoint Templates (20)' },
      { name: 'Payment Voucher (50)' },
      { name: 'Shortcut Keys (80)' },
      { name: 'YouTube Art (30)' },
      { name: 'YouTube Name Ideas (2000)' },
      { name: 'Photoshop Clip Arts' },
      { name: 'Corel Formats' },
    ],
  },
  {
    title: 'Bank & NOC Letters',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/Bank_NOC_Letters', { state: { selectedName } });
    },
    items: [
      { name: 'Bank Statement Request Letter (5)' },
      { name: 'NOC Letter Format for Bank (5)' },
      { name: 'NOC Letter for GST (5)' },
      { name: 'NOC Letter for Visa (5)' },
      { name: 'NOC Letter for Vehicle (5)' },
      { name: 'Undertaking Letter (5)' },
    ],
  },
  {
    title: 'Bank Forms (PDF)',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/BankForms', { state: { selectedName } });
    },
    items: [
      { name: 'Citi Bank Forms' },
      { name: 'PNB Forms' },
      { name: 'HDFC Forms' },
      { name: 'Axis Bank Forms' },
    ],
  },
  {
    title: 'Employee Management',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/EmployeeManagement', { state: { selectedName } });
    },
    items: [
      { name: 'Accountant Job Letter (5)' },
      { name: 'Warning Letter To Employee (5)' },
      { name: 'Termination Letter (5)' },
      { name: 'Job Application Cover Letter (5)' },
      { name: 'Internship Experience Letter (5)' },
      { name: 'Holiday Announcement (5)' },
    ],
  },
  {
    title: 'HR Letters',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/HRLetters', { state: { selectedName } });
    },
    items: [
      { name: 'Salary Increment Offer Letter (5)' },
      { name: 'Salary Increment Request (5)' },
      { name: 'Job Joining Letter (5)' },
      { name: 'Appointment Letter (20)' },
      { name: 'Resignation Letter (20)' },
    ],
  },
  {
    title: 'Student & Misc Letters',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/Student_Misc_Letters', { state: { selectedName } });
    },
    items: [
      { name: 'Leave Application to Principal (8)' },
      { name: 'Bank Account Closing Letter (5)' },
      { name: 'Bonafide Certificated Letter (5)' },
      { name: 'TC Letter (5)' },
      { name: 'Internship Offer Letter (5)' },
      { name: 'Rent Agreement Format (5)' },
    ],
  },

  {
    title: 'No Objection Certificates',
    onSelect: (item) => {
      const selectedName = item.name.split('(')[0].trim();
      navigate('/Student_Misc_Letters', { state: { selectedName } });
    },
    items: [
      { name: 'Leave Application to Principal (8)' },
      { name: 'Bank Account Closing Letter (5)' },
      { name: 'Bonafide Certificated Letter (5)' },
      { name: 'TC Letter (5)' },
      { name: 'Internship Offer Letter (5)' },
      { name: 'Rent Agreement Format (5)' },
    ],
  },
];


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
            {listGroups.map( (group)=>(

              <ListGroup key={group.title}
                title={group.title}
                items={group.items}
                onSelect={group.onSelect}
                className="active"
                listClassName="col-md-3 mb-3"
                />
            ))}
        </div>
    </div>
      
    </>
  );
}

export default Home;
