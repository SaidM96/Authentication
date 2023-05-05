import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import * as bcrypt from 'bcrypt'
import { CommentEntity } from "./comment.entity";
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('uuid')
    id:number;

    @Column({unique: true, nullable: false})
    name: string;

    @Column({unique: true, nullable: false})
    email: string;

    @Column({nullable:false})
    password: string;
    

    @OneToMany((type) => CommentEntity, (comment) => comment.user)
    comments:CommentEntity[];

    @BeforeInsert()
    async hashPassword(){
        this.id = uuidv4();
        this.password = await bcrypt.hash(this.password, 10);
    }

}