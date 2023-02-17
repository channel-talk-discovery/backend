// import AppDataSource from "@/config/data-source";
// import Place from "@/entities/Place";
import { infoDto } from "@/dto/placeInfoDto";
import { db } from "@/config/connection";
import getPlaceInfoDao from "@/util/placeDao";
import logger from "@/config/winston";

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