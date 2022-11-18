import './App.css'
import Header from "./componentss/Header";
import JobDetails from "./componentss/JobDetails" ;
import MyRoutes from './routers/routes';
function App() {

  return (
    <div className="App">
      <Header/>
      <MyRoutes/>
    </div>
  )
}

export default App
