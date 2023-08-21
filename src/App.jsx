import './App.css'
import EmployeeList from "./components/EmployeeList"
import EmployeeListContextProvider from './components/contexts/EmployeeListContext';

const App = () => {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeListContextProvider>
            <EmployeeList />
          </EmployeeListContextProvider>          
        </div>
      </div>
    </div>
  );
}

export default App