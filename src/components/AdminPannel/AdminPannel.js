import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import {CardMedia} from '@material-ui/core';
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
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LayersIcon from '@material-ui/icons/Layers';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShowChartIcon from '@material-ui/icons/ShowChart';
// import Logo from '../../images/viebe-log.jpg'
import Logo from '../../../src/images/viebeg-logo.jpg'
import Deseases from './Deseases';
import Dashboard from './Dashboard';
import Users from './Users';
import Supply from './Supply';
import ProductCategories from './ProductCategories';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 100,
      flexShrink: 0,
    },
  },
  adminName:{
      float:'right'
  },
  imageLogo:{
      height:'30px',
      width:'80px'
  },
  icons:{
    justifyContent:'center',
    alignItems:'center'
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${100}px)`,
      marginLeft: 100,
    },
    backgroundColor:'white'
  },
 sideBar:{
 width:'100px'
 },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    color:'blue'
  },
  // necessary for content to be below app bar
  toolbar: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      padding:'17px',
      width:'100px'
  },
  drawerPaper: {
    width: 100,
      
  },
toolAccount:{
 display:'flex',
 justifyContent:'space-between'
},
  content: {
    // display:'flex',
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'lightblue',
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
}));

function AdminPannel(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [users, setUsers] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [deseases, setDeseases] = useState(false)
  const [supply, setSupply] = useState(false)
  const [open, setOpen] = useState(false);
  const [productCategory, setProductCategory] = useState(false);


  const handleOpen = () => {
    setOpen(true);
  };
const productCat = () => {
  setProductCategory(true)
  setDashboard(false)
    setUsers(false)
    setDeseases(false)
    setSupply(false)
}
  const handleClose = () => {
    setOpen(false);
  };

  const handleDashboard = ()=>{
    setDashboard(true)
    setUsers(false)
    setDeseases(false)
    setSupply(false)
     setProductCategory(false)
  }
  const handleUsers = ()=>{
    setUsers(true)
    setDeseases(false)
    setSupply(false)
    setDashboard(false)
     setProductCategory(false)
  }
  const handleDeseases = ()=>{
    setDeseases(true)
    setUsers(false)
    setSupply(false)
    setDashboard(false)
     setProductCategory(false)

  }
  const handleSuplyed = ()=>{
    setSupply(true)
    setUsers(false)
    setDeseases(false)
    setDashboard(false)  
     setProductCategory(false) 

  }
  // const handleUsers = ()=>{
  //   setUsers(true)

  // }
useEffect(() => {
  setDashboard(true)
}, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.sideBar}>
      <div className={classes.toolbar} >
        <img src={Logo} alt="viebeg logo" className={classes.imageLogo}/>
      </div>
      <Divider />
      <List>
        {[
        {
            text:'Dashboard',
            icon: <DashboardIcon />,
            onclick:handleDashboard
        },
        {
            text:'Stock',
            icon: <FolderIcon />,
            onclick:productCat
        },
        {
            text:'supplyed',
            icon: <ShoppingCartIcon />,
            onclick:handleSuplyed
        },
        {
            text:'Stock Managements',
            icon: <LayersIcon />,
            onclick:handleUsers
        },
        {
            text:'Users',
            icon: <PeopleAltIcon />,
            onclick:handleUsers
        },
        {
            text:'Deseases',
            icon: <ShowChartIcon />,
            onclick:handleDeseases
        },
        

               ].map((item, index) => {
                   const {text, icon, onclick} = item;
                 return (
          <ListItem button key={text} onClick={onclick} className={classes.icons}>
            <ListItemIcon>{icon}</ListItemIcon>
            {/* <ListItemText primary={text} /> */}
          </ListItem>
                  )           
})}
      </List>

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolAccount}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.adminName}>
            User names
          </Typography>
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
          {dashboard? (<Dashboard />):("")}
          {users? (<Users />):("")}
          {deseases? (<Deseases />):("")}
          {supply? (<Supply/>):("")}
          {productCategory ? (<ProductCategories/> ):("")}
          
       
      </main>
    </div>
  );
}

AdminPannel.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminPannel;
