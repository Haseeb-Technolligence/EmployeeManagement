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
