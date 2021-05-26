import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne
} from "typeorm";

import { Serie } from './serie.entity';
import { Chapter } from './chapter.entity';

@Entity('season',{schema: 'product'})
export class Season {

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

    @OneToOne(
        () => Chapter,
        chapter => chapter.movie
    )
    @JoinColumn({ name: 'fk_chapter' })
    chapter: Chapter

    @ManyToOne(
        () => Serie,
        serie => serie.season
    )
    @JoinColumn({ name: 'fk_serie' })
    serie: Serie

}