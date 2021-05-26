import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    OneToMany,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { Movie } from './movie.entity'
import { Remark } from './remark.entity'
import { Season } from './season.entity'

@Entity('chapter',{schema: 'product'})
export class Chapter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    duration: number;

    @CreateDateColumn({ type: 'timestamp', name: 'create_ad' })
    createAd: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'update_ad' })
    updateAd: Date

    @OneToOne(
        () => Movie,
        movie => movie.chapter,
    )
    movie: Movie

    @OneToMany(
        () => Remark,
        remark => remark.chapter,
    )
    remark: Remark[]

}