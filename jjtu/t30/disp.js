function displayMessage(type, title, message, time){
    let block = document.createElement('div');
    block.classList.add('mes-box');
    
    let content = document.createElement('div');
    content.classList.add('mes-content');
    content.classList.add(type);
    block.appendChild(content);

    let header = document.createElement('div');
    header.classList.add('mes-header');
    header.innerText = title;  

    let text = document.createElement('div');
    text.classList.add('mes-text');
    text.innerText = message;

    let line = document.createElement('div');
    line.classList.add('mes-time-line');

    content.appendChild(header)
    content.appendChild(text)
     content.appendChild(line)
    document.body.appendChild(block);

    line.style.width = "100%";
    let dif = 1000/time;
    let lineMove = setInterval(function(){
        line.style.width = `${Number(line.style.width.replace('%','')) - dif}%`
        if(Number(line.style.width.replace('%','')) < 1 ){
            clearInterval(lineMove);
            document.body.removeChild(block);
        }

    }, 10);
}
displayMessage('mes-error','Test header','test text info',4000);