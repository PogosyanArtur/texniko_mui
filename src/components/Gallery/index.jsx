import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import { Card, CardMedia, CardContent, Typography, MobileStepper,IconButton  } from '@material-ui/core'
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery'
import Carousel from 'nuka-carousel';
import { sideImagesData } from '../../data'
import Wrapper from '../Wrapper'

const useStyles = makeStyles(theme => ({
    GalleryContainer: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing.unit * 9,
    },
    Card: {
        minWidth: '300px',
    },
    CardMedia: {
        height: '250px'
    },
    CardTitle: {
        color: theme.palette.info.main
    },
    MobileStepper: {
        justifyContent:'center',
        backgroundColor: theme.palette.primary.main,
    },
    MobileStepperDotActive: {
        backgroundColor: theme.palette.secondary.main
    },
    IconButton:{
        backgroundColor: 'transparent',
        transition:'all 0.2s',
        padding:theme.spacing.unit,
        margin:theme.spacing.unit,
        borderRadius: '5px',
        border:`2px solid transparent`,
        '&:hover':{
            color:theme.palette.secondary.main,
            backgroundColor:'transparent',
            borderRadius: '5px',
            border:`2px solid ${theme.palette.secondary.main}`
        }
    },
    MobileStepperDot:{
        width:'6px',
        height:'6px',
    }
}))


const sideImagesDataLength = sideImagesData.length - 1
export default () => {
    const classes = useStyles()
    const theme = useTheme();
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const xlUp = useMediaQuery(theme.breakpoints.up('xl'))
    let [ currentIndex, setCurrentIndex ] = useState(0)

    const handleNext = () => {
        setCurrentIndex(currentIndex + 1)
    };
    const handleBack = () => {
        setCurrentIndex(currentIndex - 1)
    };

    let SlideToShowNumber = 1;
    if (mdUp)
    {
        SlideToShowNumber = 2;
    }
    if (xlUp)
    {
        SlideToShowNumber = 3;
    }

    return (
        <section className={ classes.GalleryContainer }>
            <Wrapper>
                <Carousel
                    slideIndex={ currentIndex }
                    afterSlide={ index => setCurrentIndex(index) }
                    slidesToShow={ SlideToShowNumber }
                    swiping 
                    withoutControls
                    cellAlign="left"
                    cellSpacing={ 20 }>
                    {
                        sideImagesData.map((item, index) => (
                            <Card key={ item } className={ classes.Card } elevation={ 0 }>
                                <CardMedia 
                                    className={ classes.CardMedia } 
                                    style={ { backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${ require(`../../static/images/${ item }.jpg`) })` }} />
                                <CardContent>
                                    <Typography variant="body1" component="h4" className={ classes.CardTitle }>Трактор JSb 3 при  разработке грунта, объект Москва Сити </Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </Carousel>
                <MobileStepper
                    variant="dots"
                    steps={ sideImagesDataLength + 1 }
                    activeStep={ currentIndex }
                    position="static"
                    className={ classes.MobileStepper }
                    classes={ { dotActive: classes.MobileStepperDotActive, dot:classes.MobileStepperDot } }
                    nextButton={
                        <IconButton disableRipple className={classes.IconButton} size="small" onClick={ handleNext } disabled={ currentIndex === sideImagesDataLength }>
                            <KeyboardArrowRight fontSize="medium"/>
                        </IconButton>
                    }
                    backButton={
                        <IconButton disableRipple className={classes.IconButton} size="small" onClick={ handleBack } disabled={ currentIndex === 0 }>
                            <KeyboardArrowLeft fontSize="medium"/>
                        </IconButton>
                    }
                />
            </Wrapper>
        </section>
    )
}