import {Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ActionIconsContainerMobile, AppbarContainer, AppbarHeader } from "../../styles/appbar";
import { useUIContext } from "../context/ui";
import Actions from "./actions";

export default function AppBarMobile({matches}) {
    const { setDrawerOpen, setShowSearchBox } = useUIContext();


    return (
        <AppbarContainer>
            <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign={"center"} variant="h4">
                My Bags
            </AppbarHeader>
            <IconButton onClick={() => setShowSearchBox(true)}>
                <SearchIcon />
            </IconButton>
            <Actions ActionContainer={ ActionIconsContainerMobile } />
        </AppbarContainer>
    );
}