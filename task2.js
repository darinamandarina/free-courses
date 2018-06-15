/* Task 2 */

let s = process.argv[2];
let k = Number(process.argv[3]);
let n = s.length;
let encr_str =  '';
let alf = "abcdefghijklmnopqrstuvwxyz";
let a_len = alf.length;
function encryption(){
    for (let i=0; i < n; i++)
    {
        let ind = alf.indexOf(s[i].toLowerCase());
        if(ind != -1){
          if (s[i].toLowerCase() == s[i])
            encr_str += alf[(ind + k) % a_len];
          else
             encr_str += (alf[(ind + k) % a_len]).toUpperCase();
        }        
        else
            encr_str += s[i];
    }
  console.log(encr_str);
}
encryption();
