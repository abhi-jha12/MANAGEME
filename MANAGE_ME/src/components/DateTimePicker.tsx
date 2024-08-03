import React from "react";
import Datepicker from "tailwind-datepicker-react";

interface DateTimePickerProps {
  show: boolean;
  setShow: (state: boolean) => void;
  onChange: (selectedDate: Date) => void;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  show,
  setShow,
  onChange,
}) => {
  const options = {
    autoHide: true,
    clearBtn: true,
    maxDate: new Date("2030-01-01"),
    minDate: new Date("1950-01-01"),
    theme: {
      background: "bg-gray-700 dark:bg-gray-800",
      selected: "bg-purple-500 text-white",
    },
    icons: {
      prev: () => <span>Previous</span>,
      next: () => <span>Next</span>,
    },
    datepickerClassNames: "top-12 w-48",
    defaultDate: new Date(),
    language: "en",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Select Date",
    inputDateFormatProp: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  };

  return (
    <div>
      {show && (
        <Datepicker
          options={options}
          onChange={onChange}
          show={show}
          setShow={setShow}
        />
      )}
    </div>
  );
};

export default DateTimePicker;
