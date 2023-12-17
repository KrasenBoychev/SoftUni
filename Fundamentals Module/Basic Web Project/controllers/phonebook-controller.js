const phonebook = require('../phonebook');
const Contact = require(`../models/Contact`);

module.exports = {
  index: (req, res) => {
    res.render('index', {
    // TODO: load index page
    contacts: phonebook.getPhonebook()
  });
},
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array
    let name = req.body.name;
    let number = req.body.number;
    let contact = new Contact(name, number);
    phonebook.addContact(contact);
    res.redirect(`/`);
  }
}