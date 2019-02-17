import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Wrapper from '../Wrapper'
import { location1 } from '../../data/contacts'
import { Typography, Grid, Link, Divider, Hidden } from '@material-ui/core'
import { AccessTime as AccessTimeIcon, LocationOn  as LocationOnIcon} from '@material-ui/icons'

const styles = theme => ({
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
	})
	
	export default withStyles(styles)(({ classes }) => {
	return (
		<Wrapper>
			<Grid container justify='flex-end'>

				<Hidden implementation="css" smDown>
					<Link to={ location1.href }
						component={ RouterLink }
						variant="caption" 
						className={ `${ classes.Text } ${ classes.Link }` }>
						<LocationOnIcon className={ classes.icon } />{ location1.name }
					</Link>
				</Hidden>

				<Typography variant="caption" className={ classes.Text }>
					<AccessTimeIcon className={ classes.Icon } /> ПН-ВС 09:00 - 21:00
				</Typography>

			</Grid>
			<Divider className={ classes.Divider } />
		</Wrapper>
	)
})
