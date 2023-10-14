import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useState } from "react";
import EventPopup from "./EventPopUp";
import "./styles.css";

const localizer = momentLocalizer(moment);
const App = () => {
  const [events, setEvent] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [popup, setPopup] = useState(false);
  const handleSlotClick = (date) => {
    setSelectedDate(date);
    setPopup(true);
  };
  const addEvent = (event) => {
    setEvent([...events, event]);
    setPopup(false);
  };
  const removeEvent = (event) => {
    const filteredEvent = events.filter((e) => e !== event);
    setEvent(filteredEvent);
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={(slot) => handleSlotClick(slot.start)}
        style={{ height: 500 }}
      />
      {popup && (
        <EventPopup
          date={selectedDate}
          addEvent={addEvent}
          closePopup={() => setPopup(false)}
        />
      )}
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {event.title} - {event.description} -{" "}
            {moment(event.start).format("DD-MM-YYYY")}
            <span className="cross" onClick={() => removeEvent(event)}>
              &#9746;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default App;
