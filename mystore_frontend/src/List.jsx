import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';

export const List = () => {
    const [data, setData] = useState([])
    
    const showData = () => {
      fetch("http://localhost:4000/categories/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
  
      })
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  
    useEffect(() => {
      showData();
    }, []);
  
  
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ id, name, description }) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{description}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
  }