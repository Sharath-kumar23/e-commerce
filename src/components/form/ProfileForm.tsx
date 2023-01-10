import { Translate } from "@mui/icons-material";
import { Box, Button, Card, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextField } from "@mui/material";
import { useForm ,Controller} from "react-hook-form";
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ProfileForm= ()=>{

    const [value, setValue] = React.useState<Dayjs | null>(dayjs(new Date()));


    const { register, handleSubmit, formState: { errors },control } = useForm();
    const onSubmit = (data:any) => {
      debugger
        console.log(data);
    }
  
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
              <Card style={{boxShadow: "1px 1px 10px #d3d3d3"}}
      sx={{
        marginTop:8,
        padding:5,
        top:"5%",
        position:"absolute",
        left:"35%",
        translateX:'-40%',
        marginLeft:2,
        marginRight:2,
        py: 2,
        display: 'grid',
        gap: 2,
        
        flexWrap: 'wrap',
      }} >
        

      <TextField label="First Name" helperText={errors.firstName?"Please Enter valid first name":""}  {...register("firstName",{required:true,minLength:2})} placeholder="Enter First Name" variant="outlined" />
      <TextField label="Last Name" helperText={errors.lastName?"Please Enter valid last name":""} {...register("lastName",{required:true})} placeholder="Enter Last Name" variant="outlined" />
      <TextField label="Email" helperText={errors.email?"Please Enter valid email":""} {...register("email",{required:true})} placeholder="Enter email" variant="outlined" />
      <TextField label="Password" helperText={errors.password?"Please Enter valid password":""} {...register("password",{required:true,pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})} placeholder="Enter password" variant="outlined" />
      <TextField label="Phone" type="number" helperText={errors.phone?"Please Enter valid phone":""}  {...register("phone",{required:true,valueAsNumber: true,maxLength:10})} placeholder="Enter Phone" variant="outlined" />
      <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    style={{display:"inline-block"}}
  >
    <FormControlLabel value="female" control={<Radio {...register("gender",{required:true})} />} label="Female" />
    <FormControlLabel value="male" control={<Radio {...register("gender",{required:true})} />} label="Male" />
    <FormControlLabel value="other" control={<Radio {...register("gender",{required:true})} />} label="Other" />
  </RadioGroup>
  </FormControl>
  
{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
      
        <DatePicker
          disableFuture
          label="DOB"
          openTo="year"
          {...register("dob",{required:true})}
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider> */}
      <Button type="submit" onClick={handleSubmit(onSubmit)} variant="text">Submit</Button>
      </Card>
     

      </form>
    
   
    )



}

export default ProfileForm;