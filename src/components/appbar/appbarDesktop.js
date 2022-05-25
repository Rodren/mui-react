import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ActionIconsContainerDesktop, AppbarContainer, AppbarHeader, MyList } from "../../styles/appbar";
import { Search as SearchIcon } from "@mui/icons-material";
import Actions from "./actions";
import { useUIContext } from "../context/ui";

export default function AppBarDesktop({matches}) {
    const { setShowSearchBox } = useUIContext();

    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" /> 
                <ListItemText primary="Categories" /> 
                <ListItemText primary="Products" /> 
                <ListItemText primary="Contact Us" /> 
                <ListItemButton>
                    <ListItemIcon onClick={() => setShowSearchBox(true)}>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions ActionContainer={ ActionIconsContainerDesktop } />
        </AppbarContainer>
    );
}