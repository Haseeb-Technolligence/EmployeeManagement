import {
  DrawerReducer,
  EmployeeReducer,
  LeaveReducer,
  DepartmentReducer,
  HolidayReducer,
  SettingReducer,
  AttendanceReducer,
  DailyReducer,
  PayRollReducer,
} from "./drawerAllReducers";
import { demoReducer } from "./empdata";
import { combineReducers } from "redux";

export const allReducers = combineReducers({
  DrawerReducer,
  xyz: demoReducer,
  EmployeeReducer,
  LeaveReducer,
  DepartmentReducer,
  HolidayReducer,
  SettingReducer,
  AttendanceReducer,
  DailyReducer,
  PayRollReducer,
});
