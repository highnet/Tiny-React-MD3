import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  storageBucket: 'gs://tiny-react-md3.appspot.com'
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const logoRef = ref(storage, 'tiny-react-md3-logo.png');
let logoUrl = '';

getDownloadURL(logoRef).then((url)=> {
   logoUrl = url;
});

function Hero() {
  return (<div>
    <div
      className="flex-trmd3"
    >
      <img
        src="https://firebasestorage.googleapis.com/v0/b/tiny-react-dev.appspot.com/o/tiny-react-md3-logo.png?alt=media&token=749a4667-737c-4423-9b2f-c64ae1212f65"
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
          A set of easy-to-use, high-peformance, and customizable components that follow the Material Design 3 principles and aesthetics <br /> <br />
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
  </div>);
}

export default Hero;