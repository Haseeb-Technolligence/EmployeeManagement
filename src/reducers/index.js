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
import {demoReducer} from './empdata';

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
