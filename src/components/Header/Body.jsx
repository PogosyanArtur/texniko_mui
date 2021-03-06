import React, { useState, Fragment } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/styles';
import { Grid, Link, IconButton, ListItemText, List, ListItem,Collapse } from '@material-ui/core'
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { Menu as MenuIcon } from '@material-ui/icons'
import { navigationData} from 'data'
import Contacts from './Contacts'
import Wrapper from 'components/Wrapper'


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

	let [ show, setShow] = useState(false)

	const menuListToggleHandler = () => {
		setShow(show = !show)
	}

	const closeMenuListHandler = () => {
		setShow(show = false)
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
				&& <Collapse in={show} timeout={500}>
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
				</Collapse>
			}
			<Wrapper className ={ classes.Wrapper }>
				{ mdDown && <Contacts/> }
			</Wrapper>
		</Fragment>
	)
}