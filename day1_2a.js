/* Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
```js
#
##
###
####
#####
######
#######
``` */

for (let i=0;i<7;i++){
    let str = ""
    for(let j=0; j<=i;j++){
        str+='#'
    }
    console.log(str)
}