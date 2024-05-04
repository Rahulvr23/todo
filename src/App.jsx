
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Todo from './Pages/Todo';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/todo' element={<Todo/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
