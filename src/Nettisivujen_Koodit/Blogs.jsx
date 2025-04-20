import img2 from "../assets/images/dog-4988986_1280.jpg";
import "../Nettisivujen_Tyylit/Blogs.css";

function Blogs() {
  return (
    <div className="container-fluid p-0">
      <div className="text-center bg-color-yellow p-5">
        <h1 className="pb-3">Blog</h1>
        <div className="paragraph-text">
          <p className="pt-3 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum elementum varius. Nullam eu ligula sed diam placerat auctor. Nam mauris arcu, placerat sed quam non, interdum vulputate metus. In eget justo accumsan, vestibulum risus at, ultricies sem. Cras ante orci, vulputate eu iaculis et, feugiat non turpis. Mauris rutrum, mi et pharetra posuere, lectus felis molestie neque, non posuere purus diam vitae orci.</p>
        </div>
      </div>
      <div className="bg-color-gray row mx-0">
      <div className="col-lg-3 col-md-4 bg-color-yellow sticky-categories d-flex flex-column align-items-center p-1 order-1 order-md-2 h-100">
          <h2 className="pb-2">Categories</h2>
          <form className="text-start">
            <div className="form-check pb-1">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="successStories"
              />
              <label className="form-check-label" htmlFor="successStories">
                Success Stories
              </label>
            </div>
            <div className="form-check pb-1">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="testimonials"
              />
              <label className="form-check-label" htmlFor="testimonials">
                Testimonials
              </label>
            </div>
            <div className="form-check pb-2">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id="communityEvents"
              />
              <label className="form-check-label" htmlFor="communityEvents">
                Community Events
              </label>
            </div>
          </form>
        </div>
        <div className="col-lg-9 col-md-8 pt-lg-5 pt-md-3 pt-sm-5 order-2 order-md-1">
          <div className="row">
            <div className="col-xl-4 col-md-6 mb-4">
              <BlogPost disableResponsiveHiding />
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <BlogPost disableResponsiveHiding />
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <BlogPost disableResponsiveHiding />
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <BlogPost disableResponsiveHiding />
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <BlogPost disableResponsiveHiding />
            </div>
            <div className="col-xl-4 col-md-6 mb-4">
              <BlogPost disableResponsiveHiding />
            </div>
          </div>
        </div>
        
      </div>
      <div className="text-center bg-color-yellow p-5">
        <h2 className="text-center">Partners</h2>
        <div className="paragraph-text">

        </div>
      </div>
    </div>
  )
}

export function BlogPost({ hideOnLg = false, hideOnMd = false, disableResponsiveHiding = false }) {
  return (
    <div className={`mb-4 d-flex justify-content-center ${!disableResponsiveHiding && hideOnLg ? "d-none d-xl-flex" : ""
      } ${!disableResponsiveHiding && hideOnMd ? "d-none d-md-flex" : ""}`}
    >
      <div className="card h-100" style={{ width: '20rem' }}>
        <img className="card-img-top" src={img2} alt="testikuva src:https://pixabay.com/fi/photos/koira-corgi-s%C3%B6p%C3%B6-el%C3%A4in-4988986/" />
        <div class="card-body">
          <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum elementum varius. Nullam eu ligula sed diam placerat auctor. Nam mauris arcu, placerat sed quam non, interdum vulputate metus. </p>
        </div>
      </div>
    </div>
  )
}

export default Blogs;