import { FormProvider, useForm } from "react-hook-form"
import PrimarySection from "./fragments/PrimarySection";
import TypesSection from "./fragments/TypesSection";
import FacilitiesSection from "./fragments/FacilitiesSection";
import GuestsSection from "./fragments/GuestsSection";
import ImageFieldSection from "./fragments/ImageFieldSection";
import { Button } from "@nextui-org/react";

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

  const formState = useForm<ManageHotelFormType>({
    defaultValues: {
      facilities: [],
      adultCount: 1,
      childCount: 0,
      infantCount: 0,
    }
  });

  const { handleSubmit } = formState;

  const submit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <FormProvider {...formState}>
      <h1 className="text-center text-2xl font-bold mt-10">Add Hotel</h1>
      <form onSubmit={submit} className="space-y-10 container mb-10">
        <PrimarySection/>
        <TypesSection/>
        <FacilitiesSection/>
        <GuestsSection/>
        <ImageFieldSection/>
        <div className="mb-10 flex items-center justify-end">
          <Button color="primary" type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default ManageHotelForm