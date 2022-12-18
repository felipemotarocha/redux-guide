import * as Styles from "./styles";

function Header() {
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div>Login</div>
        <div>Carrinho</div>
      </Styles.Buttons>
    </Styles.Container>
  );
}

export default Header;
