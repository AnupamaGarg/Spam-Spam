let customersEmailArray = []

customers.forEach((item) => {

    let allEmails = item.contacts.email;

    customersEmailArray.push(allEmails);


})
console.log(customersEmailArray);

let mergedEmailArray = [].concat.apply([], customersEmailArray)
console.log(mergedEmailArray);