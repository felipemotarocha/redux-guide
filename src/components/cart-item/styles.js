import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  p {
    color: #222222;
  }

  svg {
    color: #222222;
  }
`;

export const CartItemImage = styled.div`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 250px;
  width: 170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  border-radius: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  flex: 1;

  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-weight: 500;
  }
`;

export const CartItemQuantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  p {
    margin-left: 10px;
    margin-right: 10px;
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const RemoveButton = styled.div`
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
`;
