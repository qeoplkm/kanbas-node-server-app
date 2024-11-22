const assignment = {
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  };

  const moduleObj = {
    id: "M101",
    name: "Introduction to NodeJS",
    description: "Basics of NodeJS and ExpressJS",
    course: "CS101",
};
  
  export default function WorkingWithObjects(app) {
    app.get("/lab5/assignment", (req, res) => {
      res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
      res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/score", (req, res) => {
        res.json(assignment.score);
    });
    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        const { newScore } = req.params;
        const score = parseInt(newScore, 10);
        if (!isNaN(score)) {
            assignment.score = score;
            res.json(assignment);
        } else {
            res.status(400).json({ error: "Invalid score value" });
        }
    });
    app.get("/lab5/assignment/description", (req, res) => {
        res.json(assignment.description);
    });

    app.get("/lab5/assignment/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        assignment.description = newDescription;
        res.json(assignment);
    });

    app.get("/lab5/assignment/completed", (req, res) => {
        res.json(assignment.completed);
    });
    
    app.get("/lab5/assignment/completed/:newStatus", (req, res) => {
        const { newStatus } = req.params;
        if (newStatus === "true" || newStatus === "false") {
            assignment.completed = newStatus === "true";
            res.json(assignment);
        } else {
            res.status(400).json({ error: "Invalid completed value" });
        }
    });

    app.get("/lab5/module", (req, res) => {
        res.json(moduleObj);
    });

    app.get("/lab5/module/name", (req, res) => {
        res.json({ name: moduleObj.name });
    });

    app.get("/lab5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        moduleObj.name = newName;
        res.json(moduleObj);
    });

    app.get("/lab5/module/description", (req, res) => {
        res.json(moduleObj.description);
    });

    app.get("/lab5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        moduleObj.description = newDescription;
        res.json(moduleObj);
    });


  }
  