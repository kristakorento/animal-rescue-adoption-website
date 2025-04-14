import '../Nettisivujen_Tyylit/Footer.css';
import img1 from "../assets/images/pets-1356191_1280.jpg";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div class="container p-4">
          <div class="row">
            <div class="col footer-contacts">
              <h3 className="h4 p-4">Hope Tails Rescue ry</h3>
              <p>Esimerkkiosoite 1, 1111, Esimerkki</p>
              <p>0401234567</p>
              <p>Click here for more contact information</p>
            </div>
            <div class="col-sm">
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