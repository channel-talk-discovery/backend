import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Auth } from "./Auth";

@Index("Place_placeId_uindex", ["placeId"], { unique: true })
@Entity("Place", { schema: "channeltalk" })
export class Place {
  @PrimaryGeneratedColumn({ type: "int", name: "placeId" })
  placeId: number;

  @Column("text", { name: "imageUrl" })
  imageUrl: string;

  @Column("varchar", { name: "mainAddressHint", length: 100 })
  mainAddressHint: string;

  @Column("varchar", { name: "subAddressHint", nullable: true, length: 100 })
  subAddressHint: string | null;

  @Column("int", { name: "point" })
  point: number;

  @OneToMany(() => Auth, (auth) => auth.place)
  auths: Auth[];
}
