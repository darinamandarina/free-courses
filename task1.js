/* Task 1 */


let n = Number(process.argv[2]);
let e = Number(process.argv[3]);
let sum = 0;
for (let i = 1; i<=n; i++){
	sum += i**e;			
}
console.log(sum);
