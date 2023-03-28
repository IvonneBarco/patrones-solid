(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  // const newPerson = new Person('Ivonne', 'F', new Date('1993-10-22'));
  // console.log({newPerson});

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate }); //Llama al constructor del Padre
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingInterface {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    lastAccess: Date;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      lastAccess,
      name,
      gender,
      birthdate,
    }: UserSettingInterface) {
      super({ email, role, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }
})();
