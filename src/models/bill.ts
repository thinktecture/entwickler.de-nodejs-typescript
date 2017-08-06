import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Bill {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public title: string;

    @Column()
    public sum: number;
}
