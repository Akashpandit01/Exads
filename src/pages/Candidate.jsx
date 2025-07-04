import React from 'react'
import { Head } from '../components/Candidate/Head'
import { Mid } from '../components/Candidate/Mid'
import { IndustriesSection } from '../components/Candidate/IndustriesSection'
import Footer from '../components/Footer'

import { CandidatesFeedback } from '../components/Candidate/CandidatesFeedback'


function Candidate() {
  return (
    <>
    <Head/>
    <Mid/>
    {/* <IndustriesSection/> */}
   
    <CandidatesFeedback/>
    
    <Footer/>
    
    </>
  )
}

export default Candidate
