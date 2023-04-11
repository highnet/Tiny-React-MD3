import ButtonsFrame from './Button/Frame/ButtonsFrame';
import HorizontalDividersFrame from './HorizontalDivider/Frame/HorizontalDividersFrame';
import Hero from './TRMD3/Hero';
import VerticalDividersFrame from './VerticalDivider/Frame/VerticalDividersFrame';
import RadioButtonsFrame from './Radio Button/Frame/RadioButtonsFrame';
import BadgesFrame from './Badge/Frame/BadgesFrame';
import CheckboxesFrame from './Checkbox/Frame/CheckboxesFrame';
import SwitchesFrame from './Switch/Frame/SwitchesFrame';
import TypographiesFrame from './Typography/Frame/TypographiesFrame';
import ElevationsFrame from './Elevation/Frame/ElevationsFrame';
import IconsFrame from './Icon/Frame/IconsFrame';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  storageBucket: 'gs://tiny-react-md3.appspot.com'
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const logoRef = ref(storage, 'tiny-react-md3-logo.png');
getDownloadURL(logoRef).then((url)=> {
  const logoUrl = url;
});

function App() {

  return (
    <div
      className="App"
    >
      <Hero />

      <div
        className="text text-title text-title-large"
      >
        Horizontal Dividers
      </div>
      <HorizontalDividersFrame />

      <div
        className="text text-title text-title-large"
      >
        Vertical Dividers
      </div>
      <VerticalDividersFrame />

      <div
        className="text text-title text-title-large"
      >
        Radio Buttons
      </div>
      <RadioButtonsFrame />

      <div
        className="text text-title text-title-large"
      >
        Badges
      </div>
      <BadgesFrame />

      <div
        className="text text-title text-title-large"
      >
        Checkboxes
      </div>
      <CheckboxesFrame />

      <div
        className="text text-title text-title-large"
      >
        Switches
      </div>
      <SwitchesFrame />

      <ButtonsFrame />

      <div
        className="text text-title text-title-medium"
      >
        Typography
      </div>
      <TypographiesFrame />

      <div
        className="text text-title text-title-large"
      >
        Elevation
      </div>
      <ElevationsFrame />

      <div
        className="text text-title text-title-large"
      >
        Icons
      </div>
      <IconsFrame />

    </div>
  )
}

export default App
