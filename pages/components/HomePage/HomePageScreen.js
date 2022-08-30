import BannerScreen from "../Banner/BannerScreen";
import HomePageLocationBlock from "../Blocks/HomePageLocationBlock";
import FiltersHomePageScreen from "../FiltersHomePageScreen/FiltersHomePageScreen";
import NavBarScreen from "../NavBar/Navbar";

export default function HomePageScreen() {
    return (
        <>
            <NavBarScreen />
            <BannerScreen />
            <div
            style={{padding:'60px'}}
            >
                <FiltersHomePageScreen />
                <HomePageLocationBlock />
            </div>

        </>
    )
}