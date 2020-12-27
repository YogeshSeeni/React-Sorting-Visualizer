import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { bubbleSort } from "../sorting_algorithms";

const sliderUseStyles = makeStyles({
  root: {
    width: 200,
    marginRight: "15px",
    marginTop: "5px",
    color: "white",
  },
});

const buttonUseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      marginRight: "15px",
      marginTop: "15px",
      color: "white",
    },
  },
}));

export default function ControlBar(props) {
  const sliderClasses = sliderUseStyles();
  const buttonClasses = buttonUseStyles();
  const {
    setArray,
    array,
    generateArray,
    setArraySize,
    arraySize,
    setSpeed,
    speed,
    setSortingAlgorithm,
    sortingAlgorithm,
    setComparing,
    setInOrder,
    setOrder
  } = props;

  const handleGenerate = (e) => {
    e.preventDefault();
    setArray(generateArray(arraySize));
  };

  const handleSort = (e) => {
    e.preventDefault();
    if (sortingAlgorithm == "bubbleSort") {
      bubbleSort(array, setArray, setComparing, setInOrder, setOrder, speed);
    }

  };

  const handleChangeSpeed = (_, newSpeed) => {
    setSpeed(newSpeed);
  };

  const handleChangeArraySize = (_, newArraySize) => {
    setArraySize(newArraySize);
    setArray(generateArray(arraySize));
  };

  const handleChangeSortingAlgorithm = (e) => {
    setSortingAlgorithm(e.target.value);
  }

  return (
    <div className="control-panel">
      <div className={buttonClasses.root}>
        <Button onClick={handleGenerate}>Generate New Array</Button>
      </div>
      <div className={sliderClasses.root}>
        <Typography id="continuous-slider" gutterBottom>
          Speed
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <FastRewindIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={speed}
              onChange={handleChangeSpeed}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <FastForwardIcon />
          </Grid>
        </Grid>
      </div>
      <div className={sliderClasses.root}>
        <Typography id="continuous-slider" gutterBottom>
          Array Size
        </Typography>
        <Grid container spacing={2}>
          <Grid item>
            <RemoveIcon />
          </Grid>
          <Grid item xs>
            <Slider
              value={arraySize}
              onChange={handleChangeArraySize}
              min={5}
              max={100}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid item>
            <AddIcon />
          </Grid>
        </Grid>
      </div>
      <FormControl component="fieldset" style={{color: "white"}}>
        <FormLabel component="legend" style={{color: "white"}}>Sorting Algorithm</FormLabel>
        <RadioGroup
          row
          aria-label="position"
          name="position"
          defaultValue="bubbleSort"
          value={sortingAlgorithm}
          onChange={handleChangeSortingAlgorithm}
        >
          <FormControlLabel
            value="bubbleSort"
            control={<Radio color="primary" />}
            label="Bubble Sort"
            
          />
          <FormControlLabel
            value="quickSort"
            control={<Radio color="primary" />}
            label="Quick Sort"
          />
          <FormControlLabel
            value="mergeSort"
            control={<Radio color="primary" />}
            label="Merge Sort"
          />
          <FormControlLabel
            value="insertionSort"
            control={<Radio color="primary" />}
            label="Insertion Sort"
          />
        </RadioGroup>
      </FormControl>
      <div className={buttonClasses.root}>
        <Button variant="outlined" onClick={handleSort}>
          Sort
        </Button>
      </div>
    </div>
  );
}
