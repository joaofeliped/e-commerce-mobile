import { Alert } from 'react-native';

import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import NavigationService from '../../../services/navigation';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import {
  addToCartSuccess,
  updateAmountSuccess,
  finishShoppingSuccess,
} from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Estoque esgotado');
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };
    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) {
    return;
  }

  const stock = yield call(api.get, `stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Estoque esgotado');
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

function* finishShopping() {
  yield put(finishShoppingSuccess());

  Alert.alert('Pedido finalizado com sucesso');
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
  takeLatest('@cart/FINISH_SHOPPING_REQUEST', finishShopping),
]);
