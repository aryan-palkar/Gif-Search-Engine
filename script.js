// Search bar implementation
function storeInput(){
    let inputValue = document.querySelector(".search-bar").value;
    console.log(inputValue);
}

document.querySelector(".search-button")
.addEventListener("click", storeInput);

document.querySelector(".search-bar")
.addEventListener("keyup", function(e){
    if(e.key == "Enter") 
    {
        storeInput();
    }
});

// API call

