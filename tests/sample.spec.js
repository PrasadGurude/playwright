const { test, expect } = require('@playwright/test');

test("My First Test",async function ({page}) {
    expect(12).toBe(12);
})

test("My Second Test",async function ({page}) {
    //
    expect(100).toBe(101);
})

test("My Third Test", async function ({page}) {
    //
    expect(1.2).toBe(1.2);
})

test("My Fourth Test", async function ({page}) {
    //
    expect("prasad gurude").toContain("gurude");
})

test.skip("My Fifth Test", async function ({page}) {
    //
    expect("prasad gurude").toMatch("gurude").toBeTruthy();
})

