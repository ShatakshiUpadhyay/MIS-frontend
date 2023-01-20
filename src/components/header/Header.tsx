import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';


function Header() {
  const addPage =()=>{
    alert("Add Page")
  }
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
          <div style={{"width":"50%", "backgroundColor" : "white" ,"marginRight":"20px"}} >
          <FormControl variant="outlined" fullWidth >
            <InputLabel id='demo-simple-select-label'>Favourite Subject</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              // value={age}
              label='Age'
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div onClick={addPage}>
            <PersonAddAlt1Icon></PersonAddAlt1Icon>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
