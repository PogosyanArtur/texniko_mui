import React from 'react'
import { Grid, Typography,Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Wrapper from '../Wrapper'

const useStyles = makeStyles(theme => ({
    Container: {
        paddingTop: theme.spacing.unit * 6,
        backgroundColor: theme.palette.primary.dark,
    },
    Title:{
        color:theme.palette.common.white,
        paddingTop: theme.spacing.unit * 2,
    },
    Text:{
        color: theme.palette.gray[ '600' ],
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit * 2,
    },
    Divider:{
        backgroundColor: theme.palette.secondary.dark,
    },
    CopyRight:{
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        color: theme.palette.gray[ '600' ],
    }
}))

export default () => {
    const classes = useStyles()
    return (
        <footer className={ classes.Container }>
            <Wrapper>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Title}>LATEST BLOG POSTS</Typography>
                        <Typography className={classes.Text}>The Tesla Model S isn’t the first   car on the road...</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Title}>LATEST BLOG POSTS</Typography>
                        <Typography className={classes.Text}>The Tesla Model S isn’t the first truly autonomous car o...</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Title}>LATEST BLOG POSTS</Typography>
                        <Typography className={classes.Text}>The Tesla Model S isn’t the first truly autonomous car on the road...</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                        <Typography className={classes.Title}>LATEST BLOG POSTS</Typography>
                        <Typography className={classes.Text}>The Tesla Model S isn’t the first truly autonomous car on the road...</Typography>
                    </Grid>
                </Grid>
                <Divider light className={classes.Divider}/>
                <Typography align="center" className={classes.CopyRight}>© 2019 Stylemix ThemesTrademarks and brands are the property of their respective owners.</Typography>
            </Wrapper>
        </footer>
    )
}