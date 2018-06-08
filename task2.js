/* Task 2 */

let s = process.argv[2];
let k = Number(process.argv[3]);
let n = s.length;
let ch_arr = [];
let encr_str =  '';

const encryption = function(){
	for(let i=0; i<n; i++){		
			ch_arr.push(s.charCodeAt(i));
			if( (s.match(/[a-zA-Z]/g)[i] != null)){
				ch_arr[i]=ch_arr[i]+k;			
			}
			encr_str += String.fromCharCode(ch_arr[i]);	
	}
	console.log(encr_str);	
};

encryption();
