import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "../Nettisivujen_Tyylit/ContactDetails.css";
import partners from '../assets/images/Partners.png'

function ContactDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending message: ", formData);
    setShowAlert(true);
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  return (
    <div className="bg-color-grey min-vh-100">

      <div className="bg-color-yellow text-center p-5 mb-4 w-100">
        <h1 className="pb-3">Contact Information</h1>
        <p>
          Have questions about adopting, volunteering, or our dogs?
          We’d love to hear from you! Whether you're ready to meet your new best friend or just want to
          learn more about our work, our team at Hope Tails Rescue is here to help.
        </p>
      </div>

      <Container className="pb-5">
        <h2 className='mb-4 pt-3'>Inquiry Form</h2>

        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
            className="text-center"
          >
            Your message has been sent successfully! We'll get back to you soon!
          </Alert>
        )}

        <div className="p-4 rounded-3 bg-white mb-5">
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone Number (optional)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your phone number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="formSubject">
                  <Form.Label>Subject *</Form.Label>
                  <Form.Select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option>General Inquiry</option>
                    <option>Adoption</option>
                    <option>Volunteering</option>
                    <option>Donation</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center">
              <Button style={{ backgroundColor: '#0d6efd' }} className="color-button" variant="success" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </div>
        <div className="text-center">

          <h2 className='p-3'>Get in Touch</h2>

          <p className="pb-3"><b>Phone:</b> <br /> +358 123 4567</p>
          <p className="pb-3"><b>Email:</b> <br /> rescue@hopetails.fi </p>
          <p><b>Shelter Location:</b> <br />  Hope Tails Rescue ry <br />
            Esimerkkiosoite 1 <br />
            11111, Esimerkki </p>
          <p className="pb-2"> <b>Visiting Hours:</b> <br /> Consider contacting us to schedule a visit — we want to ensure each visitor and dog has our full attention.</p>

          <p className="pb-3">
            <b>Mon–Fri:</b> 12:00–17:00 <br />
            <b>Sat:</b> 11:00–15:00 <br />
             <b>Sun:</b> Closed (dog rest day)
          </p>

          <p className="pb-3"> <b>Social Media:</b> <br /> Follow us on <b><a href="#">Instagram</a></b>, <b><a href="#">Twitter</a></b>, <b><a href="#">Facebook</a></b> & <b><a href="#">LinkedIn</a></b> @hopetailsrescue</p>
        </div>
      </Container>

      <div className="bg-color-yellow text-center py-5 w-100">
        <h2>Partners</h2>
        <img src={partners} alt="Hope Tails Partners" className="img-fluid" srcset="" />
      </div>
    </div>
  );
}

export default ContactDetails;
