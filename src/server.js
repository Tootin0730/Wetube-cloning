import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res, next) => {
    next();
};
const methodLogger = (req, res, next) =>{
    next();
};

const home = (req, res) => res.send("hello");
app.get("/", methodLogger, routerLogger, home);

const handleListening = () =>
 console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
