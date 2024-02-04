import "./style.scss"; 

const Schedule = () => {
  const scheduleData = [
    {
      day: "Monday",
      classes: [
        "PECECE101",
        "PECECE102",
        "PECECE103",
        "Lunch Break",
        "ML201",
        "OEC301",
      ],
    },

    {
      day: "Tuesday",
      classes: [
        "PECECE101",
        "OEC102",
        "PECECE103",
        "Lunch Break",
        "ML201",
        "PECECE102",
      ],
    },

    {
      day: "Wednesday",
      classes: [
        "OEC022",
        "PEC102",
        "PECECE103",
        "Lunch Break",
        "ML201",
        "OEC302",
      ],
    },

    {
      day: "Thursday",
      classes: [
        "BS101",
        "PCC102",
        "PECECE103",
        "Lunch Break",
        "ML201",
        "OE301",
      ],
    },

    {
      day: "Friday",
      classes: [
        "CECE102",
        "CECE103",
        "CECE101",
        "Lunch Break",
        "ML201",
        "OEC301",
      ],
    },
    // Add schedule data for Tuesday, Wednesday, Thursday, and Friday...
  ];

  return (
    <div className="schedule-container">
      <h1>Class Schedule</h1>
      <h4>You are the student of B.Tech, ECE, Sec-B</h4>
      <h5>Class Routine of 8th Semester</h5>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Period 1</th>
            <th>Period 2</th>
            <th>Period 3</th>
            <th>Period 4</th>
            <th>Period 5</th>
            <th>Period 6</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.day}</td>
              {schedule.classes.map((subject, idx) => (
                <td key={idx}>{subject}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
