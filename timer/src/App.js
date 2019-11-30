import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#007bff",
    },
  }
});
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [count, setCount] = React.useState(0)
  const [hours, setHours] = React.useState(0)
  const [secInterval, setsec] = React.useState(0)
  const [minInterval, setmin] = React.useState(0)
  const [hrsInterval, sethr] = React.useState(0)
  const [minutes, setMinutes]= React.useState(0)
  const [seconds, setSeconds]= React.useState(0)
  const [active, setActive]= React.useState(false)

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth)
  }, [])

  const handleHours = event => {
    setHours(event.target.value)
  }
  const handleMinutes = event => {
    setMinutes(event.target.value)
  }
  const handleSeconds = event => {
    setSeconds(event.target.value)
  }
  const cancelBtnClick = () => {
    setActive(false)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }
  const startBtnClick=(props)=>{
    setActive(true)
  }
  React.useEffect(() => {
    let interval = null;
    if (active) {
      secInterval = setInterval(() => {
        setCount(count => {
          if (count <59)
          return count + 1;
          else 
           return 0;
        });
      }, 1000);
      minInterval =setInterval(() => {
        setCount(count => {
          if(count<59)
          return count + 1;
          else 
           return 0;
        });}, 60000);
        hrsInterval =setInterval(() => {
          setCount(count => {
            if (count <23)
            return count + 1;
            else 
             return 0;
          });}, 360000);
      
      
    } else if (!active && count !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, count]);
  return (
       
  
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
          Hours 
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={hours}
          onChange={handleHours}
          labelWidth={labelWidth}
        >
            <MenuItem value={0}>
            <em>00</em>
          </MenuItem>
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Minutes</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={minutes}
          onChange={handleMinutes}
        >
          <MenuItem value={0}>
            <em>00</em>
          </MenuItem>
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={33}>33</MenuItem>
          <MenuItem value={34}>34</MenuItem>
          <MenuItem value={35}>35</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={37}>37</MenuItem>
          <MenuItem value={38}>38</MenuItem>
          <MenuItem value={39}>39</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={41}>41</MenuItem>
          <MenuItem value={42}>42</MenuItem>
          <MenuItem value={43}>43</MenuItem>
          <MenuItem value={44}>44</MenuItem>
          <MenuItem value={45}>45</MenuItem>
          <MenuItem value={46}>46</MenuItem>
          <MenuItem value={47}>47</MenuItem>
          <MenuItem value={48}>48</MenuItem>
          <MenuItem value={49}>49</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={51}>51</MenuItem>
          <MenuItem value={52}>52</MenuItem>
          <MenuItem value={53}>53</MenuItem>
          <MenuItem value={54}>54</MenuItem>
          <MenuItem value={55}>55</MenuItem>
          <MenuItem value={56}>56</MenuItem>
          <MenuItem value={57}>57</MenuItem>
          <MenuItem value={58}>58</MenuItem>
          <MenuItem value={59}>59</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Seconds</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={seconds}
          onChange={handleSeconds}
        >
          <MenuItem value={0}>
            <em>00</em>
          </MenuItem>
          <MenuItem value={1}>01</MenuItem>
          <MenuItem value={2}>02</MenuItem>
          <MenuItem value={3}>03</MenuItem>
          <MenuItem value={4}>04</MenuItem>
          <MenuItem value={5}>05</MenuItem>
          <MenuItem value={6}>06</MenuItem>
          <MenuItem value={7}>07</MenuItem>
          <MenuItem value={8}>08</MenuItem>
          <MenuItem value={9}>09</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>
          <MenuItem value={13}>13</MenuItem>
          <MenuItem value={14}>14</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={16}>16</MenuItem>
          <MenuItem value={17}>17</MenuItem>
          <MenuItem value={18}>18</MenuItem>
          <MenuItem value={19}>19</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={21}>21</MenuItem>
          <MenuItem value={22}>22</MenuItem>
          <MenuItem value={23}>23</MenuItem>
          <MenuItem value={24}>24</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={26}>26</MenuItem>
          <MenuItem value={27}>27</MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={29}>29</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={31}>31</MenuItem>
          <MenuItem value={32}>32</MenuItem>
          <MenuItem value={33}>33</MenuItem>
          <MenuItem value={34}>34</MenuItem>
          <MenuItem value={35}>35</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={37}>37</MenuItem>
          <MenuItem value={38}>38</MenuItem>
          <MenuItem value={39}>39</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={41}>41</MenuItem>
          <MenuItem value={42}>42</MenuItem>
          <MenuItem value={43}>43</MenuItem>
          <MenuItem value={44}>44</MenuItem>
          <MenuItem value={45}>45</MenuItem>
          <MenuItem value={46}>46</MenuItem>
          <MenuItem value={47}>47</MenuItem>
          <MenuItem value={48}>48</MenuItem>
          <MenuItem value={49}>49</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={51}>51</MenuItem>
          <MenuItem value={52}>52</MenuItem>
          <MenuItem value={53}>53</MenuItem>
          <MenuItem value={54}>54</MenuItem>
          <MenuItem value={55}>55</MenuItem>
          <MenuItem value={56}>56</MenuItem>
          <MenuItem value={57}>57</MenuItem>
          <MenuItem value={58}>58</MenuItem>
          <MenuItem value={59}>59</MenuItem>
        </Select>
      </FormControl>
      <Fab color="primary" aria-label="cancel" onClick={cancelBtnClick}>  Cancel </Fab>
      <Fab color="primary" aria-label="start" onClick={startBtnClick}> Start </Fab>    
    </div>


  )
}