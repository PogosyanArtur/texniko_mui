import React, { Fragment } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { sideImagesData } from '../../data'
import { makeStyles } from '@material-ui/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
  Slide: {
    height: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 bottom'
  }
})

const MyComponent = () => {
  const classes = useStyles()
  return (
    <Fragment>
      <AutoPlaySwipeableViews interval="5000">
        {
          sideImagesData.map((src, i) => (
            <div key={ src } className={ classes.Slide } style={ { backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ require(`../../static/images/${ src }.jpg`) })` } }>
            </div>
          ))
        }
      </AutoPlaySwipeableViews>
    </Fragment>
  )
}
export default MyComponent;

