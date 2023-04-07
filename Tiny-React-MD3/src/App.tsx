import { useState } from 'react'

import Button from "./Button/Button";
import Switch from "./Switch/Switch";
import Checkbox from "./Checkbox/Checkbox";
import Badge from "./Badge/Badge";
import RadioButton from './Radio Button/RadioButton';
import HorizontalDivider from './HorizontalDivider/HorizontalDivider';
import VerticalDivider from './VerticalDivider/VerticalDivider';

function App() {
  const [count, setCount] = useState(0)

  const incrementCounter = () => {
    setCount(count + 1); // This line calls the state setter function with the new counter value
  };

  return (
    <div
      className="App"
    >
      <div
        className="flex-trmd3"
      >
        <img
          src="src/assets/tiny-react-md3-logo.png"
          className="logo-trmd3"
        />
      </div>
      <div
        className="text text-display text-display-medium title-trmd3"
      >
        Tiny React MD3
      </div>
      <div
        className="text text-body text-body-large title-trmd3"
      >
        <br />
        Tired of bloated React frameworks with thousands of lines of code which you will never use? <br /> <br />
        ❤️ You like Figma? ❤️ You Like Material Design 3? ❤️ You like React? <br /> ❤️Then you love Tiny React MD3! <br />
        <br />
        <a href="https://www.figma.com/community/file/1035203688168086460">Figma Material Design 3 Kit</a> 🤝 <a href="https://developer.okta.com/blog/2022/03/14/react-vite-number-converter">React.ts</a> =  <a href="https://github.com/highnet/Tiny-React-MD3/">Tiny React MD3</a> <br />
        <ul>
          <li>
            Quickly transform your design kit prototypes into stunning and modern web applications <br /> <br />
          </li>
          <li>
            A set of easy-to-use, high-peformance and customizable components that follow the Material Design 3 principles and aesthetics <br /> <br />
          </li>
          <li>
            Developer handoffs made easy with ensured parity between the Figma material Design 3 Kit and React
          </li>
        </ul>
      </div>
      <div
        className="text text-display text-display-medium title-trmd3"
      >
      </div>
      <p
        className="text text-body text-body-large">Counter: {count}
      </p>
      <div
        className="text text-title text-title-large"
      >
        Horizontal Dividers
      </div>
      <div
        className="component-display-section-column-trmd3"
      >
        {/* HORIZONTAL DIVIDERS */}
        <div
          className="text text-label text-label-small"
        >
          Inset None
        </div>
        <HorizontalDivider
          inset={"none"}
        />
        <div
          className="text text-label text-label-small"
        >
          Inset Right
        </div>
        <HorizontalDivider
          inset={"right"}
          showInsets={true}
        />
        <div
          className="text text-label text-label-small"
        >
          Inset Left
        </div>
        <HorizontalDivider
          inset={"left"}
          showInsets={true}
        />
        <div
          className="text text-label text-label-small"
        >
          Inset Center
        </div>
        <HorizontalDivider
          inset={"center"}
          showInsets={true}
        />
      </div>
      <div
        className="text text-title text-title-large"
      >
        Vertical Dividers
      </div>
      <div
        className="component-display-section-row-trmd3"
      >
        {/* VERTICAL DIVIDERS */}
        <div
          className="text text-label text-label-small"
        >
          Inset None
        </div>
        <VerticalDivider
          inset={"none"}
        />
        <div
          className="text text-label text-label-small"
        >
          Inset Top
        </div>
        <VerticalDivider
          inset={"top"}
          showInsets={true}
          insetTopHeight={50}
        />
        <div
          className="text text-label text-label-small"
        >
          Inset Bottom
        </div>
        <VerticalDivider
          inset={"bottom"}
          insetBottomHeight={50}
          showInsets={true}
        />
        <div
          className="text text-label text-label-small"
        >
          Inset Center
        </div>
        <VerticalDivider
          inset={"center"}
          insetBottomHeight={50}
          insetTopHeight={50}
          showInsets={true}
        />
      </div>
      <div
        className="text text-title text-title-large"
      >
        Radio Buttons
      </div>
      <div
        className="component-display-section-row-trmd3"
      >
        {/* RADIO BUTTONS */}
        <RadioButton
          name={"tiny md3"}
          value={"option-1"}
        />
        <div
          className="text text-label text-label-small"
        >
          Option 1
        </div>
        <RadioButton
          name={"tiny md3"}
          value={"option-2"}
        />
        <div
          className="text text-label text-label-small"
        >
          Option 2
        </div>
        <RadioButton
          name={"tiny md3"}
          value={"option-3"}
        />
        <div
          className="text text-label text-label-small"
        >
          Option 3
        </div>
        <RadioButton
          name={"tiny md3"}
          value={"option-4"}
          disabled={true}
          defaultChecked={true}
        />
        <div
          className="text text-label text-label-small"
        >
          Option 4 (Inactive)
        </div>
      </div>
      <div
        className="text text-title text-title-large"
      >
        Badges
      </div>
      <div
        className="component-display-section-row-trmd3"
      >
        {/* BADGES */}
        <div
          className="text text-label text-label-small"
        >
          Small
        </div>
        <div
          className="badge-box-trmd3"
        >
          <Badge
            configuration={"small"}
            xOffset={95}
            yOffset={-2}
          >
          </Badge>
        </div>
        <div
          className="text text-label text-label-small"
        >
          Single Digit
        </div>
        <div
          className="badge-box-trmd3"
        >
          <Badge
            configuration={"single-digit"}
            xOffset={93}
            yOffset={-4}
            label={"3"}
          >
          </Badge>
        </div>
        <div
          className="text text-label text-label-small"
        >
          Multiple Digits
        </div>
        <div
          className="badge-box-trmd3"
        >
          <Badge
            configuration={"multiple-digits"}
            xOffset={93}
            yOffset={-4}
            label={"123"}
          >
          </Badge>
        </div>
      </div>
      <div
        className="text text-title text-title-large"
      >
        Checkboxes
      </div>
      <div
        className="component-display-section-row-trmd3"
      >
        {/* CHECKBOXES */}
        <div
          className="text text-label text-label-small"
        >
          Default
        </div>
        <Checkbox
          selected={true}
          onChange={incrementCounter}
        ></Checkbox>
        <div
          className="text text-label text-label-small"
        >
          Default (inactive)
        </div>
        <Checkbox
          selected={true}
          onChange={incrementCounter}
          configuration={"default"}
          disabled={true}
        >
        </Checkbox>
        <div
          className="text text-label text-label-small"
        >
          Error
        </div>
        <Checkbox
          selected={true}
          onChange={incrementCounter}
          configuration={"error"}
        ></Checkbox>
        <div
          className="text text-label text-label-small"
        >
          Error (inactive)
        </div>
        <Checkbox
          selected={true}
          onChange={incrementCounter}
          configuration={"error"}
          disabled={true}
        >
        </Checkbox>
      </div>
      <div
        className="text text-title text-title-large"
      >
        Switches
      </div>
      <div
        className="component-display-section-row-trmd3"
      >
        {/* SWITCHES */}
        <div
          className="text text-label text-label-small"
        >
          No Icon
        </div>
        <Switch
          selected={true}
          onChange={incrementCounter}
        >
        </Switch>
        <div
          className="text text-label text-label-small"
        >
          No Icon (Inactive)
        </div>
        <Switch
          selected={true}
          onChange={incrementCounter}
          disabled={true}
        >
        </Switch>
        <div
          className="text text-label text-label-small"
        >
          With Icon
        </div>
        <Switch
          selected={true}
          onChange={incrementCounter}
          icon={true}
          iconNameSelected={"warning"}
          iconNameDeselected={"house"}
        >
        </Switch>
        <div
          className="text text-label text-label-small"
        >
          With Icon (Inactive)
        </div>
        <Switch
          selected={true}
          onChange={incrementCounter}
          icon={true}
          disabled={true}
        >
        </Switch>
      </div>
      <div
        className="component-display-section-column-trmd3"
      >
        {/* BUTTONS */}
        <div
          className="text text-title text-title-large"
        >
          Buttons
        </div>
        <div
          className="text text-title text-title-medium"
        >
          Filled Buttons
        </div>
        <div
          className="text text-label text-label-small"
        >
          No Icon
        </div>
        <Button
          configuration="filled"
          disabled={false}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          No Icon (inactive)
        </div>
        <Button
          configuration="filled"
          disabled={true}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon
        </div>
        <Button
          configuration="filled"
          disabled={false}
          icon={true}
          iconName={"search"}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon (inactive)
        </div>
        <Button
          configuration="filled"
          disabled={true}
          icon={true}
          iconName={"search"}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-title text-title-large"
        >
          Outlined Buttons
        </div>
        <div
          className="text text-label text-label-small"
        >
          No Icon
        </div>
        <Button
          configuration="outlined"
          disabled={false}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          No Icon (inactive)
        </div>
        <Button
          configuration="outlined"
          disabled={true}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon
        </div>
        <Button
          configuration="outlined"
          disabled={false}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon (inactive)
        </div>
        <Button
          configuration="outlined"
          disabled={true}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-title text-title-large"
        >
          Text Buttons
        </div>
        <div
          className="text text-label text-label-small"
        >
          No Icon
        </div>
        <Button
          configuration="text"
          disabled={false}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          No Icon (inactive)
        </div>
        <Button
          configuration="text"
          disabled={true}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon
        </div>
        <Button
          configuration="text"
          disabled={false}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon (inactive)
        </div>
        <Button
          configuration="text"
          disabled={true}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-title text-title-large"
        >
          Elevated Buttons
        </div>
        <div
          className="text text-label text-label-small"
        >
          No Icon
        </div>
        <Button
          configuration="elevated"
          disabled={false}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          No Icon (inactive)
        </div>
        <Button
          configuration="elevated"
          disabled={true}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon
        </div>
        <Button
          configuration="elevated"
          disabled={false}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon (inactive)
        </div>
        <Button
          configuration="elevated"
          disabled={true}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me</div>
        </Button>
        <div
          className="text text-title text-title-large"
        >
          Tonal Buttons
        </div>
        <div
          className="text text-label text-label-small"
        >
          No Icon
        </div>
        <Button
          configuration="tonal"
          disabled={false}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small">
          No Icon (inactive)
        </div>
        <Button
          configuration="tonal"
          disabled={true}
          onClick={incrementCounter}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon
        </div>
        <Button
          configuration="tonal"
          disabled={false}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
        <div
          className="text text-label text-label-small"
        >
          With Icon (inactive)
        </div>
        <Button
          configuration="tonal"
          disabled={true}
          onClick={incrementCounter}
          icon={true}
          iconName={"search"}
        >
          <div
            className="text text-label text-label-large"
          >
            Click Me
          </div>
        </Button>
      </div>
      <div
        className="text text-title text-title-medium"
      >
        Typography
      </div>
      <div
        className="component-display-section-column-trmd3"
      >
        {/* TYPOGRAPHY */}
        <div
          className="typography-display-section-trmd3"
        >
          <div
            className="text text-display text-display-large"
          >
            Display Large - Roboto 57/54 . 0
          </div>
          <div
            className="text text-display text-display-medium"
          >
            Display Medium - Roboto 45/52 .  0
          </div>
          <div
            className="text text-display text-display-small"
          >
            Display Small - Roboto 36/44 . 0
          </div>
        </div>
        <div
          className="typography-display-section-trmd3"
        >
          <div
            className="text text-headline text-headline-large"
          >
            Headline Large - Roboto 32/40 . 0
          </div>
          <div
            className="text text-headline text-headline-medium"
          >
            Headline Medium - Roboto 28/36 . 0
          </div>
          <div
            className="text text-headline text-headline-small"
          >
            Headline Small - Roboto 24/32 . 0
          </div>
        </div>
        <div
          className="typography-display-section-trmd3"
        >
          <div
            className="text text-title text-title-large"
          >
            Title Large - Roboto Regular 22/28 . 0
          </div>
          <div
            className="text text-title text-title-medium"
          >
            Title Medium - Roboto Medium 16/24 . +0.15
          </div>
          <div
            className="text text-title text-title-small"
          >
            Title Small - Roboto Medium 14/20 . +0.1
          </div>
        </div>
        <div
          className="typography-display-section-trmd3"
        >
          <div
            className="text text-label text-label-large"
          >
            Label Large - Roboto Medium 14/20 . +0.1
          </div>
          <div
            className="text text-label text-label-medium"
          >
            Label Medium - Roboto Medium 12/16 . +0.5
          </div>
          <div
            className="text text-label text-label-small"
          >
            Label Small - Roboto Medium 11/16 . +0.5
          </div>
        </div>
        <div
          className="typography-display-section-trmd3"
        >
          <div
            className="text text-body text-body-large"
          >
            Body Large - Roboto 16/24 . +0.5
          </div>
          <div
            className="text text-body text-body-medium"
          >
            Body Large - Roboto 16/24 . +0.5
          </div>
          <div
            className="text text-body text-body-small"
          >
            Body Large - Roboto 16/24 . +0.5
          </div>
        </div>
      </div>
      <div
        className="text text-title text-title-large"
      >
        Elevation
      </div>
      <div
        className="elevation-display-section-trmd3"
      >
        {/* ELEVATION */}
        <div
          className="elevation-light-1 elevation-box-trmd3 elevation-box-1-trmd3"
        >
        </div>
        <div
          className="elevation-light-2 elevation-box-trmd3 elevation-box-2-trmd3"
        >
        </div>
        <div
          className="elevation-light-3 elevation-box-trmd3 elevation-box-3-trmd3"
        >
        </div>
        <div
          className="elevation-light-4 elevation-box-trmd3 elevation-box-4-trmd3"
        >
        </div>
        <div
          className="elevation-light-5 elevation-box-trmd3 elevation-box-5-trmd3"
        >
        </div>
      </div>
      <div
        className="text text-title text-title-large"
      >
        Icons
      </div>
      <div
        className="component-display-section-row-trmd3"
      >
        {/* ICONS */}
        <span
          className="material-symbols-outlined"
        >
          search
        </span>
        <span
          className="material-symbols-outlined"
        >
          home
        </span>
        <span
          className="material-symbols-outlined"
        >
          air
        </span>
        <span
          className="material-symbols-outlined"
        >
          water
        </span>
        <span
          className="material-symbols-outlined"
        >
          check
        </span>
      </div>
    </div>
  )
}

export default App
