import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Product, ProductImage, ProductTitle,
  ProductPrice, AddButton, AddButtonText, ProductAmount, ProductAmountText } from './styles';

import api from '../../services/api';

export default class Home extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  renderProduct = ({ item }) => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{item.price}</ProductPrice>
        <AddButton>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={24}/>
            <ProductAmountText>0</ProductAmountText>
          </ProductAmount>
          <AddButtonText>Adicionar</AddButtonText>
        </AddButton>
      </Product>
    )
  }

  render() {
    const { products } = this.state;

    return (
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderProduct}
        />
      </Container>
    );
  }
}


