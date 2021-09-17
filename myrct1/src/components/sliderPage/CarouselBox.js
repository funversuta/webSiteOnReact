import React, {Component} from "react"
import Carousel from 'react-bootstrap/Carousel'
import spidiy from './../../assets/images/spidiy.jpg'
import vidio1 from './../../assets/vidios/dc.mp4'
import vidio2 from './../../assets/vidios/dc2.mp4'
import vidio3 from './../../assets/vidios/dc3.mp4'
import vidio4 from './../../assets/vidios/tomdaya.mp4'

 class CarouselBox extends Component {
    render(){
    return (
        <Carousel>
            <Carousel.Item>
            <Carousel.Caption>
                <h3>Actors dance</h3>
               
            </Carousel.Caption>
         
            
           <video  loop autoPlay muted controls>   
    <source src= { vidio1 } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
  
</video>

            </Carousel.Item>
            
            <Carousel.Item>
            <Carousel.Caption>
                <h3>Marvel Cast Ultimate fun</h3>
                
                </Carousel.Caption>
                <div class="container h-100">
    <div class="row align-items-center h-100">
        <div class="col-6 mx-auto">
            <div class="jumbotron">
               
              <video  loop autoPlay muted controls>   
    
     <source src={ vidio2 } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser. 
</video>
</div>
        </div>
    </div>
</div>
            </Carousel.Item>
            <Carousel.Item>
            <Carousel.Caption>
                <h3>Tom Holland and Zendaya Dancing</h3>
                <p>{"<3<3<3"}</p>
            </Carousel.Caption>
            <div class="container h-100">
    <div class="row align-items-center h-100">
        <div class="col-6 mx-auto">
            <div class="jumbotron">
            <video  loop autoPlay muted controls>   
    <source src= { vidio4 } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
           </video>
           </div>
        </div>
    </div>
</div>
            </Carousel.Item>
            <Carousel.Item>
            <Carousel.Caption>
                <h3>Marvel Cast ShutUp and DAnce wiht Me</h3>
                <p>{"<3<3<3"}</p>
                </Carousel.Caption>
                
               
              <video  loop autoPlay muted controls>   
    
     <source src={ vidio3 } type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser. 
</video>
</Carousel.Item>

        </Carousel>

    )
}}
export default CarouselBox;