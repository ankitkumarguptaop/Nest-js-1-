// import { Injectable } from "@nestjs/common";
// import { Event } from "src/domain/common/event";
// import { User } from "src/user/entities/user.entity";
// import { DataSource, Repository } from "typeorm";

// @Injectable()
// export class UserRepository extends Repository<User> {
//   constructor(private dataSource: DataSource) {
//     super(User, dataSource.createEntityManager());
//   }

//   createUser = (outbox_message: Event): UserRepository => {
//     return {
//       message_id: outbox_message.getId(),
//       type: outbox_message.getType(),
//       properties: outbox_message.getProperties(),
//       headers: outbox_message.getHeaders(),
//       body: outbox_message.getPayload(),
//     };
//   }
//   async storeOutboxMessage(outbox_message: Event) {
//     return await this.save(this.createOutboxPayloadFromEvent(outbox_message));
//   }

// }