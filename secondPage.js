function setName(){
    var diaryName = document.getElementById("entryName").value;
    document.getElementById("diary").innerHTML = diaryName;
}

function saveButton(){
    var dataEntry = document.getElementById("diaryEntry").value; 
    var titleEntry = document.getElementById("entryName").value; 

    var savedData = dataEntry; 
    var savedTitle = titleEntry; 
    return savedData, savedTitle; 
}