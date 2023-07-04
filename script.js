document.body.onload = createGrid;

const title = document.head.querySelector('title');

title.innerText = 'Etch-A-Sketch Project';



const destDiv = document.getElementById('destDiv');
    destDiv.style.display = 'flex';
    destDiv.style.flexDirection = 'row';
    destDiv.style.justifyContent = 'space-around';
    destDiv.style.backgroundColor = 'red';
    destDiv.style.borderStyle = 'solid';
    destDiv.style.borderRadius = '15px';
    destDiv.style.paddingTop= '5px';
    destDiv.style.paddingBottom = '15px';

const colorBtnDiv = document.createElement('form');
    colorBtnDiv.style.display = 'flex';
    colorBtnDiv.style.flexDirection = 'column';
    colorBtnDiv.style.justifyContent = 'flex-end';

const colorBtn = document.createElement('button');
    colorBtn.style.borderRadius = '100%';
    colorBtn.style.fontWeight = '700';
    colorBtn.style.fontSize = '25px';
    colorBtn.style.height = '150px';
    colorBtn.style.width = '150px';
    

    colorBtn.setAttribute('type','button');


colorBtnDiv.appendChild(colorBtn);

const centerDiv = document.createElement('div');
    centerDiv.style.display = 'flex';
    centerDiv.style.flexDirection = 'column';


const divContainer = document.createElement('div');
    divContainer.className = "container";
    divContainer.setAttribute('id','container');


divContainer.style.width = "800px";
divContainer.style.height = "800px";
divContainer.style.display = "flex";
divContainer.style.flexDirection = "column";
divContainer.style.border = "5px";
divContainer.style.borderStyle = "inset";
divContainer.style.alignContent = 'center';
divContainer.style.marginBottom = '60px';



const btnCont = document.createElement('div');
    btnCont.style.alignContent = 'center';
    btnCont.style.width = '100%'
    btnCont.style.paddingTop = '5px';
    btnCont.style.paddingBottom = '10px';
    btnCont.style.display = 'flex';
    btnCont.style.flexDirection = 'row';
    btnCont.style.justifyContent = 'center';
    btnCont.style.alignContent = 'center';
    
   
const resizeBtn = document.createElement('button');
    resizeBtn.innerText = "Resize Grid";
    resizeBtn.style.width = "200px";
    resizeBtn.style.fontSize = "20px";
    resizeBtn.style.fontWeight = '700';
    resizeBtn.style.color = "red";
    resizeBtn.style.padding = '8px';
    resizeBtn.style.borderStyle = "ridge";
    resizeBtn.style.borderWidth = "5px"
    resizeBtn.style.backgroundColor = "black";
    

btnCont.appendChild(resizeBtn);
centerDiv.appendChild(btnCont);
centerDiv.appendChild(divContainer);
    
    
const resetBtnDiv = document.createElement('div');
    resetBtnDiv.style.display = 'flex';
    resetBtnDiv.style.flexDirection = 'column';
    resetBtnDiv.style.justifyContent = 'flex-end';


const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Reset';
    resetBtn.style.borderRadius = '100%';
    resetBtn.style.fontWeight = '700';
    resetBtn.style.fontSize = '25px';
    resetBtn.style.height = '150px';
    resetBtn.style.width = '150px';

    resetBtn.addEventListener('click',() => {
                
        divContainer.innerHTML = "";
    
        createGrid();
    
    })

    

resetBtnDiv.appendChild(resetBtn);



destDiv.appendChild(colorBtnDiv);
destDiv.appendChild(centerDiv);
destDiv.appendChild(resetBtnDiv);

                 
                 
document.body.appendChild(destDiv);


document.body.style.backgroundColor = "darkgray";
document.body.style.position = 'relative';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';


let modal = document.createElement('section');
    modal.className = 'modal hidden';
    modal.style.position = 'absolute';
    modal.style.top = '30%';
    modal.style.right = '59%';

