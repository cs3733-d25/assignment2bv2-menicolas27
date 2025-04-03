
import React from 'react';

interface IntroProps  {
    name1: string;
    name2: string;
};
const Intro: React.FC<IntroProps> = ({ name1, name2 }) => (
    <section>
        <p>
            Hello! This page was created by <strong>{name1}</strong> and{" "}
            <strong>{name2}</strong>. We’re excited to showcase our hobbies!
            Micheal is currently a sophomore student in RBE major, Zhongyi is currently a sophomore in CS major,
            we both like listening to music.
        </p>
    </section>
)

export default Intro;