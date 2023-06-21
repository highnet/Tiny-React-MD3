import BottomAppBar from "../../App Bars/Bottom App Bar/BottomAppBar";
import { openLinkInNewTab } from "../../Gizmos/Redirection";
import { scrollToSection } from "../../Gizmos/Scrolling";

const TRMD3BotBar: React.FC = () => {
    const handleScrollToTop = (): void => {
		scrollToSection("tourguide-section", -60);
	};

    return(
    <BottomAppBar
        icons={[
            {
                name: "code",
                label: "Code",
                onClick: () =>
                    openLinkInNewTab(
                        "https://github.com/highnet/Tiny-React-MD3/tree/master/src"
                    ),
            },
            {
                name: "menu_book",
                label: "Docs",
                onClick: () =>
                    openLinkInNewTab(
                        "https://github.com/highnet/Tiny-React-MD3/tree/master/src#-tiny-react-md-3-documentation"
                    ),
            },
            {
                name: "bookmark",
                label: "Readme",
                onClick: () =>
                    openLinkInNewTab(
                        "https://github.com/highnet/Tiny-React-MD3#----trmd3-tiny-react-material-design-3-"
                    ),
            },
            { name: "home", label: "Home", onClick: handleScrollToTop },
        ]}
    />);
}

export default TRMD3BotBar;