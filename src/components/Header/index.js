import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { connect } from 'react-redux';

import {
  Wrapper,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
  LogoButton,
} from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Wrapper>
      <Container>
        <LogoButton onPress={() => navigation.navigate('Home')}>
          <Logo />
        </LogoButton>

        <BasketContainer onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
