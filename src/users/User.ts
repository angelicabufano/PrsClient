export class User {
    id: number | undefined = undefined;
    username = "";
    password = "";
    firstname = "";
    lastname = "";
    phone = "";
    email = "";
    isReviewer = false
    isAdmin = false;
  
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.username) this.username = initializer.username;
      if (initializer.password) this.password = initializer.password;
      if (initializer.firstName) this.firstname = initializer.firstName;
      if (initializer.lastName) this.lastname = initializer.lastName;
      if (initializer.phone) this.phone = initializer.phone;
      if (initializer.email) this.email = initializer.email;
      if (initializer.isReviewer) this.isReviewer = initializer.isReviewer;
      if (initializer.isAdmin) this.isAdmin = initializer.isAdmin;
    }
  }
  