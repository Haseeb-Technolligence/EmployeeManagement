import React from "react";
import DrawerList from "./drawerlist";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AirlineSeatFlatIcon from "@material-ui/icons/AirlineSeatFlat";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AirplanemodeActiveIcon from "@material-ui/icons/AirplanemodeActive";
import SpeakerNotesIcon from "@material-ui/icons/SpeakerNotes";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ApartmentIcon from "@material-ui/icons/Apartment";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import { Route, Switch, Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AutoGrid from "./dashboard";
import XYZ from "./xyz";
import {
  Avatar,
  Box,
  Button,
  Hidden,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
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
    color: "black",
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [leaveOpen, setLeaveOpen] = React.useState(false);
  const [employeeOpen, setEmployeeOpen] = React.useState(false);
  const [departmentOpen, setDepartmentOpen] = React.useState(false);
  const [attendanceOpen, setAttendanceOpen] = React.useState(false);
  const [payrollOpen, setPayrollOpen] = React.useState(false);
  const [holidayOpen, setHolidayOpen] = React.useState(false);
  const [SettingsOpen, setSettingsOpen] = React.useState(false);
  const [dailyOpen, setDailyOpen] = React.useState(false);

  const handleEmployee = () => {
    setEmployeeOpen(!employeeOpen);
    setOpen(true);
  };
  const handleDepartment = () => {
    setDepartmentOpen(!departmentOpen);
    setOpen(true);
  };
  const handleAttendance = () => {
    setAttendanceOpen(!attendanceOpen);
    setOpen(true);
  };
  const handleLeave = () => {
    setLeaveOpen(!leaveOpen);
    setOpen(true);
  };
  const handlePayroll = () => {
    setPayrollOpen(!payrollOpen);
    setOpen(true);
  };
  const handleHoliday = () => {
    setHolidayOpen(!holidayOpen);
    setOpen(true);
  };
  const handleDaily = () => {
    setDailyOpen(!dailyOpen);
    setOpen(true);
  };
  const handleSettings = () => {
    setSettingsOpen(!SettingsOpen);
    setOpen(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setLeaveOpen(false);
    setEmployeeOpen(false);
    setDepartmentOpen(false);
    setAttendanceOpen(false);
    setPayrollOpen(false);
    setHolidayOpen(false);
    setSettingsOpen(false);
    setDailyOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Employees Management System
          </Typography>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          src={require('../images/dp.jpeg')}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          Haseeb Shaukat
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          Deputy Direector
        </Typography>
      </Box>
        <Divider />

        <List>
          {/* dashboard */}
          <NavLink to="/dashboard" className={classes.navlink}>
            <ListItem button type="Dashboard">
              <ListItemIcon>
                <DashboardIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </NavLink>

          {/* employees options */}

          <DrawerList
            onClick={handleEmployee}
            primary="Employee"
            openVariable={employeeOpen}
          >
            <PersonIcon color="primary" />
            <ListItem button className={classes.nested}>
              <ListItemText primary="Add Employee" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Employee" />
            </ListItem>
          </DrawerList>
          {/* department options */}
          <DrawerList
            onClick={handleDepartment}
            primary="Department"
            openVariable={departmentOpen}
          >
            <ApartmentIcon color="primary" />
            <ListItem button className={classes.nested}>
              <ListItemText primary="Add Department" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Department" />
            </ListItem>
          </DrawerList>
          {/* attendance options */}
          <ListItem button onClick={handleAttendance}>
            <ListItemIcon>
              <MenuBookIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Attendance" />
            {attendanceOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={attendanceOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Daily Attendacne" />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Attendance Report" />
              </ListItem>
            </List>
          </Collapse>
          {/* leave options */}

          <DrawerList
            onClick={handleLeave}
            primary="Leave"
            openVariable={leaveOpen}
          >
            <AirlineSeatFlatIcon color="primary" />
            <ListItem button className={classes.nested}>
              <ListItemText primary="Add Leave" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Leave" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Add Leave Type" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Leave Type" />
            </ListItem>
          </DrawerList>
          {/* payroll options */}
          <DrawerList
            onClick={handlePayroll}
            primary="Payroll"
            openVariable={payrollOpen}
          >
            <LocalAtmIcon color="primary" />
            <ListItem button className={classes.nested}>
              <ListItemText primary="Create Payslip" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Payslip List" />
            </ListItem>
          </DrawerList>
          {/* holiday options */}
          <DrawerList
            onClick={handleHoliday}
            primary="Holiday"
            openVariable={holidayOpen}
          >
            <AirplanemodeActiveIcon color="primary" />
            <ListItem button className={classes.nested}>
              <ListItemText primary="Add Holiday" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Manage Holiday" />
            </ListItem>
          </DrawerList>
          {/* settings options */}
          <DrawerList
            onClick={handleSettings}
            primary="Settings"
            openVariable={SettingsOpen}
          >
            <SettingsIcon color="primary" />
            <ListItem button className={classes.nested}>
              <ListItemText primary="Change Password" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Configuration" />
            </ListItem>
          </DrawerList>
          {/* logout  */}
          <NavLink to="/xyz" className={classes.navlink}>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route path="/dashboard" component={AutoGrid} />
          <Route path="/xyz" component={XYZ} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}
