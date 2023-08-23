 var  aparecer = document.getElementById('nome');
 console.log(aparecer);


 document.getElementById('botao').addEventListener("click", function(){
    console.log('teste eventListener');
    console.log('testeBotao');
    console.log(aparecer.style.display);
    if(aparecer.style.display === 'block'){
        aparecer.style.display = 'none'; 
    }else{
        aparecer.style.display = 'block';
    }
 });




