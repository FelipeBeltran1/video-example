import { 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    Column, 
    OneToOne,
    JoinColumn
} from "typeorm"

import { States } from "./../enums/states.enum"
import { UserRoles } from "./user-roles.entity"
import { User } from './user.entity'

@Entity('person', {schema: 'users'})
export class Person {
    
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({ type: 'character varying', nullable: false })
    firstName: string

    @Column({ type: 'character varying', nullable: false, unique: true })
    lastName: string

    @Column({ type: 'character varying', nullable: false })
    age: number

    @Column({ type: 'character varying', nullable: false })
    gender: string

    @Column({ type: 'enum', enum: States, default: States.ACTIVE })
    state: States

    @CreateDateColumn({ type: 'timestamp', name: 'create_ad' })
    createAd: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'update_ad' })
    updateAd: Date
    
    @OneToOne(
        () => User,
        user => user.person,
    )
    user: User
}