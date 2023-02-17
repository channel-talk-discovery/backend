async function getPlaceInfoDao(connection, placeId) {
  const query = 'select point, imageUrl from Place where placeId = ?;'
  const row = await connection.query(query, placeId);
  return row;
}

export default getPlaceInfoDao;