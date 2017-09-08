const app = require("./app");
const port = process.env.PORT || 8080;

// LISTEN
app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
});