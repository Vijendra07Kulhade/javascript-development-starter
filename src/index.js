import './index.css';
import numeral from 'numeral';
/*eslint-disable no-console*/
const value = numeral(1000).format('$0,0.00');
console.log(`I would pay ${value} for this course!!`);
