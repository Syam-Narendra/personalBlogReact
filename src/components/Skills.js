import colorSharp from "../assets/img/color-sharp.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Skills = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Slider {...settings} className="owl-carousel owl-theme skill-slider">
                            <div className="skill-item item">
                                <img className="skill-bg-image" src="https://bit.ly/3rfl0JY" alt="java-icon" />
                                <h5 className="skill-name">Java</h5>
                            </div>
                            <div className="item">
                                <img src="https://bit.ly/450rp9u" alt="python-icon" />
                                <h5>Python</h5>
                            </div>
                            
                            <div className="item">
                                <img src="https://i.ibb.co/88bM0sJ/20230921-140615.png" alt="aws-icon" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/WDcdhg3/pngwing-com.png" alt="nodejs-icon" />
                                <h5>Node JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://bit.ly/3RvedGC" alt="react-icon" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/jhFRDQv/pngwing-com-1.png" alt="js-icon" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/LtCKHbs/pngegg-1.png" alt="html-icon" />
                                <h5>HTML CSS</h5>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/yspQnrw/SQL.png" alt="sql-icon" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/d2rLczL/20230921-132636.png" alt="git-icon" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src="https://i.ibb.co/DQ8FcfY/20230921-140952.png" alt="postman-icon" />
                                <h5>Postman</h5>
                            </div>
                            
                        </Slider>
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
