import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { TopicEntity } from "./topic.entity";

@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @ManyToOne((type) => UserEntity, (user) => user.comments)
    user: UserEntity;

    @ManyToOne(type => TopicEntity, (topic) => topic.comments)
    topic: TopicEntity;
}