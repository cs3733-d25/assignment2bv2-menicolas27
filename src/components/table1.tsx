import { FC } from 'react';

const Table1 : FC= ()=>(
        <table className="collapse">
            <caption>My favorite Music</caption>
            <tr>
                <th>Song/Artist</th>
                <th>Genre</th>
                <th>Rating</th>
            </tr>
            <tr>
                <td>Timeless - The Weeknd</td>
                <td>Pop</td>
                <td>10/10</td>
            </tr>
            <tr>
                <td>Enemy - Imagine Dragons</td>
                <td>Alternative Rock</td>
                <td>9/10</td>
            </tr>
            <tr>
                <td>Shape of you - Ed sheeran</td>
                <td>Pop</td>
                <td>8/10</td>
            </tr>
            <tr>
                <td>Heat Waves - Glass animals</td>
                <td> Indie</td>
                <td>9/10</td>
            </tr>
        </table>
    )


export default Table1;