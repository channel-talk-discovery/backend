import { calculateRankingDto } from '@/dto/calculateRankingDto';
import { calculateImageSimilarityResultDto } from '@/dto/calculateImageSimilarityResultDto';
import { Range, Ranking, Weight, testUrl } from '@/common/constant';
import deepai from 'deepai';

deepai.setApiKey(process.env.DEEPAI_API_KEY);

async function calculateImageSimilarity(placeId: string, uploadImageUrl: string): Promise<calculateImageSimilarityResultDto> {

  // to-do : placeId로 가져오기
  // 임시 data
  const placeImageUrl: string = testUrl;
  const point: number = 1;

  let final_point = 0;

  const resp = await deepai.callStandardApi('image-similarity', {
    image1: placeImageUrl,
    image2: uploadImageUrl,
  });

  console.log(resp.output.distance);

  const calculationResult: calculateRankingDto = await checkRanking(resp.output.distance, 1.0, true);
  const { pointWeight, success, result } = calculationResult;

  if (success) {
    // Ranking에 따라 적립될 포인트
    final_point = Math.round(point * pointWeight);
    // to-do: 1번 사용자에게 포인트 적립
    // ....
  }
  const response: calculateImageSimilarityResultDto = { success, result, final_point };
  return response;
}

async function checkRanking(similarity: number, pointWeight: number, success: boolean): Promise<calculateRankingDto> {
  let result = Ranking.A;
  if (similarity <= Range.A_end) {
    pointWeight = Weight.A;
  }
  else if (Range.A_end < similarity && similarity <= Range.B_end) {
    pointWeight = Weight.B;
    result = Ranking.B;
  }
  else if (Range.B_end < similarity && similarity <= Range.C_end) {
    pointWeight = Weight.C;
    result = Ranking.C;
  }
  else if (Range.C_end < similarity && similarity <= Range.D_end) {
    pointWeight = Weight.D;
    result = Ranking.D;
  }
  else {
    success = false;
    result = Ranking.Fail;
  }
  return { pointWeight, success, result };
}

export default calculateImageSimilarity;