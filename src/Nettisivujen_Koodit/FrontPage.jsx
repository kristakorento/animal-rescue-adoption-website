import img1 from "../assets/images/pets-1356191_1280.jpg";
import img2 from "../assets/images/dog-4988986_1280.jpg";
import '../Nettisivujen_Tyylit/FrontPage.css';

function FrontPage() {
  return (
    <div className="container">
      <div className="header text-center">
        <h1>Hope Tails Rescue ry</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum elementum varius. Nullam eu ligula sed diam placerat auctor. Nam mauris arcu, placerat sed quam non, interdum vulputate metus. In eget justo accumsan, vestibulum risus at, ultricies sem. Cras ante orci, vulputate eu iaculis et, feugiat non turpis. Mauris rutrum, mi et pharetra posuere, lectus felis molestie neque, non posuere purus diam vitae orci. Integer imperdiet metus tortor, sed luctus quam fermentum eget. Nullam at lectus ex. Donec consequat lectus mauris.</p>
      </div>
      <div className="about-container row">
      <h2 className="text-center">About us</h2>
        <div className="col">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum elementum varius. Nullam eu ligula sed diam placerat auctor. Nam mauris arcu, placerat sed quam non, interdum vulputate metus. In eget justo accumsan, vestibulum risus at, ultricies sem. Cras ante orci, vulputate eu iaculis et, feugiat non turpis. Mauris rutrum, mi et pharetra posuere, lectus felis molestie neque, non posuere purus diam vitae orci. Integer imperdiet metus tortor, sed luctus quam fermentum eget. Nullam at lectus ex. Donec consequat lectus mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent condimentum dignissim mi, et consectetur nibh vulputate vel. Mauris id euismod diam. Phasellus vitae ex vehicula, vestibulum lectus quis, venenatis urna. Nunc ac aliquet nulla, non efficitur libero. Aenean consequat, ipsum et efficitur aliquet, nisi ante condimentum mauris, at interdum ante augue quis nisl.</p>
        </div>
        <div className="col col-lg-4">
          <img src={img1} alt="testikuva src:https://pixabay.com/fi/photos/lemmikkiel%C3%A4imet-koira-samojedi-1356191/" className="homepage-img" />
        </div>
      </div>
      <div className="blogs-container text-center row justify-content-around">
        <h2>Check these blog posts out:</h2>
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </div>
    </div>
  )
}

function BlogPost() {
  return (
    <div className="w-25 border">
      <img src={img2} alt="testikuva src:https://pixabay.com/fi/photos/koira-corgi-s%C3%B6p%C3%B6-el%C3%A4in-4988986/" className="homepage-img2"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum elementum varius. Nullam eu ligula sed diam placerat auctor. Nam mauris arcu, placerat sed quam non, interdum vulputate metus. </p>
    </div>
  )
}

export default FrontPage;