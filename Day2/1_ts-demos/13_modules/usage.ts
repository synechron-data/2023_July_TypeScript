import { IPoint, Point } from './point.js';
import { check } from './check.js';

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());
check();