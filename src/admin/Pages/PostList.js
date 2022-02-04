import React, { useState } from "react";
import { Table, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Heading from '../../components/Heading'
import { PostData } from '../blog/PostData'
import { FaPlus } from "react-icons/fa";

export default function PostList() {
  const [readMore] = useState('');
  const [post, setPost] = useState(PostData)
  const deletePost = (id) => {
    setPost(post.filter(blogitem => blogitem.id !== id))
    console.log(id);
  }

  return (
    <div className='postlist-section card-sec'>
      <Row>
        <Col lg={12} className='mx-auto'>
          <div className="btn-block">
            <Link to='/dashboard/add-post' className='btn'><FaPlus /> Add</Link>
          </div>
          <Card>
            <Heading heading='Post List' />
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th colSpan={2}>Description</th>
                  <th>Image</th>
                  <th>View</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {post.map((blogitem, index) => {
                  const { title, desc, img, id } = blogitem;
                  return (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td colSpan={2}><p>{readMore ? desc : `${desc.substring(0, 100)}...`}</p></td>
                      <td><img src={img} alt={title} /></td>
                      <td>20</td>
                      <td><Link className='btn btn-sm btn-primary' to={`/dashboard/edit-post/${id}`}>Edit</Link></td>
                      <td> <Button className='btn btn-sm btn-danger' onClick={() => deletePost(id)}>Delete</Button>
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
