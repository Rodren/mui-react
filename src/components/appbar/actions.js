import { Favorite, Person, ShoppingCart } from "@mui/icons-material";
import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import { ActionIconsContainerMobile, MyList } from "../../styles/appbar";
import { Colors } from "../../styles/theme";

export default function Actions({ ActionContainer }) {
    const ListItemButtonSX = { justifyContent: "center" }; 
    const mobileColorIcon = ActionContainer === ActionIconsContainerMobile ? Colors.secondary : null;
    const ListItemIconSX = { display: 'flex', justifyContent: 'center', color: mobileColorIcon };

    return (
        <ActionContainer>
            <MyList type="row">
                <ListItemButton sx={ListItemButtonSX}>
                    <ListItemIcon sx={ListItemIconSX}>
                        <ShoppingCart/>
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={ListItemButtonSX}>
                    <ListItemIcon sx={ListItemIconSX}>
                        <Person />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={ListItemButtonSX}>
                    <ListItemIcon sx={ListItemIconSX}>
                        <Favorite />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
            </MyList>
        </ActionContainer>
    )
}