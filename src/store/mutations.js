import * as Types from './mutations-type';

const mutations = {
  [Types.ADD_CART](state, book) {
    //book是添加到一本书，如果有这本书，累加的是数量，如果没有，数量为1，直接放到carlist中
    let product = state.cartList.find(item => item.bookId === book.bookId);
    if (product) {
      product.bookCount += 1;
      //还要更新掉原数组，否则不会刷新
      state.cartList = [...state.cartList];
    }
    else {
      book.bookCount = 1;
      //将原有数据改变，或者替换
      state.cartList.push(book);
      //或者可以这样写
      //state.cartList = [...state.cartList, book];
    }
  }
};

export default mutations;