let gridDialog = document.createElement('dialog');
    gridDialog.setAttribute('id','gridSizeDialog');
    gridDialog.className = 'gridDialog';
    gridDialog.style.padding = '100px';    
    gridDialog.style.display = 'flex';
    gridDialog.style.flexDirection = 'column';
    gridDialog.style.alignContent = 'center';
    gridDialog.style.border = '2px';
    gridDialog.style.borderStyle = 'solid';
    gridDialog.style.borderRadius = '15px';
    gridDialog.style.padding = '10px';
    gridDialog.style.backgroundColor = 'red';
    gridDialog.style.boxShadow = '5px 5px 5px 0px';

let dialogForm = document.createElement('form');
    dialogForm.setAttribute('id','user-grid-size-input')
    dialogForm.setAttribute('method','dialog');
    

let textArea = document.createElement('div');
    textArea.style.display = 'flex';
    textArea.style.flexDirection = 'column';
    textArea.style.alignContent = 'center';

let inputLabel = document.createElement('label');
    inputLabel.innerText = 'Enter a number between 10 & 100 to change grid size: \n\n';
    inputLabel.style.fontWeight = '700';

let formInput = document.createElement('input');
    formInput.setAttribute('type','number');
    formInput.setAttribute('min','10');
    formInput.setAttribute('max','100');
    formInput.style.height = '150px';
    formInput.style.fontSize = '100px';
    formInput.style.backgroundColor = 'lightgray';
    formInput.style.borderStyle = 'inset';
    formInput.style.borderWidth = '2px';
    formInput.style.textAlign = 'center';

let buttonDiv = document.createElement('div');
    buttonDiv.style.justifyContent = 'space-between';
    buttonDiv.style.display = 'flex';
    buttonDiv.style.flexDirection = 'row';
    
let inputSubmit = document.createElement('button');
    inputSubmit.setAttribute('type','submit');
    inputSubmit.setAttribute('value','16');  //// Value set to default grid size 
    inputSubmit.innerText = "Submit";
    inputSubmit.setAttribute('id','inputSubmit');
    inputSubmit.style.marginTop = '10px';
    inputSubmit.style.fontWeight = '700';
    inputSubmit.style.borderRadius = '100%';
    inputSubmit.style.height = '60px';

    
let formCancel = document.createElement('button');
    formCancel.setAttribute('type','submit');
    formCancel.setAttribute('value','cancel');
    formCancel.setAttribute('form-method','dialog');
    formCancel.setAttribute('novalidate','true');
    formCancel.innerText = 'Cancel';
    formCancel.style.marginTop = '10px';
    formCancel.style.fontWeight = '700';
    formCancel.style.borderRadius = '100%';
    formCancel.style.height = '60px';

    
textArea.appendChild(inputLabel);
textArea.appendChild(formInput);
dialogForm.appendChild(textArea);

buttonDiv.appendChild(inputSubmit);
buttonDiv.appendChild(formCancel);
dialogForm.appendChild(buttonDiv);

gridDialog.appendChild(dialogForm);
modal.appendChild(gridDialog);
document.body.appendChild(modal);




    resizeBtn.addEventListener('mouseover', function(){
        const orgColor = resizeBtn.style.color;
    
        if (orgColor === 'red'){
            resizeBtn.style.color = "green";
            resizeBtn.style.backgroundColor = "darkgrey";
        } 
    })    
        
        resizeBtn.addEventListener('mouseout', (event) => {
    
        event.target.style.color = "red";
            event.target.style.backgroundColor = "black";
        }
        )

            

