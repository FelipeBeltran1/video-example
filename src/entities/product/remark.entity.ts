import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { Chapter } from './chapter.entity'

@Entity('remark',{schema: 'product'})
export class Remark {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @CreateDateColumn({ type: 'timestamp', name: 'create_ad' })
    createAd: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'update_ad' })
    updateAd: Date

    @ManyToOne(
        () => Chapter,
        chapter => chapter.remark
    )
    @JoinColumn({ name: 'fk_chapter' })
    chapter: Chapter

}