import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom'
import Wrapper from '../Wrapper'
import TopLine from "./TopLine"
import Body from "./Body"

import { navigationData } from '../../data'
import { AppBar, Hidden,  Button, Toolbar } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
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

}))

export default () => {

	const classes = useStyles()
	return	<AppBar position="fixed" color="primary">
			<TopLine/>
			<Body/>
			<Hidden implementation="css" mdDown>
				<Toolbar className={ classes.Toolbar }>
				<Wrapper style={{display:"flex"}}>
					{
						navigationData.map(item => (
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
} 


