import { MoreVertical, Star } from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from "embla-carousel-autoplay"
import { HotelType } from '@/types'
import { Button } from '../ui/button'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '../ui/menubar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '../ui/dropdown-menu'

interface Props extends HotelType {}

function HotelCard(props: Props) {
  return (
    <Card className="overflow-hidden">
        <CardHeader className="p-0 relative">
            <Carousel 
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    })
                ]}
            >
                <CarouselContent>
                    {props.imageUrl.map((image) => (
                    <CarouselItem key={`hotelImage:${props._id}`}>
                        <div className="h-80 w-full overflow-hidden">
                            <img className="h-full w-full object-cover" src={image} alt="hotel-img" loading="lazy" />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <DropdownMenu>
                <DropdownMenuTrigger className='w-fit absolute z-10 rounded-full bg-white p-1 right-1 shadow-md'>
                    <MoreVertical/>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </CardHeader>
        <CardContent className="space-y-2 mt-3 p-1">
            <div className="flex flex-row items-center justify-between font-bold">
                <p>{props.name}</p>
                <div className="flex flex-row gap-1 items-center text-sm">
                    <Star className="fill-black h-5" />
                    {props.rating}
                </div>
                </div>
            <p className="text-sm">{props.city}, {props.country}</p>
            <div className="flex flex-row items-center gap-2">
                {props.facilities.slice(0, 3).map(facility => (
                <div className="border w-fit text-xs text-primary-blue font-bold bg-slate-200 px-2 rounded-2xl" key={`facility:${props._id}`}>
                    <p>{facility}</p>
                </div>
                ))}
            </div>
            <p className="font-bold">₹{props.pricePerNight} <span className="font-normal text-slate-500">per night</span></p>
        </CardContent>
    </Card>
  )
}

export default HotelCard