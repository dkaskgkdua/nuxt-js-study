import {fetchCartItems} from "~/api";
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'
export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems;
  }
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems();
    commit('setCartItems', data.map(item => ({
      ...item,
      imageUrl: `${item.imageUrl}?random=${Math.random()}`
    })))
  },
  /** 아래 함수는 SSR 시점에 실행되기 떄문에 스토어에 미리 데이터를 설정해 놓거나
   *  서버에서만 접근할 수 있는 데이터를 다룰 때 유용함.
   *  파라미터
   *  1. 스토어 컨텍스트
   *  2. 넉스트 컨텍스트트 => asyncData 메서드의 context
   *
   *  간단하게 어떤 곳이든 데이터를 미리 셋업해놓는곳
   *
   *  */
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS)
  // }
}
