"use strict";

let contact = {
  name: "Shay Brown",
  address: "5 Broadway Street",
  city: "Queens",
  state: "New York",
  zip: 11234,
};

function printLabel(contact) {
  console.log(contact);
}
printLabel(contact);

let myInfo = {
  name: "Shay Brown",
  address: "5 Broadway Street",
  city: "Queens",
  state: "New York",
  zip: 11234,
};

function printContact(myInfo) {
  console.log(contact.name);
  console.log(contact.address);
  console.log(contact.city + ",", contact.state, +" " + contact.zip);
}
function printLabel() {
  let mailingLabel = `${contact.name}
${contact.address}
${contact.city}, ${contact.state} ${contact.zip}`;

  console.log(mailingLabel);
}

function printLabel(contact) {
  console.log(contact.name);
  console.log(contact.address);
  console.log(contact.city + ",", contact.state, contact.zip);
}
