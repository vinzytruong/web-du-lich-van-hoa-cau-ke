import { HomeFeature, HomeHero, HomeHistorySites, HomePopularSites, HomeSiteSeeingSites } from "@/components/home";
import HomeOCOP from "@/components/home/ocop-product";

const HomePage = () => {
    return (
        <>
            <HomeHero />
            <HomePopularSites />
            <HomeFeature />
            <HomeHistorySites />
            <HomeSiteSeeingSites />
            <HomeOCOP />
        </>
    )
}
export default HomePage;