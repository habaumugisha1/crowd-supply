import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import  ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FolderIcon from '@material-ui/icons/Folder';
import LayersIcon from '@material-ui/icons/Layers';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import '../../css/active.css'
import Logo from '../../../src/images/viebeg-logo.jpg'
import Deseases from './Deseases';
import Dashboard from './Dashboard';
import Users from './Users';
import Supply from './Supply';
import ProductCategories from './ProductCategories';
import Category from './Category';


const drawerWidth = 240;
const useIdStyle= makeStyles({
  active:{
    backgroundColor:'#3796F6'
  }
})
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
  active:{
    backgroundColor:'#3796F6'
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
  sideIcon:{
    width:'35px',
    height:'35px'
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
    display:'flex',
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor:'lightblue',
    height:'100%',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'20px'
  },
  userProfile:{
    height:'fit-content',
    display:'flex',
    flexDirection:'column',
    width:'70px',
    marginLeft:'50px',
    justifyContent:'center',
    alignItems:'center'
  }
}));

function AdminPannel(props) {
  const { window } = props;
  const classes = useStyles();
  const ids= useIdStyle()
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [users, setUsers] = useState(false)
  const [dashboard, setDashboard] = useState(false)
  const [deseases, setDeseases] = useState(false)
  const [supply, setSupply] = useState(false)
  // const [open, setOpen] = useState(false);
  const [productCategory, setProductCategory] = useState(false);
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [category, setCategory] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const open = Boolean(anchorEl);


  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleOpen = () => {
  //   setOpen(true);
  // };
const productCat = () => {
  setProductCategory(true)
  setDashboard(false)
    setUsers(false)
    setDeseases(false)
    setSupply(false)
    setCategory(false)
}
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

const handleSupply = () =>{
  setProductCategory(false)
  setDashboard(false)
    setUsers(false)
    setDeseases(false)
    setSupply(true)
    setCategory(false)
}
  const handleDashboard = ()=>{
    setIsActive(true)
    setDashboard(true)
    setUsers(false)
    setDeseases(false)
    setSupply(false)
     setProductCategory(false)
     setCategory(false)
  }
  const handleUsers = ()=>{
    setUsers(true)
    setDeseases(false)
    setSupply(false)
    setDashboard(false)
     setProductCategory(false)
     setCategory(false)
  }
  const handleDeseases = ()=>{
    setDeseases(true)
    setUsers(false)
    setSupply(false)
    setDashboard(false)
     setProductCategory(false)
     setCategory(false)

  }
  const handleCategory = ()=>{
    setCategory(true)
    setUsers(false)
    setDeseases(false)
    setSupply(false)
    setDashboard(false)  
     setProductCategory(false) 

  }

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

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
      {/* <Divider /> */}
      <List>
        {[
        {
            text:'Dashboard',
            icon: <DashboardIcon className={classes.sideIcon}/>,
            onclick:handleDashboard,
        },
        {
            text:'Stock',
            icon: <FolderIcon className={classes.sideIcon}  />,
            onclick:productCat,
        },
        {
            text:'supplyed',
            icon: <DynamicFeedIcon className={classes.sideIcon} />,
            onclick:handleCategory,
        },
        {
            text:'Stock Managements',
            icon: <LayersIcon className={classes.sideIcon} />,
            onclick:handleSupply,
        },
        {
            text:'Users',
            icon: <PeopleAltIcon className={classes.sideIcon}/>,
            onclick:handleUsers,
        },
        {
            text:'Deseases',
            icon: <ShowChartIcon className={classes.sideIcon}/>,
            onclick:handleDeseases,
        },
        

               ].map((item, index) => {
                   const {text, icon, onclick} = item;
                 return (
          <ListItem button key={text} onClick={onclick} className={classes.icons}>
            <ListItemIcon className={classes.adminIcon } id={item.active===isActive? "active" : ""}>{icon}</ListItemIcon>
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
          <div></div>
          {auth && (
            <div style={{display:'flex', alignItems:"center"}}>
              <Typography style={{display:'flex'}} color="primary">tobias</Typography>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               <Avatar alt="Tobias" src="/broken-image.jpg" className={classes.orange}>
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
                onClose={handleCloseMenu}
              >
              <div className={classes.userAccount}>
              <div className={classes.userProfile}>
                <Avatar  src="/broken-image.jpg" style={{width:'70px', height:'70px', marginBottom:'10px'}} >
                </Avatar>
              </div>
              <MenuItem style={{display:'flex', justifyContent:'center'}} onClick={handleCloseMenu}>tobias2@gmail.com</MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My Activity</MenuItem>

                <MenuItem onClick={handleCloseMenu}>Log out</MenuItem>
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
          {dashboard? (<Dashboard />):("")}
          {users? (<Users />):("")}
          {deseases? (<Deseases />):("")}
          {supply? (<Supply/>):("")}
          {productCategory ? (<ProductCategories/> ):("")}
          {category ? (<Category /> ):("")}

          
       
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
