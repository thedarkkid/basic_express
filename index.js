const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const forceJsonResponse = require("./middleware/forceJsonResponse");

//register middlewares
app.use('/api',forceJsonResponse);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//register routes
app.use('/api', require("./routes/api"));
app.use('/', require("./routes/web"));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT =  process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});