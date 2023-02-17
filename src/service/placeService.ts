// import AppDataSource from "@/config/data-source";
// import Place from "@/entities/Place";
import { infoDto } from "@/dto/placeInfoDto";
import { db } from "@/config/connection";
import logger from "@/config/winston";
import { placeDto } from "@/dto/placeDto";

export const getPlaceInfo = async function (placeId: number): Promise<infoDto> {

  // const getPlaceInfoResult: infoDto = await AppDataSource.getRepository(Place)
  //   .createQueryBuilder('p')
  //   .select(['p.point, p.imageUrl'])
  //   .where('p.placeId = :placeId', { placeId })
  //   .getRawOne();
  // console.log(getPlaceInfoResult);
  try {
    const query: string = 'select point, imageUrl from Place where placeId = ?;'

    return db
      .execute(query, [placeId])
      .then((result: any) => result[0][0]);
  } catch (err) {
    await logger.error(`App - getPlaceInfo Service error\n: ${err}`);
  }
}

export const getPlaces = async function (): Promise<placeDto> {
  try {
    const query: string =
      'select placeId, imageUrl, mainAddressHint, subAddressHint, point, uuid from Place P where placeId not in (select placeId from Auth where userId = ?);';
    return db
      .execute(query, [1]) // 회원가입 미구현으로 인해 1번 유저로 고정
      .then((result: any) => result[0]);
  } catch (err) {
    await logger.error(`App - getPlaces Service error\n: ${err}`);
  }
}