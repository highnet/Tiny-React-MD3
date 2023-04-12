import React, {useState, useEffect} from "react";
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  storageBucket: 'gs://tiny-react-md3.appspot.com'
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const logoRef = ref(storage, 'tiny-react-md3-logo.png');

interface IHeroProps {
  hasLogo?: boolean;
}

const Hero: React.FC<IHeroProps> = ({hasLogo}) => {

  const [_hasLogo] = useState(hasLogo || false);

  const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
    getDownloadURL(logoRef).then((url) => {
      setLogoUrl(url);
    });
  }, []);

  return (
  <div>
    <div
      className="flex-trmd3"
    >
      {_hasLogo ?
      <img
        loading="lazy"
        src={logoUrl}
        className="logo-trmd3"
      />
      
       : ""}
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
  </div>
  );
};

export default Hero;