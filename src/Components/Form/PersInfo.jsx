import React, { useState } from 'react'
import '../../style/persInfo.css'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import { makeStyles } from '@material-ui/core'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles({
    leftBox: {
        width: 300,
    },
    rightBox:{
        width: 300,
        marginLeft:20,
    },
    title:{
        marginBottom: 20,
    },
    fullWidth:{
        width:630,
    },
    button:{
        width: 175,
        minHeight:50,
        fontSize:18,
    }
})
function PersInfo(){
    const classes = useStyles()
    const[data, setData] = useState({
        name:"",
        surname:"",
        salary: "",
        age:"",
        email:"",
        phoneNumber:"",
        birthYear:"",
        city:"",
        note:"",
        save: false,
    })
    const [age] = useState([
            {value:"18"},
            {value:"19"},
            {value:"20"},
            {value:"21"},
            {value:"22"},
            {value:"23"},
            {value:"24"},
            {value:"25"},
            {value:"26"},
            {value:"27"},
    ])
    const [city]=useState([
        {city:"Sivas"},
        {city:"Istanbul"},
        {city:"Izmir"},
        {city:"Ankara"},
        {city:"Mugla"},
        {city:"Hatay"},

    ])
    const nameData = (event) =>{
        setData({
            ...data,
            name : event.target.value
        })
        console.log(data.name);
    }
    const surnameData = (event) =>{
        setData({
            ...data,
            surname : event.target.value
        })
        console.log(data.surname);
    }
    const salaryData = (event) =>{
        setData({
            ...data,
            salary : event.target.value
        })
    }
    const ageData = (event) =>{
        setData({
            ...data,
            age : event.target.value
        })
    }
    const emailData=(event)=>{
        setData({
            ...data,
            email: event.target.value
        })
    }
    const phoneNumData=(event)=>{
        setData({
            ...data,
            phoneNumber: event.target.value
        })
    }
    const birthData = (event) =>{
        setData({
            ...data,
            birthYear: event.target.value
        })
    }
    const cityData = (event) =>{
        setData({
            ...data,
            city: event.target.value
        })
    }
    const noteData = (event) =>{
        setData({
            ...data,
            note: event.target.value
        })
    }



    const onSave = (event) =>{
        setData({
            ...data,
            save:true
        })
    }
    return(
        <div className="personal">
            <Typography color="primary" className={classes.title} variant="h5">Application Form</Typography>
            <div className="nameSurname flexCenter">

                <TextField
                onChange={nameData}
                className={classes.leftBox}
                error={data.save ? data.name==="" : ""}
                id="outlined-error-helper-text"
                label="Name"
                variant="outlined"
                helperText="Please enter your name."
                />
                <TextField
                onChange={surnameData}
                error={data.save ? data.surname==="" : ""}
                className={classes.rightBox}
                label="Surname"
                variant="outlined"
                helperText="Please enter your Surname."
                />

            </div>
            
            <div className="ageCount flexCenter">

                {/* Email */}

                <TextField
                className={classes.leftBox}
                error={data.save ? data.email === "" : ""}
                id="outlined-currency"
                label="EMail"
                variant='outlined'
                onChange={emailData}
                helperText="Please select your email"
                />
                
                {/* Phone Number */}

                <TextField
                className={classes.rightBox}
                error={data.save ? data.phoneNumber === "" : ""}
                id="outlined-currency"
                label="Phone Number"
                variant='outlined'
                endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                onChange={phoneNumData}
                helperText="Please select your Phone Number"
                />

            </div>


            <div className="ageCount flexCenter">
            <FormControl variant="outlined">
                <OutlinedInput
                    error={data.save ? data.salary === "" : ""}
                    id="outlined-adornment-weight"
                    onChange={salaryData}
                    className={classes.leftBox}
                    startAdornment={<InputAdornment position="end">$</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                    'aria-label': 'weight',
                    }}
                />
                <FormHelperText id="outlined-weight-helper-text">Salary Expectation</FormHelperText>
            </FormControl>
                <TextField
                error={data.save ? data.birthYear === "" : ""}
                className={classes.rightBox}
                type="date"
                id="outlined-select-currency"
                onChange={birthData}
                helperText="Please select your birth year"
                />
            </div>
            <div className="ageCount flexCenter">
            <TextField
                error={data.save ? data.age === "" : ""}
                className={classes.leftBox}
                id="outlined-currency"
                select
                label="Select"
                onChange={ageData}
                helperText="Please select your age"
                >
                {age.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.value}
                    </MenuItem>
                ))}
                </TextField>
                <TextField
                error={data.save ? data.city==="" : ""}
                className={classes.rightBox}
                id="outlined-select-currency"
                select
                label="Select"
                onChange={cityData}
                helperText="
                What city do you live in ?"
                >
                {city.map((option) => (
                    <MenuItem key={option.city} value={option.city}>
                    {option.city}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div className="note">
            <TextField
                error={data.save ? data.note === "" : ""}
                className={classes.fullWidth}
                id="outlined-select-currency"
                label="Notes"
                margin="normal"
                fullWidth
                onChange={noteData}
                helperText="drop us a note"
                />
            </div>
            <Button className={classes.button} onClick={onSave} variant="contained" color="primary">Send</Button>

        </div>
    )
}

export default PersInfo