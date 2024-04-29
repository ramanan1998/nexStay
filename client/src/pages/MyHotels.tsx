import { getAllHotels } from "@/apis/api-client";
import HoneyCombLoader from "@/components/loader/HoneyCombLoader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query"
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

function MyHotels() {

  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: [ "getAllHotels" ],
    queryFn: getAllHotels,
  });

  let content;

  if(isLoading){
    content = <HoneyCombLoader/>
  }

  if(isError){
    content = <p className="font-bold text-red-500 text-center mt-32 text-2xl capitalize">{JSON.stringify(error)}</p>
  }

  if(isSuccess){
    content = (
      <div className="mt-5 grid grid-cols-4 gap-5">
        {data?.map(hotel => (
          <Card key={hotel._id} className="overflow-hidden">
            <CardHeader className="p-0">
              <Carousel className="w-full">
                  <CarouselContent>
                    {hotel.imageUrl.map((image) => (
                      <CarouselItem key={`hotelImage:${hotel._id}`}>
                        <div className="h-80 w-full overflow-hidden">
                          <img className="h-full w-full object-cover" src={image} alt="hotel-img" loading="lazy" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
            </CardHeader>
            <CardContent className="space-y-2 mt-3 p-1">
              <div className="flex flex-row items-center justify-between font-bold">
                <p>{hotel.name}</p>
                  <div className="flex flex-row gap-1 items-center text-sm">
                    <Star className="fill-black h-5" />
                    {hotel.rating}
                  </div>
                </div>
              <p className="text-sm">{hotel.city}, {hotel.country}</p>
              <div className="flex flex-row items-center gap-2">
                {hotel.facilities.slice(0, 3).map(facility => (
                  <div className="border w-fit text-xs text-primary-blue font-bold bg-slate-200 px-2 rounded-2xl" key={`facility:${hotel._id}`}>
                    <p>{facility}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold">₹{hotel.pricePerNight} <span className="font-normal text-slate-500">per night</span></p>
            </CardContent>
            {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="py-10">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-3xl font-bold">My hotels</h1>
        <Link to="/add-hotel">
          <Button>
            Add new hotel
          </Button>
        </Link>
      </div>
      {content}
    </div>
  )
}

export default MyHotels