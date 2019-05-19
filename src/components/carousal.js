import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, {
    Component
} from "react";
import Slider from "react-slick";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './go.css';


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 2,
      slidesToScroll: 2,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      accessibility: true,
      adaptiveHeight: true
    };
    return (
      <div>
        
        <Slider {...settings}>
       
        
          <div class="slickNormalAdaptive">
            <Card>
            <CardContent>
                <img src={require("./../assets/caro/bradford-west-1599906-unsplash.jpg")} alt="fg" / >
                </CardContent>
            </Card>
          </div>
          <div>
              <Card>
              <CardContent>
                  <img src={require("./../assets/caro/bradford-west-1599907-unsplash.jpg")} alt="fg" / >
              </CardContent>
            </Card>
          </div>
          <div>
              <Card>
              <CardContent>
                  <img src={require("./../assets/caro/elio-santos-1570875-unsplash.jpg")} alt="fg" / >
              </CardContent>  
            </Card>
          </div>
          <div>
             <Card>
             <CardContent>
                 <img src={require("./../assets/caro/tomas-robertson-1594346-unsplash.jpg")} alt="fg" / >
            </CardContent> 
            </Card>
          </div>
         
          
          
        </Slider>
      </div>
    );
  }
}