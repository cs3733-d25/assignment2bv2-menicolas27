import { FC } from 'react';
import List2 from './List2';
import Table2 from './Table2';

const Hobby2: FC = () => (
    <div>
        <h1>Michael Nicolas: Electronic Repair</h1>
    </div>
    <div>

    </div>
    <div>
        <p>My name is Michael Nicolas. I am a Sophomore at WPI studying Robotics Engineering. I am from Woonsocket, Rhode Island, and I went to high
            school in Providence, Rhode Island. I have numerous hobbies, including but not limited to playing video games, building model kits,
            working on my car, and photography. However, my favorite hobby has always been repairing electronics.</p>
    </div>
    <div>
        <p>Electronic repair can be a very broad description. The hobby could range from sorting out some malware on my parents computer
            to completely rebuilding an old game console. The image above is an image of one of my friends controllers. This controller design
            is notorious for having issues with the thumb-stick inputs, where there would be an input value that doesn't match the position of
            the stick. This issue, referred to as "Stick Drift", is caused by wear in the potentiometers of the sticks. To fix this issue and
            prevent the issue from repeating, I installed new sticks with magnetic potentiometers that take much more time to wear down.
            This is just one recent example of the many repairs I have done.</p>
    </div>
    <div>
        Some other examples of things that I have worked on include:
        <List2 />
    </div>
    <div>
        For reference, for each category, here is the amount of each type I have worked on, and how long a single repair would normally take:
        <Table2 />
    </div>


);

export default Hobby2;