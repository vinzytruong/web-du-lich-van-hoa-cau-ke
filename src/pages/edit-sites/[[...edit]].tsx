import { useRouter } from "next/router"
import EditPage from "./edit-sites"


const GiftCardsPage = () => {
    const router = useRouter()
    const { id } = router.query


    return <EditPage id={id} />
}

export default GiftCardsPage