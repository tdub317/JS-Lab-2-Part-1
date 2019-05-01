"use strict";

// 2 different not extended Class called AddressBook and Contact
// AddressBook has 1 property: contacts (objects built from Contact class)
// method add() param info makes new Contact instance and add to AddressBook's contacts
// deleteAt() param (index) removes contact at given array index in AddressBook's contacts
// print() logs all AddressBook contact to console
// Contact class with param (name, email, phone, relation) no methods

// Create AddressBook and Contact classes
// Create one instance of AddressBook
// Loop to prompt user to add, delete, print, or quit
// A - if add, prompt for 4 contact properties and call AddressBook add method
// B - if delete, prompt them for index of the contact and call AddressBook deleteAt method
// C - if print, call AddressBook print method
// D - if quit, end program

// while loop


class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add() {
        let name = prompt("name?");
        let email = prompt("email?");
        let phone = prompt("phone?");
        let relation = prompt("relation?");
        let info = new Contact(name, email, phone, relation);
        this.contacts.push(info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    print() {
        console.log(this.contacts);
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const companyBook = new AddressBook();
while (true) {
    let actionPrompt = prompt("Do you want to add, delete, print, or quit?");
    if (actionPrompt === "add") {
        companyBook.add();
    } else if (actionPrompt === "delete") {
        let indexToDelete = prompt("Index to delete?");
        companyBook.deleteAt(indexToDelete);
    } else if (actionPrompt === "print") {
        companyBook.print();
    } else if (actionPrompt === "quit") {
        console.log("Farewell");
        break;
    }
}