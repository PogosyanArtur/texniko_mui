import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import AnimateHeight from 'react-animate-height';

import { location1, mail1, telephone1, tabsData } from '../data/contacts'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';


import AccessTime from '@material-ui/icons/AccessTime'
import LocationOn from '@material-ui/icons/LocationOn'
import MailOutline from '@material-ui/icons/MailOutline'
import Phone from '@material-ui/icons/Phone'
import MenuIcon from '@material-ui/icons/Menu'


import LayoutContainer from '../components/LayoutContainer'

const styles = theme => ({

  // App bar 
  appBarRoot: {
    ...theme.root,
    boxShadow: 'none',
  },

  appBarContainer: {
    backgroundColor: theme.palette.primary.main,
  },

  menuButton: {
    cursor: 'pointer',
    color: theme.palette.common.white,
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      display: 'none'
    }
  },

  // Top line
  topLineDivider: {
    backgroundColor: theme.palette.grey[600]
  },

  topLineText: {
    color: theme.palette.grey[50],
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 3,

  },
  topLineLink: {
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },

  topLineIcon: {
    marginRight: theme.spacing.unit * 1,
  },

  //  Logo
  logoContainer: {
    width: '100%',
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      width: 'auto'
    }
  },


  logoUpLetter: {
    color: theme.palette.secondary.main,
  },

  logoText: {
    color: theme.palette.grey[50],
    fontStyle: 'italic',
  },

  // Header main

  headerLink: {
    transition: 'color 0.3s',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none',
    },
  },

  headerMain: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit * 1.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerContacts: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    maxWidth: 650
  },

  headerIconOutLine: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: theme.spacing.unit * 5,
    width: theme.spacing.unit * 5,
    borderRadius: '100%',
    border: `3px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    marginRight: theme.spacing.unit * 1.5,
  },

  contactItemLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.palette.grey[50],
    '&+&': {
      marginLeft: theme.spacing.unit * 3,
    },
    [theme.breakpoints.down(680)]: {
      '&+&': {
        marginLeft: theme.spacing.unit,
      }
    },
  },

  contactItemDisable: {
    [theme.breakpoints.down(680)]: {
      display: 'none'
    },
  },

  contactItemLocation: {
    width: 180,
    textTransform: 'uppercase'
  },

  // Lists
  listVer: {
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing.unit * 0,
    paddingBottom: theme.spacing.unit * 0,
  },

  listItemVer: {
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.secondary.main,
    }
  },


  listHorBox: {
    backgroundColor: theme.palette.secondary.main,
  },

  toolbarRoot: {
    maxWidth: 750,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  buttonText: {
    height: 65,
    color: theme.palette.common.white,
    borderRadius: '0',
    transform: 'skew(-15deg)',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.main,
    }
  }

})


class Header extends Component {
  state = {
    height: 0,
  }

  menuListToggleHandler = () => {
    const { height } = this.state
    this.setState({
      height: height === 0 ? 'auto' : 0
    })
  }

  closeMenuListHandler = () => {
    this.setState({ height: 0 })
  }
  render() {
    const {
      classes
    } = this.props

    const {
      height,
    } = this.state;

    const Contacts = (
      <div className={classes.headerContacts}>
        <Link component={RouterLink} variant="caption" to={location1.href} className={`${classes.headerLink} ${classes.contactItemLink} ${classes.contactItemDisable}`}>
            <span className={classes.headerIconOutLine}><LocationOn /></span>
            <p className={` ${classes.contactItemLocation}`}>
              {location1.name}
            </p>
        </Link>

        <Link href={mail1.href} variant="caption" className={`${classes.headerLink} ${classes.contactItemLink} ${classes.contactItemDisable} `}>
          <span className={classes.headerIconOutLine}><MailOutline /></span>
          <div>
            <Typography variant="button" color="secondary"> E-mail: </Typography>
            {mail1.name}
          </div>
        </Link>

        <Link href={telephone1.href} variant="caption" className={`${classes.headerLink} ${classes.contactItemLink}`}>
          <span className={classes.headerIconOutLine}><Phone /></span>
          <div>
            <Typography variant="button" color="secondary"> Телефон: </Typography>
            {telephone1.name}
          </div>
        </Link>
      </div>

    )
    return (
      <AppBar position="fixed" classes={{ root: classes.appBarRoot }}>
        <div className={classes.appBarContainer}>
          <LayoutContainer>
            {/* Top Line */}
            <Grid container justify='flex-end'>
              <Hidden smDown>
                <Link to={location1.href} component={RouterLink} variant="caption" className={`${classes.topLineText} ${classes.topLineLink} ${classes.headerLink}`}>
                  <LocationOn className={classes.topLineIcon} /> {location1.name}
                </Link>
              </Hidden>
              <Typography variant="caption" className={classes.topLineText}>
                <AccessTime className={classes.topLineIcon} /> ПН-ВС 09:00 - 21:00
              </Typography>
            </Grid>
            <Divider className={classes.topLineDivider} />
            {/* End Top Line */}
            {/* Header main */}
            <div className={classes.headerMain}>

              <div className={classes.logoContainer}>
                <Link to='/' component={RouterLink} variant="h2" className={`${classes.headerLink}`} classes={{ root: classes.logoText }}>
                  <span className={classes.logoUpLetter}>T</span>exniko
                </Link>
              </div>

              <Hidden smDown>
                {Contacts}
              </Hidden>

              <Hidden mdUp>
                <IconButton className={classes.menuButton} onClick={this.menuListToggleHandler}>
                  <MenuIcon fontSize="large" />
                </IconButton>
              </Hidden>

            </div>
            {/* End header main */}
          </LayoutContainer>

          <Hidden mdUp>
            <AnimateHeight
              duration={500}
              height={height}
            >
              <List component="nav" className={classes.listVer}>
                {
                  tabsData.map(item => (
                    <ListItem
                      component={RouterLink}
                      to={`/${item.value}`}
                      divider
                      button
                      key={item.value}
                      onClick={this.closeMenuListHandler}
                      className={classes.listItemVer}
                    >
                      <ListItemText primary={item.name} dense />
                    </ListItem>
                  ))
                }
              </List>
            </AnimateHeight>

            <LayoutContainer>
              {Contacts}
            </LayoutContainer>

          </Hidden>
          {/* Tabs */}
          <div className={classes.listHorBox}>
            <LayoutContainer>
              <Hidden smDown>
                <Toolbar classes={{ root: classes.toolbarRoot }}>
                  {
                    tabsData.map(item => (
                      <Button
                        key={item.value}
                        color="inherit"
                        fullWidth
                        variant='text'
                        classes={{ text: classes.buttonText }}
                        component={RouterLink} to={`/${item.value}`}
                      >
                        {item.name}
                      </Button>
                    ))
                  }
                </Toolbar>
              </Hidden>
            </LayoutContainer>
          </div>
          {/* End Tabs */}
        </div>
      </AppBar>

    )
  }
}


Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header)
