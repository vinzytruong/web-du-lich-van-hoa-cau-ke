import { useRouter } from "next/router"
import DetailPage from "./Detail"

const GiftCardsPage = () => {
    const router = useRouter()
    const { id } = router.query


    return < DetailPage id={id} />
}

export default GiftCardsPage