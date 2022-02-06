
// 1

// let buttons = document.querySelectorAll('.tabs button');
// let tabcontents = document.querySelectorAll('.tabcontent');


// buttons.forEach(button => {
//     button.addEventListener('click',function (event) {
//         openTab(event,`${button.id}-tab`)
//     })
// });

// function openTab(event,id) {
//     tabcontents.forEach(tab => {
//         tab.style.display = 'none';
//     })
//     buttons.forEach(btn => {
//         btn.classList.remove('active')
//     })
//     event.target.classList.add('active');
//     document.querySelector(`#${id}`).style.display = 'block';
// }



// 2


// let all = document.querySelectorAll('.dark-theme');
// console.log(all)


// let changeTem = document.querySelector('.changeTem');

// changeTem.addEventListener('click', function (event) {
//     all.forEach(item =>{
//         console.log(item.className)
//         console.log(item.classList.value)
//         if(item.classList.contains('dark-theme')){
//             changeTem.innerText = 'Темная тема';
//             item.classList.remove('dark-theme')
//             changeTem.style.background = 'white';
//             changeTem.style.color = '#6b6a69'
//         }else{
//             item.classList.add('dark-theme')
//             changeTem.innerText = 'Светлая тема'
//             changeTem.style.background = '#252525';
//             changeTem.style.color = 'rgb(206, 206, 206)'
//         }
//         // item.classList.toggle('dark-theme')


//     })
// })


// 3

let hourHtml = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')


setInterval(function (){
    now = new Date();
    hour = now.getHours();
    minute = now.getMinutes();
    second = now.getSeconds();
    hourHtml.innerText = `${hour}:`;
    min.innerText = `${minute}:`;
    sec.innerText = `${second}`;
},1000);



// setInterval(getTime,1000,hour,minute,second);