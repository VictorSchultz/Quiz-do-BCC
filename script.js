var questao1 = document.getElementById('questao1');
var questao2 = document.getElementById('questao2');
var questao3 = document.getElementById('questao3');
var questao4 = document.getElementById('questao4');
var questao5 = document.getElementById('questao5');
var questao6 = document.getElementById('questao6');
var questao7 = document.getElementById('questao7');
var questao8 = document.getElementById('questao8');
var questao9 = document.getElementById('questao9');
var questao10 = document.getElementById('questao10');

var divfinal = document.getElementById('divfinal');
var divstart = document.getElementById('start');
var scorefinal = document.getElementById('scorefinal');

var resultado1 = document.getElementById('resultado1');
var resultado2 = document.getElementById('resultado2');
var resultado3 = document.getElementById('resultado3');
var resultado4 = document.getElementById('resultado4');
var resultado5 = document.getElementById('resultado5');
var resultado6 = document.getElementById('resultado6');
var resultado7 = document.getElementById('resultado7');
var resultado8 = document.getElementById('resultado8');
var resultado9 = document.getElementById('resultado9');
var resultado10 = document.getElementById('resultado10');

var right = document.getElementById('right');
var wrong1 = document.getElementById('wrong1');
var wrong2 = document.getElementById('wrong2');
var wrong3 = document.getElementById('wrong3');
var right_2 = document.getElementById('right_2');
var wrong1_2 = document.getElementById('wrong1_2');
var wrong2_2 = document.getElementById('wrong2_2');
var wrong3_2 = document.getElementById('wrong3_2');
var right_3 = document.getElementById('right_3');
var wrong1_3 = document.getElementById('wrong1_3');
var wrong2_3 = document.getElementById('wrong2_3');
var wrong3_3 = document.getElementById('wrong3_3');
var right_4 = document.getElementById('right_4');
var wrong1_4 = document.getElementById('wrong1_4');
var wrong2_4 = document.getElementById('wrong2_4');
var wrong3_4 = document.getElementById('wrong3_4');
var right_5 = document.getElementById('right_5');
var wrong1_5 = document.getElementById('wrong1_5');
var wrong2_5 = document.getElementById('wrong2_5');
var wrong3_5 = document.getElementById('wrong3_5');
var right_6 = document.getElementById('right_6');
var wrong1_6 = document.getElementById('wrong1_6');
var wrong2_6 = document.getElementById('wrong2_6');
var wrong3_6 = document.getElementById('wrong3_6');
var right_7 = document.getElementById('right_7');
var wrong1_7 = document.getElementById('wrong1_7');
var wrong2_7 = document.getElementById('wrong2_7');
var wrong3_7 = document.getElementById('wrong3_7');
var right_8 = document.getElementById('right_8');
var wrong1_8 = document.getElementById('wrong1_8');
var wrong2_8 = document.getElementById('wrong2_8');
var wrong3_8 = document.getElementById('wrong3_8');
var right_9 = document.getElementById('right_9');
var wrong1_9 = document.getElementById('wrong1_9');
var wrong2_9 = document.getElementById('wrong2_9');
var wrong3_9 = document.getElementById('wrong3_9');
var right_10 = document.getElementById('right_10');
var wrong1_10 = document.getElementById('wrong1_10');
var wrong2_10 = document.getElementById('wrong2_10');
var wrong3_10 = document.getElementById('wrong3_10');
var criadores = document.getElementById('criadores');
var pontos = 0;
function start(){
    questao1.style.display = 'block';
    divstart.style.display = 'none';
    playstart();
}

