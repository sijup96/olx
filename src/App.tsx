import { Route, Routes } from "react-router-dom"
import Main from "./Components/Main"
import Details from "./Components/Details"

const App = () => {
  return (
<>
<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/details" element={<Details/>}/>
</Routes>
</>
  )
}

export default App
