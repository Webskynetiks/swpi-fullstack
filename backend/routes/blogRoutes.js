const express = require('express');
const { get } = require('mongoose');
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

//router object
const router = express.Router();

// Get all blogs
router.get("/all-blog",getAllBlogsController);

 
//Post a blog (protected)
router.post("/create-blog", authMiddleware, createBlogController);


//update a blog (protected)
router.put("/update-blog/:id", authMiddleware, updateBlogController);

// Get a single blog
router.get("/get-blog/:id",getBlogByIdController);


//delete a blog (protected)
router.delete("/delete-blog/:id", authMiddleware, deleteBlogController);

//
// Get all blogs by user
router.get("/user-blog/:Id",userBlogController)

module.exports = router;