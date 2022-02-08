import { RootState } from '../store';

const getData = (state:RootState) => state.summary;
const SummarySelectors = {
  getData
}
export default SummarySelectors