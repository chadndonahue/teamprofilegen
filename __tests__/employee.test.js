const Employee = require("../lib/employee");

describe("", () => {
  it("name", () => {
    const i = new Employee("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.name).toBe("Miguel");
  });
  it("id", () => {
    const i = new Employee("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.id).toBe("500");
  });
  it("email", () => {
    const i = new Employee("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.email).toBe("Migueliscute@gmail.com");
  });
});

describe("", () => {
  it("getName", () => {
    const i = new Employee("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getName()).toBe("Mario");
  });
  it("getId", () => {
    const i = new Employee("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getId()).toBe("501");
  });
  it("getEmail", () => {
    const i = new Employee("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getEmail()).toBe("Marioiscute@gmail.com");
  });
  it("getRole", () => {
    const i = new Employee("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getRole()).toBe("Employee");
  });
});