/* Task 1 */

let e = Number(process.argv[3]);
let n = Number(process.argv[2]);
let sum = 0;
if (n >= 1 && e <= 100){
	for (let i = 1; i<=n; i++){
		sum += i**e;	
				
	}
}
console.log(sum);
