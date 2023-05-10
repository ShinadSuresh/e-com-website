
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { context } from '../Context'; //context destrectred

function UsersAdmin() {
  const loginContext = useContext(context); // use context assign to login context 
  const { input } = loginContext; // login context assign to input

  return (
    <div className="table-container">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {input.map((x) => (
            <tr key={x.id}>        {/* why key using */ }
              <td>{x.userName}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersAdmin;
