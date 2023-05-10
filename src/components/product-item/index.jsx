import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from 'react-redux';

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { addProductToCart } from "../../redux/cart/actions";

// Utilities

const ProductItem = ({ product }) => {

  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product));
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick} >
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
