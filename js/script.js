  let field = document.querySelector('.field');
  let ball = document.querySelector('.ball');


    field.onclick = function(event) {
      let fieldPos = field.getBoundingClientRect();
      let mouseX = event.clientX;
      let mouseY = event.clientY;
     

      ball.style.left = mouseX - fieldPos.left - ball.clientHeight / 2 + 'px';
      ball.style.top = mouseY - fieldPos.top - ball.clientWidth / 2 + 'px';

      console.log(fieldPos.top);  
    }