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
import {
  bubbleSort,
  insertionSort,
  quickSortWrapper,
} from "../sorting_algorithms";

export default function ControlBar(props) {
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
    setOrder,
    order,
    setSorting,
    sorting,
  } = props;

  const color = sorting ? "red" : "white";

  const sliderUseStyles = makeStyles({
    root: {
      width: 200,
      marginRight: "15px",
      marginTop: "5px",
      color: color,
    },
  });

  const buttonUseStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        marginRight: "15px",
        marginTop: "15px",
        color: color,
      },
    },
  }));

  const sliderClasses = sliderUseStyles();
  const buttonClasses = buttonUseStyles();

  const handleGenerate = (e) => {
    e.preventDefault();
    if (!sorting) {
      setArray(generateArray(arraySize));
    }
  };

  const handleSort = (e) => {
    e.preventDefault();
    if (!sorting) {
      setSorting(true);
      if (sortingAlgorithm == "bubbleSort") {
        bubbleSort(
          array,
          setArray,
          setComparing,
          setInOrder,
          setOrder,
          speed,
          setSorting,
          sorting
        );
      } else if (sortingAlgorithm == "quickSort") {
        quickSortWrapper(
          array,
          0,
          array.length - 1,
          setArray,
          setComparing,
          setInOrder,
          setOrder,
          speed,
          setSorting,
          sorting
        );
      } else if (sortingAlgorithm == "insertionSort") {
        insertionSort(
          array,
          setArray,
          setComparing,
          setInOrder,
          setOrder,
          speed,
          setSorting,
          sorting
        );
      }
    }
  };

  const handleChangeSpeed = (_, newSpeed) => {
    if (!sorting) {
      setSpeed(newSpeed);
    }
  };

  const handleChangeArraySize = (_, newArraySize) => {
    if (!sorting) {
      setArraySize(newArraySize);
      setArray(generateArray(arraySize));
    }
  };

  const handleChangeSortingAlgorithm = (e) => {
    if (!sorting) {
      setSortingAlgorithm(e.target.value);
    }
  };

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
              min={0}
              max={500}
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
      <FormControl
        component="fieldset"
        style={{ color: color, marginTop: "5px" }}
      >
        <FormLabel component="legend" style={{ color: color }}>
          Sorting Algorithm
        </FormLabel>
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
