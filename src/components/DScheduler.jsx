import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Toolbar,
  DateNavigator,
  TodayButton,
  Scheduler,
  WeekView,
  MonthView,
  DayView,
  AllDayPanel,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";

const DScheduler = () => {
  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [currentDate, setCurrentDate] = useState();
  return (
    <Paper>
      <Scheduler height={900}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={(date) => {
            setCurrentDate(date);
          }}
          currentViewName={currentViewName}
          onCurrentViewNameChange={(name) => {
            setCurrentViewName(name);
          }}
        />
        <EditingState />
        <IntegratedEditing />
        <WeekView startDayHour={10} endDayHour={19} />
        <WeekView
          name="work-week"
          displayName="Work Week"
          excludedDays={[0, 6]}
          startDayHour={9}
          endDayHour={19}
        />
        <MonthView />
        <DayView />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <AllDayPanel />
        <ConfirmationDialog />
        <Appointments />
        <AppointmentTooltip showOpenButton showDeleteButton />
        <AppointmentForm />
        <TodayButton />
      </Scheduler>
    </Paper>
  );
};

export default DScheduler;
