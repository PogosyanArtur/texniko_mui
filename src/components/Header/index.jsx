import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Wrapper from '../Wrapper'
import TopLine from "./TopLine"
import Body from "./Body"

import { tabsData } from '../../data/contacts'
import { AppBar, Hidden,  Button, Toolbar } from '@material-ui/core'

const styles = theme => ({
	Toolbar: {
		backgroundColor: theme.palette.secondary.main,
	},

	Button: {
		height: 65,
		color: theme.palette.common.white,
		borderRadius: '0',
		transform: 'skew(-15deg)',
		'&:hover, &:focus': {
			backgroundColor: theme.palette.primary.main,
		}
	}

})


export default withStyles(styles)(({classes}) => 
		<AppBar position="fixed" color="primary">
			<TopLine/>
			<Body/>
			<Hidden implementation="css" mdDown>
				<Toolbar className={ classes.Toolbar }>
				<Wrapper style={{display:"flex"}}>
					{
						tabsData.map(item => (
							<Button
								key={ item.value }
								fullWidth
								variant='text'
								className={ classes.Button }
								component={ RouterLink } 
								to={ `/${ item.value }` }
							>
								{ item.name }
							</Button>
						))
					}
					</Wrapper>
				</Toolbar>
			</Hidden>
		</AppBar>
)

