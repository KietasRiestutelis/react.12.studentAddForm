const mongoose = require("mongoose");
const app = require("./app");


const DB =
  "mongodb+srv://Paulius:hpvBPTucqyDlbE2L@cluster0.fo5k3.mongodb.net/StudentsV2?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Prisijungta prie DB...:)");
  });

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
