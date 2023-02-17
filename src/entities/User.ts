import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Auth from "@/entities/Auth";

@Index("User_email_uindex", ["email"], { unique: true })
@Index("User_userId_uindex", ["userId"], { unique: true })
@Entity("User", { schema: "channeltalk" })
class User {
  @PrimaryGeneratedColumn({ type: "int", name: "userId" })
  userId: number;

  @Column("varchar", { name: "email", unique: true, length: 100 })
  email: string;

  @Column("text", { name: "password" })
  password: string;

  @Column("varchar", { name: "nickname", length: 50 })
  nickname: string;

  @OneToMany(() => Auth, (auth) => auth.user)
  auths: Auth[];
}


export default User;