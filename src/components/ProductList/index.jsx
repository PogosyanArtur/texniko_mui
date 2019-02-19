import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import Wrapper from '../Wrapper'
import ProductCard from './ProductCard'

const CardsData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
const CardsDataLength = CardsData.length
const useStyles = makeStyles(theme => ({
    Header: {
        backgroundColor: theme.palette.primary.main,
        paddingTop: theme.spacing.unit * 4,
        paddingBottom: theme.spacing.unit * 4,
    },
    Wrap: {
        marginTop: theme.spacing.unit * 6,
        marginBottom: theme.spacing.unit * 6
    },
    Title: {
        textTransform: 'uppercase',
        color: theme.palette.common.white,
        fontSize: "1.4rem",
        [ theme.breakpoints.up('sm') ]: {
            fontSize: "1.6rem",
        },
        [ theme.breakpoints.up('md') ]: {
            fontSize: "2rem",
        },
        [ theme.breakpoints.up('lg') ]: {
            fontSize: "2.5rem",
        },
        [ theme.breakpoints.up('xl') ]: {
            fontSize: "3rem",
        },
    },
    TitleAccent: {
        color: theme.palette.secondary.main
    },
}))

const ProductList = () => {
    const classes = useStyles()
    let [ itemsToShowState, setTtemsToShowState ] = useState(8)
    const showAllItemsHandler = () => (
        setTtemsToShowState(itemsToShowState = CardsDataLength)
    )
    return (
        <section >
            <header className={ classes.Header }>
                <Wrapper>
                    <Typography variant="h2" className={ classes.Title }>добро пожаловать <span className={ classes.TitleAccent }>в мир спецтехники</span></Typography>
                </Wrapper>
            </header>
            <Wrapper className={ classes.Wrap }>
                <Grid container spacing={ 24 } justify="center">
                    {
                        CardsData.map((item, index) => {
                            if (index < itemsToShowState)
                            {
                                return (<Grid item key={ item }>
                                    <ProductCard />
                                </Grid>)

                            } else
                            {
                                return null
                            }
                        })
                    }
                </Grid>
                <Grid container justify="center" className={ classes.Wrap }>
                    { CardsDataLength > 8 && itemsToShowState <= 8 ? <Button onClick={ showAllItemsHandler } variant="contained" color="primary">Показать Все</Button> : null }
                </Grid>
            </Wrapper>
        </section >

    )
}
export default ProductList;