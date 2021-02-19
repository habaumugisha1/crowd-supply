import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import Viebeglogo from './images/viebeg-logo.jpg';

import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import FolderIcon from '@material-ui/icons/Folder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'white',
  },
  account:{
    display:'flex',
    justifyContent:'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color:"black"
  },
  adminIcon:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'60px',
    width:'60px',
    backgroundColor:'lightgray',
    color:'white',
    borderRadius:"8px",
    "&&:hover":{
      backgroundColor:'#3796F6'
    },
    "&&.active":{
      backgroundColor:'#3796F6'
    }
  },
  accountMenu:{
    width:'300px',
    padding:'20px'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  userAccount:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    width:'300px',
    // height:'100px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sideBar:{
  width:'100px'
  },
  icons:{
    justifyContent:'center',
    alignItems:'center'
  },
  sideIcon:{
    width:'35px',
    height:'35px'
  },
  vieLogo:{
    height:'30px',
    width:'80px',
    marginTop:'15px',
    display:'flex',
    alignItems:'center'
  },
  userProfile:{
    height:'fit-content',
    display:'flex',
    flexDirection:'column',
    width:'70px',
    marginLeft:'90px',
    justifyContent:'center',
    alignItems:'center'
  }
}));

function SideDrawer(props) {
  const { window, children, history } = props;
  console.log(history)
  const classes = useStyles();
  const theme = useTheme();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);
const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.sideBar}>
      <div style={{display:"flex", justifyContent:"center", alignItems:'center', marginBottom:'20px'}}>
        <img src={Viebeglogo} className={classes.vieLogo} alt="viebeg logo"/>
      </div>
      <Divider /> 
      <List>
        {[
        {
            text:'Dashboard',
            icon: <DashboardIcon className={classes.sideIcon} />,
            onclick:() => history.push('/dashboard')
        },
        {
            text:'Stock',
            icon: <FolderIcon className={classes.sideIcon}/>,
            onclick:() => history.push('/crowdall')
        },
        {
            text:'supplyed',
            icon: <LayersIcon className={classes.sideIcon} />,
            onclick:() => history.push('/subcategories')
        },
        
        {
            text:'Deseases',
            icon: <ShowChartIcon className={classes.sideIcon} />,
            onclick:() => history.push('/mysupply')
        },
        

               ].map((item, index) => {
                 const { text, icon, onclick } = item
                return (
          <ListItem button key={text} className={classes.icons}>
            <ListItemIcon className={classes.adminIcon } onClick={onclick}>{icon}</ListItemIcon>
          </ListItem>
               )})}
      </List>
    
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.account}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div></div>
          {auth && (
            <div style={{display:'flex', alignItems:"center"}}>
              <Typography style={{display:'flex'}} color="primary">Ami des jeunes</Typography>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               <Avatar alt="Ami dee jeunes" src="/broken-image.jpg" className={classes.orange}>
            </Avatar>
                
              </IconButton>
              <Menu
              className={classes.accountMenu}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
              <div className={classes.userAccount}>
              <div className={classes.userProfile}>
                <Avatar  src="/broken-image.jpg" style={{width:'70px', height:'70px', marginBottom:'10px'}} >
                </Avatar>
              </div>
              <MenuItem style={{display:'flex', justifyContent:'center'}} onClick={handleClose}>habajeunes2@gmail.com</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>My Activity</MenuItem>

                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </div>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}

SideDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default withRouter(SideDrawer);