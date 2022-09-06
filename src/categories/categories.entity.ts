import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'
export class Categories extends BaseEntity {
    @PrimaryGeneratedColumn()
    ctg_id: number;

    @Column()
    ctg_name: string;
}