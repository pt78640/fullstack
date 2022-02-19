import logo from './logo.svg';
import './App.css';
import {SearchAppBar} from './Navbar';
import {Table} from "./Table"

function App() {
  return (
    <div className="App">
     <SearchAppBar/>
     <Table/>
    </div>
  );
}

export default App;
