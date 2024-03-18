import { FormProvider, useForm } from "react-hook-form"
import PrimarySection from "./fragments/PrimarySection";
import TypesSection from "./fragments/TypesSection";

export type ManageHotelFormType = {
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
      <form className="my-10">
        <h1 className="text-center text-2xl font-bold">Add Hotel</h1>
        <PrimarySection/>
        <TypesSection/>
      </form>
    </FormProvider>
  )
}

export default ManageHotelForm