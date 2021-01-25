import { Slider, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    color: "#6a983c",
  },
});
const FilterPrice = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const [min, setMin] = React.useState<any>('');
  const [max, setMax] = React.useState<any>('');
  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <>
      <Slider
        className={classes.root}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
      />
      <div className="price">
        <div className="price--input">
          <h3>Min</h3>
          <input type="text" name="price-min" id="min" value={min} onChange={e => setMin(e.target.value)} />
        </div>
        <div className="line"></div>
        <div className="price--input">
          <h3>Max</h3>
          <input type="text" name="price-max" id="max" value={max} onChange={e => setMax(e.target.value)}/>
        </div>
      </div>
      <div className="button-form">
        <div className="btn btn-buy">
          <span>Apply</span>
        </div>
        <div className="btn btn--more">
          <span>Reset</span>
        </div>
      </div>
    </>
  );
};

export default FilterPrice;
