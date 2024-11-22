function wow(){
    let a = document.getElementById("hi")
    a.style.display = "none";
}
function wow1(){
    let a = document.getElementById("hi")
    a.style.display = "block";
}

    let i = 0

function sh(){

    i++

    let as = document.getElementById("inp").value
    let li = document.getElementById("includ")
    let s = document.createElement("li")
    
    s.setAttribute('class', 'hi'+i)


    let button = document.createElement("button")
    button.append("uchir")
    button.setAttribute('class', i)
    let fubu = 'del(' + i + ')'
    button.setAttribute('onclick', fubu)


    s.append(as)
    s.append(button)
    li.append(s)
    console.log(li)
    console.log(button)
    document.getElementById("inp").value = ""
}

function del(a){
    let son = ".hi" + a
    let sen = document.querySelector(son)
    sen.style.display = ("none")
}