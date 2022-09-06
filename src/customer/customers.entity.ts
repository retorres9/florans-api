import { BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'
export class Customers extends BaseEntity {
    @PrimaryGeneratedColumn()
    cst_id: number;

    @Column()
    cst_firstName: string;

    @Column()
    cst_lastName: string;

    @Column()
    cst_email: string;

    @Column()
    cst_phone: string;

    @Column()
    cst_state: string;

    @Column()
    cst_password: string;

    @Column()
    cst_tempPass: string;
}