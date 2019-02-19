import React, {Fragment} from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header'

const useStyles = makeStyles(theme=>({
    spacingTop :{
        marginTop: '216px',
    }
}))

const MainLayout = ({children}) => {
    const classes = useStyles()
    return (
        <Fragment>
            <Header />
                <div className={classes.spacingTop}></div>
                {children}
        </Fragment>
    )
}

export default MainLayout
