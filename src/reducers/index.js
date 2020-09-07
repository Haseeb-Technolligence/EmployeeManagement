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
  EmployeeReducer,
  LeaveReducer,
  DepartmentReducer,
  HolidayReducer,
  SettingReducer,
  AttendanceReducer,
  DailyReducer,
  PayRollReducer,
});
