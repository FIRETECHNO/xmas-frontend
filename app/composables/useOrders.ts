import OrderApi from '~/api/OrderApi'
import type { IOrder, IOrderDb } from '~/types/IOrder.interface'

export function useOrders() {
  const orderState = useState<IOrderDb | null>('orderState', () => null)
  const router = useRouter()

  async function createOrder(payload: IOrder) {
    try {
      const res = await OrderApi.create(payload)
      if (res) orderState.value = res
      return res
    } catch {
      return false
    }
  }

  async function editOrder(orderId: string, payload: IOrder) {
    try {
      const res = await OrderApi.edit(orderId, payload)
      if (res) orderState.value = res
      return res
    } catch {
      return false
    }
  }

  async function deleteOrder(orderId: string) {
    try {
      const res = await OrderApi.delete(orderId)
      if (res) orderState.value = null
      return res
    } catch {
      return false
    }
  }

  return {
    orderState,
    createOrder,
    editOrder,
    deleteOrder,
    router,
  }
}
