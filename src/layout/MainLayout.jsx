import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header'

const useStyles = makeStyles(theme=>({
    marginTop :{
        marginTop: '176px',
        [theme.breakpoints.up('md')]: {
            marginTop: '195px',
        },
        [theme.breakpoints.up('lg')]: {
            width: theme.breakpoints.wrappers.lg,
            marginTop: '200px',
        }
    }
}))

const MainLayout = ({children}) => {
    const classes = useStyles()
    return (
        <Fragment>
            <Header />
                <div className={classes.marginTop}></div>
                {children}
            {/* <Footer/> */}
        </Fragment>
    )
}

export default MainLayout
