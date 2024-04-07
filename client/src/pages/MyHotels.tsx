import { getAllHotels } from "@/apis/api-client";
import HoneyCombLoader from "@/components/loader/HoneyCombLoader";
import { useQuery } from "@tanstack/react-query"

function MyHotels() {

  const { isLoading, isError, isSuccess, error } = useQuery({
    queryKey: [ "getAllHotels" ],
    queryFn: getAllHotels,
  });

  let content;

  if(isLoading){
    content = <HoneyCombLoader/>
  }

  if(isError){
    content = <p className="font-bold text-red-500 text-center mt-32 text-2xl capitalize">{JSON.stringify(error)}</p>
  }

  if(isSuccess){
    content = (
        <h1>Heehaw</h1>
    )
  }

  return (
    <div>{content}</div>
  )
}

export default MyHotels