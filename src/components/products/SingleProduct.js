import { Favorite as FavoriteIcon, FitScreen as FitScreenIcon, Share as ShareIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";
import useDialogModal from "../../hooks/useDialogModal";
import { Product, ProductActionButton, ProductAddToCart, ProductFavButton, ProductImage, ProductMetaWrapper } from "../../styles/products";
import ProductDetail from "../productdetail";
import ProductMeta from "./ProductMeta";


export default function SingleProduct({product, matches}) {
    
    const [ProductDetailDialog, showProductDetailDialog, closeProductDefailtDialog] = useDialogModal(ProductDetail)

    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductMetaWrapper>
                    <Stack direction="row">
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton onClick={showProductDetailDialog}>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                    </Stack>
                </ProductMetaWrapper>
            </Product>
            <ProductAddToCart variant="contained">Add To Cart</ProductAddToCart>
            <ProductDetailDialog product={product} />
        </>
    );
}