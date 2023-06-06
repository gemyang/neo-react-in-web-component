
import { AdvancedTable } from './AdvancedTable';
import { TwoCheckboxes } from './Checkboxes';
import { NoContentAgent } from './NoContentAgent';
import "@avaya/neo-react/avaya-neo-react.css";

export const Composer = () => (<div>
    <TwoCheckboxes></TwoCheckboxes>
    <NoContentAgent></NoContentAgent>
    <AdvancedTable></AdvancedTable>
</div>)
