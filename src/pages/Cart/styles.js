import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.View`
  background: ${colors.dark};

  flex: 1;
`;

export const CartProducts = styled.View`
  background: #fff;

  margin: 10px;
  padding: 15px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  height: 120px;
  width: 120px;
  align-self: flex-start;
`;

export const ProductTitle = styled.Text``;
export const ProductPrice = styled.Text``;
export const ProductControls = styled.View``;
export const ProductControlButton = styled.TouchableOpacity``;
export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})``;

export const TotalText = styled.Text``;
export const TotalPrice = styled.Text``;

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
