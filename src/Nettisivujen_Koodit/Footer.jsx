import '../Nettisivujen_Tyylit/Footer.css';
import img1 from "../assets/images/pets-1356191_1280.jpg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div class="container p-4">
          <div class="row">
            <div class="col justify-content-center footer-contacts">
              <h3 className="h4 p-4">Hope Tails Rescue ry</h3>
              <div className="d-flex align-items-center gap-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill footer-contact-icons" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <p className="mb-0">Esimerkkiosoite 1, 1111, Esimerkki</p>
              </div>
              <div className="d-flex align-items-center gap-3 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill footer-contact-icons" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
                <p className="mb-0">0401234567</p>
              </div>
              <div className="d-flex align-items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-question-lg footer-contact-icons" viewBox="4 1 7 14">
                  <path fillRule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14" />
                </svg>
                <p className="mb-0">Click here for more contact information</p>
              </div>
            </div>
            <div class="col-md align-self-center">
              <img src={img1} alt="testikuva src:https://pixabay.com/fi/photos/lemmikkiel%C3%A4imet-koira-samojedi-1356191/" className="footer-logo pt-4" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-center p-3">© 2023 Hope Tails Rescue ry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer