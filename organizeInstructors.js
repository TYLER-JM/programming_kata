//given a list of instructors, create a single object to organize them based on their course.
const organizeInstructors = function(instructors) {
  let obj = {};

  for (let i = 0; i < instructors.length; i++) {

    if (instructors[i].course in obj) {
      obj[instructors[i].course].push(instructors[i].name);
    } else {
      obj[instructors[i].course] = [];
      obj[instructors[i].course].push(instructors[i].name);
    }

  }

  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));