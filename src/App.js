import Form from './Form.js';
import Leaders from './Leaders.js';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/leaders' element={<Leaders/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
