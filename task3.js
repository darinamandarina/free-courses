/* Task 3 */

let t1 = Number(process.argv[2]);
let t2 = Number(process.argv[3]);

let sum = t1+t2;
let h = sum/3600^0;
let m = (sum-h*3600)/60^0;
let s = sum-h*3600-m*60;
let hour = [' час', ' часов', ' часа' ];
let minute = [' минута', ' минут', ' минуты' ];
let second = [' секунда', ' секунд', ' секунды' ];
let string = '';

function output(time){
	let t = time % 10;
	let n;
	if( t === 1 && time != 11)
		n = 0;
	else if(t >= 2 && t<=4)
		n=2;
	else
		n=1;
	return n
}


if (h)
	string = h+hour[output(h)]+' ';
else
	string += '';

if (m)
	string += m+minute[output(m)]+' ';
else
	string += '';


if (s)
	string += s+second[output(s)]+' ';
else
	string += '';

console.log(string);

