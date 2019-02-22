import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { contactsData } from '../../data'
import { makeStyles } from '@material-ui/styles';
import { Typography, Link } from '@material-ui/core'
import { LocationOn, MailOutline, Phone } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  headerContacts: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    [ theme.breakpoints.down("md") ]: {
      justifyContent: 'space-between',
    },
  },

  headerIconOutLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.spacing.unit * 5,
    width: theme.spacing.unit * 5,
    borderRadius: '100%',
    border: `2px solid ${ theme.palette.secondary.main }`,
    color: theme.palette.secondary.main,
    marginRight: theme.spacing.unit * 1.5,
  },

  contactItemLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[ 50 ],
    transition: 'color 0.3s',
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main
    },
    '&+&': {
      marginLeft: theme.spacing.unit * 3,
    },
    [ theme.breakpoints.down("sm") ]: {
      '&+&': {
        marginLeft: theme.spacing.unit,
      }
    },
  },

  contactItemDisable: {
    [ theme.breakpoints.down("sm") ]: {
      display: 'none'
    },
  },

  contactItemText: {
    maxWidth: '180px',
    color: theme.palette.common.white,
    fontSize:'0.9rem'
  },

}))

export default (props) => {
  const classes = useStyles()

  return (
    <div className={ classes.headerContacts }>
      <Link component={ RouterLink } variant="subtitle1" to={ contactsData.location1.href } className={ `${ classes.headerLink } ${ classes.contactItemLink } ${ classes.contactItemDisable }` }>
        <span className={ classes.headerIconOutLine }><LocationOn /></span>
        <Typography variant="subtitle1" component="p" className={ ` ${ classes.contactItemText }` }>
          { contactsData.location1.name }
        </Typography>
      </Link>

      <Link href={ contactsData.mail1.href } variant="subtitle1" className={ `${ classes.headerLink } ${ classes.contactItemLink } ${ classes.contactItemDisable } ` }>
        <span className={ classes.headerIconOutLine }><MailOutline /></span>
        <div>
          <Typography variant="button" color="secondary"> E-mail: </Typography>
          <Typography variant="subtitle1" component="p" className={ ` ${ classes.contactItemText }` }>
            { contactsData.mail1.name }
          </Typography>

        </div>
      </Link>

      <Link href={ contactsData.telephone1.href } variant="subtitle1" className={ `${ classes.headerLink } ${ classes.contactItemLink }` }>
        <span className={ classes.headerIconOutLine }><Phone /></span>
        <div>
          <Typography variant="button" color="secondary"> Телефон: </Typography>
          <Typography variant="subtitle1" component="p" className={ ` ${ classes.contactItemText }` }>
          { contactsData.telephone1.name }
          </Typography>          
        </div>
      </Link>
    </div>
  )
}


