const expect = require("expect");
const request = require("supertest");

const { app } = require("../server.js");
const { Todo } = require("../models/todos");

beforeEach(done => {
  return Todo.remove({}).then(done);
});

describe("Post /Todos", () => {
  it("should create a new todo", () => {
    var text = "Test Todo Text";

    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(() => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find()
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          })
          .catch(e => {
            done(e);
          });
      });
  });
});
