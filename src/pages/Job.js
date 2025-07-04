import React from 'react'
import Brouse from '../components/Job-page/Brouse'
import Search from '../components/Job-page/Search'
import FilterSidebar from '../components/FilterSidebar'
import JobList from '../components/Job-page/JobList'
import Footer from '../components/Footer'


function Job() {
  return (
    <div>
      <Brouse/>
      <Search/>
      <FilterSidebar/>
      <JobList/>
      <Footer/>
    </div>
  )
}

export default Job
