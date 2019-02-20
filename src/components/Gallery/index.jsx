import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views';
import { sideImagesData } from '../../data'
import Wrapper from '../Wrapper'

const useStyles = makeStyles(theme => ({
    GalleryContainer: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing.unit * 7,
        paddingBottom: theme.spacing.unit * 10,
    },
    Card: {
        width: '400px',
    },
    CardMedia: {
        width: '100%',
        height: '300px'
    },
    CardTitle: {
        color: theme.palette.info.main
    }
}))



export default () => {
    const classes = useStyles()
    return (
        <section className={ classes.GalleryContainer }>
            <Wrapper>
                <SwipeableViews enableMouseEvents>
                    {
                        sideImagesData.map((item, index) => (
                            <Card key={ item } className={ classes.Card }>
                                <CardMedia className={ classes.CardMedia } image={ `${ require(`../../static/images/${ item }.jpg`) }` } />
                                <CardContent>
                                    <Typography variant="h6" className={ classes.CardTitle }>Hellow mu</Typography>
                                </CardContent>
                            </Card>
                        ))
                    }
                </SwipeableViews>
            </Wrapper>
        </section>
    )
}