import { getHotelById } from "@/apis/api-client";
import ManageHotelForm from "@/forms/manage-hotel-form/ManageHotelForm"
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function EditHotel() {

  const { hotelId } = useParams();

  const { data } = useQuery({
    queryKey: [ "getHotelById" ],
    queryFn: () => getHotelById(hotelId as string),
    enabled: !!hotelId
  });

  console.log(data)

  return (
    <ManageHotelForm
      defaultData={data} 
      onSave={() => {}}
      isPending={false}
    />
  )
}

export default EditHotel