import type { ICart } from '~/types/ICart.interface';

const cart = useState<ICart[]>('cartState', () => [])

export function useCart() {
  function addItem(selectedItem: ICart)
  {
    cart.value.push(selectedItem)
  }

  function countItem()
  {
    return cart.value.length
  }

  return {
    addItem,
    countItem,
  };
}


