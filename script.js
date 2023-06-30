
const divContainer = document.getElementById('container');


divContainer.style.width = "900px";
divContainer.style.height = "900px";
divContainer.style.display = "flex";
divContainer.style.flex = "1 1 0";
divContainer.style.flexDirection = "column";
divContainer.style.border = "2px";
divContainer.style.borderStyle = "solid";
divContainer.style.alignContent = 'center';
divContainer.style.margin = "auto";

const btnCont = document.createElement('div');
    btnCont.style.width = "900px";
    btnCont.style.alignContent = 'center';
    btnCont.style.margin = 'auto';
    btnCont.style.padding = '10px';
    btnCont.style.display = 'flex';
    btnCont.style.flexDirection = "column";
    
const gridSizer = document.createElement('button');
    gridSizer.innerText = "Resize Grid";
    gridSizer.style.fontSize = "20px";
    gridSizer.style.color = "red";
    gridSizer.style.padding = '8px';
    gridSizer.style.borderStyle = "ridge";
    gridSizer.style.borderWidth = "5px"
    gridSizer.style.backgroundColor = "black";  
  


btnCont.appendChild(gridSizer);

document.body.appendChild(btnCont);

document.body.style.backgroundColor = "red";
document.body.style.paddingTop = "auto";



gridSizer.addEventListener('mouseover', function(){
    const orgColor = gridSizer.style.color;

    if (orgColor === 'red'){
        gridSizer.style.color = "green";
        gridSizer.style.backgroundColor = "darkgrey";
    } 
})

    gridSizer.addEventListener('mouseout', (event) => {

    event.target.style.color = "red";
        event.target.style.backgroundColor = "black";
    }
    )

  
            for (y = 1; y <= 16; y++){   

                             
          

    
                const rowDivs = document.createElement('div');
            
                    rowDivs.className = "row"+ `${y}`;
            
                    rowDivs.style.clear = "both";
            
                    rowDivs.style.flex = "1 1 0";
            
                    rowDivs.style.display = "flex";
            
            
                for (x = 1; x <= 16; x++){
            
                const gridDivs = document.createElement('div');
            
                    gridDivs.className = "grid";
            
            
                
                rowDivs.appendChild(gridDivs);
            
                    gridDivs.style.backgroundColor = "white"; //setting original background color
            
            
            gridDivs.addEventListener('mouseover', function(){ //function to add color change on mouseover
                const orgColor = gridDivs.style.backgroundColor;
            
                if (orgColor === 'white'){
                    gridDivs.style.backgroundColor = 'black';
                }
            });
            
            
            if (y < 16){
            
                if (x < 16){     
            
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
            
                if (x < 16){     
            
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
         
        } document.getElementById('container').appendChild(rowDivs);
    }
        
        
             
              

      
    
            
            
            
     
        



   
  

        
            
               
                

            
            

                    

        

    
          
           






        
    
        
















   


 

        






 
        











    




        
        
    
 