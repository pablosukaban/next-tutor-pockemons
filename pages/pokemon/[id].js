import { useRouter } from "next/router"

export default function Details(){
  const {query: {id}} = useRouter()
  return (
    <h1>Hi {id}</h1>
  )
}
