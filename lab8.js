function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = "Дата и время для русской локали: "+ today.toLocaleString('ru-RU') + '<br>' +
    "Дата и время для греческой локали: " + today.toLocaleString('el-GR') + '<br>' +
    "Дата и время для китайской локали: " + today.toLocaleString('zh-CN') + '<br>' +
    "Дата и время для монгольской локали: " + today.toLocaleString('mn-MN') + '<br>' +
    "Дата и время для египетской локали: " + today.toLocaleString('ar-EG') + '<br>' +
    "Дата и время для африканской локали: " + today.toLocaleString('af') ;
    out.style.color = 'olive'
    out.style.fontFamily = 'Monserat'
    out.style.fontSize = '16px'
}
function showDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    alert(daysCount);
}