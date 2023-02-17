// import AppDataSource from "@/config/data-source";
// import Place from "@/entities/Place";
import { infoDto } from "@/dto/placeInfoDto";
import { db } from "@/config/connection";
import logger from "@/config/winston";
import { placeDto } from "@/dto/placeDto";
import { userDto } from "@/dto/userDto";

export const getMyInfo = async function (userId: number): Promise<userDto> {
  try {
    const query: string =
      'select nickname, profileImageUrl, sum(final_point) as point_sum from User inner join Auth A on User.userId = A.userId where User.userId = ?;'

    return db
      .execute(query, [userId])
      .then((result: any) => result[0]);
  } catch (err) {
    await logger.error(`App - getMyInfo Service error\n: ${err}`);
  }
}

export const savePoint = async function (placeId: number, final_point: number): Promise<userDto> {
  try {
    const query: string =
      'INSERT INTO Auth(userId, placeId, final_point) VALUES (1, ?, ?);' // 회원가입 미구현으로 1번 유저 고정

    return db
      .execute(query, [placeId, final_point])
      .then((result: any) => result[0]);
  } catch (err) {
    await logger.error(`App - getMyInfo Service error\n: ${err}`);
  }
}