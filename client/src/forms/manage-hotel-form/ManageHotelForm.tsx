import { FormProvider, useForm } from "react-hook-form"
import PrimarySection from "./fragments/PrimarySection";

type ManageHotelFormType = {
  name: string,
  city: string,
  country: string,
  description: string,
  type: string,
  pricePerNight: number,
  ratings: number,
  facilities: string[],
  imageFiles: FileList,
  adultCount: number,
  childCount: number,
  infantCount: number
}

function ManageHotelForm() {

  const formState = useForm<ManageHotelFormType>();

  return (
    <FormProvider {...formState}>
      <form>
        <PrimarySection/>
      </form>
    </FormProvider>
  )
}

export default ManageHotelForm