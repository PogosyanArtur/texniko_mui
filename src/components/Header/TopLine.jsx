import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Link, Divider, Hidden } from '@material-ui/core'
import { AccessTime as AccessTimeIcon, LocationOn  as LocationOnIcon} from '@material-ui/icons'
import { contactsData } from 'data'
import Wrapper from 'components/Wrapper'

const useStyles = makeStyles(theme=>({
	Divider: {
			backgroundColor: theme.palette.grey[ 600 ]
		},
	
		Text: {
			color: theme.palette.grey[ 50 ],
			display: 'flex',
			alignItems: 'center',
			paddingTop: theme.spacing.unit,
			paddingBottom: theme.spacing.unit,
			marginLeft: theme.spacing.unit * 3,
	
		},

		Link: {
			transition: 'color 0.3s',
			cursor: 'pointer',
			'&:hover': {
				color: theme.palette.secondary.main,
				textDecoration: 'none',
			},
		},
		Icon: {
			marginRight: theme.spacing.unit * 1,
		},
	}))
	
	export default () => {
		const classes = useStyles()
	return (
		<Wrapper>
			<Grid container justify='flex-end'>

				<Hidden implementation="css" smDown>
					<Link to={ contactsData.location1.href }
						component={ RouterLink }
						variant="caption" 
						className={ `${ classes.Text } ${ classes.Link }` }>
						<LocationOnIcon className={ classes.icon } />{ contactsData.location1.name }
					</Link>
				</Hidden>

				<Typography variant="caption" className={ classes.Text }>
					<AccessTimeIcon className={ classes.Icon } /> ПН-ВС 09:00 - 21:00
				</Typography>

			</Grid>
			<Divider className={ classes.Divider } />
		</Wrapper>
	)
}
