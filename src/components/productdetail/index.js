import { Button, Dialog, DialogContent, DialogTitle, IconButton, Slide, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { Product, ProductImage } from "../../styles/products";
import IncDec from "../ui";
import { Facebook as FacebookIcon, Instagram as InstagramIcon, Twitter as TwitterIcon, Favorite as FavoriteIcon } from "@mui/icons-material";

function SlideTransaction(props) {
    return <Slide direction {...props} />
}

const ProductDetailWrapper = styled(Box)(({theme}) => ({
    display: 'flex', 
    padding: theme.spacing(4)
}))

const ProductDetailInfoWrapper = styled(Box)(({theme}) => ({
    display: 'flex', 
    flexDirection:'column', 
    maxWidth: 500, 
    lineHeight: 1.5
}))

export default function ProductDetail({open, onClose, product}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('nd'));

    return (
        <Dialog TransitionComponent={SlideTransaction} variant="permanent" open={open} fullScreen>
            <DialogTitle sx={{ background: Colors.secondary }}>
                <Box display={'flex'} alignItems="center" justifyContent={"space-between"} 
                    sx={{ 
                        fontFamily: '"Montez", "cursive"', 
                        color: Colors.white, 
                        fontSize: '1.5em', 
                        [theme.breakpoints.up('md')]: {
                            fontSize: '2em'
                        }
                    }}>
                    {product.name}
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <ProductDetailWrapper flexDirection={ matches ? 'column' : 'row'}>
                    <Product sx={{ mr: 4}}>
                        <ProductImage src={product.image} />
                    </Product>
                    <ProductDetailInfoWrapper>
                        <Typography variant="subtitle1">SKU 123</Typography>
                        <Typography variant="subtitle1">Availability: 5 in stock</Typography>
                        <Typography sx={{lineHeight: 2}} variant="h4">{product.name}</Typography>
                        <Typography variant="body">
                            {product.description}
                            {product.description}
                            {product.description}
                        </Typography>
                        <Box sx={{mt:4}} display="flex" alignItems={'center'} justifyContent="space-between"> 
                            <IncDec />
                            <Button variant="contained">Add to Cart</Button>
                        </Box>
                        <Box display='flex' alignItems={'center'} sx={{ mt: 4, color: Colors.light}}>
                            <FavoriteIcon sx={{ mr: 2}} />
                            Add to wishlist
                        </Box> 
                        <Box sx={{mt: 4, color: Colors.light}}>
                            <FacebookIcon />
                            <TwitterIcon sx={{ pl: theme.spacing(4) }}/>
                            <InstagramIcon sx={{ pl: theme.spacing(4) }} />
                        </Box>
                    </ProductDetailInfoWrapper>
                </ProductDetailWrapper>
            </DialogContent>
        </Dialog>
    )
}