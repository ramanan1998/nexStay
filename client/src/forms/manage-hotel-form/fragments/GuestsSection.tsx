import { useFormContext } from "react-hook-form"
import { ManageHotelFormType } from "../ManageHotelForm";
import { Input } from "@/components/ui/input";

function GuestsSection() {

  const { register, formState: { errors } } = useFormContext<ManageHotelFormType>();

  return (
    <div className="grid grid-cols-3 gap-5">
        <div>
            <label htmlFor="adultCount" className="block mb-1 font-bold text-gray-900 dark:text-white">Maximum no.of Adults <span className="text-red-500">*</span></label>
            <Input 
                type="number" 
                id="adultCount"
                placeholder="Maximum no. of adults" 
                min={1}
                max={5}
                {...register("adultCount", {
                    required: {
                      value: true,
                      message: "Maximum number of adult is required"
                    },
                    validate: (value) => {
                      if(value <= 0){
                        return "Atleast 1 adult is required"
                      }

                      if(value > 5){
                        return "Maximum no.of adults are limited to 5"
                      }

                      return true
                    },
                    valueAsNumber: true
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.adultCount?.message}</p>
        </div>
        <div>
            <label htmlFor="childCount" className="block mb-1 font-bold text-gray-900 dark:text-white">Maximum no.of Children <span className="text-red-500">*</span></label>
            <Input 
                type="number" 
                id="childCount"
                placeholder="Maximum no. of children" 
                min={0}
                max={5}
                {...register("childCount", {
                  validate: (value) => {
                    if(value > 5){
                      return "Maximum no.of children are limited to 5"
                    }

                    return true
                  },
                  valueAsNumber: true
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.childCount?.message}</p>
        </div>

        <div>
            <label htmlFor="infantCount" className="block mb-1 font-bold text-gray-900 dark:text-white">Maximum no.of Infants <span className="text-red-500">*</span></label>
            <Input 
                type="number" 
                id="infantCount"
                placeholder="Maximum no. of infants" 
                min={0}
                max={5}
                {...register("infantCount", {
                  validate: (value) => {
                    if(value > 5){
                      return "Maximum no.of infants are limited to 5"
                    }

                    return true
                  },
                  valueAsNumber: true
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.infantCount?.message}</p>
        </div>
    </div>
  )
}

export default GuestsSection