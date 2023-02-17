import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Place } from "./Place";
import { User } from "./User";

@Index("Auth_authId_uindex", ["authId"], { unique: true })
@Index("Auth_Place_placeId_fk", ["placeId"], {})
@Index("Auth_User_userId_fk", ["userId"], {})
@Entity("Auth", { schema: "channeltalk" })
export class Auth {
  @PrimaryGeneratedColumn({ type: "int", name: "authId" })
  authId: number;

  @Column("int", { name: "userId" })
  userId: number;

  @Column("int", { name: "placeId" })
  placeId: number;

  @ManyToOne(() => Place, (place) => place.auths, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "placeId", referencedColumnName: "placeId" }])
  place: Place;

  @ManyToOne(() => User, (user) => user.auths, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "userId", referencedColumnName: "userId" }])
  user: User;
}
