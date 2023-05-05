import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommentEntity } from "./comment.entity";

@Entity()
export class TopicEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    descriptionail: string;

    @OneToMany((type) => CommentEntity, (comment) => comment.topic)
    comments:CommentEntity[];
}