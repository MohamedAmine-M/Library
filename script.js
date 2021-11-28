
//AddingBookFunction
function AddBook(Book) {
    var  StatusButtonValue = "empty fnw";
    var library = document.getElementById("GridCont");
    //creating card
    var card = document.createElement("div");
    var cardAttribute = document.createAttribute("class");
    cardAttribute.value = "card";
    card.setAttributeNode(cardAttribute);
    //creating container
    var container = document.createElement("div");
    var containerAttribute = document.createAttribute("class");
    containerAttribute.value = "container";
    container.setAttributeNode(containerAttribute);
    //creating Title
    var Title = document.createElement("h3");
    var TitleAttribute = document.createAttribute("class");
    TitleAttribute.value = "Title";
    Title.setAttributeNode(TitleAttribute);
    //creating Author
    var Author = document.createElement("h5");
    var AuthorAttribute = document.createAttribute("class");
    AuthorAttribute.value = "Author";
    Author.setAttributeNode(AuthorAttribute);
    //creating pages
    var Pages = document.createElement("h5");
    var PagesAttribute = document.createAttribute("class");
    PagesAttribute.value = "P";
    Pages.setAttributeNode(PagesAttribute);
    //creating Status
    var Status = document.createElement("h5");
    var StatusAttribute = document.createAttribute("class");
    StatusAttribute.value = "Status";
    Status.setAttributeNode(StatusAttribute);
    //Adding to container
    container.appendChild(Title);
    container.appendChild(Author);
    container.appendChild(Pages);
    container.appendChild(Status);
    //Buttons
    // // // Status
    var StatusButton =document.createElement("button");
    var StatusButtonAttribute = document.createAttribute("class");
    var StatusButtonOnclickAttribute = document.createAttribute("onclick");
    StatusButtonOnclickAttribute.value = "ChangeStatus(this)";
    StatusButton.setAttributeNode(StatusButtonOnclickAttribute);
    StatusButtonAttribute.value = "edit";
    StatusButton.setAttributeNode(StatusButtonAttribute);
    if(Book.Status == "Plan To Read"){
      StatusButton.innerHTML =  "Read";
    }else if(Book.Status == "Reading"){
      StatusButton.innerHTML =  "Completed";
    }else{
      StatusButton.style.display = "none";
    }
    
    // // // Remove
    var RemoveButton =document.createElement("button");
    var RemoveButtonAttribute = document.createAttribute("class");
    var RemoveButtonOnclickAttribute = document.createAttribute("onclick");
    RemoveButtonOnclickAttribute.value = "Remove(this)";
    RemoveButton.setAttributeNode(RemoveButtonOnclickAttribute);
    RemoveButtonAttribute.value = "edit";
    RemoveButton.setAttributeNode(RemoveButtonAttribute);
    RemoveButton.innerHTML = "Remove";
    //Data
    Title.innerText =Book.Title;
    Author.innerText = Book.Author;
    Pages.innerText =Book.Pages;
    Status.innerText =Book.Status;
    
//Appending
    card.appendChild(container);
    card.appendChild(StatusButton);
    card.appendChild(RemoveButton);
    library.appendChild(card);

}


//Creating Book Function
function Book(){
  var Title = document.getElementById("TitleInput").value;
  var Author = document.getElementById("AuthorInput").value;
  var pages = document.getElementById("PagesInput").value;
  var Status = document.getElementById("StatusInput");
  var SelectedStatus = Status.options[Status.selectedIndex].text;
  const Book = {Title:Title , Author:Author , Pages: pages, Status:SelectedStatus};
  AddBook(Book)

}

//Change Status Button Function
function ChangeStatus(Button){
  var div =  Button.parentNode.childNodes;
  var status = div[0].childNodes[3].innerHTML;
  if(status == "Plan To Read"){
    div[0].childNodes[3].innerHTML = "Reading";
    Button.innerHTML = "Completed";
  }else if(status == "Reading"){
    div[0].childNodes[3].innerHTML ="Completed";
    Button.style.display = "none"
  }
}
//Remove Button Function 
function Remove(Button){
  var div = Button.parentNode;
  div.remove();
}