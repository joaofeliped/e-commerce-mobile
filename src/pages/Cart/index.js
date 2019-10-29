import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { bindActionCreators } from 'redux';

import { useSelector, useDispatch } from 'react-redux';

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

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const cartSize = useSelector(state => state.cart.length);

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((total, product) => {
        return total + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function removeProduct(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  function finishShopping() {
    dispatch(CartActions.finishShoppingRequest());
  }

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
                  <ProductControlButton onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      color={colors.primary}
                      size={20}
                    />
                  </ProductControlButton>
                  <ProductAmount value={String(product.amount)} />
                  <ProductControlButton onPress={() => increment(product)}>
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

            <FinishShopping onPress={() => finishShopping()}>
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
