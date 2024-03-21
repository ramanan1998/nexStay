import { useFormContext } from "react-hook-form";
import { ManageHotelFormType } from "../ManageHotelForm";
import { Check } from "lucide-react";

function FacilitiesSection() {

  const facilities = [
    "TV",
    "Free Wifi",
    "Laundry",
    "Outdoor Pool",
    "Parking",
    "Airport Shuttle",
    "Family Rooms",
    "Non - Smoking Rooms",
    "Spa",
    "Fitness Center"
  ];

  const { register, formState: { errors }, watch } = useFormContext<ManageHotelFormType>();

  return (
    <div>
        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Choose Facilities <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-5 gap-5 text-tiny font-bold">
            {facilities.map(facility => (
                <label 
                    key={facility} 
                    htmlFor={facility}
                    className={watch("facilities")?.includes(facility) ? "flex flex-row items-center justify-center gap-2 bg-green-500 text-center rounded-3xl cursor-pointer text-white py-2 transition-all ease-in" : "flex flex-row items-center justify-center bg-slate-200 text-center rounded-3xl cursor-pointer py-2 transition-all ease-in"}
                >
                    <input
                        className="hidden" 
                        type="checkbox"
                        id={facility} 
                        value={facility}
                        {...register("facilities", {
                            validate: (facilitiesArray) => {
                                if(facilitiesArray && !!facilitiesArray.length){
                                    return true
                                }else{
                                    return "Atleast one facility is required"
                                }
                            }
                        })}
                    />
                    <Check className={watch("facilities")?.includes(facility) ? "h-4 visible" : "hidden"} />
                    {facility}
                </label>
            ))}
        </div>
        <p className="text-xs mt-1 font-medium text-red-500">{errors?.facilities?.message}</p>
    </div>
  )
}

export default FacilitiesSection