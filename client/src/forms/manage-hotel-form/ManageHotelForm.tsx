import { FormProvider, useForm } from "react-hook-form"
import PrimarySection from "./fragments/PrimarySection";
import TypesSection from "./fragments/TypesSection";
import FacilitiesSection from "./fragments/FacilitiesSection";
import GuestsSection from "./fragments/GuestsSection";
import ImageFieldSection from "./fragments/ImageFieldSection";
import { Button } from "@/components/ui/button";
import { Icons } from "@/assets/icons";
import { HotelType } from "@/types";
import { useEffect } from "react";

export type ManageHotelFormType = {
  name: string,
  city: string,
  country: string,
  description: string,
  type: string,
  pricePerNight: number,
  rating: number,
  facilities: string[],
  imageFiles: FileList,
  adultCount: number,
  childCount: number,
  infantCount: number
}

interface Props {
  onSave: (data: FormData) => void,
  isPending: boolean,
  defaultData?: HotelType
}

function ManageHotelForm(props: Props) {

  const formState = useForm<ManageHotelFormType>({
    defaultValues: {
      facilities: [],
      adultCount: 1,
      childCount: 0,
      infantCount: 0,
    }
  });

  const { handleSubmit, reset } = formState;

  useEffect(() => {
    reset(props?.defaultData)
  }, [ props?.defaultData, reset ])

  const submit = handleSubmit(data => {
    
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("city", data.city);
    formdata.append("country", data.country);
    formdata.append("description", data.description);
    formdata.append("pricePerNight", data.pricePerNight.toString());
    formdata.append("rating", data.rating.toString());
    formdata.append("adultCount", data.adultCount.toString());
    formdata.append("childrenCount", data.childCount.toString());
    formdata.append("infantCount", data.infantCount.toString());
    formdata.append("type", data.type);

    data.facilities.forEach((facility, index) => formdata.append(`facilities[${index}]`, facility));
    Array.from(data.imageFiles).forEach((image) => formdata.append("imageFiles", image));
    
    props.onSave(formdata);
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
          <Button 
            type="submit"
            disabled={props.isPending}
          >
            {props.isPending ? <Icons.spinner className="h-5 w-5 animate-spin" /> : "Submit"}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default ManageHotelForm