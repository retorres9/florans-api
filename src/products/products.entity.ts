import { BaseEntity, Column, PrimaryColumn } from 'typeorm'

export class Products extends BaseEntity {
    @PrimaryColumn()
    prd_id: string;

    @Column()
    prd_name: string;

    @Column({ type: 'money' })
    prd_price: number;

    @Column()
    prd_description: string

    @Column()
    prd_discount: number;

    @Column()
    prd_state: string;
}