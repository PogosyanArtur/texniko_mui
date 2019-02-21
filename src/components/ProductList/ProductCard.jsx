import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Card, CardMedia, CardActionArea, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Card: {
        maxWidth: '250px'
    },
    CardMedia: {
        height: '200px',
        width: '250px',
    },
    CardTitle: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 1.5,
    },
    CardPrice: {
        backgroundColor: theme.palette.secondary.dark,
        paddingTop: theme.spacing.unit * 1.7,
        paddingBottom: theme.spacing.unit * 1.7,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        color: theme.palette.common.white,
        display: 'inline-block',
        transform: 'skew(-17deg,0)',
        borderRadius: theme.shape.borderRadius * 2,
    }
}))

const ProductCard = () => {
    const classes = useStyles()
    return (
        <Card className={ classes.Card }>
            <CardActionArea component="a">
                <CardMedia
                    className={ classes.CardMedia }
                    style={ { backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)), url(${ require(`../../static/images/cards/JCB_3CXC_250x200.jpg`) })` } }
                    title="Live from space album cover"
                />
                <CardContent>
                    <Typography className={ classes.CardTitle } variant="h6" color="primary" component="h4">Экскаватор-погрузчик «JCB 3CX»</Typography>
                    <Grid container justify="center">
                        <Typography gutterBottom align="center" variant="h6" component="p" className={ classes.CardPrice }>25 000 руб</Typography>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}
export default ProductCard;