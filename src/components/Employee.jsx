
const Employee = () => {
  return (
    <>
      <td>Martin Blank</td>
      <td>martinblank@mail.com</td>
      <td>Via Monte Bianco 34, Turin, Italy</td>
      <td>(480) 631-2097</td>
      <td>
        <a href="#editEmployeeModal" className="edit" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </a>
        <a href="#deleteEmployeeModal" className="delete" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </a>
      </td>
    </>
  );
}

export default Employee