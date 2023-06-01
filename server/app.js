const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const hashesRoutes = require('./routes/hashRoutes');
const crackedRoutes = require('./routes/crackedRoutes');
const userRoutes = require('./routes/userRoutes');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', userRoutes);
app.use('/api/hashes', hashesRoutes);
app.use('/cracked', crackedRoutes);
mongoose.connect('mongodb+srv://admin:testtest@cluster0.hsvqo.mongodb.net/hash_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB!");
});

app.listen(1234, () => {
  console.log("Server is running on port 1234");
});
