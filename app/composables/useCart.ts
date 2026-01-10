import type { ICart } from '~/types/ICart.interface';

const cart = useState<ICart[]>('cartState', () => []);

export function useCart() {
  // функции корзины
}