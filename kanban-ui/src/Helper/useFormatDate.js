import { useEffect, useState } from "react";

const useFormatDate = () => {
  const [formattedDateTime, setFormattedDateTime] = useState("");

  useEffect(() => {
    const myDate = updateFormattedDateTime();
    setFormattedDateTime(myDate);
  }, []);
  return formattedDateTime;
};

// function to format the date
function updateFormattedDateTime() {
  const currentTime = Date.now();
  const currentDate = new Date(currentTime);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const formattedDateTimeString = currentDate.toLocaleString("en-US", options);
  return formattedDateTimeString;
}

export default useFormatDate;
