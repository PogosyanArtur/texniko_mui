import React, {Fragment} from 'react'
import Header from '../views/Header'


const MainLayout = ({children}) => {
    return (
        <Fragment>
            <Header />
                <div style={{marginTop:"220px"}}></div>
                {children}
            {/* <Footer/> */}
        </Fragment>
    )
}

export default MainLayout
