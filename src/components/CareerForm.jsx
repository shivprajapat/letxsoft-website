import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Form } from "react-bootstrap";
const CareerForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ubvofae', 'template_yh6qzwc', form.current, 'user_T0XDPDZnvTEydAcnQ382y')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="detail_form">
      <div className="detail_form_header">
        <h6>Get In Touch</h6>
        <Form ref={form} onSubmit={sendEmail} encType="multipart/form-data" method="post">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name='email' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="text" name='number' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CTC</Form.Label>
            <Form.Control type="text" name='ctc' />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} name='message' />
          </Form.Group>
          <Form.Group className="mb-3">
            <div className='input-file'>
              <Form.Control type="file" name="my_file" />
            </div>
          </Form.Group>
          <Form.Group>
            <button type="submit" value="Send" className="btn-gray">Send</button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default CareerForm
