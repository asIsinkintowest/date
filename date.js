let days = new Array()
let myDate = new Date()
days = document.getElementsByClassName("day")
let myYear = myDate.getFullYear()
let myMonth = myDate.getMonth() + 1
let myWeek = myDate.getDay()
let myDay = myDate.getDate()
let firstDay = ""
let firstWeek = 0
let first;
let up=document.getElementById("up")
let down=document.getElementById("down")
let num = 0
let norYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let oddYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
let title = document.getElementById("header")

    print()
    
    
function print() {
    title.innerHTML = myYear + "年" + myMonth + "月"
    let i = 0, j = 0, l = 0, h = 1
    firstDay = myYear + "-" + myMonth + "-" + 01
    first = new Date(firstDay)
    firstWeek = first.getDay()
    // 打印上个月的日期
    let last_corne = firstWeek - 1
    while (last_corne >= 0) {
        if (isOdd() == 1 && myMonth != 1) {
            days[last_corne].innerHTML = oddYear[myMonth - 2] - j
        } else if (isOdd() == 1 && myMonth == 1) {
            days[last_corne].innerHTML = oddYear[11] - j
        } else if (isOdd() == 2 && myMonth != 1) {
            days[last_corne].innerHTML = norYear[myMonth - 2] - j
        } else if (isOdd() == 2 && myMonth == 1) {
            days[last_corne].innerHTML = norYear[11] - j
        }
        setPast(last_corne)
        last_corne--
        j++
    }
    //打印本月日期
    let next_corne = 1
    if (isOdd() == 1) {
        while (next_corne <= oddYear[myMonth - 1]) {
            days[firstWeek + l].innerHTML = next_corne
            setNow(firstWeek + l)
            l++
            next_corne++
        }
    } else if (isOdd() == 2) {
        while (next_corne <= norYear[myMonth - 1]) {
            days[firstWeek + l].innerHTML = next_corne
            setNow(firstWeek + l)
            l++
            next_corne++
        }
    }
    if(myMonth==(myDate.getMonth() + 1)&& myYear==(myDate.getFullYear())){
        setThis(myDay + firstWeek - 1)// days[myDay + firstWeek - 1].style.backgroundColor = "blue"
    }
    
    //打印下一个月的日期
    let final_corne = firstWeek + next_corne - 2 //7+l-1
    while (final_corne < 35) {
        days[final_corne + h].innerHTML = h
        setFuture(final_corne + h)
        h++
    }
}

//判断闰年
function isOdd() {
    if (myYear % 4 == 0 && myYear % 100 != 0) {
        return 1
    } else {
        return 2
    }
}

//设定样式
function setPast(index) {
    days[index].style.cssText += 'font-size:17px';
    days[index].style.color = "#af8d3d";
}

function setNow(index) {
      days[index].style.cssText += 'font-size:25px';
      days[index].style.color = "#533c08";
}

function setFuture(index) {
    days[index].style.cssText += 'font-size:17px';
    days[index].style.color = "#af8d3d";
}

function setThis(index){
    days[index].style.cssText += 'font-size:32px';
    days[index].style.color = "#f7e0a4";
}

// 切换月份
function change(){
    up.onclick=function(e) {
        e.preventDefault();
        if(myMonth>1){
            myMonth--
        }else if(myMonth==1){
            myYear--
            myMonth=12
        }
        print()
    }
    down.onclick=function(e) {
        e.preventDefault();
        if(myMonth<12){
            myMonth++
        }else if(myMonth==12){
            myYear++
            myMonth=1
        }
        print()
    }
}