function restart(){
    divfinal.style.display = 'none';
    questao1.style.display = 'block';
    pontos = 0;
    playstart();
    right.disabled = false;
    wrong1.disabled = false;
    wrong2.disabled = false;
    wrong3.disabled = false;
    right_2.disabled = false;
    wrong1_2.disabled = false;
    wrong2_2.disabled = false;
    wrong3_2.disabled = false;
    right_3.disabled = false;
    wrong1_3.disabled = false;
    wrong2_3.disabled = false;
    wrong3_3.disabled = false;
    right_4.disabled = false;
    wrong1_4.disabled = false;
    wrong2_4.disabled = false;
    wrong3_4.disabled = false;
    right_5.disabled = false;
    wrong1_5.disabled = false;
    wrong2_5.disabled = false;
    wrong3_5.disabled = false;
    right_6.disabled = false;
    wrong1_6.disabled = false;
    wrong2_6.disabled = false;
    wrong3_6.disabled = false;
    right_7.disabled = false;
    wrong1_7.disabled = false;
    wrong2_7.disabled = false;
    wrong3_7.disabled = false;
    right_8.disabled = false;
    wrong1_8.disabled = false;
    wrong2_8.disabled = false;
    wrong3_8.disabled = false;
    right_9.disabled = false;
    wrong1_9.disabled = false;
    wrong2_9.disabled = false;
    wrong3_9.disabled = false;
    right_10.disabled = false;
    wrong1_10.disabled = false;
    wrong2_10.disabled = false;
    wrong3_10.disabled = false;

    resultado1.style.display = 'none';
    resultado2.style.display = 'none';
    resultado3.style.display = 'none';
    resultado4.style.display = 'none';
    resultado5.style.display = 'none';
    resultado6.style.display = 'none';
    resultado7.style.display = 'none';
    resultado8.style.display = 'none';
    resultado9.style.display = 'none';
    resultado10.style.display = 'none';
    
            right.style.backgroundColor = "rgb(15,15,15)";
            wrong1.style.backgroundColor = "rgb(15,15,15)";
            wrong2.style.backgroundColor = "rgb(15,15,15)";
            wrong3.style.backgroundColor = "rgb(15,15,15)";
            right.style.color = 'rgb(26,175,230)';
            wrong1.style.color = 'rgb(26,175,230)';
            wrong2.style.color = 'rgb(26,175,230)';
            wrong3.style.color = 'rgb(26,175,230)';
            right_2.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_2.style.backgroundColor = 'rgb(15,15,15)';
            wrong2_2.style.backgroundColor = 'rgb(15,15,15)';
            wrong3_2.style.backgroundColor = 'rgb(15,15,15)';
            right_2.style.color = 'rgb(26,175,230)';
            wrong1_2.style.color = 'rgb(26,175,230)';
            wrong2_2.style.color = 'rgb(26,175,230)';
            wrong3_2.style.color = 'rgb(26,175,230)';
            right_3.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_3.style.backgroundColor = "rgb(15,15,15)";
            wrong2_3.style.backgroundColor = "rgb(15,15,15)";
            wrong3_3.style.backgroundColor = "rgb(15,15,15)";
            right_3.style.color = 'rgb(26,175,230)';
            wrong1_3.style.color = 'rgb(26,175,230)';
            wrong2_3.style.color = 'rgb(26,175,230)';
            wrong3_3.style.color = 'rgb(26,175,230)';
            right_4.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_4.style.backgroundColor = "rgb(15,15,15)";
            wrong2_4.style.backgroundColor = "rgb(15,15,15)";
            wrong3_4.style.backgroundColor = "rgb(15,15,15)";
            right_4.style.color = 'rgb(26,175,230)';
            wrong1_4.style.color = 'rgb(26,175,230)';
            wrong2_4.style.color = 'rgb(26,175,230)';
            wrong3_4.style.color = 'rgb(26,175,230)';
            right_5.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_5.style.backgroundColor = "rgb(15,15,15)";
            wrong2_5.style.backgroundColor = "rgb(15,15,15)";
            wrong3_5.style.backgroundColor = "rgb(15,15,15)";
            right_5.style.color = 'rgb(26,175,230)';
            wrong1_5.style.color = 'rgb(26,175,230)';
            wrong2_5.style.color = 'rgb(26,175,230)';
            wrong3_5.style.color = 'rgb(26,175,230)';
            right_6.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_6.style.backgroundColor = "rgb(15,15,15)";
            wrong2_6.style.backgroundColor = "rgb(15,15,15)";
            wrong3_6.style.backgroundColor = "rgb(15,15,15)";
            right_6.style.color = 'rgb(26,175,230)';
            wrong1_6.style.color = 'rgb(26,175,230)';
            wrong2_6.style.color = 'rgb(26,175,230)';
            wrong3_6.style.color = 'rgb(26,175,230)';
            right_7.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_7.style.backgroundColor = "rgb(15,15,15)";
            wrong2_7.style.backgroundColor = "rgb(15,15,15)";
            wrong3_7.style.backgroundColor = "rgb(15,15,15)";
            right_7.style.color = 'rgb(26,175,230)';
            wrong1_7.style.color = 'rgb(26,175,230)';
            wrong2_7.style.color = 'rgb(26,175,230)';
            wrong3_7.style.color = 'rgb(26,175,230)';
            right_8.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_8.style.backgroundColor = "rgb(15,15,15)";
            wrong2_8.style.backgroundColor = "rgb(15,15,15)";
            wrong3_8.style.backgroundColor = "rgb(15,15,15)";
            right_8.style.color = 'rgb(26,175,230)';
            wrong1_8.style.color = 'rgb(26,175,230)';
            wrong2_8.style.color = 'rgb(26,175,230)';
            wrong3_8.style.color = 'rgb(26,175,230)';
            right_9.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_9.style.backgroundColor = "rgb(15,15,15)";
            wrong2_9.style.backgroundColor = "rgb(15,15,15)";
            wrong3_9.style.backgroundColor = "rgb(15,15,15)";
            right_9.style.color = 'rgb(26,175,230)';
            wrong1_9.style.color = 'rgb(26,175,230)';
            wrong2_9.style.color = 'rgb(26,175,230)';
            wrong3_9.style.color = 'rgb(26,175,230)';
            right_10.style.backgroundColor = 'rgb(15,15,15)';
            wrong1_10.style.backgroundColor = "rgb(15,15,15)";
            wrong2_10.style.backgroundColor = "rgb(15,15,15)";
            wrong3_10.style.backgroundColor = "rgb(15,15,15)";
            right_10.style.color = 'rgb(26,175,230)';
            wrong1_10.style.color = 'rgb(26,175,230)';
            wrong2_10.style.color = 'rgb(26,175,230)';
            wrong3_10.style.color = 'rgb(26,175,230)';
            criadores.style.display = 'none';
}
function resposta(n,r){
    if(n==1){
        
        if(r=='A'){
            pontos+=1;
            resultado1.style.display = 'block';
            resultado1.textContent = "Você acertou!!!";
            right.disabled = true;
            wrong1.disabled = true;
            wrong2.disabled = true;
            wrong3.disabled = true;
            playscored();
            questao1.style.height = '520px';
            right.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1.style.backgroundColor = "#e84141";
            wrong2.style.backgroundColor = "#e84141";
            wrong3.style.backgroundColor = "#e84141";
            right.style.color = 'black';
            wrong1.style.color = 'black';
            wrong2.style.color = 'black';
            wrong3.style.color = 'black';
            resultado1.style.color = 'rgb(116, 240, 72)';
            
        }
        else{
            resultado1.style.display = 'block';
            resultado1.textContent = "Você errou!!!";
            right.disabled = true;
            wrong1.disabled = true;
            wrong2.disabled = true;
            wrong3.disabled = true;
            playfail();
            questao1.style.height = '520px';
            right.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1.style.backgroundColor = "#e84141";
            wrong2.style.backgroundColor = "#e84141";
            wrong3.style.backgroundColor = "#e84141";
            right.style.color = 'black';
            wrong1.style.color = 'black';
            wrong2.style.color = 'black';
            wrong3.style.color = 'black';
            resultado1.style.color = '#e84141';
        }
    }
    if(n==2){
        
        if(r=='B'){
            pontos+=1;
            resultado2.style.display = 'block';
            resultado2.textContent = "Você acertou!!!";
            right_2.disabled = true;
            wrong1_2.disabled = true;
            wrong2_2.disabled = true;
            wrong3_2.disabled = true;
            playscored();
            questao2.style.height = '520px';
            right_2.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_2.style.backgroundColor = "#e84141";
            wrong2_2.style.backgroundColor = "#e84141";
            wrong3_2.style.backgroundColor = "#e84141";
            right_2.style.color = 'black';
            wrong1_2.style.color = 'black';
            wrong2_2.style.color = 'black';
            wrong3_2.style.color = 'black';
            resultado2.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado2.style.display = 'block';
            resultado2.textContent = "Você errou!!!";
            right_2.disabled = true;
            wrong1_2.disabled = true;
            wrong2_2.disabled = true;
            wrong3_2.disabled = true;
            playfail();
            questao2.style.height = '520px';
            right_2.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_2.style.backgroundColor = "#e84141";
            wrong2_2.style.backgroundColor = "#e84141";
            wrong3_2.style.backgroundColor = "#e84141";
            right_2.style.color = 'black';
            wrong1_2.style.color = 'black';
            wrong2_2.style.color = 'black';
            wrong3_2.style.color = 'black';
            resultado2.style.color = '#e84141';
            }
    }
    if(n==3){
        
    
        if(r=='C'){
            pontos+=1;
            resultado3.style.display = 'block';
            resultado3.textContent = "Você acertou!!!";
            right_3.disabled = true;
            wrong1_3.disabled = true;
            wrong2_3.disabled = true;
            wrong3_3.disabled = true;
            playscored();
            questao3.style.height = '590px';
            right_3.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_3.style.backgroundColor = "#e84141";
            wrong2_3.style.backgroundColor = "#e84141";
            wrong3_3.style.backgroundColor = "#e84141";
            right_3.style.color = 'black';
            wrong1_3.style.color = 'black';
            wrong2_3.style.color = 'black';
            wrong3_3.style.color = 'black';
            resultado3.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado3.style.display = 'block';
            resultado3.textContent = "Você errou!!!";
            right_3.disabled = true;
            wrong1_3.disabled = true;
            wrong2_3.disabled = true;
            wrong3_3.disabled = true;
            playfail();
            questao3.style.height = '590px';
            right_3.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_3.style.backgroundColor = "#e84141";
            wrong2_3.style.backgroundColor = "#e84141";
            wrong3_3.style.backgroundColor = "#e84141";
            right_3.style.color = 'black';
            wrong1_3.style.color = 'black';
            wrong2_3.style.color = 'black';
            wrong3_3.style.color = 'black';
            resultado3.style.color = '#e84141';
        }
        
    }
    if(n==4){
        
    
        if(r=='D'){
            pontos+=1;
            resultado4.style.display = 'block';
            resultado4.textContent = "Você acertou!!!";
            right_4.disabled = true;
            wrong1_4.disabled = true;
            wrong2_4.disabled = true;
            wrong3_4.disabled = true;
            playscored();
            questao4.style.height = '520px';
            right_4.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_4.style.backgroundColor = "#e84141";
            wrong2_4.style.backgroundColor = "#e84141";
            wrong3_4.style.backgroundColor = "#e84141";
            right_4.style.color = 'black';
            wrong1_4.style.color = 'black';
            wrong2_4.style.color = 'black';
            wrong3_4.style.color = 'black';
            resultado4.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado4.style.display = 'block';
            resultado4.textContent = "Você errou!!!";
            right_4.disabled = true;
            wrong1_4.disabled = true;
            wrong2_4.disabled = true;
            wrong3_4.disabled = true;
            playfail();
            questao4.style.height = '520px';
            right_4.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_4.style.backgroundColor = "#e84141";
            wrong2_4.style.backgroundColor = "#e84141";
            wrong3_4.style.backgroundColor = "#e84141";
            right_4.style.color = 'black';
            wrong1_4.style.color = 'black';
            wrong2_4.style.color = 'black';
            wrong3_4.style.color = 'black';
            resultado4.style.color = '#e84141';
        }
        
    }
    if(n==5){
        
    
        if(r=='C'){
            pontos+=1;
            resultado5.style.display = 'block';
            resultado5.textContent = "Você acertou!!!";
            right_5.disabled = true;
            wrong1_5.disabled = true;
            wrong2_5.disabled = true;
            wrong3_5.disabled = true;
            playscored();
            questao5.style.height = '540px';
            right_5.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_5.style.backgroundColor = "#e84141";
            wrong2_5.style.backgroundColor = "#e84141";
            wrong3_5.style.backgroundColor = "#e84141";
            right_5.style.color = 'black';
            wrong1_5.style.color = 'black';
            wrong2_5.style.color = 'black';
            wrong3_5.style.color = 'black';
            resultado5.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado5.style.display = 'block';
            resultado5.textContent = "Você errou!!!";
            right_5.disabled = true;
            wrong1_5.disabled = true;
            wrong2_5.disabled = true;
            wrong3_5.disabled = true;
            playfail();
            questao5.style.height = '540px';
            right_5.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_5.style.backgroundColor = "#e84141";
            wrong2_5.style.backgroundColor = "#e84141";
            wrong3_5.style.backgroundColor = "#e84141";
            right_5.style.color = 'black';
            wrong1_5.style.color = 'black';
            wrong2_5.style.color = 'black';
            wrong3_5.style.color = 'black';
            resultado5.style.color = '#e84141';
        }
        
    }
    if(n==6){
        
    
        if(r=='B'){
            pontos+=1;
            resultado6.style.display = 'block';
            resultado6.textContent = "Você acertou!!!";
            right_6.disabled = true;
            wrong1_6.disabled = true;
            wrong2_6.disabled = true;
            wrong3_6.disabled = true;
            playscored();
            questao6.style.height = '520px';
            right_6.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_6.style.backgroundColor = "#e84141";
            wrong2_6.style.backgroundColor = "#e84141";
            wrong3_6.style.backgroundColor = "#e84141";
            right_6.style.color = 'black';
            wrong1_6.style.color = 'black';
            wrong2_6.style.color = 'black';
            wrong3_6.style.color = 'black';
            resultado6.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado6.style.display = 'block';
            resultado6.textContent = "Você errou!!!";
            right_6.disabled = true;
            wrong1_6.disabled = true;
            wrong2_6.disabled = true;
            wrong3_6.disabled = true;
            playfail();
            questao6.style.height = '520px';
            right_6.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_6.style.backgroundColor = "#e84141";
            wrong2_6.style.backgroundColor = "#e84141";
            wrong3_6.style.backgroundColor = "#e84141";
            right_6.style.color = 'black';
            wrong1_6.style.color = 'black';
            wrong2_6.style.color = 'black';
            wrong3_6.style.color = 'black';
            resultado6.style.color = '#e84141';
        }
        
    }
    if(n==7){
        
    
        if(r=='A'){
            pontos+=1;
            resultado7.style.display = 'block';
            resultado7.textContent = "Você acertou!!!";
            right_7.disabled = true;
            wrong1_7.disabled = true;
            wrong2_7.disabled = true;
            wrong3_7.disabled = true;
            playscored();
            questao7.style.height = '530px';
            right_7.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_7.style.backgroundColor = "#e84141";
            wrong2_7.style.backgroundColor = "#e84141";
            wrong3_7.style.backgroundColor = "#e84141";
            right_7.style.color = 'black';
            wrong1_7.style.color = 'black';
            wrong2_7.style.color = 'black';
            wrong3_7.style.color = 'black';
            resultado7.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado7.style.display = 'block';
            resultado7.textContent = "Você errou!!!";
            right_7.disabled = true;
            wrong1_7.disabled = true;
            wrong2_7.disabled = true;
            wrong3_7.disabled = true;
            playfail();
            questao7.style.height = '530px';
            right_7.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_7.style.backgroundColor = "#e84141";
            wrong2_7.style.backgroundColor = "#e84141";
            wrong3_7.style.backgroundColor = "#e84141";
            right_7.style.color = 'black';
            wrong1_7.style.color = 'black';
            wrong2_7.style.color = 'black';
            wrong3_7.style.color = 'black';
            resultado7.style.color = '#e84141';
        }
        
    }
    if(n==8){
        
    
        if(r=='B'){
            pontos+=1;
            resultado8.style.display = 'block';
            resultado8.textContent = "Você acertou!!!";
            right_8.disabled = true;
            wrong1_8.disabled = true;
            wrong2_8.disabled = true;
            wrong3_8.disabled = true;
            playscored();
            questao8.style.height = '540px';
            right_8.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_8.style.backgroundColor = "#e84141";
            wrong2_8.style.backgroundColor = "#e84141";
            wrong3_8.style.backgroundColor = "#e84141";
            right_8.style.color = 'black';
            wrong1_8.style.color = 'black';
            wrong2_8.style.color = 'black';
            wrong3_8.style.color = 'black';
            resultado8.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado8.style.display = 'block';
            resultado8.textContent = "Você errou!!!";
            right_8.disabled = true;
            wrong1_8.disabled = true;
            wrong2_8.disabled = true;
            wrong3_8.disabled = true;
            playfail();
            questao8.style.height = '540px';
            right_8.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_8.style.backgroundColor = "#e84141";
            wrong2_8.style.backgroundColor = "#e84141";
            wrong3_8.style.backgroundColor = "#e84141";
            right_8.style.color = 'black';
            wrong1_8.style.color = 'black';
            wrong2_8.style.color = 'black';
            wrong3_8.style.color = 'black';
            resultado8.style.color = '#e84141';
        }
        
    }
    if(n==9){
        
    
        if(r=='C'){
            pontos+=1;
            resultado9.style.display = 'block';
            resultado9.textContent = "Você acertou!!!";
            right_9.disabled = true;
            wrong1_9.disabled = true;
            wrong2_9.disabled = true;
            wrong3_9.disabled = true;
            playscored();
            questao9.style.height = '530px';
            right_9.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_9.style.backgroundColor = "#e84141";
            wrong2_9.style.backgroundColor = "#e84141";
            wrong3_9.style.backgroundColor = "#e84141";
            right_9.style.color = 'black';
            wrong1_9.style.color = 'black';
            wrong2_9.style.color = 'black';
            wrong3_9.style.color = 'black';
            resultado9.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado9.style.display = 'block';
            resultado9.textContent = "Você errou!!!";
            right_9.disabled = true;
            wrong1_9.disabled = true;
            wrong2_9.disabled = true;
            wrong3_9.disabled = true;
            playfail();
            questao9.style.height = '530px';
            right_9.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_9.style.backgroundColor = "#e84141";
            wrong2_9.style.backgroundColor = "#e84141";
            wrong3_9.style.backgroundColor = "#e84141";
            right_9.style.color = 'black';
            wrong1_9.style.color = 'black';
            wrong2_9.style.color = 'black';
            wrong3_9.style.color = 'black';
            resultado9.style.color = '#e84141';
        }
        
    }
    if(n==10){
        
    
        if(r=='D'){
            pontos+=1;
            resultado10.style.display = 'block';
            resultado10.textContent = "Você acertou!!!";
            right_10.disabled = true;
            wrong1_10.disabled = true;
            wrong2_10.disabled = true;
            wrong3_10.disabled = true;
            playscored();
            questao10.style.height = '530px';
            right_10.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_10.style.backgroundColor = "#e84141";
            wrong2_10.style.backgroundColor = "#e84141";
            wrong3_10.style.backgroundColor = "#e84141";
            right_10.style.color = 'black';
            wrong1_10.style.color = 'black';
            wrong2_10.style.color = 'black';
            wrong3_10.style.color = 'black';
            resultado10.style.color = 'rgb(116, 240, 72)';
        }
        else{
            resultado10.style.display = 'block';
            resultado10.textContent = "Você errou!!!";
            right_10.disabled = true;
            wrong1_10.disabled = true;
            wrong2_10.disabled = true;
            wrong3_10.disabled = true;
            playfail();
            questao10.style.height = '530px';
            right_10.style.backgroundColor = 'rgb(116, 240, 72)';
            wrong1_10.style.backgroundColor = "#e84141";
            wrong2_10.style.backgroundColor = "#e84141";
            wrong3_10.style.backgroundColor = "#e84141";
            right_10.style.color = 'black';
            wrong1_10.style.color = 'black';
            wrong2_10.style.color = 'black';
            wrong3_10.style.color = 'black';
            resultado10.style.color = '#e84141';
        }
        
    }
}
function next(n){
    playnext();
    if(n==1){
        questao1.style.display = 'none';
        questao2.style.display = 'block';
       
    }
    if(n==2){
        questao2.style.display = 'none';
        questao3.style.display = 'block';
    }
    if(n==3){
        questao3.style.display = 'none';
        questao4.style.display = 'block';
    }
    if(n==4){
        questao4.style.display = 'none';
        questao5.style.display = 'block';
    }
    if(n==5){
        questao5.style.display = 'none';
        questao6.style.display = 'block';
    }
    if(n==6){
        questao6.style.display = 'none';
        questao7.style.display = 'block';
    }
    if(n==7){
        questao7.style.display = 'none';
        questao8.style.display = 'block';
    }
    if(n==8){
        questao8.style.display = 'none';
        questao9.style.display = 'block';
    }
    if(n==9){
        questao9.style.display = 'none';
        questao10.style.display = 'block';
    }
    if(n==10){
        questao10.style.display = 'none';
        divfinal.style.display = 'block';
        scorefinal.textContent = 'Seu score foi: ' + pontos;
        playwin();
        criadores.style.display = 'block';
    }
    
}
function playscored(){
    var audio = new Audio('scored.wav');
    audio.play();
}
function playwin(){
    var audio = new Audio('win.wav');
    audio.play();
}
function playfail(){
    var audio = new Audio('fail.wav');
    audio.play();
}
function playstart(){
    var audio = new Audio('start.wav');
    audio.play();
}
function playnext(){
    var audio = new Audio('next.wav');
    audio.play();
}