import { FC } from 'react';
import Title from './components/Title.tsx';
import Intro from './components/Intro.tsx';
import Hobby1 from './components/Hobby1.tsx';
import Hobby2 from './components/Hobby2.tsx';
import './App.css';

const App: FC = () => (
    <main>
        <Title />
        <Intro name1="Zhongyi Tong" name2="Michael Nicolas" />
        <Hobby1 />
        <Hobby2 />
    </main>

);
export default App;