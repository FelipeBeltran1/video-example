import { 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    Column, 
    OneToMany,
    OneToOne,
    JoinColumn
} from "typeorm"

import { States } from "./../enums/states.enum"
import { UserRoles } from "./user-roles.entity"
import { Person } from './person.entity'

@Entity('users',{schema: 'users'})
export class User {
    
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column({ type: 'character varying', nullable: false })
    username: string

    @Column({ type: 'character varying', nullable: false, unique: true })
    email: string

    @Column({ type: 'character varying', nullable: false })
    password: string

    @Column({ type: 'enum', enum: States, default: States.ACTIVE })
    state: States

    @CreateDateColumn({ type: 'timestamp', name: 'create_ad' })
    createAd: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'update_ad' })
    updateAd: Date
    
    @OneToMany(
        () => UserRoles,
        userRoles => userRoles.user,
    )
    userRoles: UserRoles[]

    @OneToOne(
        () => Person,
        person => person.user
    )
    @JoinColumn({ name: 'fk_person' })
    person: Person
}