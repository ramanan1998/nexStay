import { signOutUser } from "@/apis/api-client"
import { useAppContext } from "@/contexts/AppContext"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Icons } from "@/assets/icons";

function SignoutButton() {

  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: signOutUser,
    onSuccess: async (response) => {
        await queryClient.invalidateQueries({
            queryKey: [ "validateToken" ]
        });
        navigate("/");
        return showToast({
            type: "SUCCESS",
            title: "Success",
            message: response.message
        })
    },
    onError: (error) => {
        return showToast({
            type: "ERROR",
            title: "Uh oh! Sign Out Failed",
            message: error.message
        })
    }
  })
  return (
    <Button onClick={() => mutate()} variant="secondary">
      {isPending ? <Icons.spinner/> : "Sign Out"}
    </Button>
  )
}

export default SignoutButton