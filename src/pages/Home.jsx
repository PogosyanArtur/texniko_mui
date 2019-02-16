import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from '../layout/MainLayout'
import { bannerSideImages } from '../data/contacts'

// import LayoutContainer from '../components/LayoutContainer'

const styles = theme => ({
  '@keyframes zoomIn': {
    '0%': {
      transform: 'scale(1)',
    },
    '25%': {
      transform: 'scale(1) translate(0,0)',
    },
    '100%': {
      transform: 'scale(1.5) translate(200px,0)',
    },
  },
  slikSlide: {
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '650px',
    width: '100%',
    transform: 'scale(1.5) translate(200px,0)',
  },
  activeSlide: {
    animation: 'zoomIn 10s ease-out',
  }


})


class Home extends React.Component {
  state = {
    currentSlide: 0
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: false,
      easing: 'ease-in',
      beforeChange: (current, next) => this.setState({currentSlide:next}),
    };
    const {
      classes,
    } = this.props

    return (
      <MainLayout>
        <Slider {...settings}>
          {
            bannerSideImages.map((slide, index) => (
              <div key={slide}>
                <div style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${require(`../static/images/${slide}.jpg`)})` }}
                  className={classNames(classes.slikSlide, `${index === this.state.currentSlide ? classes.activeSlide : ""}`)}
                >
                </div>
              </div>
            ))
          }
        </Slider>
      </MainLayout>
    );
  }
}

export default withStyles(styles)(Home)