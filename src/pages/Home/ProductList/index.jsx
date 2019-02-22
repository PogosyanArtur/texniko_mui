import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Button,Collapse  } from '@material-ui/core';
import Wrapper from 'components/Wrapper'
import ProductCard from './ProductCard'

const CardsData = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
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
    let [ showAllState, setShowAllState ] = useState(false)
    const showAllHandler = () => (
        setShowAllState(showAllState = true)
    )
    return (
        <section>
            <header className={ classes.Header }>
                <Wrapper>
                    <Typography variant="h2" className={ classes.Title }>добро пожаловать <span className={ classes.TitleAccent }>в мир спецтехники</span></Typography>
                </Wrapper>
            </header>
            
            <Wrapper className={ classes.Wrap }>
                <Collapse in={showAllState} timeout={1000} collapsedHeight="750px">
                    <Grid container spacing={ 24 } justify="center" >
                        {
                            CardsData.map((item, index) => 
                                <Grid item key={ item }>
                                    <ProductCard />
                                </Grid>
                        )
                        }            
                    </Grid>
                </Collapse>
             </Wrapper>           
                <Grid container justify="center" className={ classes.Wrap }>
                    { !showAllState ? <Button onClick={ showAllHandler } variant="contained" color="primary">Показать Все</Button> : null }
                </Grid>            
        </section>

    )
}
export default ProductList;