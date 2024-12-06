import React, {  useState } from 'react';
import style from './InfoTimeTravel.module.css';
import { PiRepeat } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

function InfoTimeTravel() {
  const [departureCity, setDepartureCity] = useState('');
  const [destinationCity, setDestinationCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);
  const navigate = useNavigate(); // استفاده از useNavigate برای هدایت به صفحات مختلف
  // فانکشن برای جابجایی مقادیر و مکان فیزیکی مبدا و مقصد
  const swapCities = () => {
    setDepartureCity((prev) => destinationCity);
    setDestinationCity((prev) => departureCity);
  };

  // فانکشن برای جابجایی مقادیر و مکان فیزیکی تاریخ رفت و برگشت
  const swapDates = () => {
    setDepartureDate((prev) => returnDate);
    setReturnDate((prev) => departureDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departureCity || !destinationCity || !departureDate || !passengers) {
      alert('لطفاً تمامی فیلدها را تکمیل کنید.');
      return;
    }
    const formData = {
      departureCity,
      destinationCity,
      departureDate,
      returnDate,
      passengers,
    };
    
    console.log('فرم ارسال شد:', formData);
    navigate("searchTravel");
  };

  return (
    <form className={style.infoTimeTravel} onSubmit={handleSubmit}>
      <div className={style.inputs}>
        {/* انتخاب شهر مبدا و مقصد */}
        <div className={style.input}>
          <select
            className={style.btnRight}
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          >
            <option value="">مبدا(شهر)</option>
            <option value="tehran">تهران</option>
            <option value="mashhad">مشهد</option>
            <option value="isfahan">اصفهان</option>
          </select>
          
          <span className={style.change}>
            <PiRepeat size={24} color="#272A3B" />
          </span>
          
          <select
            className={style.btnLeft}
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          >
            <option value="">مقصد(شهر)</option>
            <option value="kish">کیش</option>
            <option value="shiraz">شیراز</option>
            <option value="tabriz">تبریز</option>
          </select>
        </div>

        {/* انتخاب تاریخ رفت و برگشت */}
        <div className={style.input}>
          <input
            type="date"
            className={style.btnRight}
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />

          <span className={style.change}>
            <PiRepeat size={24} color="#272A3B" />
          </span>
          
          <input
            type="date"
            className={style.btnLeft}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>
      </div>
      <div className={style.other}>
        <input
          placeholder="1 مسافر"
          className={style.passengerInput}
          type="number"
          value={passengers}
          min="1"
          onChange={(e) => setPassengers(e.target.value)}
        />
        <button type="submit" className={style.btnSearch}>
          جستجو
        </button>
      </div>
    </form>
  );
}

export default InfoTimeTravel;
