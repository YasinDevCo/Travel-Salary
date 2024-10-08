import React, { useState } from "react";
import { validateDateOfBirth } from "../services/validation";
const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = [
  "ژانویه", "فوریه", "مارس", "آوریل", "می", "ژوئن",
  "ژوئیه", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"
];
const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

function DateOfBirth({ value, onChange }) {
  const [selectedDay, setSelectedDay] = useState(value.day || "");
  const [selectedMonth, setSelectedMonth] = useState(value.month || "");
  const [selectedYear, setSelectedYear] = useState(value.year || "");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = () => {
    const validationError = validateDateOfBirth({
      day: selectedDay,
      month: selectedMonth,
      year: selectedYear
    });

    if (validationError) {
      setErrorMessage(validationError);
    } else {
      setErrorMessage("");
      onChange({ day: selectedDay, month: selectedMonth, year: selectedYear });
    }
  };

  return (
    <div className={style.dateOfBirth}>
      <select
        value={selectedDay}
        onChange={(e) => {
          setSelectedDay(e.target.value);
          handleChange();
        }}
      >
        <option value="">روز</option>
        {days.map(day => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>

      <select
        value={selectedMonth}
        onChange={(e) => {
          setSelectedMonth(e.target.value);
          handleChange();
        }}
      >
        <option value="">ماه</option>
        {months.map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
      </select>

      <select
        value={selectedYear}
        onChange={(e) => {
          setSelectedYear(e.target.value);
          handleChange();
        }}
      >
        <option value="">سال</option>
        {years.map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {errorMessage && <p className={style.error}>{errorMessage}</p>}
    </div>
  );
}

export default DateOfBirth;
