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

  const skillList =[
    {
        id:1,
        imageUrl:"https://bit.ly/3rfl0JY",
        skillName:"Java",
    },
    {
        id:1,
        imageUrl:"https://i.ibb.co/88bM0sJ/20230921-140615.png",
        skillName:"AWS",
    },
    {
        id:1,
        imageUrl:"https://bit.ly/450rp9u",
        skillName:"Python",
    },
    {
        id:1,
        imageUrl:"https://i.ibb.co/WDcdhg3/pngwing-com.png",
        skillName:"Node JS",
    },
    {
        id:1,
        imageUrl:"https://bit.ly/3RvedGC",
        skillName:"React JS",
    },
    {
        id:1,
        imageUrl:"https://i.ibb.co/jhFRDQv/pngwing-com-1.png",
        skillName:"JavaScript",
    },
    {
        id:1,
        imageUrl:"https://i.ibb.co/LtCKHbs/pngegg-1.png",
        skillName:"HTML & CSS",
    },
    {
        id:1,
        imageUrl:"https://i.ibb.co/yspQnrw/SQL.png",
        skillName:"SQL",
    },
    {
        id:1,
        imageUrl:"https://i.ibb.co/d2rLczL/20230921-132636.png",
        skillName:"GIT",
    },
    ]

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Slider {...settings} className="owl-carousel owl-theme skill-slider">
                            {skillList.map(skill =>(
                                <div className="skill-item item">
                                    <img src={skill.imageUrl} alt={skill.altText} />
                                    <h5>{skill.skillName}</h5>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="bg-image-left" />
    </section>
  )
}
