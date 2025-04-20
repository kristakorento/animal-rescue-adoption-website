import img1 from "../assets/images/pets-1356191_1280.jpg";
import img2 from "../assets/images/dog-4988986_1280.jpg";
import { BlogPost } from "./Blogs";
import '../Nettisivujen_Tyylit/FrontPage.css';

function FrontPage() {
  return (
    <div className="container-fluid p-0">
      <div className="text-center bg-color-yellow p-5">
        <h1 className="pb-3">Hope Tails Rescue ry</h1>
        <div className="header-text">
          <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum elementum varius. Nullam eu ligula sed diam placerat auctor. Nam mauris arcu, placerat sed quam non, interdum vulputate metus. In eget justo accumsan, vestibulum risus at, ultricies sem. Cras ante orci, vulputate eu iaculis et, feugiat non turpis. Mauris rutrum, mi et pharetra posuere, lectus felis molestie neque, non posuere purus diam vitae orci. Integer imperdiet metus tortor, sed luctus quam fermentum eget. Nullam at lectus ex. Donec consequat lectus mauris.</p>
        </div>
      </div>
      <div className="about-container bg-color-gray row p-5 mr-0">
        <h2 className="text-center">About us</h2>
        <div className="col-xl-8 col-lg-7 col-12">
          <p className="pt-3 text-lg-end text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum elementum varius. Nullam eu ligula sed diam placerat auctor. Nam mauris arcu, placerat sed quam non, interdum vulputate metus. In eget justo accumsan, vestibulum risus at, ultricies sem. Cras ante orci, vulputate eu iaculis et, feugiat non turpis. Mauris rutrum, mi et pharetra posuere, lectus felis molestie neque, non posuere purus diam vitae orci. Integer imperdiet metus tortor, sed luctus quam fermentum eget. Nullam at lectus ex. Donec consequat lectus mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent condimentum dignissim mi, et consectetur nibh vulputate vel. Mauris id euismod diam. Phasellus vitae ex vehicula, vestibulum lectus quis, venenatis urna. Nunc ac aliquet nulla, non efficitur libero. Aenean consequat, ipsum et efficitur aliquet, nisi ante condimentum mauris, at interdum ante augue quis nisl.</p>
        </div>
        <div className="col col-lg-4 flex-between-600-991">
          <img src={img1} alt="testikuva src:https://pixabay.com/fi/photos/lemmikkiel%C3%A4imet-koira-samojedi-1356191/" className="homepage-img pt-4" />
        </div>
      </div>
      <div className="blogs-container text-center justify-content-around bg-color-yellow p-5">
        <h2 className="pb-5">Check these blog posts out:</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <BlogPost />
          <BlogPost hideOnMd/>
          <BlogPost hideOnLg/>
        </div>
      </div>
    </div>
  )
}



export default FrontPage;