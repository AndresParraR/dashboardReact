import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, CssBaseline, AppBar, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText, Badge, Button, Menu, MenuItem, Fade, Avatar } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

import treeImage from "../assets/images/tree.jpg";

import {
  NavLink
} from "react-router-dom";

library.add(fas, far, fab);

const Navbar = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `100%`,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: 'transparent',
      color: '#000',
      boxShadow: 'none',
    },
    appBarShift: {
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
      borderRadius: '50%',
      minWidth: 0,
      width: 45,
      height: 45,
      backgroundColor: '#f5f5f5'
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: props.drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    paper:{
      background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${treeImage})`,
      backgroundSize: 'cover',
      color: '#FFF',
      padding: '0 18px'
    },
    drawerOpen: {
      width: props.drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(11) +2,
    },
    drawerIcon: {
      color: '#FFF',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    navBar: {
      minHeight: 75,
      justifyContent: 'space-between',
    },
    buttonAppBar: {
      color: '#000'
    },
    drawerItem:{
      color: '#FFF',
      marginTop: 28
    }
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [links, setLinks] = useState([
    {
      icon: <DashboardIcon />,
      title: 'Dashboard',
      route: '/dashboard',
      isFocused: true
    },
    {
      icon: <AccountCircleIcon />,
      title: 'Administrator',
      route: '/administrator',
      isFocused: false
    },
  ]);

  const open = Boolean(anchorEl)


  const handleDrawerOpen = () => {
    props.setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    props.setOpenDrawer(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.openDrawer,
        })}
      >
        <Toolbar className={classes.navBar}>
          <Button
            color="inherit"
            aria-label="open drawer"
            onClick={props.openDrawer ? handleDrawerClose : handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            {props.openDrawer ? <DashboardIcon /> : <MoreVertIcon /> }
          </Button>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
          <div>
            <IconButton className={classes.buttonAppBar} aria-label="dashboard">
              <DashboardIcon />
            </IconButton>
            <Badge badgeContent={4} color="primary">
              <IconButton className={classes.buttonAppBar} aria-label="notification">
                <NotificationsIcon />
              </IconButton>
            </Badge>
            <IconButton 
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              color="primary"
              onClick={handleClick} className={classes.buttonAppBar} 
              aria-label="profile">
              <PersonIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              getContentAnchorEl={null}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.openDrawer,
          [classes.drawerClose]: !props.openDrawer,
        })}
        classes={{
          paper: clsx(classes.paper, {
            [classes.drawerOpen]: props.openDrawer,
            [classes.drawerClose]: !props.openDrawer,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <ListItem>
            <ListItemIcon className={classes.drawerIcon}><FontAwesomeIcon icon={['fab', 'react']} size="2x" /></ListItemIcon>
            <ListItemText primary={'REACT JS'} />
          </ListItem>
        </div>
        <Divider className="divider-semi-white"/>
        <div className={classes.toolbar}>
          <ListItem style={{paddingLeft: 9}}>
            <ListItemIcon className={classes.drawerIcon}><Avatar src="https://randomuser.me/api/portraits/men/85.jpg"></Avatar></ListItemIcon>
            <ListItemText style={{paddingLeft: 6}} primary={'John Leider'} />
          </ListItem>
        </div>
        <List>
          {links.map((link, index) => (
            <NavLink to={link.route} key={index} activeClassName="selected">
              <ListItem className={classes.drawerItem} button>
                <ListItemIcon className={classes.drawerIcon}>{link.icon}</ListItemIcon>
                <ListItemText primary={link.title} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </div>
  )
}

export default Navbar