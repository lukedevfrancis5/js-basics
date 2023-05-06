
//  const names = ['john', 'bob', 'mary', 'joe'];

//  for (let i = 0; i < names.length; i++) {
//      console.log(names[i]);
// }
//  for (name of names) {
//      console.log(name);   
// }

const user = { firstName: 'John', lastName: 'Doe'};
for (key in user) console.log(user[key])