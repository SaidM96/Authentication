import { CommentEntity } from "src/Entities/comment.entity";
import { TopicEntity } from "src/Entities/topic.entity";
import { UserEntity } from "src/Entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export const config: PostgresConnectionOptions = {
    type: "postgres",

    database: "testdb",

    host: "localhost",

    port: 5432,

    username: "postgres",

    password: "said123",

    entities: [UserEntity, TopicEntity, CommentEntity],

    synchronize: true,
}