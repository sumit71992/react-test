import { useState } from "react";

const EventPopup = ({ date, addEvent, closePopup }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleEvent = () => {
    if (title && date) {
      addEvent({ title, description, start: date, end: date });
    }
    setDescription("");
    setTitle("");
  };
  return (
    <div className="event">
      <div className="field">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="DEscription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div>
          <button onClick={handleEvent}> Add Event </button>
          <button onClick={closePopup}> Cancel </button>
        </div>
      </div>
    </div>
  );
};
export default EventPopup;
