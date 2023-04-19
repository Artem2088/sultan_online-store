export default interface ICard {
    url: string,
    name: string,
    weigth?: number,
    size?: number,
    barcode: number,
    manufacturer: string,
    brend: string,
    description: string,
    price: number,
    id: number,
    careBody?: boolean,
    careHand?: boolean,
}
