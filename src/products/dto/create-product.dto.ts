export interface CreateProductDto {
    prd_name: string;

    prd_price: number;

    prd_description: string;

    prd_discount?: string;

    prd_state: string;
}