function createGrid(){

    const showModal = () => {
        modal.classList.remove('hidden');
    }

    resizeBtn.addEventListener('click',showModal);
    
    formInput.addEventListener('change', (e) => {
        inputSubmit.value = formInput.value;
    
    });

    

const closeModal = () => {
    modal.classList.add('hidden');
};
    formCancel.addEventListener('click',closeModal);    
    
    inputSubmit.addEventListener('click', () => { // Empties the outside div by defining its innerHTML as empty
        divContainer.innerHTML = "";
        createGrid();
        closeModal();
    })

    


for (y = 1; y <= inputSubmit.value; y++)
            {  
                 const rowDivs = document.createElement('div');
            
                    rowDivs.className = `${y}`;
            
                    rowDivs.style.clear = "both";
            
                    rowDivs.style.flex = "1 1 0";
            
                    rowDivs.style.display = "flex";
                    
                    rowDivs.style.float = 'left';
                                 
            
                for (x = 1; x <= inputSubmit.value; x++){
            
                const gridDivs = document.createElement('div');
            
                    gridDivs.className = "gridDivs";

      


        rowDivs.appendChild(gridDivs);

    
            
            if (y < inputSubmit.value){
            
                if (x < inputSubmit.value){     
            
                    gridDivs.style.flexGrow = "1";
                    gridDivs.style.borderBottom = '2px';
                    gridDivs.style.borderBottomStyle = 'solid';
                    gridDivs.style.borderRight = '2px';
                    gridDivs.style.borderRightStyle = 'solid';
                    gridDivs.style.borderColor = 'black';
                    gridDivs.style.float = "left"; // allows divs to be in row
            
                    
                } else { 
                                        // special borders for divs that will be on ends so that they don't double with container border
                    gridDivs.style.flex = "1 1 0"; 
                    gridDivs.style.borderBottom = '2px';
                    gridDivs.style.borderBottomStyle = 'solid';
                    gridDivs.style.float = "left";
            
                } 
            
            } else {
            
                if (x < inputSubmit.value){     
            
                    gridDivs.style.flex = "1 1 0"; 
                    gridDivs.style.borderRight = '2px';
                    gridDivs.style.borderRightStyle = 'solid';
                    gridDivs.style.borderColor = 'black';
                    gridDivs.style.float = "left"; // allows divs to be in row
            
                    
                } else { 
                                        // special borders for divs that will be on ends so that they don't double with container border
                    gridDivs.style.flex = "1 1 0";  
                    gridDivs.style.float = "left";
                    
            
                }

            
}               
const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
            return 'rgb('+r+','+g+','+b+')';
}


function setBlack(){
    gridDivs.style.backgroundColor = 'black';
}

function setRgb(){
    gridDivs.style.backgroundColor = randomRgbColor();
}

function drawInBlack(){

    gridDivs.addEventListener('mouseover',setBlack);
    colorBtn.innerText = 'Click for Random Colors';
    colorBtn.addEventListener('click',drawInRandomRgb);
}


drawInBlack();
            

function backToBlack(){
        gridDivs.style.backgroundColor = 'lightgray';
        gridDivs.removeEventListener('mouseover',setRgb);
        gridDivs.addEventListener('mouseover',setBlack);
        colorBtn.innerText = 'Click for Random Colors';
        colorBtn.removeEventListener('click',backToBlack);
        colorBtn.addEventListener('click',drawInRandomRgb);
     }


function drawInRandomRgb(){
    gridDivs.style.backgroundColor = 'lightgray';
    gridDivs.removeEventListener('mouseover',setBlack);
    gridDivs.addEventListener('mouseover',setRgb);
    colorBtn.removeEventListener('click',drawInRandomRgb);
    colorBtn.addEventListener('click',backToBlack);
    colorBtn.innerText = 'Draw in Black';
}



                
                 }   divContainer.appendChild(rowDivs);
                 
                 
                
                 
                 

                }
            }
        

          
          
                 

                  
            
            

                
                    
                

            




                  
                
    





                


        
        
             
              

      
    
            
            
            
     
        



   
  

        
            
               
                

            
            

                    

        

    
          
           






        
    
        
















   


 

        






 
        











    




        
        
    
 