// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.mongodb://localhost:27017/mongoose, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.error('MongoDB Connection Error:', err));

// // User Schema & Model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true }
// });

// const User = mongoose.model('User', userSchema);

// // Product Schema & Model
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { type: String, required: true },
//   stock: { type: Number, required: true },
//   description: { type: String },
//   createdAt: { type: Date, default: Date.now }
// });

// const Product = mongoose.model('Product', productSchema);

// // Middleware for Authentication
// const authenticate = (req, res, next) => {
//   const token = req.header('Authorization');
//   if (!token) return res.status(401).json({ message: 'Access Denied' });
//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid Token' });
//   }
// };

// // User Registration
// app.post('/api/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     const user = new User({ username, password: hashedPassword });
//     await user.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // User Login
// app.post('/api/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // CRUD Routes

// // Create Product (Protected)
// app.post('/api/products', authenticate, async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     await product.save();
//     res.status(201).json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Get All Products with Pagination & Sorting
// app.get('/api/products', async (req, res) => {
//   try {
//     const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc', category } = req.query;
//     const filter = category ? { category } : {};
//     const products = await Product.find(filter)
//       .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
//       .limit(parseInt(limit))
//       .skip((parseInt(page) - 1) * parseInt(limit));
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get Product by ID
// app.get('/api/products/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.json(product);
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid Product ID' });
//   }
// });

// // Update Product by ID (Protected)
// app.put('/api/products/:id', authenticate, async (req, res) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Delete Product by ID (Protected)
// app.delete('/api/products/:id', authenticate, async (req, res) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     if (!product) return res.status(404).json({ message: 'Product not found' });
//     res.json({ message: 'Product deleted successfully' });
//   } catch (error) {
//     res.status(400).json({ message: 'Invalid Product ID' });
//   }
// });

// // Start Server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




// const express = require('express')
// const { default: mongoose } = require('mongoose')
// const app = express()
// const port = 5000


// //route
// app.get('/', (req, res) => {
//   res.send ('Hello World!')
// })

// app.get('/product', (req, res) => {
//   res.send ('New Product is here! but you can also find me in other places')
// })

// app.get('/description', (req, res) => {
//   res.send ('You will find description here')
// })



// app.listen(port, () => {
//   console.log (`Example app listening on port ${port}`)
// })

// mongoose.connect ('mongodb+srv://Admin:1236987Admin@productinventory.g9o2k.mongodb.net/?retryWrites=true&w=majority&appName=ProductInventory')
// .then (() => {
//   app.listen(port, () => {
//     console.log (`Example app listening on port ${port}`)
//   })
//   console.log('connected to MongoDB')
// }) .catch((error) => {
//   console.log(error)
// })

//////////////////////////



// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const port = 5000;

// //route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/product', (req, res) => {
//   res.send('New Product is here! but you can also find me in other places');
// });

// app.get('/description', (req, res) => {
//   res.send('You will find description here');
// });

// mongoose.set("strictQuery", false)
// mongoose
//   .connect(
//     'mongodb+srv://Admin:1236987Admin@productinventory.g9o2k.mongodb.net/Product-Inventory?retryWrites=true&w=majority&appName=ProductInventory'
//   )
//   .then(() => {
//     console.log('connected to MongoDB');
//     app.listen(port, () => {
//       console.log(`Example app listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/////////////////////////////////

// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB Connection
// mongoose.connect(process.env.mongodb+srv://Admin:1236987Admin@productinventory.g9o2k.mongodb.net/Product-Inventory?retryWrites=true&w=majority&appName=ProductInventory, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.error('MongoDB Connection Error:', err));



//////////////////////////

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
require('dotenv').config();


const cors = require('cors');
const bodyParser = require('body-parser');
// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection

mongoose.connect(process.env.MONGO_URI= "mongodb+srv://Admin:1236987Admin@productinventory.g9o2k.mongodb.net/Product-Inventory?retryWrites=true&w=majority&appName=ProductInventory")
  .then(() => {
    console.log('connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });


  // Middleware for Authentication
const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET="3619bc78e21731667e4dfb93678ad178167ce767f3114cdb04887a05731816e1dcbba08932c0028a227e3a467b368fb48fbfec0fb932615f5981a8380fa7231b");
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};


// User Registration
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// User Login
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET="3619bc78e21731667e4dfb93678ad178167ce767f3114cdb04887a05731816e1dcbba08932c0028a227e3a467b368fb48fbfec0fb932615f5981a8380fa7231b", { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Create Product (Protected)
app.post('/api/products', authenticate, async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get All Products with Pagination & Sorting
app.get('/api/products', async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'createdAt', order = 'desc', category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter)
      .sort({ [sortBy]: order === 'desc' ? -1 : 1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get Product by ID
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Product ID' });
  }
});

// Update Product by ID (Protected)
app.put('/api/products/:id', authenticate, async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete Product by ID (Protected)
app.delete('/api/products/:id', authenticate, async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid Product ID' });
  }
});


