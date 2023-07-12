const express = require("express");
require("./db/mongoose");
const User = require("./models/user");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/users", (req, res) => {
    const user = new User(req.body);

    user
        .save()
        .then(() => {
            res.send(user);
        })
        .catch((err) => {
            //   res.status(500).send(err);
            res.status(500)
            res.send(err)
        });
});

app.listen(port, () => {
    console.log(`server is up on ${port}`);
});
