import React from 'react';
import {
    colour_mix,
    largest_product,
    day_of_the_week,
    pay_raise,
    is_leap
} from './functions';

export default function TestComponents() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Function Tests</h2>

            <h3>1. Colour Mix</h3>
            <p>red + blue: {colour_mix('red', 'blue')}</p>
            <p>red + green: {colour_mix('red', 'green')}</p>
            <p>blue + green: {colour_mix('blue', 'green')}</p>

            <h3>2. Largest Product</h3>
            <p>-6, 10, 17: {largest_product(-6, 10, 17)}</p>
            <p>3, 6, 11: {largest_product(3, 6, 11)}</p>
            <p>-7, -9, -4: {largest_product(-7, -9, -4)}</p>

            <h3>3. Day of the Week</h3>
            <p>2: {day_of_the_week(2)}</p>
            <p>8: {day_of_the_week(8)}</p>
            <p>4: {day_of_the_week(4)}</p>

            <h3>4. Pay Raise</h3>
            <p>'F', 2, 25000: {pay_raise('F', 2, 25000).toFixed(2)}</p>
            <p>'P', 12, 40000: {pay_raise('P', 12, 40000).toFixed(2)}</p>
            <p>'F', 6, 60000: {pay_raise('F', 6, 60000).toFixed(2)}</p>

            <h3>5. Leap Year</h3>
            <p>2000: {is_leap(2000) ? 'True' : 'False'}</p>
            <p>1900: {is_leap(1900) ? 'True' : 'False'}</p>
            <p>2024: {is_leap(2024) ? 'True' : 'False'}</p>
        </div>
    );
}