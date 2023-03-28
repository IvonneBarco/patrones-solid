(() => {
    type Gender = 'M' | 'F';

    class Person {

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) {}
    }

    // const newPerson = new Person('Ivonne', 'F', new Date('1993-10-22'));
    // console.log({newPerson});

    class User extends Person {

        public lastAccess: Date;
        constructor(
            public email: string, 
            public role: string, 
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate); //Llama al constructor del Padre
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }
    
})();