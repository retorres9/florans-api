import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Entity extends BaseEntity {
    @PrimaryGeneratedColumn()
    adm_id: number;

    @Column({ nullable: false })
    adm_username: string;

    @Column({ nullable: false })
    adm_password: string;

    @Column({ nullable: false })
    adm_email: string;

    @Column({ nullable: false })
    adm_role: string;

    @Column()
    adm_temp_pass: string;

    @Column({ type: 'smallint' })
    adm_state: number;
}