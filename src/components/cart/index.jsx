// Styles
import * as Styles from "./cart.styles";

const Cart = ({ isVisible }) => {
  const handleEscapeAreaClick = () => {};

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
