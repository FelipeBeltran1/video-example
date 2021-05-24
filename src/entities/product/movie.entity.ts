import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn, 
    ManyToMany, 
    JoinTable,
    OneToOne,
    JoinColumn
} from "typeorm";

import { Category } from './category.entity';
import { Chapter } from './chapter.entity';

@Entity('movie',{schema: 'product'})
export class Movie {

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

    @OneToOne(
        () => Chapter,
        chapter => chapter.movie
    )
    @JoinColumn({ name: 'fk_chapter' })
    chapter: Chapter

}