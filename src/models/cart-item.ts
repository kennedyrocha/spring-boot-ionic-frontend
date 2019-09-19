import { produtoDTO } from "./produto.dto";

export interface CartItem {
    quantidade: number,
    produto: produtoDTO
}