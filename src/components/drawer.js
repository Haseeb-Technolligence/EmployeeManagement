import React from "react";
import DrawerList from "./drawerList";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Route, Switch, Redirect } from "react-router-dom";
import AutoGrid from "./dashboard";
import XYZ from "./xyz";
import { Avatar, Box, Button, Hidden } from "@material-ui/core";
import Appbar from "./appbar";
import { useDispatch, useSelector, connect } from "react-redux";
import EmployeeForm from "./employeeForm";
import {
  LeaveActionClose,
  EmployeeActionClose,
  DepartmentActionClose,
  AttendanceActionClose,
  HolidayActionClose,
  PayRollActionClose,
  DailyActionClose,
  SettingActionClose,
  DrawerActionClose,
} from "../actions/drawerAllActions";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  dplarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  navlink: {
    textDecoration: "none",
    color: "gray",
  },
}));

function MiniDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const open = props.drawerOpen;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar drawerOpen={open} />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton
            onClick={() => {
              props.drawerActionClose();
              props.employeeActionClose();
              props.attendanceActionClose();
              props.departmentActionClose();
              props.holidayActionClose();
              props.settingActionClose();
              props.dailyActionClose();
              props.payRollActionClose();
              props.leaveActionClose();
            }}
          >
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Box alignItems="center" display="flex" flexDirection="column" p={2}>
          <Avatar
            className={classes.dplarge}
            src={require("../images/dp.jpeg")}
            to="/app/account"
          />
          <Typography className={classes.name} color="textPrimary" variant="h5">
            Haseeb Shaukat
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Deputy Direector
          </Typography>
        </Box>
        <DrawerList />
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/dashboard" component={AutoGrid} />
          <Route path="/xyz" component={XYZ} />
          <Route path="/AddEmployee" component={EmployeeForm} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.DrawerReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    drawerActionClose: () => dispatch(DrawerActionClose()),
    employeeActionClose: () => dispatch(EmployeeActionClose()),
    attendanceActionClose: () => dispatch(AttendanceActionClose()),
    departmentActionClose: () => dispatch(DepartmentActionClose()),
    holidayActionClose: () => dispatch(HolidayActionClose()),
    settingActionClose: () => dispatch(SettingActionClose()),
    dailyActionClose: () => dispatch(DailyActionClose()),
    payRollActionClose: () => dispatch(PayRollActionClose()),
    leaveActionClose: () => dispatch(LeaveActionClose()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);
