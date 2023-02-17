import AppDataSource from "@/config/data-source";
import Place from "@/entities/Place";
import { infoDto } from "@/dto/placeInfoDto";

export const getPlaceInfo = async function (placeId: number): Promise<infoDto> {

  const getPlaceInfoResult: infoDto = await AppDataSource.getRepository(Place)
    .createQueryBuilder('p')
    .select(['p.point, p.imageUrl'])
    .where('p.placeId = :placeId', { placeId })
    .getRawOne();
  console.log(getPlaceInfoResult);

  return getPlaceInfoResult;

}