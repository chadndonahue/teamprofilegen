const Engineer = require("../lib/engineer");

describe("", () => {
  it("name", () => {
    const i = new Engineer("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.name).toBe("Miguel");
  });
  it("id", () => {
    const i = new Engineer("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.id).toBe("500");
  });
  it("email", () => {
    const i = new Engineer("Miguel", "500", "Migueliscute@gmail.com");
    expect(i.email).toBe("Migueliscute@gmail.com");
  });
  it("github", () => {
    const i = new Engineer("Miguel", "500", "Migueliscute@gmail.com", "Migueliscute");
    expect(i.github).toBe("Migueliscute");
  });
});

describe("", () => {
  it("getName", () => {
    const i = new Engineer("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getName()).toBe("Mario");
  });
  it("getId", () => {
    const i = new Engineer("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getId()).toBe("501");
  });
  it("getEmail", () => {
    const i = new Engineer("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getEmail()).toBe("Marioiscute@gmail.com");
  });
  it("getRole", () => {
    const i = new Engineer("Mario", "501", "Marioiscute@gmail.com");
    expect(i.getRole()).toBe("Engineer");
  });
});