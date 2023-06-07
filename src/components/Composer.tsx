
import { AdvancedTable } from './AdvancedTable';
import { TwoCheckboxes } from './Checkboxes';
import { NoContentAgent } from './NoContentAgent';
import "@avaya/neo-react/avaya-neo-react.css";
import Shimmer from './Shimmer';
import Tooltips from './Tooltips';
export const Composer = () => (<div>
    <TwoCheckboxes></TwoCheckboxes>
    <NoContentAgent></NoContentAgent>
    <Shimmer></Shimmer>
    <AdvancedTable></AdvancedTable>
    <Tooltips></Tooltips>
</div>)
