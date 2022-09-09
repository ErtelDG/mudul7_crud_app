let names = ["Erica Mustermann", "John Doe", "Peter Mustermann"];
let phoneNumbers = ["015712345678", "015798765432", "0150555555555"];
load();

function render() {
          let content = document.getElementById("content");
          content.innerHTML = "";
          content.innerHTML += `<h1>My Contacts</h1>`;
          content.innerHTML += `
          <div>
      <input type="text" placeholder="Name" name="" id="inputName">
          <input type="text" placeholder="Telefon" name="" id="inputNumber">
      <button onclick="addContact()">Hinzufügen</button>
</div><br>`;

          for (let i = 0; i < names.length; i++) {
                    const name = names[i];
                    const phoneNumber = phoneNumbers[i];
                    let content = document.getElementById("content");
                    content.innerHTML += `
                              <div class="card">
                              <b>Name:</b> ${name}<br>
                              <b>Telefon:</b> ${phoneNumber}<br>
                              <button onclick="deletedContact(${i})">Löschen</button><br>
                              </div>`;
          }
}

//add contact
function addContact() {
          let inputName = document.getElementById("inputName").value;
          let inputNumber = document.getElementById("inputNumber").value;
          names.push(inputName);

          phoneNumbers.push(inputNumber);
          render();
          save();
}

//deleted contact
function deletedContact(i) {
          names.splice(i, 1);
          phoneNumbers.splice(i, 1);
          render();
          save();
}

//LOCAL STORAGE!!
//arrays save in local storage:
function save() {
          let namesAsText = JSON.stringify(names);
          localStorage.setItem("names", namesAsText);
          let phonenumberAsText = JSON.stringify(phoneNumbers);
          localStorage.setItem("phoneNumbers", phonenumberAsText);
}

//get array value from local storage
function load() {
          let namesAsText = localStorage.getItem("names");
          let phonenumberAsText = localStorage.getItem("phoneNumbers");
          if (namesAsText && phonenumberAsText) {
                    names = JSON.parse(namesAsText);
                    phoneNumbers = JSON.parse(phonenumberAsText);
          }
}
