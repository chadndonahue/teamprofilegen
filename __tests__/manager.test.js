const Manager = require("../lib/manager");

describe("", () => {
  it("name", () => {
    const i = new Manager("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.name).toBe("Miguel");
  });
  it("id", () => {
    const i = new Manager("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.id).toBe("500");
  });
  it("email", () => {
    const i = new Manager("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.email).toBe("Migueliscute@gmail.com");
  });
  it("officeNumber", () => {
    const i = new Manager("Miguel", "500", "Migueliscute@gmail.com", "2022");
    expect(i.officeNumber).toBe("2022");
  });
});

describe("", () => {
  it("getName", () => {
    const i = new Manager("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getName()).toBe("Mario");
  });
  it("getId", () => {
    const i = new Manager("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getId()).toBe("501");
  });
  it("getEmail", () => {
    const i = new Manager("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getEmail()).toBe("Marioiscute@gmail.com");
  });
  it("getRole", () => {
    const i = new Manager("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getRole()).toBe("Manager");
  });
});