

import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
       <BannerContainer>
            <BannerImage src="./images/banner/banner.jpg"/>
            <BannerContent>
                <Typography variant="h6">Huge Collections</Typography>
                <BannerTitle variant="h2">
                    New Bags
                </BannerTitle>
                <BannerDescription variant="subtitle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur commodi eum cupiditate id numquam iusto veritatis minus facilis repellat assumenda, voluptate temporibus at dolores adipisci autem, in accusantium! Molestias, sint?
                </BannerDescription>
                <BannerShopButton color="primary">Show Now</BannerShopButton>
            </BannerContent>
       </BannerContainer>
    );
}