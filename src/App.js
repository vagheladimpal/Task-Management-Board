import './App.css';
import ListAdd from './Component/ListAdd';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import DataList from './Pages/DataList';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/data' element={<DataList />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
