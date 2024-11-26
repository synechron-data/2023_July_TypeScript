import * as $ from 'jquery';
import { IPoint, Point } from './point';

let point: IPoint = new Point(2, 3);
console.log(point.getDistance());

var jsResultSpan = document.querySelector('#jsResult');

if (jsResultSpan) {
    jsResultSpan.innerHTML = point.getDistance().toString();
}

$(function () {
    $('#jqResult').html(point.getDistance().toString());
});