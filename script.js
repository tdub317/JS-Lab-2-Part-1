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
    add(info) {
        // let name = prompt("Please enter contact name.");
        // let email = prompt("Please enter email.");
        // let phone = prompt("Please enter phone number.");
        // let relation = prompt("Please enter your relation.");
        // let info = new Contact(name, email, phone, relation);
        this.info = info
        this.contacts.push(this.info);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    deleteByName(name) {
        for (let i in this.contacts) {
            // for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i].name === name) {
                this.contacts.splice(i, 1);
            }
        }
    }
    print() {
        // console.log(this.contacts);
        // for (let i in this.contacts) {
        // OR
        // for (let i = 0; i < this.contacts.length; i++) {
        // console.log(this.contacts[i]);
        // }
        for (let contactInfo of this.contacts) {
            console.log(contactInfo);
        }
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
        let name = prompt("Please enter contact name.");
        let email = prompt("Please enter email.");
        let phone = prompt("Please enter phone number.");
        let relation = prompt("Please enter your relation.");
        const contactInfo = new Contact(name, email, phone, relation);
        companyBook.add(contactInfo);
    } else if (actionPrompt === "delete") {
        // let deleteIndex = prompt("Index to delete?");
        // companyBook.deleteAt(deleteIndex);
        let deleteIndexOrName = prompt("Do you want to delete by name or index?");
        if (deleteIndexOrName === "name") {
            let deleteName = prompt("Please enter the name you want to delete");
            companyBook.deleteByName(deleteName);
        } else if (deleteIndexOrName === "index") {
            let deleteIndex = prompt("Please enter the index to delete.");
            companyBook.deleteAt(deleteIndex);
        }
    } else if (actionPrompt === "print") {
        companyBook.print();
    } else if (actionPrompt === "quit") {
        console.log("Farewell");
        break;
    }
}

