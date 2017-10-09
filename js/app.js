/**
 * Created by 123 on 2017/10/9.
 */
var arr = [1, 1, 2, 1, 3, 3, 3, 2];
function norepeat(arrs) {
    var brr = [];
    for (var i = 0; i < arrs.length; i++) {
        if (brr.indexOf(arrs[i]) == -1) {
            brr.push(arrs[i]);
        }
    }
    return brr;
}
function norepeat2(arrs) {
    var brr = [];
    var i = 0;
    while(i<arrs.length){
        if (brr.indexOf(arrs[i]) == -1) {
            brr.push(arrs[i]);
        }
        i++;
    }
    return brr;
}
console.log(norepeat(arr));
console.log(norepeat2(arr));
