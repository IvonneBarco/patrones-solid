(() => {

  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia

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

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingProps{
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    lastAccess: Date;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings{
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
