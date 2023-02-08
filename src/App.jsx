import './App.scss';
import TrackerContainer from './container/TrackerContainer/TrackerContainer';
import SearchFilter from './container/Nav/SearchFilter/SearchFilter';
import DropdownContainer from './container/Nav/DropdownContainer/DropdownContainer';
import team from './data/employeeData';
import { useState } from 'react';

function App() {
  
  const [employees, setEmployees] = useState(team)

  const handleInput = (event) => {
    const searchTerm = event.target.value.toLowerCase()
    const filteredArray = team.filter(employee => employee.name.toLowerCase().includes(searchTerm))
    setEmployees(filteredArray)
    }


  return (
    <div className="App">
      <h1 className='header'>Ticket Tracker</h1>
      <DropdownContainer teamArr = {team}/>
      <SearchFilter handleInput={handleInput}/>
      <TrackerContainer teamArr = {employees}/>
    </div>
  );
}

export default App;
