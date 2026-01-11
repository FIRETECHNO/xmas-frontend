interface IProductVariant {
  model: string // модель одежды
  color: string
  size: string // размер одежды
}

export interface IProduct {
  name: string
  category: string
  images: string[]
  variants: IProductVariant[]
  //status : string - сначала надо и в api, и на бэке переписать под новый интерфейс, чтобы не сломалось всё
}

export interface IProductDb extends IProduct {
  _id: string
}