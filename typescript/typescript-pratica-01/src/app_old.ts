interface User {
  id: number,
  name: string,
  email: string,
}


interface IDK <T> {
  id: T,
  getId: () => T
}

let user: IDK<boolean>; 

user = {
  id: !!"" || !!1,
  getId () {
    return this.id
  }
}


console.log(user.getId());


const users : Array<User> = [
  {
    id: 1,
    name: 'Bruno',
    email: 'bruno.juwer@juwer.com'
  },
  {
    id: 2,
    name: 'Pedro',
    email: 'pedro.juwer@juwer.com'
  },
  {
    id: 3,
    name: 'Alberto',
    email: 'alberto@email.com'
  },
  {
    id: 4,
    name: 'Joana',
    email: 'joana@email.com'
  }
];


interface ResponseEmails {
  email: string
}


const filterUsers = users.filter(( user: User ) => user.email.includes('@juwer.com'));

// console.log(filterUsers);


let arr: ResponseEmails[] = [];

const emails = users.reduce((acc: ResponseEmails[] , user: User ) => {
  acc.push({ email: user.email });
  return acc;
}, arr)

console.log("Just emails");
console.log(emails);


