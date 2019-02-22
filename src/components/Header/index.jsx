import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom'
import { AppBar, Hidden,  Button, Toolbar } from '@material-ui/core'
import { navigationData } from 'data'
import Wrapper from 'components/Wrapper'
import TopLine from "./TopLine"
import Body from "./Body"

const useStyles = makeStyles((theme)=>({
	Toolbar: {
		backgroundColor: theme.palette.secondary.main,
	},

	Button: {
		height: 65,
		color: theme.palette.common.white,
		fontSize:'1.1rem',
		fontWeight:'300',
		borderRadius: '0',
		transform: 'skew(-13deg)',
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


