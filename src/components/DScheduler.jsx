import React, { useEffect, useState } from "react";
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
import axios from "axios";

const DScheduler = () => {
  const baseURL = "http://localhost:3500";

  const [currentViewName, setCurrentViewName] = useState("work-week");
  const [currentDate, setCurrentDate] = useState();
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState();

  // state for form content
  const [addedAppointment, setAddedAppointment] = useState({});
  const [appointmentChanges, setAppointmentChanges] = useState({});
  const [editingAppointment, setEditingAppointment] = useState();

  const handleAdd = async (body) => {
    try {
      await axios.post(`${baseURL}/schedules/`, body);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = async (id, body) => {
    try {
      await axios.patch(`${baseURL}/schedules/${id}`, body);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseURL}/schedules/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      console.log(added);
      const startingAddedId =
        schedules.length > 0 ? schedules[schedules.length - 1].id + 1 : 0;
      setSchedules([...schedules, { id: startingAddedId, ...added }]);
      handleAdd(added);
    }
    if (changed) {
      console.log(changed);
      setSchedules(
        schedules.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        )
      );
      const id = Object.keys(changed)[0];
      handleEdit(id, changed);
    }
    if (deleted !== undefined) {
      setSchedules(
        schedules.filter((appointment) => appointment.id !== deleted)
      );
      handleDelete(deleted);
    }
  };

  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get(`${baseURL}/schedules`);
        setSchedules(response.data);
      } catch (error) {
        setError(error.message);
        console.log(`Initial date fetch error: ${error}`);
      }
    }
    loadData();
  }, []);

  return (
    <>
      {error ? (
        "Error: something bad happened, check browser console or reflash current page to synchronize backend data"
      ) : (
        <Paper>
          <Scheduler height={645} data={schedules}>
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
            <EditingState
              onCommitChanges={(p) => {
                commitChanges(p);
              }}
              addedAppointment={addedAppointment}
              onAddedAppointmentChange={(p) => {
                setAddedAppointment(p);
              }}
              appointmentChanges={appointmentChanges}
              onAppointmentChangesChange={(p) => {
                setAppointmentChanges(p);
              }}
              editingAppointment={editingAppointment}
              onEditingAppointmentChange={(p) => {
                setEditingAppointment(p);
              }}
            />
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
      )}
    </>
  );
};

export default DScheduler;
