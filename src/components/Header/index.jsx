import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom'
import Wrapper from '../Wrapper'
import TopLine from "./TopLine"
import Body from "./Body"

import { tabsData } from '../../data/contacts'
import { AppBar, Hidden,  Button, Toolbar } from '@material-ui/core'
const styledBy = (property, mapping) => props => mapping[props[property]]

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
						tabsData.map(item => (
							<Button
								key={ item.value }
								fullWidth
								variant='text'
								color="white"
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


