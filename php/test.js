use arafat;
var people = {
  friend1: {
    fname: 'arif',
    lname: 'rahman',
    email: 'arif@gmail.com',
    fullname: function () {
      return people.friend1.fname + people.friend1.lname;
    }
  },
  friend2: {
    name: 'arafat',
    email: 'arafat@gmail.com'
  }
}

people.friend1.name ;
people.friend1.email; 
people.friend1.fullname();
