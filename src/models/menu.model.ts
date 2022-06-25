export interface Menu {
    items: Array<Item>
}
export interface Item {
    name: string,
    category: Category,
    size: Size,
    price: number,
    cost: number,
    stocks: number
}

export type Category = {
    name: string
}

export type Size = {
    name: string
}