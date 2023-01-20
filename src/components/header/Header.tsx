import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'


function Header() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' style={{"backgroundColor" : "black"}}>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MIS
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
