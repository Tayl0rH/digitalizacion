var menu = document.getElementById('menu');



if (document.getElementById('menuExp').style.display = 'none') {
    menu.addEventListener('mouseover', () => {
        document.getElementById('menuExp').style.display = 'flex';
    })
} 
// hacer q se repita siempre
// if(document.getElementById('menuExp').style.display = 'flex') {
//     menu.addEventListener('mouseover', () => {
//         document.getElementById('menuExp').style.display = 'none';
//         console.log('ola')
//     })
// }