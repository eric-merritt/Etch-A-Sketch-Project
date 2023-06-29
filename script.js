const divContainer = document.getElementById('container');

divContainer.style.flexDirection = "row";


for (x = 1; x <= 256; x++){ // Loop for creating 256 divs. Starting with 1 in case I need to use every 16 divs to create new rows 

    
    const gridDivs = document.createElement('div');


    gridDivs.className = `${x}`; // iterating each div with a different class so they can be ordered

    
    if (x != 16 && x % 16 != 0){     // special borders for divs that will be on ends so that they don't double with container border
        gridDivs.style.width = '50px';
        gridDivs.style.height = '50px';
        gridDivs.style.borderBottom = '2px';
        gridDivs.style.borderBottomStyle = 'solid';
        gridDivs.style.borderRight = '2px';
        gridDivs.style.borderRightStyle = 'solid';
        gridDivs.style.borderColor = 'black';
        gridDivs.style.float = "left"; // allows divs to be in row
    } else {
        gridDivs.style.width = '50px';
        gridDivs.style.height = '50px';
        gridDivs.style.borderBottom = '2px';
        gridDivs.style.borderBottomStyle = 'solid';
    }
    
    
        
document.getElementById('container').appendChild(gridDivs);

    
}






    




        
        
    
 