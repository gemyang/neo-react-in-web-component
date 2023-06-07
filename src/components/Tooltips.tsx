import "./styles.css";
import "@avaya/neo-react/avaya-neo-react.css";

import { Button, Tooltip } from "@avaya/neo-react";

export default function App() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis. Quam vulputate dignissim suspendisse in. Arcu non sodales neque sodales ut. Vel fringilla est ullamcorper eget nulla. Donec adipiscing tristique risus nec feugiat in fermentum. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Viverra vitae congue eu consequat ac felis donec. Tortor aliquam nulla facilisi cras. Nunc mi ipsum faucibus vitae aliquet nec. Sed ullamcorper morbi tincidunt ornare. Erat imperdiet sed euismod nisi porta lorem mollis. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Non tellus orci ac auctor augue mauris. Sagittis purus sit amet volutpat consequat.";

  return (
    <main className="App">

      <div className="wrapper">
        <h2>Tooltip Showcase</h2>

        <Tooltip label="Short Example">
          <Button>Hover for auto placed Tooltip</Button>
        </Tooltip>

        <Tooltip label="force left" position="left">
          <Button>Hover for left tooltip</Button>
        </Tooltip>

        <Tooltip label={lorem}>
          <Button>Hover for long tooltip</Button>
        </Tooltip>
      </div>

      <div className="wrapper">
        <h2>Non-Interactive Elements</h2>

        <Tooltip label="Short Example">
          <p>Hover for auto placed Tooltip</p>
        </Tooltip>

        <Tooltip label="force left" position="left">
          <div>Hover for left tooltip</div>
        </Tooltip>

        <Tooltip label={lorem}>
          <span>Hover for long tooltip</span>
        </Tooltip>
      </div>
    </main>
  );
}
