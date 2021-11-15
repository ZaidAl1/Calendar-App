import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { getWeekdays } from "./api";

const Calendar = () => {
  const [events, setEvents] = useState([]);

  const weekdays = async () => {
    const response = await getWeekdays();
    setEvents(response);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={true}
      events={weekdays}
    />
  );
};

export default Calendar;
