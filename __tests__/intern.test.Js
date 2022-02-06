const Intern = require("../lib/intern");

describe("", () => {
  it("name", () => {
    const i = new Intern("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.name).toBe("Miguel");
  });
  it("id", () => {
    const i = new Intern("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.id).toBe("500");
  });
  it("email", () => {
    const i = new Intern("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.email).toBe("Migueliscute@gmail.com");
  });
  it("school", () => {
    const i = new Intern("Miguel", "500", "Migueliscute@gmail.com", "UCLA");
    expect(i.school).toBe("UCLA");
  });
});

describe("", () => {
  it("getName", () => {
    const i = new Intern("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getName()).toBe("Mario");
  });
  it("getId", () => {
    const i = new Intern("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getId()).toBe("501");
  });
  it("getEmail", () => {
    const i= new Intern("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getEmail()).toBe("Marioiscute@gmail.com");
  });
  it("getRole", () => {
    const i = new Intern("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getRole()).toBe("Intern");
  });
});