import { useFormContext } from "react-hook-form"
import { ManageHotelFormType } from "../ManageHotelForm";
import { Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function PrimarySection() {

  const { register, formState: { errors }, setValue, watch } = useFormContext<ManageHotelFormType>();

  return (
      <div className="py-5 space-y-5">
        <div className="w-full">
            <label htmlFor="name" className="block mb-1 font-bold text-gray-900 dark:text-white">Hotel name <span className="text-red-500">*</span></label>
            <Input 
                type="text" 
                id="name"
                placeholder="Hotel name" 
                required
                {...register("name", {
                    required: {
                      value: true,
                      message: "Hotel name is required"
                    }
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.name?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div className="w-full">
              <label htmlFor="city" className="block mb-1 font-bold text-gray-900 dark:text-white">City <span className="text-red-500">*</span></label>
              <Input 
                  type="text" 
                  id="city"
                  placeholder="City" 
                  required
                  {...register("city", {
                      required: {
                        value: true,
                        message: "City name is required"
                      }
                  })} 
              />
              <p className="text-xs mt-1 font-medium text-red-500">{errors?.city?.message}</p>
          </div>
          <div className="w-full">
              <label htmlFor="country" className="block mb-1 font-bold text-gray-900 dark:text-white">Country <span className="text-red-500">*</span></label>
              <Input 
                  type="text" 
                  id="country"
                  placeholder="Country" 
                  required
                  {...register("country", {
                      required: {
                        value: true,
                        message: "Country name is required"
                      }
                  })} 
              />
              <p className="text-xs mt-1 font-medium text-red-500">{errors?.country?.message}</p>
          </div>
        </div>

        <div>
            <label htmlFor="description" className="block mb-1 font-bold text-gray-900 dark:text-white">Description <span className="text-red-500">*</span></label>
            <Textarea 
                rows={5}
                id="description"
                placeholder="Add description..." 
                required
                {...register("description", {
                    required: {
                      value: true,
                      message: "Description is required"
                    }
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.description?.message}</p>
        </div>
        <div className="w-full grid grid-cols-2 gap-10">
          <div>
            <label htmlFor="pricePerNight" className="block mb-1 font-bold text-gray-900 dark:text-white">Price per night <span className="text-red-500">*</span></label>
            <Input 
                type="number" 
                id="pricePerNight"
                placeholder="Price per night" 
                required
                min={1}
                max={1000000}
                {...register("pricePerNight", {
                    required: {
                      value: true,
                      message: "Price per night is required"
                    }
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.pricePerNight?.message}</p>
          </div>

          <div>
            <label htmlFor="ratings" className="block mb-1 font-bold text-gray-900 dark:text-white">Star rating <span className="text-red-500">*</span></label>
            <div className="flex items-center gap-5">
              {[1, 2, 3, 4, 5].map(button => (
                <Button
                  type="button"
                  variant="ghost"
                  className={button <= watch("ratings") ? "bg-primary-blue hover:bg-primary-blue rounded-full" : "text-black rounded-full" } 
                  key={button} 
                  onClick={() => {
                    if(watch("ratings") === button){
                      setValue("ratings", 0)
                    }else{
                      setValue("ratings", button)
                    }
                  }} 
                  {...register("ratings")}
                >
                  <Star className={button <= watch("ratings") ? "text-white h-3 w-3" : "text-black h-3 w-3" } />
                </Button>
              ))}
            </div>
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.ratings?.message}</p>
          </div>
        </div>
      </div>
  )
}

export default PrimarySection