import { get, post } from "../utils/request";

export const createGameId = async() => {
  const route = "/game/";
  return await get(route);
};

export const getGameById = async(id) => {
    const route = `/game/${id}/`;
    return await get(route);
}

export const createAndGetGame = async() => {
    const resCreateGame = await createGameId();
    const resGetGame = await getGameById(resCreateGame.game_id);
    return resGetGame;
}

export const validateGame = async(id, data) => {
    const route = `/game/${id}/`;
    return post(route, data);
}

export const getRandomGame = async() => {
    const route = "/guestgame/";
    return get(route);
}
