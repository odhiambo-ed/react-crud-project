import './App.css'
import EmployeeList from "./components/EmployeeList"

const App = () => {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <EmployeeList />
        </div>
      </div>
    </div>
  );
}

export default App