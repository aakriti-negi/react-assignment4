import React from "react";
import  Table  from 'react-bootstrap/Table';
import './Styles.css'

export default function Student() {
  return (
    <center>
      <h1 style={{marginTop: "3%"}}>Student Table</h1>
      <button className="button">Add Details</button>
      <Table striped>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
      
    </center>
  );
}
