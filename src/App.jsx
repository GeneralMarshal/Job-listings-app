
import {Route, Routes} from "react-router-dom"
import JobListings from "./pages/JobListings"

export default function App() {
    return (
    <Routes>
      <Route path="/" element={<JobListings/>}></Route>
    </Routes>
  )
}




