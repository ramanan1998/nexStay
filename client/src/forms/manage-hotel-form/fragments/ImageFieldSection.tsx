import { useFormContext } from "react-hook-form"
import { ManageHotelFormType } from "../ManageHotelForm";

function ImageFieldSection() {

  const { register, formState: { errors }, watch } = useFormContext<ManageHotelFormType>();


  return (
    <div>
        <div className="w-full">
            <label className="block mb-1 font-bold text-gray-900 dark:text-white">Upload Images <span className="text-red-500">*</span></label>
            <div>
                <label htmlFor="imageFiles" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-slate-200 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{watch("imageFiles") && [...watch("imageFiles")]?.map(image => image.name).join(", ")}</p>
                    </div>
                    <input
                        className="hidden" 
                        type="file" 
                        id="imageFiles"
                        required
                        multiple
                        accept="image/*"
                        {...register("imageFiles", {
                            validate: (imageList) => {

                                if(imageList.length === 0){
                                    return "Atleast one image should be added"
                                }

                                if(imageList.length > 6){
                                    return "Image file should not exceed more than 6 images"
                                }

                                return true;
                            }
                        })} 
                    />
                </label>
            </div>
            
            <p className="text-xs mt-1 font-medium text-red-500">{errors?.imageFiles?.message}</p>
        </div>
    </div>
  )
}

export default ImageFieldSection