import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoButton,
} from './styles';

export default function Header({ navigation }) {
  return (
    <Wrapper>
      <Container>
        <LogoButton onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoButton>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>0</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
