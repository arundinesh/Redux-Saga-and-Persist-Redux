// import { LocalizationProvider, TimePicker } from "@mui/lab";
import { DialogActions, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TimePicker } from "material-ui-time-picker";
import { Button, Dialog } from "@material-ui/core";

function SubComp() {
  const location = useLocation();
  const [age, setAge] = useState(10);
  const [search, setSearch] = useSearchParams();
  const [timeVal, setTimeVal] = useState(null);
  // console.log(search.get("tset"));
  // console.log(timeVal);
  return (
    <div style={{ marginTop: "10px" }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        style={{ margin: 10 }}
        onChange={(val) => {
          setAge(val.target.value);
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>
          <div>
            <span>Others</span> <input type={"text"} />
          </div>
        </MenuItem>
      </Select>
      {/* 
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          s
          onChange={(newValue) => {
            // setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider> */}
      <Dialog maxWidth="xs" open={true}>
        <TimePicker
          value={timeVal}
          mode="12h"
          onChange={(time) => setTimeVal(time)}
        />
        <DialogActions>
          <Button color="primary">Cancel</Button>
          <Button color="primary">Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SubComp;
