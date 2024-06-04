import { deleteHotelById, getAllHotels } from "@/apis/api-client";
import { Icons } from "@/assets/icons";
import HoneyCombLoader from "@/components/loader/HoneyCombLoader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useAppContext } from "@/contexts/AppContext";
import { InvalidateQueryFilters, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { MoreVertical, Star } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function MyHotels() {

  const { showToast } = useAppContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [ openDeleteDialog, setOpenDeleteDialog ] = useState<string | null>(null);

  const { isLoading, isError, isSuccess, error, data } = useQuery({
    queryKey: [ "getAllHotels" ],
    queryFn: getAllHotels,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: [ "deleteHotelById" ],
    mutationFn: deleteHotelById,
    onSuccess: (response) => {
      queryClient.invalidateQueries([ "getAllHotels" ] as InvalidateQueryFilters);
      return showToast({
        title: "Request Success",
        message: response?.message,
        type: "SUCCESS"
      })
    },
    onError: (error) => {
      return showToast({
        title: "Request Success",
        message: error?.message,
        type: "SUCCESS"
      })
    }
  });

  const deleteMutateFunction = () => {
    mutate(openDeleteDialog as string);
    setOpenDeleteDialog(null)
  }

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
            <CardHeader className="p-0 relative">
              <Carousel className="w-full">
                  <CarouselContent>
                    {hotel.imageUrl.map((image, index) => (
                      <CarouselItem key={`hotelImage:${hotel._id}${index}`}>
                        <div className="h-80 w-full overflow-hidden">
                          <img className="h-full w-full object-cover" src={image} alt="hotel-img" loading="lazy" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="absolute z-10 right-1 bg-white rounded-full" size="icon" variant="ghost">
                      <MoreVertical/>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => navigate(`/edit-hotel/${hotel?._id}`)}
                    >
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={() => setOpenDeleteDialog(hotel?._id)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <CardContent className="space-y-2 mt-3 p-2">
              <div className="flex flex-row items-center justify-between font-bold">
                <p>{hotel.name}</p>
                  <div className="flex flex-row gap-1 items-center text-sm">
                    <Star className="fill-black h-5" />
                    {hotel.rating}
                  </div>
                </div>
              <p className="text-sm">{hotel.city}, {hotel.country}</p>
              <div className="flex flex-row items-center gap-2">
                {hotel.facilities.slice(0, 3).map((facility, index) => (
                  <div className="border w-fit text-xs text-primary-blue font-bold bg-slate-200 px-2 rounded-2xl" key={`facility:${hotel._id}${index}`}>
                    <p>{facility}</p>
                  </div>
                ))}
              </div>
              <p className="font-bold">₹{hotel.pricePerNight} <span className="font-normal text-slate-500">per night</span></p>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  console.log(openDeleteDialog)

  return (
    <>
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
    <Dialog open={!!openDeleteDialog} onOpenChange={() => setOpenDeleteDialog(null)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete hotel</DialogTitle>
          <DialogDescription>
            Deleting this hotel is a permanent action, this cannot be reverted.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-row justify-end gap-3">
          <Button onClick={() => setOpenDeleteDialog(null)} variant="secondary">
            Cancel
          </Button>
          <Button onClick={deleteMutateFunction} variant="destructive">
            {isPending ?  <Icons.spinner/> : "Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </>
  )
}

export default MyHotels