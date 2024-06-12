import { useSearchContext } from "@/contexts/SearchContext";
import { useState } from "react";

const hotelTypes = [
    "Budget",
    "Boutique",
    "Luxury",
    "Ski Resort",
    "Business",
    "Family",
    "Romantic",
    "Hiking Resort",
    "Cabin",
    "Beach Resort",
    "Golf Resort",
    "Motel",
    "All Inclusive",
    "Pet Friendly",
    "Self Catering",
];
  
const hotelFacilities = [
    "Free WiFi",
    "Parking",
    "Airport Shuttle",
    "Family Rooms",
    "Non-Smoking Rooms",
    "Outdoor Pool",
    "Spa",
    "Fitness Center",
];

function Search() {

  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);
  const [selectedStars, setSelectedStars] = useState<string[]>([]);
  const [selectedHotelTypes, setSelectedHotelTypes] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<number | undefined>();
  const [sortOption, setSortOption] = useState<string>("");

  const searchParams = {
    destination: search.destination,
    checkIn: search.checkIn.toISOString(),
    checkOut: search.checkOut.toISOString(),
    adultCount: search.adultCount.toString(),
    childCount: search.childCount.toString(),
    page: page.toString(),
    stars: selectedStars,
    types: selectedHotelTypes,
    facilities: selectedFacilities,
    maxPrice: selectedPrice?.toString(),
    sortOption,
  };

//   const { data: hotelData } = useQuery(["searchHotels", searchParams], () =>
//     apiClient.searchHotels(searchParams)
//   );

  const handleStarsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const starRating = event.target.value;

    setSelectedStars((prevStars) =>
      event.target.checked
        ? [...prevStars, starRating]
        : prevStars.filter((star) => star !== starRating)
    );
  };

  const handleHotelTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const hotelType = event.target.value;

    setSelectedHotelTypes((prevHotelTypes) =>
      event.target.checked
        ? [...prevHotelTypes, hotelType]
        : prevHotelTypes.filter((hotel) => hotel !== hotelType)
    );
  };

  const handleFacilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const facility = event.target.value;

    setSelectedFacilities((prevFacilities) =>
      event.target.checked
        ? [...prevFacilities, facility]
        : prevFacilities.filter((prevFacility) => prevFacility !== facility)
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
            <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
                Filter by:
            </h3>
            {/* <StarRatingFilter
                selectedStars={selectedStars}
                onChange={handleStarsChange}
            /> */}
            <div className="border-b border-slate-300 pb-5">
                <h4 className="text-md font-semibold mb-2">Property Rating</h4>
                {["5", "4", "3", "2", "1"].map((star) => (
                    <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="rounded"
                        value={star}
                        checked={selectedStars.includes(star)}
                        onChange={handleStarsChange}
                    />
                    <span>{star} Stars</span>
                    </label>
                ))}
            </div>
          {/* <HotelTypesFilter
            selectedHotelTypes={selectedHotelTypes}
            onChange={handleHotelTypeChange}
          /> */}
            <div className="border-b border-slate-300 pb-5">
                <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
                {hotelTypes.map((hotelType) => (
                    <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="rounded"
                        value={hotelType}
                        checked={selectedHotelTypes.includes(hotelType)}
                        onChange={handleHotelTypeChange}
                    />
                    <span>{hotelType}</span>
                    </label>
                ))}
            </div>
            <div className="border-b border-slate-300 pb-5">
                <h4 className="text-md font-semibold mb-2">Facilities</h4>
                {hotelFacilities.map((facility) => (
                    <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        className="rounded"
                        value={facility}
                        checked={selectedFacilities.includes(facility)}
                        onChange={handleFacilityChange}
                    />
                    <span>{facility}</span>
                    </label>
                ))}
            </div>
            <div>
                <h4 className="text-md font-semibold mb-2"> Max Price</h4>
                <select
                    className="p-2 border rounded-md w-full"
                    value={selectedPrice}
                    onChange={(event) => setSelectedPrice(event.target.value ? parseInt(event.target.value) : undefined)}
                >
                    <option value="">Select Max Price</option>
                    {[50, 100, 200, 300, 500].map((price) => (
                    <option value={price}>{price}</option>
                    ))}
                </select>
                </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {/* {hotelData?.pagination.total} Hotels found */}
            {search.destination ? ` in ${search.destination}` : ""}
          </span>
          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="">Sort By</option>
            <option value="starRating">Star Rating</option>
            <option value="pricePerNightAsc">
              Price Per Night (low to high)
            </option>
            <option value="pricePerNightDesc">
              Price Per Night (high to low)
            </option>
          </select>
        </div>
        {/* {hotelData?.data.map((hotel) => (
          <SearchResultsCard hotel={hotel} />
        ))}
        <div>
          <Pagination
            page={hotelData?.pagination.page || 1}
            pages={hotelData?.pagination.pages || 1}
            onPageChange={(page) => setPage(page)}
          />
        </div> */}
      </div>
    </div>
  )
}

export default Search