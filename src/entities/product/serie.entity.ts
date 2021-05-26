import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn, 
    ManyToMany, 
    JoinTable,
    OneToOne,
    JoinColumn,
    OneToMany
} from "typeorm";

import { Category } from './category.entity';
import { Chapter } from './chapter.entity';
import { Season } from './season.entity'

@Entity('serie',{schema: 'product'})
export class Serie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    director: string;

    @Column()
    actors: string;

    @CreateDateColumn({ type: 'timestamp', name: 'create_ad' })
    createAd: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'update_ad' })
    updateAd: Date

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];

    @OneToMany(
        () => Season,
        season => season.serie,
    )
    season: Season[]


}