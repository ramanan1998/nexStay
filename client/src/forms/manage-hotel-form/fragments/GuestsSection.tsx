import { Input } from "@nextui-org/react"
import { useFormContext } from "react-hook-form"
import { ManageHotelFormType } from "../ManageHotelForm";

function GuestsSection() {

  const { register, watch, formState: { errors } } = useFormContext<ManageHotelFormType>();

  return (
    <div className="grid grid-cols-3 gap-5">
        <div>
            <label htmlFor="adultCount" className="block mb-1 font-bold text-gray-900 dark:text-white">Maximum no.of Adults <span className="text-red-500">*</span></label>
            <Input 
                size="sm"
                type="number" 
                id="adultCount"
                variant="bordered" 
                placeholder="Maximum no. of adults" 
                required
                classNames={{
                  inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                }}
                min={1}
                max={100}
                value={watch("adultCount").toString()}
                {...register("adultCount", {
                    required: {
                      value: true,
                      message: "Maximum number of adult is required"
                    },
                    valueAsNumber: true
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.adultCount?.message}</p>
        </div>
        <div>
            <label htmlFor="childCount" className="block mb-1 font-bold text-gray-900 dark:text-white">Maximum no.of Children <span className="text-red-500">*</span></label>
            <Input 
                size="sm"
                type="number" 
                id="childCount"
                variant="bordered" 
                placeholder="Maximum no. of children" 
                required
                classNames={{
                  inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                }}
                min={1}
                max={100}
                value={watch("childCount").toString()}
                {...register("childCount", {
                    valueAsNumber: true
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.childCount?.message}</p>
        </div>

        <div>
            <label htmlFor="infantCount" className="block mb-1 font-bold text-gray-900 dark:text-white">Maximum no.of Infants <span className="text-red-500">*</span></label>
            <Input 
                size="sm"
                type="number" 
                id="infantCount"
                variant="bordered" 
                placeholder="Maximum no. of infants" 
                required
                classNames={{
                  inputWrapper: [ "data-[hover=true]:border-primary-blue", "group-data-[focus=true]:border-primary-blue" ]
                }}
                min={1}
                max={100}
                value={watch("infantCount").toString()}
                {...register("infantCount", {
                    valueAsNumber: true
                })} 
            />
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.infantCount?.message}</p>
        </div>
    </div>
  )
}

export default GuestsSection