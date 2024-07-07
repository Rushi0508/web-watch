import express from "express";

const app =  express();

app.use(express.json());

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
    return res.json({
        message : "hello world"
    });
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
