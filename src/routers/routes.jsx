import JobDetails from '../componentss/JobDetails'
import JobLists from "../componentss/JobLists"

import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom'
export default function MyRoutes() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<JobLists/>}/>
            <Route exact path='/jobs' element={<JobLists/>}/>
            <Route exact path='/jobs/:position' element={<JobDetails/>}/>
        </Routes>
    </Router>
  )
}
