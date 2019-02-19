import React, { useState, Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import AnimateHeight from 'react-animate-height';
import Wrapper from '../Wrapper'
import Contacts from './Contacts'
import { navigationData} from '../../data'
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Link, IconButton, ListItemText, List, ListItem } from '@material-ui/core'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Menu as MenuIcon } from '@material-ui/icons'


const useStyles = makeStyles(theme => ({
	Wrapper:{
		paddingTop:theme.spacing.unit,
		paddingBottom:theme.spacing.unit,
	},
	IconButton: {
		cursor: 'pointer',
		color: theme.palette.common.white,
	},

	logoFirstLetter: {
		color: theme.palette.secondary.main,
	},

	LinkLogo: {
		color: theme.palette.grey[ 50 ],
		fontStyle: 'italic',
		cursor: 'pointer',
		'&:hover': {
			textDecoration: 'none',
		},
	},

	List: {
		backgroundColor: theme.palette.common.white,
		paddingTop: theme.spacing.unit * 0,
		paddingBottom: theme.spacing.unit * 0,
	},
	ListItem: {
		color: theme.palette.secondary.main,
		textTransform: 'uppercase',
		'&:hover, &:focus': {
			backgroundColor: theme.palette.secondary.main,
		}
	},

}))

export default () => {
	const theme = useTheme();
	const classes = useStyles();
	const mdDown = useMediaQuery(theme.breakpoints.down('md'))

	let [ height, setHeight ] = useState(0)

	const menuListToggleHandler = () => {
		setHeight(height === 0 ? height = 'auto' : height = 0)
	}

	const closeMenuListHandler = () => {
		setHeight(height = 0)
	}

	return (
		<Fragment>
			<Wrapper className ={ classes.Wrapper }>
				<Grid container justify="space-between" alignItems="center">
					<Link to='/' component={ RouterLink } variant="h1" className={ classes.LinkLogo }>
						<span className={ classes.logoFirstLetter }>T</span>exniko
					</Link>
					{ !mdDown && <Contacts /> }
					{ mdDown
						&& <IconButton className={ classes.IconButton } onClick={ menuListToggleHandler }>
							<MenuIcon fontSize="large" />
						</IconButton> }

				</Grid>
			</Wrapper>
			{ mdDown
				&& <AnimateHeight
					duration={ 500 }
					height={ height }
				>
					<List component="nav" className={ classes.List }>
						{
							navigationData.map(item => (
								<ListItem
									component={ RouterLink }
									to={ `/${ item.value }` }
									divider
									button
									key={ item.value }
									onClick={ closeMenuListHandler }
									className={ classes.ListItem }
								>
									<ListItemText primary={ item.name } dense="true" />
								</ListItem>
							))
						}
					</List>
				</AnimateHeight>
			}
			<Wrapper className ={ classes.Wrapper }>
				{ mdDown && <Contacts/> }
			</Wrapper>
		</Fragment>
	)
}