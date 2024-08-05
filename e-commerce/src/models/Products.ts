export interface Product {
   id: string;
   productName: string
   productDescription: string
   productPrice: number
   productQuantity: number
   productCategory: ProductCategory
   productRating: number
   productImage: string
   stock: number
   createdDate: string
   updatedDate: string
   available: boolean
   onSale: boolean
 }
 
 export interface ProductCategory {
   id: string
   categoryName: string
   products: Product[]
 }