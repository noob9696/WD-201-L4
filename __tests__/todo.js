const todoList = require("../todo");
const {
  all,
  add,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

const dateToday = new Date();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

const today = formattedDate(dateToday);

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    // Seed the test data
    const today = new Date();
    const oneDay = 60 * 60 * 24 * 1000;
    [
      {
        title: "Buy accessories",
        completed: false,
        dueDate: new Date(today.getTime() - 7 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Play Online Games",
        completed: false,
        dueDate: new Date(today.getTime() - 5 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Pay Mobile Recharge",
        completed: false,
        dueDate: new Date().toLocaleDateString("en-CA"),
      },
      {
        title: "Read Science Books",
        completed: false,
        dueDate: new Date(today.getTime() + 4 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "Submit observation",
        completed: false,
        dueDate: new Date(today.getTime() + 10 * oneDay).toLocaleDateString(
          "en-CA"
        ),
      },
    ].map(add);
  });
  test("Checking add a new todo", () => {
    expect(all.length).toEqual(5);

    add({
      title: "To test adding of todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(6);
  });

  test("Checking mark a todo as completed(Mark as read)", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("Checking retrieve overdue items", () => {
    expect(overdue().length).toEqual(2);
  });

  test("Checking retrieve due today items", () => {
    expect(dueToday().length).toEqual(2);
  });

  test("Checking retrieve due later items", () => {
    expect(dueLater().length).toEqual(2);
  });
});
