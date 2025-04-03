import { FC } from 'react';

// @ts-ignore
const form2: FC = () => (
    <form>
        <label htmlFor="fullname">Enter Your Fullname:</label>
        <br/>
        <input type="text" id="fullname"/>
        <br/>
        <br/>
        <input type="checkbox" id="priorxp"/>
        <label htmlFor="priorxp">Have you ever repaired any tech before?</label>
        <br/>
        <br/>
        <label htmlFor="difrepair">If so, what was your most difficult repair?:</label>
        <br/>
        <input type="text" id="difrepair"/>
        <br/>
        <br/>
        <input type="checkbox" id="futurerepair"/>
        <label htmlFor="futurerepair">Do you think you would try to repair something on your own for the first
            time/again?</label>
        <br/>
        <br/>
        <input type="checkbox" id="boughtbroken"/>
        <label htmlFor="boughtbroken">Have you bought something that you knew was broken specifically to repair
            it?</label>
        <br/>
        <br/>
        <label htmlFor="yes">Do you think you may now buy you knew was broken specifically to repair it?</label>
        <br/>
        <input type="radio" id="yes" name="bought_broken" value="Yes"/>
        <label htmlFor="yes">Yes</label><br/>
        <input type="radio" id="maybe" name="bought_broken" value="Maybe"/>
        <label htmlFor="maybe">Maybe</label><br/>
        <input type="radio" id="no" name="bought_broken" value="No"/>
        <label htmlFor="no">No</label>
        <br/>
        <br/>
        <label htmlFor="objects">What seems the most interesting to you:</label>
        <br/>
        <select name="objects" id="objects">
            <option value="game_consoles">Game Consoles</option>
            <option value="computers/laptops">Computers/Laptops</option>
            <option value="appliances">Appliances</option>
            <option value="other">Other</option>
        </select>
        <br/>
        <br/>
        <label htmlFor="other">Other (N/A if not selected):</label>
        <br/>
        <input type="text" id="other"/>
        <br/>
        <br/>
        <label htmlFor="comments">Any comments?</label>
        <br/>
        <input type="text" name="comments" id="comments"/>
        <br/>
        <br/>
        <input type="submit" id="Submit"/>
    </form>
);

export default form2;