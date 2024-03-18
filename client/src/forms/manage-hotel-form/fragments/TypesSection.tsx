import { useFormContext } from "react-hook-form";
import { ManageHotelFormType } from "../ManageHotelForm";

function TypesSection() {

  const hotelTypelist = [
    "Budget",
    "Boutique",
    "Luxury",
    "Ski Resort",
    "Business",
    "Family",
    "Romantic",
    "Cabin",
    "Beach Resort",
    "Golf Resort",
    "Hiking Resort",
    "Motel",
    "All Inclusive",
    "Pet Friendly",
    "Self Catering"
  ];

  const { register, watch, formState: { errors } } = useFormContext<ManageHotelFormType>();

  console.log(watch("type"))


  return (
    <div className="container">
        <label className="block mb-2 font-bold text-gray-900 dark:text-white">Hotel type <span className="text-red-500">*</span></label>
        <div className="grid grid-cols-5 gap-x-12 gap-y-5">
            {hotelTypelist.map(item => (
                <label 
                    className={watch("type") === item ? "py-3 bg-primary-blue rounded-3xl text-white text-center cursor-pointer transition-all ease-in" : "py-3 bg-slate-200 rounded-3xl text-black text-center cursor-pointer"}
                    htmlFor={item}
                >
                    <input
                        className="hidden"
                        id={item} 
                        type="radio"
                        value={item}
                        {...register("type", {
                            required: {
                                value: true,
                                message: "Hotel type is required"
                            }
                        })} 
                    />
                    {item}
                </label>
            ))}
        </div>
        <p className="text-xs mt-1 font-medium text-red-500">{errors?.type?.message}</p>
    </div>
  )
}

export default TypesSection