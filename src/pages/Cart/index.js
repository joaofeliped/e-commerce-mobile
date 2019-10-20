import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';

import colors from '../../styles/colors';
import {
  Container,
  CartProducts,
  Product,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  TotalText,
  TotalPrice,
  FinishShopping,
  FinishShoppingText,
  ProductInfo,
  ProductDetails,
  ProductDelete,
  ProductSubtotal,
  TotalContainer,
} from './styles';

function Cart({ cart }) {
  return (
    <Container>
      <>
        <CartProducts>
          {cart.map(product => (
            <Product key={product.id}>
              <ProductInfo>
                <ProductImage source={{ uri: product.image }} />

                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductDetails>

                <ProductDelete>
                  <Icon
                    name="delete-forever"
                    color={colors.primary}
                    size={24}
                  />
                </ProductDelete>
              </ProductInfo>

              <ProductControls>
                <ProductControlButton>
                  <Icon
                    name="remove-circle-outline"
                    color={colors.primary}
                    size={20}
                  />
                </ProductControlButton>
                <ProductAmount value="1" />
                <ProductControlButton>
                  <Icon
                    name="add-circle-outline"
                    color={colors.primary}
                    size={20}
                  />
                </ProductControlButton>

                <ProductSubtotal>{product.price}</ProductSubtotal>
              </ProductControls>
            </Product>
          ))}

          <TotalContainer>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>R$129,90</TotalPrice>
          </TotalContainer>

          <FinishShopping>
            <FinishShoppingText>Finalizar Pedido</FinishShoppingText>
          </FinishShopping>
        </CartProducts>
      </>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
