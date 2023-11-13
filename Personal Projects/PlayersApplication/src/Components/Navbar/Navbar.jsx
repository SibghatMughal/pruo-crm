import React, { useEffect, useLayoutEffect, useState } from 'react'
import './navbar.css';
import favicon from '../../assets/images/favicon.ico';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Close, Games, Home, LocalCafe, MenuBook, MenuBookOutlined, MenuOpenOutlined, PointOfSale, Shop } from '@mui/icons-material';
import { Avatar, Button, ToggleButton } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '2px solid rgb(53, 88, 110)',
  backgroundColor:'rgb(15, 33, 46)',
  borderRadius: '20px',
  display:'flex',
  alignItems:'center',
  '&:hover': {
    border: '3px solid rgb(51, 144, 255)',
  },
  '&:focus': {
    border: '3px solid rgb(51, 144, 255)',
    outline:'3px solid rgb(51, 144, 255)',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  fontWeight:'500',
  fontSize:'20px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [showSearchField, setShowSearchField] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showLink,setShowLink] = useState(true);
  const [showHamBurger , setShowHamBurger] = useState(false);
  const [navMenu, setShowMenu] = useState(false);

  const toggleSearchField = () => {
    setShowSearchField(true);
  };
  const toggleMenu = () => {
    setShowMenu(!navMenu);
  };

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const menuId = 'primary-search-account-menu';
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //     <IconButton size="large" aria-label="show 4 new mails" color="inherit">
       
  //           <Avatar />
          
  //       </IconButton>
  //     <p>Profile</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton size="large" aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="error">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton
  //         size="large"
  //         aria-label="show 17 new notifications"
  //         color="inherit"
  //       >
  //         <Badge badgeContent={17} color="error">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         size="large"
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );
  useEffect(() => {
    // Function to update the window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if(window.innerWidth>899){
        setShowSearchField(true);
      }
      else{
        setShowSearchField(false);
      }
      
      //  middle link break points 
      if(window.innerWidth>899){
        setShowLink(true);
      }
      else{
    
      setShowLink(false);
    }

    if(window.innerWidth>992){
      setShowHamBurger(false);
    }else{
      setShowHamBurger(true)
    }
  };

  // Attach the event listener when the component mounts
  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [windowWidth]); 




  return (

    <>
    <div className='navbar'>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                size="large"
                edge="start"
                aria-label="open drawer"
              >
                <img src={favicon} alt="favicon" />
              </IconButton>
              {showSearchField ? (
                <Search style={{position:`${showSearchField?'block':'absolute'}`}}>
                  <StyledInputBase
                    sx={{ width: { xs: '250px', lg: '300px', md: '300px', sm: '200px' } }}
                    placeholder="Search users"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                  <Button sx={{ display: { xs: 'visible', md: 'none', lg: "none" },fontWeight:'border',fontSize:'30px' }} onClick={()=>setShowSearchField(false)}><Close /></Button>
                </Search>
              ) : (
                <SearchIcon
                sx={{display: { xs: 'visible', md: 'none', lg:"none"}}}
                  onClick={toggleSearchField}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </Typography>
         {showLink? <Typography sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <Box style={{display:'flex',alignItems:'center',textAlign:'center'}}>
        <Typography sx={{ minWidth: 100  }} className='icons'><Home sx={{ fontSize: 40  }} className='iconColor'/></Typography>
        <Typography sx={{ minWidth: 100  }} className='icons'><Games sx={{ fontSize: 40  }} className='iconColor'/></Typography>
        <Typography sx={{ minWidth: 100  }} className='icons'><LocalCafe sx={{fontSize:40 }} className='iconColor'/></Typography>
        <Typography sx={{ minWidth: 100  }} className='icons'><Shop sx={{fontSize:40 }} className='iconColor'/></Typography>
      </Box>
        </Typography>:''}
        {showHamBurger==false?
          <Typography sx={{display:'flex',alignItems:'center'}}>

<Box sx={{ flexGrow: 1 }} />
<Box sx={{ display: 'flex' }}>
  <IconButton  aria-label="show 4 new mails" color="inherit" >
      <MenuBookOutlined sx={{fontSize:40}} />
    
  </IconButton>
  <IconButton
    aria-label="show 17 new notifications"
    color="inherit"
  >
    <Badge badgeContent={17} color="error">
      <NotificationsIcon  sx={{fontSize:40}}/>
    </Badge>
  </IconButton>
  <IconButton
    aria-label="account of current user"
    // aria-controls={menuId}
    aria-haspopup="true"
    // onClick={handleProfileMenuOpen}
    color="inherit"
  >
    <Avatar sx={{fontSize:40}} />
  </IconButton>
</Box>
<Box sx={{ display:  'flex' }}>
  <IconButton
    size="large"
    aria-label="show more"
    // aria-controls={mobileMenuId}
    aria-haspopup="true"
    // onClick={handleMobileMenuOpen}
    color="inherit"
  >
    <div className='priceSection'>
      <div className="points">
        <img src={favicon} width={20} height={20} alt="favicon" />
        0.00
        </div>
      <div className="lable">ok</div>
    </div>
  </IconButton>
</Box>
</Typography>
          :
            <IconButton
                onClick={()=>toggleMenu()}
                size="large"
                edge="end"
                aria-label="open menu"
                sx={{color:'white'}}
              >
                <MenuOpenOutlined sx={{ fontSize: '35px',color:'white' }} />
              </IconButton>
          
}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
    </div>
    {navMenu? (
        <div style={{
          position: 'absolute',
          top: '70px',
          right: '20px',
          zIndex: 9999,
          background: '#213744',
          borderRadius: '6px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'start',
            textAlign: 'start',
            flexDirection: 'column',
            height: 'auto',
            width: '200px',
            padding:'15px'
          }}>
<Typography sx={{ minWidth: '100%', display: 'flex', alignItems: 'center',justifyContent:'space-between' }} className='icons'>
  <span style={{ fontWeight: 'bold', fontSize: '22px', color: 'lightgray' }}>MenuBook</span>
  <MenuBookOutlined sx={{ fontSize: 30 }} className='iconColor' />
</Typography>
<Typography sx={{ minWidth: '100%', display: 'flex', alignItems: 'center',justifyContent:'space-between' }} className='icons'>
  <span style={{ fontWeight: 'bold', fontSize: '22px', color: 'lightgray' }}>Notifications</span>
  {/* <Badge badgeContent={17} color="error"> */}
  <NotificationsIcon sx={{ fontSize: 30 }} className='iconColor' />
    {/* </Badge> */}
</Typography>
<Typography sx={{ minWidth: '100%', display: 'flex', alignItems: 'center',justifyContent:'space-between' }} className='icons'>
  <span style={{ fontWeight: 'bold', fontSize: '22px', color: 'lightgray'}}>Profile</span>
  <Avatar />
</Typography>
<Typography sx={{ minWidth: '100%', display: 'flex', alignItems: 'center',justifyContent:'space-between' }} className='icons'>
  <span style={{ fontWeight: 'bold', fontSize: '22px', color: 'lightgray'}}>Points</span>
  <PointOfSale sx={{ fontSize: 30 }} className='iconColor' />
</Typography>

          </div>
        </div>
      ):""}
    {!showLink?(

    <div className='bottom-section'>
      <div className="nav">

    <Typography sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Box style={{width:'100%',paddingBottom:'50px',display:'flex',alignItems:'center',textAlign:'center',justifyContent:'space-between',marginBottom:'15px'}}>
        <Typography sx={{ minWidth: 100  }} style={{marginTop:'-15px'}} className='icons'><Home sx={{ fontSize: 40  }} className='iconColor'/></Typography>
        <Typography sx={{ minWidth: 100  }} style={{marginTop:'-15px'}} className='icons'><Games sx={{ fontSize: 40  }} className='iconColor'/></Typography>
        <Typography sx={{ minWidth: 100  }} style={{marginTop:'-15px'}} className='icons'><LocalCafe sx={{fontSize:40 }} className='iconColor'/></Typography>
        <Typography sx={{ minWidth: 100  }} style={{marginTop:'-15px'}} className='icons'><Shop sx={{fontSize:40 }} className='iconColor'/></Typography>
      </Box>
        </Typography>
      </div>
    </div>
    ):''}
    </>
  )
}

export default Navbar