import type { IProduct, IProductDb} from '~/types/IProduct.interface'

export default {
    async create(data: IProduct): Promise<IProductDb> {
        return useNuxtApp().$apiFetch('/product/create', {
            method: 'POST',
            body: {product: data},
        })
    },
    async delete(productId: string): Promise<IProductDb> {
        return useNuxtApp().$apiFetch('/product/delete', {
            method: 'POST',
            body: { _id: productId },
        })
    },
    async edit(productId: string, data: IProduct): Promise<IProductDb> {
        return useNuxtApp().$apiFetch('/product/edit',{
            method: 'POST',
            body: { _id: productId, updates: data }
        })
    },
    async getAll(): Promise<IProductDb[]> {
        return useNuxtApp().$apiFetch('/product/get-all',{
            method: 'POST',
        })
    }
}