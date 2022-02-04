import React from "react";
import { Table, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading'
import { PostData } from '../blog/PostData'
import { FaPlus } from "react-icons/fa";

export default function JobManagement() {

  return (
    <div className='job-management card-sec'>
      <Row>
        <Col lg={12} className='mx-auto'>
          <div className="btn-block">
            <Link to='/dashboard/add-post' className='btn'><FaPlus /> Add</Link>
          </div>
          <Card>
            <Heading heading='Job Management' />
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Add</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                {PostData.map((blogitem, index) => {
                  const { title, id } = blogitem;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td><Link className='btn btn-sm btn-primary' to='/dashboard/add-job'>Add</Link></td>
                      <td> <Link className='btn btn-sm btn-primary' to='/dashboard/add-job'>manage</Link>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
