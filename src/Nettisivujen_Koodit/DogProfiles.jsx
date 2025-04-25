import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Nettisivujen_Tyylit/DogProfiles.css';
import amerikanstaffordshirenterrieri from '../assets/images/amerikanstaffordshirenterrieri.jpg';
import cockapoo from '../assets/images/cockapoo.jpg'

function DogProfiles() {
  return ( 
    <div>
         <div className="bg-color-yellow py-4">
        <Container className="gx-5 gy-5">
          <h1 className="text-center mb-4">Dogs</h1>
          <p className="text-center mb-5 yellow-text">
            Every dog at Hope Tails Rescue has a unique story and is looking for a loving forever home.
             Browse their profiles to learn more about their personalities, needs, 
             and journey so far — your new best friend might be just a scroll away. 
          </p>
        </Container>
      </div>

      <div className='bg-color-grey py-4'>
        <Container>
          <Row className="justify-content-center gx-4 gy-4">
            <Col xs={12} sm={6} md={4} lg={4} className="mb-3 white-background">
              <div className="image-container">
                <img src={amerikanstaffordshirenterrieri} alt="Kuva 1" className="img-fluid rounded shadow" />
              </div>

              <div className="text-container">
                <h2 className="mt-3 nimi-otsikko">Nala</h2>
                <p className='normi-teskti'>Breed: American Staffordshire Terrier</p>
                <p className='normi-teskti'>Age: 7 months</p>
                <p className='normi-teskti'>Gender: Female </p>
                <h3 className='ala-otsikko'>About Nala:</h3>
                <p className='normi-teskti'>Nala is a sweet and active young pup who loves playtime and people. 
                  She’s curious, smart, and already knows basic commands like sit and stay. 
                  he thrives with structure and positive reinforcement training. 
                </p>

                <h3 className='ala-otsikko'>Health Info:</h3>
                <ul>
                  <li>- Vaccinated (core + rabies)</li>
                  <li>- Microchipped</li>
                  <li>- Sterilized</li>
                  <li>- EU Pet Passport</li>
                  <li>- Vet-checked and parasite-treated</li>
                </ul>

                <h3 className='ala-otsikko'>Ideal Home:</h3>
                <p className='normi-teskti'>Nala would love a home with an experienced owner who can offer continued training, clear boundaries, and lots of love.
                  She’s still learning how to interact with other dogs, so slow introductions are best. 
                </p>
              </div>
            </Col>
            
            <Col xs={12} sm={6} md={4} lg={4} className="mb-3 white-background">
              <div className="image-container">
                <img src={cockapoo} alt="Kuva 1" className="img-fluid rounded shadow" />
              </div>

              <div className="text-container">
                <h2 className="mt-3 nimi-otsikko">Teddy</h2>
                <p className='normi-teskti'>Breed: Cockapoo (Cocker Spaniel x Poodle mix)</p>
                <p className='normi-teskti'>Age: 2 years</p>
                <p className='normi-teskti'>Gender: Male</p>
                <h3 className='ala-otsikko'>About Teddy:</h3>
                <p className='normi-teskti'>Teddy is a cheerful little guy with a goofy personality and a heart of gold. He loves cuddles, 
                  soft blankets, and following you around the house. He’s friendly with other dogs and would do well in a 
                  home with or without canine friends. 
                </p>

                <h3 className='ala-otsikko'>Health Info:</h3>
                <ul>
                  <li>- Vaccinated (core + rabies)</li>
                  <li>- Microchipped</li>
                  <li>- Sterilized</li>
                  <li>- EU Pet Passport</li>
                  <li>- Regular grooming recommended due to curly coat </li>
                </ul>

                <h3 className='ala-otsikko'>Ideal Home:</h3>
                <p className='normi-teskti'>Teddy would be perfect for someone looking for a happy, easy-going companion. 
                  He enjoys short walks and indoor games, making him a great fit for both apartments and houses.  
                </p>
              </div>
            </Col>


          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DogProfiles;
