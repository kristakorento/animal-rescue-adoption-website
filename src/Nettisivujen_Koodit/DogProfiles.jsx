import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../Nettisivujen_Tyylit/DogProfiles.css';
import amerikanstaffordshirenterrieri from '../assets/images/amerikanstaffordshirenterrieri.jpg';
import cockapoo from '../assets/images/cockapoo.jpg'
import corgi from '../assets/images/corgi.jpg'
import bulldog from '../assets/images/english-bulldog.jpg'
import labradorinnoutaja from '../assets/images/labradorinnoutaja.jpg'
import merlesekarotu from '../assets/images/merle-sekarotu.jpg'
import sekarotu from '../assets/images/sekarotu.jpg'

function DogProfiles() {
  return (   
        <Container>
          <Row className="justify-content-center gx-4 gy-4">
            <Col xs={12} sm={6} md={4} lg={4} class='col-4' className="mb-3">
            <div className="white-background p-3">
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
            </div>
            </Col>
            
            <Col xs={12} sm={6} md={4} lg={4} class='col-4' className="mb-3">
            <div className="white-background p-3">
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
            </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={4} class='col-4' className="mb-3">
            <div className="white-background p-3">
              <div className="image-container">
                <img src={corgi} alt="Kuva 1" className="img-fluid rounded shadow" />
              </div>

              <div className="text-container">
                <h2 className="mt-3 nimi-otsikko">Max</h2>
                <p className='normi-teskti'>Breed: Pembroke Welsh Corgi</p>
                <p className='normi-teskti'>Age: 3 years</p>
                <p className='normi-teskti'>Gender: Male</p>
                <h3 className='ala-otsikko'>About Max:</h3>
                <p className='normi-teskti'>Max is a cheerful little guy with a big personality packed into his short legs. 
                  He’s friendly with everyone he meets—humans and animals alike—and absolutely adores belly rubs and 
                  chasing after tennis balls. He’s very food-motivated and picks up tricks quickly when snacks are involved. 
                </p>

                <h3 className='ala-otsikko'>Health Info:</h3>
                <ul>
                  <li>- Vaccinated (core + rabies)</li>
                  <li>- Microchipped</li>
                  <li>- Sterilized</li>
                  <li>- EU Pet Passport</li>
                  <li>- Back and hip health checked – no issues </li>
                </ul>

                <h3 className='ala-otsikko'>Ideal Home:</h3>
                <p className='normi-teskti'>Max would be perfect for an active household that loves going on walks and spending time outdoors. 
                  He’d thrive in a home where he can be involved in day-to-day activities and cuddle up on the couch at the end of the day. .  
                </p>
              </div>
            </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={4} class='col-4' className="mb-3">
            <div className="white-background p-3">
              <div className="image-container">
                <img src={bulldog} alt="Kuva 1" className="img-fluid rounded shadow" />
              </div>

              <div className="text-container">
                <h2 className="mt-3 nimi-otsikko">Lulu</h2>
                <p className='normi-teskti'>Breed: English Bulldog</p>
                <p className='normi-teskti'>Age: 1 year</p>
                <p className='normi-teskti'>Gender: Female</p>
                <h3 className='ala-otsikko'>About Lulu:</h3>
                <p className='normi-teskti'>
                Lulu is a playful sweetheart with a gentle nature and a love for toys—especially balls! 
                She’s great with kids and enjoys spending time with people. Lulu has a calm temperament and is happiest when 
                she’s lounging in the sun or trotting around the yard. 
                </p>

                <h3 className='ala-otsikko'>Health Info:</h3>
                <ul>
                  <li>- Vaccinated (core + rabies)</li>
                  <li>- Microchipped</li>
                  <li>- Sterilized</li>
                  <li>- EU Pet Passport</li>
                  <li>- Nasal passages and breathing checked—no current problems</li>
                  <li>- Hips and joints look good—no issues</li>
                  <li>- On a weight-controlled diet for healthy joints</li>
                  <li>- Skin folds are healthy but should be cleaned regularly to prevent irritation.</li>
                </ul>

                <h3 className='ala-otsikko'>Ideal Home:</h3>
                <p className='normi-teskti'>Lulu would be a fantastic match for a relaxed home where she can get plenty of love and attention. 
                  She does well with other dogs and would benefit from moderate daily activity and lots of cuddles.  
                </p>
              </div>
            </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={4} class='col-4' className="mb-3">
            <div className="white-background p-3">
              <div className="image-container">
                <img src={labradorinnoutaja} alt="Kuva 1" className="img-fluid rounded shadow" />
              </div>

              <div className="text-container">
                <h2 className="mt-3 nimi-otsikko">Milo</h2>
                <p className='normi-teskti'>Breed: Labrador Retriever</p>
                <p className='normi-teskti'>Age: 4 years</p>
                <p className='normi-teskti'>Gender: Male</p>
                <h3 className='ala-otsikko'>About Milo:</h3>
                <p className='normi-teskti'>
                Milo is a gentle, loyal, and playful soul. He’s great with people of all ages and loves being part of a family. 
                Milo has a calm nature but is always ready for an adventure or a game of fetch.  
                </p>

                <h3 className='ala-otsikko'>Health Info:</h3>
                <ul>
                  <li>- Vaccinated (core + rabies)</li>
                  <li>- Microchipped</li>
                  <li>- Sterilized</li>
                  <li>- EU Pet Passport</li>
                  <li>- Hip and joint health checked – no issues</li>
                </ul>

                <h3 className='ala-otsikko'>Ideal Home:</h3>
                <p className='normi-teskti'>Milo would thrive in an active home with a garden or access to nature walks.
                   He loves children and is well-mannered around other dogs. Milo is the definition of a family dog. 
                </p>
              </div>
            </div>
            </Col>

            <Col xs={12} sm={6} md={4} lg={4} class='col-4' className="mb-3">
            <div className="white-background p-3">
              <div className="image-container">
                <img src={merlesekarotu} alt="Kuva 1" className="img-fluid rounded shadow" />
              </div>

              <div className="text-container">
                <h2 className="mt-3 nimi-otsikko">Bruno</h2>
                <p className='normi-teskti'>Breed: Catahoula Leopard Dog Mix</p>
                <p className='normi-teskti'>Age: 5 years</p>
                <p className='normi-teskti'>Gender: Male</p>
                <h3 className='ala-otsikko'>About Bruno:</h3>
                <p className='normi-teskti'>
                Bruno is a gentle giant with a calm, loving nature. His soulful eyes and unique merle coat make him stand out, 
                but it’s his sweet demeanor that wins hearts. 
                Bruno is easy-going, good on the leash, and enjoys the quiet life—perfect for someone looking for a mellow companion.   
                </p>

                <h3 className='ala-otsikko'>Health Info:</h3>
                <ul>
                  <li>- Vaccinated (core + rabies)</li>
                  <li>- Microchipped</li>
                  <li>- Sterilized</li>
                  <li>- EU Pet Passport</li>
                  <li>- Eyes checked and hearing tested – no issues</li>
                </ul>

                <h3 className='ala-otsikko'>Ideal Home:</h3>
                <p className='normi-teskti'>Bruno would love a peaceful home where he can enjoy a slower pace of life. 
                  He’s great with older kids and would make a loyal friend to someone who enjoys leisurely walks and chill afternoons. 
                </p>
              </div>
            </div>
            </Col>
          </Row>

          <Row className="justify-content-start gx-4 gy-4">
            <Col xs={12} sm={6} md={4} lg={4} className="mb-3">
            <div className="white-background p-3">
              <div className="image-container">
                <img src={sekarotu} alt="Kuva 1" className="img-fluid rounded shadow" />
              </div>

              <div className="text-container">
                <h2 className="mt-3 nimi-otsikko">Nova</h2>
                <p className='normi-teskti'>Breed: Golden Retriever Mix</p>
                <p className='normi-teskti'>Age: 9 months</p>
                <p className='normi-teskti'>Gender: Female</p>
                <h3 className='ala-otsikko'>About Nova:</h3>
                <p className='normi-teskti'>
                Nova is a gentle and curious young pup with a soft heart and a sweet temperament.
                She loves to explore her surroundings, enjoys belly rubs, and is quickly learning to trust and bond with people. 
                Nova is still in her puppy phase, which means she’s playful, energetic, and eager to learn. 
                She's already picking up on basic commands and responds well to positive reinforcement.    
                </p>

                <h3 className='ala-otsikko'>Health Info:</h3>
                <ul>
                  <li>- Vaccinated (core + rabies)</li>
                  <li>- Microchipped</li>
                  <li>- Sterilized</li>
                  <li>- EU Pet Passport</li>
                  <li>- Hip and elbow joints examined – no issues</li>
                  <li>- Eyes and heart checked  – clear so far</li>
                </ul>

                <h3 className='ala-otsikko'>Ideal Home:</h3>
                <p className='normi-teskti'>Nova would thrive in a loving home that can offer her stability, structure,
                  and plenty of affection. She’d do well with a family or individual who has the time and patience to continue her 
                  training and help her blossom into a confident adult dog. 
                  She’s friendly with other dogs and would love a calm canine companion. 
                </p>
              </div>
            </div>
            </Col>
          </Row>
        
        </Container>
  );
}

export default DogProfiles;
