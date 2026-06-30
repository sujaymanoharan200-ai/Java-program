function student() {

    let student1 = {
        name: "Kathir",
        rollNo: 1001,
        age: 20,
        mark: 85
    };

    let student2 = {
        name: "Sanjay",
        rollNo: 1002,
        age: 21,
        mark: 60
    };

    let student3 = {
        name: "Bala",
        rollNo: 1003,
        age: 19,
        mark: 35
    };




    console.log("Name :", student1.name);
    console.log("Roll No :", student1.rollNo);
    console.log("Age :", student1.age);
    console.log("Mark :", student1.mark);

    if (student1.mark >= 40) {
        console.log("Result : Pass");
    } else {
        console.log("Result : Fail");
    }
console.log("--------------------------"); 

    console.log("Name :", student2.name);
    console.log("Roll No :", student2.rollNo);
    console.log("Age :", student2.age);
    console.log("Mark :", student2.mark);

    if (student2.mark >= 40) {
        console.log("Result : Pass");
    } else {
        console.log("Result : Fail");
    }
console.log("--------------------------"); 
    console.log("\nName :", student3.name);
    console.log("Roll No :", student3.rollNo);
    console.log("Age :", student3.age);
    console.log("Mark :", student3.mark);

    if (student3.mark >= 40) {
        console.log("Result : Pass");
    } else {
        console.log("Result : Fail");
    }

}


student();