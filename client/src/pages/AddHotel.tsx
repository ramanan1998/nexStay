import { createNewHotel } from "@/apis/api-client"
import { useAppContext } from "@/contexts/AppContext"
import ManageHotelForm from "@/forms/manage-hotel-form/ManageHotelForm"
import { useMutation } from "@tanstack/react-query"


function AddHotel() {

  const { showToast } = useAppContext();

  const { mutate, isPending } = useMutation({
    mutationKey: [ "createNewHotel" ],
    mutationFn: createNewHotel,
    onSuccess: () => {
      showToast({ type: "SUCCESS", title: "Request Success", message: "Hotel created successfully" })
    },
    onError: () => {
      showToast({ type: "ERROR", title: "Request Failed", message: "We received an error while creating your hotel, try after sometimes" })
    }
  });

  const handleCreateNewHotel = (formdata: FormData) => {
    mutate(formdata);
  }

  return (
    <ManageHotelForm 
      onSave={handleCreateNewHotel}
      isPending={isPending}
    />
  )
}

export default AddHotel