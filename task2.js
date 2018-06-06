/* Task 2 */

let str = process.argv[2];
let n = Number(process.argv[3]);
let len = str.length;
let ch_arr = [];
let encr_str =  '';

const encryption = function(){
	for(let i=0; i<len; i++){
		ch_arr.push(str.charCodeAt(i));
		if( str.match(/[a-zA-Z]/g)[i] != null) {
			ch_arr[i]=ch_arr[i]+n;			
		}
		encr_str += String.fromCharCode(ch_arr[i]);	
		
	}
	console.log(encr_str);	
};

encryption();