import React, { useState, useEffect } from 'react';
import left from "../images/ic_left.png";
import right from "../images/ic_right.svg";

const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [dates, setDates] = useState([]);
  const [firstDay, setFirstDay] = useState(0);

  const setCalendar = (year, month) => {

    const firstDateDay = new Date(year, month - 1, 1).getDay();
    setFirstDay(firstDateDay);

    const lastDate = new Date(year, month, 0).getDate();

    const datesArray = Array.from({ length: lastDate }, (_, i) => i + 1);
    setDates(datesArray);
  };

  useEffect(() => {
    setCalendar(year, month);
  }, [year, month]);

  const handlePrevMonth = () => {
    if (month === 1) {
      setYear(year - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      setYear(year + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleCurrentMonth = () => {
    const now = new Date();
    setYear(now.getFullYear());
    setMonth(now.getMonth() + 1);
  };

  return (
    <div className="Calendar">
      <h1>달력</h1>
      <p>날짜를 선택해주세요.</p>
      <div>
        <div className="title flex-container">
          <div className="titleCont">
            <div className="left" onClick={handlePrevMonth}>
              <img src={left} alt="left" />
            </div>
            <div className="clickDay">{`${year}.${month < 10 ? `0${month}` : month}`}</div>
            <div className="right" onClick={handleNextMonth}>
              <img src={right} alt="right" />
            </div>
          </div>
          <div className="month" onClick={handleCurrentMonth}>
            {month}월
          </div>
        </div>

        <div className="cal">
          <div className="weekday container">
            <div className="weekday item">일</div>
            <div className="weekday item">월</div>
            <div className="weekday item">화</div>
            <div className="weekday item">수</div>
            <div className="weekday item">목</div>
            <div className="weekday item">금</div>
            <div className="weekday item">토</div>
          </div>

          <div className="dates container">
            {dates.map((date, index) => (
              <div
                key={index}
                className="date item"
                style={{
                  gridColumnStart: index === 0 ? firstDay + 1 : undefined,
                  color: (index + firstDay) % 7 === 6 ? "blue" : (index + firstDay) % 7 === 0 ? "red" : "black",
                }}
              >
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
