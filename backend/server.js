// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const quizRoutes = require('./routes/quizRoutes');

// // const app = express();

// // app.use(express.json());
// // app.use(cors());

// // // MongoDB connection
// // mongoose.connect('mongodb://127.0.0.1:27017/quizdb', {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true
// // })
// // .then(() => console.log("MongoDB Connected"))
// // .catch(err => console.log(err));

// // // Routes
// // app.use('/', quizRoutes);

// // // Server
// // app.listen(3000, () => {
// //     console.log("Server running on port 3000");
// // });




// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const quizRoutes = require('./routes/quizRoutes');

// const app = express();

// app.use(express.json());
// app.use(cors());

// // MongoDB connection (Docker + Cloud ready)
// mongoose.connect('mongodb://host.docker.internal:27017/quizdb')
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));

// // Routes
// app.use('/', quizRoutes);

// // Home route (fix Cannot GET /)
// app.get('/', (req, res) => {
//     res.send("Quiz App Backend is Running 🚀");
// });

// // Server
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const quizRoutes = require('./routes/quizRoutes');

const app = express();

app.use(express.json());
app.use(cors());

// ✅ MongoDB Atlas connection
mongoose.connect("mongodb+srv://admin:password@cluster0.xxxxx.mongodb.net/quizdb")
.then(() => console.log("MongoDB Atlas Connected"))
.catch(err => console.log(err));

// Routes
app.use('/', quizRoutes);

app.get('/', (req, res) => {
    res.send("Quiz App Backend Running 🚀");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});