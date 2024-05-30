const userData = [
    {
      name: "John Doe",
      fatherName: "Richard Doe",
      age: 16,
      rollNo: "101",
      class: "10th Grade",
    },
    {
      name: "Jane Smith",
      fatherName: "Robert Smith",
      age: 15,
      rollNo: "102",
      class: "9th Grade",
    },
    {
      name: "Michael Johnson",
      fatherName: "James Johnson",
      age: 17,
      rollNo: "103",
      class: "11th Grade",
    },
    {
      name: "Emily Davis",
      fatherName: "William Davis",
      age: 14,
      rollNo: "104",
      class: "8th Grade",
    },
    {
      name: "Jessica Brown",
      fatherName: "Charles Brown",
      age: 16,
      rollNo: "105",
      class: "10th Grade",
    },
    {
      name: "Daniel Wilson",
      fatherName: "Thomas Wilson",
      age: 15,
      rollNo: "106",
      class: "9th Grade",
    },
    {
      name: "Sarah Taylor",
      fatherName: "Andrew Taylor",
      age: 17,
      rollNo: "107",
      class: "11th Grade",
    },
    {
      name: "David Lee",
      fatherName: "George Lee",
      age: 14,
      rollNo: "108",
      class: "8th Grade",
    },
    {
      name: "Laura Martin",
      fatherName: "Paul Martin",
      age: 16,
      rollNo: "109",
      class: "10th Grade",
    },
    {
      name: "Kevin White",
      fatherName: "Mark White",
      age: 15,
      rollNo: "110",
      class: "9th Grade",
    },
    {
      name: "Anna Harris",
      fatherName: "Steven Harris",
      age: 17,
      rollNo: "111",
      class: "11th Grade",
    },
    {
      name: "Brian Clark",
      fatherName: "Edward Clark",
      age: 14,
      rollNo: "112",
      class: "8th Grade",
    },
    {
      name: "Sophia Lewis",
      fatherName: "Henry Lewis",
      age: 16,
      rollNo: "113",
      class: "10th Grade",
    },
    {
      name: "Christopher Walker",
      fatherName: "Frank Walker",
      age: 15,
      rollNo: "114",
      class: "9th Grade",
    },
    {
      name: "Grace Hall",
      fatherName: "Peter Hall",
      age: 17,
      rollNo: "115",
      class: "11th Grade",
    },
    {
      name: "Justin Allen",
      fatherName: "Patrick Allen",
      age: 14,
      rollNo: "116",
      class: "8th Grade",
    },
    {
      name: "Olivia Young",
      fatherName: "Bruce Young",
      age: 16,
      rollNo: "117",
      class: "10th Grade",
    },
    {
      name: "Nathan Hernandez",
      fatherName: "Larry Hernandez",
      age: 15,
      rollNo: "118",
      class: "9th Grade",
    },
    {
      name: "Mia King",
      fatherName: "Joe King",
      age: 17,
      rollNo: "119",
      class: "11th Grade",
    },
    {
      name: "Ethan Wright",
      fatherName: "Stanley Wright",
      age: 14,
      rollNo: "120",
      class: "8th Grade",
    },
    {
      name: "Ava Lopez",
      fatherName: "Timothy Lopez",
      age: 16,
      rollNo: "121",
      class: "10th Grade",
    },
    {
      name: "Jacob Scott",
      fatherName: "Chris Scott",
      age: 15,
      rollNo: "122",
      class: "9th Grade",
    },
    {
      name: "Samantha Green",
      fatherName: "Shawn Green",
      age: 17,
      rollNo: "123",
      class: "11th Grade",
    },
    {
      name: "Andrew Adams",
      fatherName: "Jason Adams",
      age: 14,
      rollNo: "124",
      class: "8th Grade",
    },
    {
      name: "Ella Baker",
      fatherName: "Ryan Baker",
      age: 16,
      rollNo: "125",
      class: "10th Grade",
    },
  ];
  
  var employeesData = document.getElementById("employeesData");
  var totalPresent = document.getElementById("totalPresent");
  var totalAbsent = document.getElementById("totalAbsent");
  var totalLeave = document.getElementById("totalLeave");
  var tStudents = document.getElementById("totalStudents");
  var tempPresent = 0;
  var tempAbsent = 0;
  var tempLeave = 0;
  
  for (var i = 0; i < userData.length; i++) {
    tStudents.innerText = userData.length;
    employeesData.innerHTML += `<tr>
      <td id="sNo">${i + 1}</td>
      <td id="studentName">${userData[i].name}</td>
      <td id="fatherName">${userData[i].fatherName}</td>
      <td id="studentage">${userData[i].age}</td>
      <td id="rollNo">${userData[i].rollNo}</td>
      <td id="studentClass">${userData[i].class}</td>
      <td><input type="checkbox" name="present" class="stu_Present" onclick="present(this)"></td>
      <td><input type="checkbox" name="absent" class="stu_Absent" onclick="absent(this)"></td>
      <td><input type="checkbox" name="leave" class="stu_Leave" onclick="leave(this)"></td>
      </tr>`;
  }
  function present(element) {
    var temp2 =
      element.parentElement.nextElementSibling.firstElementChild.checked;
    var temp3 =
      element.parentElement.nextElementSibling.nextElementSibling
        .firstElementChild.checked;
    if (element.checked === true && temp2 === false && temp3 === false) {
      tempPresent = +tempPresent + 1;
      element.parentElement.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.nextElementSibling.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "lightgreen";
      // console.log('1==>',tempPresent);
      fatching();
    } else if (element.checked === true && temp2 === true && temp3 === false) {
      tempPresent = +tempPresent + 1;
      tempAbsent = +tempAbsent - 1;
      element.parentElement.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.nextElementSibling.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "lightgreen";
      // console.log('2==>',tempAbsent);
      fatching();
    } else if (element.checked === true && temp2 === false && temp3 === true) {
      tempPresent = +tempPresent + 1;
      tempLeave = +tempLeave - 1;
      element.parentElement.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.nextElementSibling.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "lightgreen";
      // console.log('3==>', tempLeave);
      fatching();
    } else if (element.checked === false && temp2 === false && temp3 === false) {
      tempPresent = +tempPresent - 1;
      // console.log('4==>', tempLeave);
      fatching();
    }
  
  }
  
  function absent(element) {
    var temp3 =
      element.parentElement.nextElementSibling.firstElementChild.checked;
    var temp1 =
      element.parentElement.previousElementSibling.firstElementChild.checked;
  
    if (element.checked === true && temp3 === false && temp1 === false) {
      tempAbsent = +tempAbsent + 1;
      element.parentElement.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "lightcoral";
      // console.log('5==>',tempAbsent);
      fatching();
    } else if (element.checked === true && temp3 === true && temp1 === false) {
      tempAbsent = +tempAbsent + 1;
      tempLeave = +tempLeave - 1;
      element.parentElement.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "lightcoral";
      console.log("6==>", tempLeave);
      fatching();
    } else if (element.checked === true && temp3 === false && temp1 === true) {
      tempAbsent = +tempAbsent + 1;
      tempPresent = +tempPresent - 1;
      element.parentElement.nextElementSibling.firstElementChild.checked = false;
      element.parentElement.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "lightcoral";
      // console.log('7==>', tempPresent);
      fatching();
    } else if (element.checked === false && temp3 === false && temp1 === false) {
      tempAbsent = +tempAbsent - 1;
      // console.log('8==>', tempAbsent);
      fatching();
    }
  }
  function leave(element) {
    var temp1 =
      element.parentElement.previousElementSibling.previousElementSibling
        .firstElementChild.checked;
    var temp2 =
      element.parentElement.previousElementSibling.firstElementChild.checked;
  
    if (element.checked === true && temp1 === false && temp2 === false) {
      tempLeave = +tempLeave + 1;
      element.parentElement.previousElementSibling.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "#f6d365";
      // console.log("9==>", tempLeave);
      fatching();
    } else if (element.checked === true && temp1 === true && temp2 === false) {
      tempLeave = +tempLeave + 1;
      tempPresent = +tempPresent - 1;
      element.parentElement.previousElementSibling.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "#f6d365";
      // console.log("10==>", tempPresent);
      fatching();
    } else if (element.checked === true && temp1 === false && temp2 === true) {
      tempLeave = +tempLeave + 1;
      tempAbsent = +tempAbsent - 1;
      element.parentElement.previousElementSibling.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.previousElementSibling.firstElementChild.checked = false;
      element.parentElement.parentElement.style.backgroundColor = "#f6d365";
      // console.log("11==>", tempAbsent);
      fatching();
    } else if (element.checked === false && temp1 === false && temp2 === false) {
      tempLeave = +tempLeave - 1;
      // console.log("12==>", tempLeave);
      fatching();
    }
  }
  function fatching() {
    totalPresent.innerText = tempPresent;
    totalAbsent.innerText = tempAbsent;
    totalLeave.innerText = tempLeave;
    return;
  }
  