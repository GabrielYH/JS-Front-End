function StoreAndReplace(input) {
  const phoneBook = {};
  for (const contact of input) {
    const [name, phone] = contact.split(" ");
    if (!phoneBook.hasOwnProperty(name)) {
      phoneBook[name] = phone;
    } else {
      phoneBook[name] = phone;
    }
  }

  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

StoreAndReplace([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
