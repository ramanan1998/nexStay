import { getAllHotels } from "@/apis/api-client";
import HoneyCombLoader from "@/components/loader/HoneyCombLoader";
import HotelCard from "@/components/my-hotels/HotelCard";
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
        {data?.data?.map(hotel => (
          <HotelCard key={hotel._id} { ...hotel }/>
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