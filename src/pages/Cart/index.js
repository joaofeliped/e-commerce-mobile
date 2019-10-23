import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';

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
  EmptyCart,
  EmptyCartText,
  EmptyCartIcon,
} from './styles';

function Cart({ cart, cartSize, removeFromCart, updateAmount, total }) {
  decrement = product => {
    updateAmount(product.id, product.amount - 1);
  };

  increment = product => {
    updateAmount(product.id, product.amount + 1);
  };

  removeProduct = id => {
    removeFromCart(id);
  };

  return (
    <Container>
      <>
        {cartSize > 0 ? (
          <CartProducts>
            {cart.map(product => (
              <Product key={product.id}>
                <ProductInfo>
                  <ProductImage source={{ uri: product.image }} />

                  <ProductDetails>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{product.priceFormatted}</ProductPrice>
                  </ProductDetails>

                  <ProductDelete onPress={() => removeProduct(product.id)}>
                    <Icon
                      name="delete-forever"
                      color={colors.primary}
                      size={24}
                    />
                  </ProductDelete>
                </ProductInfo>

                <ProductControls>
                  <ProductControlButton onPress={() => this.decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      color={colors.primary}
                      size={20}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => this.increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      color={colors.primary}
                      size={20}
                    />
                  </ProductControlButton>

                  <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                </ProductControls>
              </Product>
            ))}

            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalPrice>{total}</TotalPrice>
            </TotalContainer>

            <FinishShopping>
              <FinishShoppingText>Finalizar Pedido</FinishShoppingText>
            </FinishShopping>
          </CartProducts>
        ) : (
          <EmptyCart>
            <EmptyCartIcon />
            <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
          </EmptyCart>
        )}
      </>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  cartSize: state.cart.length,
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
