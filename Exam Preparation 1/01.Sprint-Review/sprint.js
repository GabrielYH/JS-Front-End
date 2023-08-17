function asd([elementsCount, ...restOfArray]) {
  const assignees = {};
  class Task {
    constructor(assignee, taskId, title, status, estimatedPoints) {
      (this.assignee = assignee),
        (this.taskId = taskId),
        (this.title = title),
        (this.status = status),
        (this.estimatedPoints = Number(estimatedPoints));
    }
  }
  for (let index = 0; index < elementsCount; index++) {
    const newTaskData = restOfArray[index].split(":");
    const newTask = new Task(
      newTaskData[0],
      newTaskData[1],
      newTaskData[2],
      newTaskData[3],
      Number(newTaskData[4])
    );
    if (!assignees[newTaskData[0]]) {
      assignees[newTaskData[0]] = new Array();
      assignees[newTaskData[0]].push(newTask);
    } else {
      assignees[newTaskData[0]].push(newTask);
    }
  }

  for (let index = elementsCount; index < restOfArray.length; index++) {
    const data = restOfArray[index].split(":");
    const operationName = data[0];
    switch (operationName) {
      case "Add New":
        if (assignees.hasOwnProperty(data[1])) {
          const assignee = data[1];
          const taskId = data[2];
          const title = data[3];
          const status = data[4];
          const estimatedPoints = Number(data[5]);
          const newTask = new Task(
            assignee,
            taskId,
            title,
            status,
            estimatedPoints
          );
          assignees[assignee].push(newTask);
        } else {
          console.log(`Assignee ${data[1]} does not exist on the board!`);
        }
        break;
      case "Change Status":
        if (assignees.hasOwnProperty(data[1])) {
          const assignee = data[1];
          const providedTaskId = data[2];
          const newStatus = data[3];
          if (
            assignees[assignee].some((task) => task.taskId === providedTaskId)
          ) {
            const task = assignees[assignee].find(
              (task) => task.taskId === providedTaskId
            );
            task.status = newStatus;
          } else {
            console.log(
              `Task with ID ${providedTaskId} does not exist for ${assignee}!`
            );
          }
        } else {
          console.log(`Assignee ${data[1]} does not exist on the board!`);
        }

        break;
      case "Remove Task":
        if (assignees.hasOwnProperty(data[1])) {
          const assignee = data[1];
          const index = Number(data[2]); // ?!
          const tasksOfAssignee = assignees[assignee];
          if (index < 0 || index >= tasksOfAssignee.length) {
            console.log("Index is out of range!");
          } else {
            const removedTask = tasksOfAssignee.splice(index, 1);
          }
        } else {
          console.log(`Assignee ${data[1]} does not exist on the board!`);
        }

        break;

      default:
        break;
    }
  }

  const result = {
    ToDo: 0,
    "In Progress": 0,
    "Code Review": 0,
    "Done Points": 0,
  };

  for (const assignee in assignees) {
    assignees[assignee].forEach((task) => {
      switch (task.status) {
        case "ToDo":
          result.ToDo += task.estimatedPoints;
          break;
        case "In Progress":
          result["In Progress"] += task.estimatedPoints;
          break;
        case "Code Review":
          result["Code Review"] += task.estimatedPoints;
          break;
        case "Done":
          result["Done Points"] += task.estimatedPoints;
          break;
        default:
          break;
      }
    });
  }

  console.log(`ToDo: ${result.ToDo}pts`);
  console.log(`In Progress: ${result["In Progress"]}pts`);
  console.log(`Code Review: ${result["Code Review"]}pts`);
  console.log(`Done Points: ${result["Done Points"]}pts`);
  const pointsOfUndoneTasks =
    result.ToDo + result["In Progress"] + result["Code Review"];
  result["Done Points"] >= pointsOfUndoneTasks
    ? console.log("Sprint was successful!")
    : console.log("Sprint was unsuccessful...");
}

asd([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
