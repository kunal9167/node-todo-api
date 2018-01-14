const expect = require("expect");
const request = require("supertest");

const { ObjectID } = require("mongodb");
const { app } = require("../server.js");
const { Todo } = require("../models/todos");

const todos = [
  {
    _id: new ObjectID(),
    text: "First test todo"
  },
  {
    text: "Fisrst test todo"
  }
];

beforeEach(done => {
  Todo.remove({})
    .then(() => {
      return Todo.insertMany(todos);
      // done();
    })
    .then(()=>done());
});

describe("Post /Todos", () => {
  it("should create a new todo", () => {
    var text = "Test Todo Text";

    request(app)
      .post("/todos")
      .send({ text })
      .expect(200)
      .expect(() => {
        expect(res.body.text).toBe();
      })
      .end((err, res) => {
        if (err) {
          return err;
        }

        Todo.find({ text })
          .then(todos => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            //done();
          })
          .catch(e => {
            done(e);
          });
      });
  });

  it("Should not create todo with invalid body data", () => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(res);
        }

        Todo.find()
          .then((todos, done) => {
            expect(todos.length).toBe(0);
            done();
          })
          .catch(e => {
            done(e);
          });
      });
    // expect([1]).toBeEmpty();
  });

  describe("Get /todos", () => {
    it("Should get all todos", done => {
      request(app)
        .get("/todos")
        .expect(200)
        .expect(res => {
          expect(res.body.todos.length).toBe(10);
          // console.log(JSON.stringify(res, undefined, 2));
        })
        .end(done);
    });
  });

  describe("GET /todos/:id", () => {
    it("Should return todo doc", done => {
      request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(404)
        .expect(res => {
          expect(res.body.todo.text).toBe(todos[0].text);
        })
        .end(done);

  });
});
});
