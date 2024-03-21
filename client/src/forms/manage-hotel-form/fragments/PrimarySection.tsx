import { Button, Input, Textarea } from "@nextui-org/react";
import { useFormContext } from "react-hook-form"
import { ManageHotelFormType } from "../ManageHotelForm";
import { Star } from "lucide-react";

function PrimarySection() {

  const { register, formState: { errors }, setValue, watch } = useFormContext<ManageHotelFormType>();

  return (
      <div className="py-5 space-y-5">
        <div className="w-full">
            <label htmlFor="name" className="block mb-1 font-bold text-gray-900 dark:text-white">Hotel name <span className="text-red-500">*</span></label>
            <Input 
                size="sm"
                type="text" 
                id="name"
                variant="bordered" 
                placeholder="Hotel name" 
                required
                classNames={{
                  inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                }}
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
                  size="sm"
                  type="text" 
                  id="city"
                  variant="bordered" 
                  placeholder="City" 
                  required
                  classNames={{
                    inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                  }}
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
                  size="sm"
                  type="text" 
                  id="country"
                  variant="bordered" 
                  placeholder="Country" 
                  required
                  classNames={{
                    inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                  }}
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
                minRows={5}
                maxRows={10}
                size="sm"
                type="text" 
                id="description"
                variant="bordered" 
                placeholder="Add description..." 
                required
                classNames={{
                  inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                }}
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
                size="sm"
                type="number" 
                id="pricePerNight"
                variant="bordered" 
                placeholder="Price per night" 
                required
                classNames={{
                  inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                }}
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
                  className={button <= watch("ratings") ? "bg-primary-blue hover:bg-primary-blue" : "text-black" } 
                  key={button} 
                  onClick={() => {
                    if(watch("ratings") === button){
                      setValue("ratings", 0)
                    }else{
                      setValue("ratings", button)
                    }
                  }} 
                  isIconOnly 
                  {...register("ratings", {
                    validate: (value) => {
                      if(value === 0){
                        return "Star rating is required"
                      }
                    }
                  })}
                >
                  <Star className={button <= watch("ratings") ? "text-white" : "text-black" } />
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