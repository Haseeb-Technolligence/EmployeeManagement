import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";

import FormCard from "./formCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(2),
  },
}));

export default function EmployeeForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} container justify="center">
            <Typography variant="h5" gutterBottom>
              Add Employee
            </Typography>
          </Grid>
          {/* Personal Details */}
          <Grid item xs={12} md={6}>
            <FormCard title="Personal Details">
              <TextField
                id="name"
                label="Name"
                type="string"
                fullWidth={true}
                required={true}
                size="small"
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="fatherName"
                label="Father Name"
                type="string"
                margin="normal"
                size="small"
                required={true}
                fullWidth={true}
                variant="outlined"
              />

              <TextField
                id="dob"
                type="date"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">Date of birth *</FormLabel>
              <Grid item container style={{ marginTop: "20px" }}>
                <Grid item xs={6}>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup aria-label="gender" name="gender1">
                    <FormControlLabel
                      value="female"
                      control={<Radio required={true} />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio required={true} />}
                      label="Male"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel component="legend">Marital Status</FormLabel>
                  <RadioGroup aria-label="marital" name="maritalstatus">
                    <FormControlLabel
                      value="married"
                      control={<Radio required={true} />}
                      label="Married"
                    />
                    <FormControlLabel
                      value="unmarried"
                      control={<Radio required={true} />}
                      label="Unmarried"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
              <TextField
                id="number"
                label="Phone Number"
                type="number"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                id="address"
                label="Address"
                type="string"
                margin="normal"
                size="small"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                id="nationality"
                label="Nationality"
                type="string"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                id="photo"
                type="file"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">Select photo *</FormLabel>
            </FormCard>
          </Grid>
          <Grid item xs={12} md={6} container>
            {/* Account Login */}
            <Grid item xs={12}>
              <FormCard title="Account Login">
                <TextField
                  id="email"
                  label="Email"
                  type="email"
                  size="small"
                  required={true}
                  margin="normal"
                  fullWidth={true}
                  variant="outlined"
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  margin="normal"
                  size="small"
                  required={true}
                  fullWidth={true}
                  variant="outlined"
                />
              </FormCard>
            </Grid>
            <Grid item xs={12}>
              {/* Company Details */}
              <FormCard title="Company Details">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Select Department
                  </InputLabel>
                  <Select native required label="Select Department">
                    <option aria-label="None" value="" />
                    <option value="software">Software Department</option>
                    <option value="Monitoring">Monitoring</option>
                    <option value="Marketing">Marketing</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Select Designation
                  </InputLabel>
                  <Select native required label="Select Designation">
                    <option aria-label="None" value="" />
                    <option value="developer">Software Developer</option>
                    <option value="tester">Software Tester</option>
                    <option value="marketer">Marketing</option>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Status
                  </InputLabel>
                  <Select native required label="Select Designation">
                    <option aria-label="None" value="" />
                    <option value="developer">Active</option>
                    <option value="tester">Inactive</option>
                  </Select>
                </FormControl>
                <TextField
                  id="joining"
                  type="date"
                  size="small"
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  variant="outlined"
                />
                <FormLabel component="legend">Date of joining *</FormLabel>
                <TextField
                  id="leaving"
                  type="date"
                  size="small"
                  disabled
                  margin="normal"
                  required={true}
                  fullWidth={true}
                  variant="outlined"
                />
                <FormLabel component="legend">Date of Leaving</FormLabel>
              </FormCard>
            </Grid>
          </Grid>
          {/* Documents Grid */}
          <Grid item xs={12} md={6}>
            <FormCard title="Documents">
              <TextField
                id="resume"
                type="file"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">Select Resume *</FormLabel>
              <TextField
                id="offerLetter"
                type="file"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">Select Offer Letter *</FormLabel>
              <TextField
                id="aggrement"
                type="file"
                size="small"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <FormLabel component="legend">
                Select Aggrement/Contract *
              </FormLabel>
            </FormCard>
          </Grid>
          {/* salary Details */}
          <Grid item xs={12} md={6}>
            <FormCard title="Salary & Bank Details">
              <TextField
                id="salary"
                type="number"
                size="small"
                label="Basic Salary in Rupee"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                id="accountHolder"
                type="text"
                size="small"
                label="Account Holder Name"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                id="accountNumber"
                type="text"
                size="small"
                label="Account Number"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                id="bankName"
                type="text"
                size="small"
                label="Bank Name"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
              <TextField
                id="branchCode"
                type="text"
                size="small"
                label="Branch Code"
                margin="normal"
                required={true}
                fullWidth={true}
                variant="outlined"
              />
            </FormCard>
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="center">
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "30px" }}
            size="large"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
}
