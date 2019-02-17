import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import { location1, mail1, telephone1  } from '../../data/contacts'
import { Typography, Link } from '@material-ui/core'
import { LocationOn, MailOutline, Phone } from '@material-ui/icons'

const styles = theme => ({
    headerContacts: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        display: 'flex',
        [ theme.breakpoints.down("md") ]: {
          justifyContent:'space-between',
        },
      },
    
      headerIconOutLine: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme.spacing.unit * 5,
        width: theme.spacing.unit * 5,
        borderRadius: '100%',
        border: `3px solid ${ theme.palette.secondary.main }`,
        color: theme.palette.secondary.main,
        marginRight: theme.spacing.unit * 1.5,
      },
    
      contactItemLink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.grey[ 50 ],
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
    
      contactItemLocation: {
        width: 180,
        textTransform: 'uppercase'
      },
    
})

const Contacts = ({classes}) =>
    <div className={ classes.headerContacts }>
      <Link component={ RouterLink } variant="caption" to={ location1.href } className={ `${ classes.headerLink } ${ classes.contactItemLink } ${ classes.contactItemDisable }` }>
        <span className={ classes.headerIconOutLine }><LocationOn /></span>
        <p className={ ` ${ classes.contactItemLocation }` }>
          { location1.name }
        </p>
      </Link>

      <Link href={ mail1.href } variant="caption" className={ `${ classes.headerLink } ${ classes.contactItemLink } ${ classes.contactItemDisable } ` }>
        <span className={ classes.headerIconOutLine }><MailOutline /></span>
        <div>
          <Typography variant="button" color="secondary"> E-mail: </Typography>
          { mail1.name }
        </div>
      </Link>

      <Link href={ telephone1.href } variant="caption" className={ `${ classes.headerLink } ${ classes.contactItemLink }` }>
        <span className={ classes.headerIconOutLine }><Phone /></span>
        <div>
          <Typography variant="button" color="secondary"> Телефон: </Typography>
          { telephone1.name }
        </div>
      </Link>
    </div>


export default withStyles(styles)(Contacts)