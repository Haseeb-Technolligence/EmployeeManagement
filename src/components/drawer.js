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
import Avatar from "@material-ui/core/Avatar";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ApartmentIcon from "@material-ui/icons/Apartment";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";

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
        <div className={classes.dpdiv} style={{ backgroundColor: "green" }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src={require("../images/dp.jpeg")}
                  className={classes.dplarge}
                />
              </ListItemIcon>
              <ListItemText primary="Ali Zafar" />
            </ListItem>
            <ListItem>
              <h6>asds</h6>
            </ListItem>
          </List>
        </div>
        <Divider />

        <List>
          {/* dashboard */}
          <ListItem button type="Dashboard">
            <ListItemIcon>
              <DashboardIcon style={{ color: "#fff" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          {/* employees options */}

          <DrawerList
            onClick={handleEmployee}
            primary="Employee"
            openVariable={employeeOpen}
          >
            <PersonIcon color="secondary" />
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
            <ApartmentIcon color="secondary" />
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
              <MenuBookIcon color="secondary" />
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
            <AirlineSeatFlatIcon color="secondary" />
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
            <LocalAtmIcon color="secondary" />
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
            <AirplanemodeActiveIcon color="secondary" />
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
            <SettingsIcon color="secondary" />
            <ListItem button className={classes.nested}>
              <ListItemText primary="Change Password" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Configuration" />
            </ListItem>
          </DrawerList>
          {/* logout  */}
          <ListItem button>
            <ListItemIcon>
              <ExitToAppIcon color="secondary" />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}
