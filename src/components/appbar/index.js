import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBarDesktop from "./appbarDesktop";
import AppBarMobile from "./appbarMobile";

export default function Appbar() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            { matches ? <AppBarMobile /> : <AppBarDesktop /> }
        </>
    );
}