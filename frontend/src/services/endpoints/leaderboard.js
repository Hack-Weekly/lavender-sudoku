import { get } from "../utils/request";

export const getLeaderBoard = async() => {
    const route = "/leaderboard/";
    return await get(route);
}