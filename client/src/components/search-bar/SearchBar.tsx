import { useSearchContext } from "@/contexts/SearchContext";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

const SearchBar = () => {
  const navigate = useNavigate();
  const search = useSearchContext();

  const [destination, setDestination] = useState<string>(search?.destination);
  const [checkIn, setCheckIn] = useState<Date>(search?.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search?.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search?.adultCount);
  const [childCount, setChildCount] = useState<number>(search?.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="m-5 p-1 bg-primary-blue rounded shadow-md grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-1"
    >
      <div className="flex flex-row items-center flex-1 bg-white p-2 rounded-md">
        {/* <MdTravelExplore size={25} className="mr-2" /> */}
        <input
          placeholder="Where is your next stay?"
          className="text-md w-full focus:outline-none"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="flex bg-white px-2 py-1 gap-2 rounded-md">
        <label className="items-center flex">
          Adults:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="items-center flex">
          Children:
          <input
            className="w-full p-1 focus:outline-none font-bold"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>
      <div className="rounded-md overflow-hidden">
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div className="rounded-md overflow-hidden">
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="min-w-full bg-white p-2 focus:outline-none"
          wrapperClassName="min-w-full"
        />
      </div>
      <div className="flex gap-1">
        <Button variant="secondary" className="w-full">
          Search
        </Button>
        <Button variant="default" className="w-full bg-red-400 hover:bg-red-300">
          Clear
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;