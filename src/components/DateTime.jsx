import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let now = new Date();
      let dateTime = now.toLocaleString("en-ID", { timeZone: "Asia/Jakarta" });
      setCurrentDateTime(dateTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="currentDateTime">
      <h2>Jam Saat Ini</h2>
      <p>{currentDateTime}</p>
    </section>
  );
};

export default DateTime;
