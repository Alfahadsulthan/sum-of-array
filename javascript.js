var a=[],b=0,c=1,d,f
var e=0,h=0,i=" "
function onclick(){
    a=input.value
    d=a.length-1
    while(b<=d){
        e=a[b]
        f=parseInt(e)
        h=h+f
        b++
    }
    document.write("result :"+ h)
    document.write("<br>") 
}


var button=document.getElementById('b1')
button.addEventListener('click',onclick)