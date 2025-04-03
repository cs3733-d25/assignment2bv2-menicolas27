import { FC } from 'react';

const table2: FC = () => (
    <table className="expand">
        <caption>Total Repairs</caption>
        <tbody>
        <tr>
            <th>Device Type</th>
            <th>Amount Repaired</th>
            <th>Average Hours to Repair (Each)</th>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Retro Games and Game Consoles</td>
            <td>4</td>
            <td>3</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Modern Game Consoles</td>
            <td>2</td>
            <td>5</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Game Controllers</td>
            <td>8</td>
            <td>5</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Car Components (Radio, lights, Interior Electrical)</td>
            <td>4</td>
            <td>10</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Computers</td>
            <td>13</td>
            <td>2</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Laptops</td>
            <td>8</td>
            <td>3</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
            <td>Home Appliances</td>
            <td>3</td>
            <td>4</td>
        </tr>
        </tbody>

    </table>
);

export default table2;