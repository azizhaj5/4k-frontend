import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { Button } from '@material-ui/core';
import {db} from '../firebase'


export default function BasicSelect() {
    const [course, setCourse] = useState('');
    const [department, setDepartment] = useState('');

    const handleCourseChange = (event) => {
        setCourse(event.target.value)
    };
    
    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value)
    };

    const handleSubmit = (e) =>{
        e.preventDefault()
        db.ref('user').set({
            course: course,
            department: department,
        })
      
       setCourse("");
       setDepartment("");
    }

  return (
    <Box sx={{ minWidth: 120 }}>
    <Grid container rowSpacing={1}>

        <Grid item xs={6}>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          label="Please select which course you attended today."
          onChange={handleCourseChange}
        >
          <MenuItem value={1}>1st Course</MenuItem>
          <MenuItem value={2}>2nd Course</MenuItem>
          <MenuItem value={3}>3rd Course</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={6}>
                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={department}
                label="Department"
                onChange={handleDepartmentChange}
                >
                <MenuItem value={1}>1st Department</MenuItem>
                <MenuItem value={2}>2nd Department</MenuItem>
                <MenuItem value={3}>3rd Department</MenuItem>
                </Select>
        </Grid>

        <Button
            type='submit'
            variant='contained'
            size='small'
            color='primary'
            fullWidth={true}
            onClick={handleSubmit}>
            Submit
        </Button>

      </Grid>
    </Box>
  );
}