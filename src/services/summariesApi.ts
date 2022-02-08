import { http } from '../http/http';
import { results } from '../types/results';

export const getSummaries = async (search: string): Promise<results> => {
    const {data} = await http.get(`http://135.181.30.244:27007/api/summaries/${search !== '' ? search : ''}`)
    return data;
}