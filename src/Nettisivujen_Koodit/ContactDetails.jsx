import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import "../Nettisivujen_Tyylit/ContactDetails.css";

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
      
      <div className="bg-color-yellow text-center py-5 mb-4 w-100">
        <h2>Contact Information</h2>
        <p>
          Have questions about adopting, volunteering, or our dogs? 
          We’d love to hear from you! Whether you're ready to meet your new best friend or just want to 
          learn more about our work, our team at Hope Tails Rescue is here to help. 
        </p>
      </div>

      <Container className="pb-5">
        <h3>Inquiry Form</h3>

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

        <div className="p-4 rounded-3 bg-white">
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
              <Button variant="success" type="submit">
                Send Message
              </Button>
            </div>
          </Form>
        </div>
        <h1>Other Info <br /></h1>
        <h3>Get in Touch</h3>
        
        <p>Phone: <br /> +358 123 4567</p>
        <p>Email: <br /> rescue@hopetails.fi </p>
        <p>Shelter Location: <br />
            Hope Tails Rescue ry <br />
            Esimerkkiosoite 1 <br />
            11111, Esimerkki 
        </p>

        <p>Visiting Hours: <br /> </p>
        <p>Consider contacting us to schedule a visit — we want to ensure each visitor and dog has our full attention.</p>

        <p>Visitin Hours: <br />
        Mon–Fri: 12:00–17:00 <br />
        Sat: 11:00–15:00 <br />
        Sun: Closed (dog rest day)</p>

        <p>Social Media:</p>

        <p>Follow us on Instagram, Twitter, Facebook & LinkedIn @hopetailsrescue</p>
      </Container>

      <div className="bg-color-yellow text-center py-5 mb-4 w-100">
            <h2>Need Help Fast?</h2>
            <p>
                Check out our <a href="FAQ.jsx">FAQ</a> section for quick answers to common questions or scroll on our site for more info on the subject. 
            </p>
      </div>
    </div>
  );
}

export default ContactDetails;
