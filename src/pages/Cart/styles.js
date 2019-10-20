import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};
  padding: 10px;
  flex: 1;
`;

export const CartProducts = styled.View`
  background: #fff;

  margin: 10px;
  padding: 15px;
  border-radius: 4px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  height: 80px;
  width: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text``;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 52px;
`;

export const ProductSubtotal = styled.Text`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  text-align: right;
`;

export const TotalContainer = styled.View`
  align-items: center;
  padding: 10px;
`;

export const TotalText = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const TotalPrice = styled.Text`
  margin-top: 5px;
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
`;

export const FinishShopping = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  padding: 12px;
`;

export const FinishShoppingText = styled.Text`
  color: #fff;
  align-self: center;
  font-weight: bold;
  font-size: 14px;
`;
