
import { FC } from 'react';
import List1 from "./list1";
import Table1 from "./table1";
import Form1 from "./form1";

const Hobby1 :FC = () =>(
    <section>
        <h2>Zhongyi's hobby: Video Games</h2>
        <img src="/public/hobby1.jpeg" alt="VideoGame" style={{ maxWidth: "200px" }} />
        <p>
            I love playing Video games, especially valorant, i feel really happy when I win every single game.
        </p>

        <List1 />
        <br />
        <Table1 />
        <br />
        <Form1 />
    </section>

)



export default Hobby1;