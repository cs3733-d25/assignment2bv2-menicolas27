import { FC } from 'react';

const Table2: FC = () => (
    <table>
        <caption>Total Repairs</caption>
        <tr>
            <th>Device Type</th>
            <th>Amount Repaired</th>
            <th>Average Hours to Repair (Each)</th>
        </tr>
        <tr>
            <td>Retro Games and Game Consoles</td>
            <td>4</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Modern Game Consoles</td>
            <td>2</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Game Controllers</td>
            <td>8</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Car Components (Radio, lights, Interior Electrical)</td>
            <td>4</td>
            <td>10</td>
        </tr>
        <tr>
            <td>Computers</td>
            <td>13</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Laptops</td>
            <td>8</td>
            <td>3</td>
        </tr>
        <tr>
            <td>Home Appliances</td>
            <td>3</td>
            <td>4</td>
        </tr>

    </table>
);

export default Table2;