import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';
import {
  Container,
  CartProducts,
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

export default function Cart() {
  return (
    <Container>
      <CartProducts>
        <ProductInfo>
          <ProductImage
            source={{
              uri:
                'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
            }}
          />

          <ProductDetails>
            <ProductTitle>Tênis de caminhada</ProductTitle>
            <ProductPrice>R$129,90</ProductPrice>
          </ProductDetails>

          <ProductDelete>
            <Icon name="delete-forever" color={colors.primary} size={24} />
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
            <Icon name="add-circle-outline" color={colors.primary} size={20} />
          </ProductControlButton>

          <ProductSubtotal>R$129,90</ProductSubtotal>
        </ProductControls>

        <TotalContainer>
          <TotalText>TOTAL</TotalText>
          <TotalPrice>R$129,90</TotalPrice>
        </TotalContainer>

        <FinishShopping>
          <FinishShoppingText>Finalizar Pedido</FinishShoppingText>
        </FinishShopping>
      </CartProducts>
    </Container>
  );
}
