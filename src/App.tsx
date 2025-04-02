import { FC } from 'react';
import Title from './components/Title.tsx';
import Intro from './components/Intro.tsx';
import Hobby1 from './components/Hobby1.tsx';
import Hobby2 from './components/Hobby2.tsx';

const App: FC = () => (
    <div>
        <Title />
        <Intro />
        <Hobby1 />
        <Hobby2 />
    </div>
);

export default App;