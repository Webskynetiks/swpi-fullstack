const blogModel = require('../models/blogModel');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');

// Get all blogs
exports.getAllBlogsController = async (req, res) => {
    try {
        const blogs = await blogModel.find({}).populate('user');
        if (!blogs) {
            return res.status(200).send({
                success: false,
                message: "No blogs found"
            });
        }
        return res.status(200).send({
            success: true,
            BlogCount: blogs.length,
            blogs,
            message: "All blogs fetched successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error while getting blogs",
            error: error.message
        });
    }
};

// Create a new blog
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image, metaTitle, metaDescription, metaKeywords } = req.body;

        // Validation
        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: "Title, description, and image are required"
            });
        }

        // Create new blog
        const newBlog = new blogModel({
            title,
            description,
            image,
            metaTitle: metaTitle || title, // fallback to title
            metaDescription: metaDescription || description.slice(0, 160), // fallback
            metaKeywords: Array.isArray(metaKeywords) ? metaKeywords : [],
            user: req.user.userId
        });
        await newBlog.save();

        // Add blog to user's blogs array
        await userModel.findByIdAndUpdate(
            req.user.userId,
            { $push: { blogs: newBlog._id } },
            { new: true }
        );

        return res.status(201).send({
            success: true,
            message: "Blog created successfully",
            newBlog
        });

    } catch (error) {
        return res.status(400).send({
            success: false,
            message: "Error while creating blog",
            error: error.message
        });
    }
};

// Update a blog
exports.updateBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, image, metaTitle, metaDescription, metaKeywords } = req.body;

        // Validate required fields
        if (!title || !description || !image) {
            return res.status(400).send({
                success: false,
                message: "Title, description, and image are required"
            });
        }

        const updatedBlog = await blogModel.findByIdAndUpdate(
            id,
            {
                title,
                description,
                image,
                metaTitle: metaTitle || title,
                metaDescription: metaDescription || description.slice(0, 160),
                metaKeywords: Array.isArray(metaKeywords) ? metaKeywords : []
            },
            { new: true }
        );

        return res.status(200).send({
            success: true,
            message: "Blog updated successfully",
            blog: updatedBlog
        });

    } catch (error) {
        return res.status(400).send({
            success: false,
            message: "Error while updating blog",
            error: error.message
        });
    }
};

// Get a single blog by ID
exports.getBlogByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id).populate('user');
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "Blog not found"
            });
        }
        return res.status(200).send({
            success: true,
            blog,
            message: "Blog fetched successfully"
        });

    } catch (error) {
        return res.status(400).send({
            success: false,
            message: "Error while getting blog by ID",
            error: error.message
        });
    }
};

// Delete a blog by ID
exports.deleteBlogController = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id).populate("user");

        if (!blog) {
            return res.status(404).send({
                success: false,
                message: "Blog not found",
            });
        }

        if (blog.user && blog.user.blogs) {
            await blog.user.blogs.pull(blog._id);
            await blog.user.save();
        }

        await blogModel.findByIdAndDelete(req.params.id);

        return res.status(200).send({
            success: true,
            message: "Blog deleted successfully",
        });

    } catch (error) {
        return res.status(400).send({
            success: false,
            message: "Error while deleting blog",
            error: error.message,
        });
    }
};

// Get all blogs by user
exports.userBlogController = async (req, res) => {
    try {
        const userBlog = await userModel.findById(req.params.Id).populate("blogs");
        if (!userBlog) {
            return res.status(404).send({
                success: false,
                message: "User not found"
            });
        }

        const blogs = userBlog.blogs || [];
        return res.status(200).send({
            success: true,
            totalBlogs: blogs.length,
            user: {
                id: userBlog._id,
                username: userBlog.username,
                email: userBlog.email
            },
            blogs,
            message: "User blogs fetched successfully"
        });
    } catch (error) {
        return res.status(400).send({
            success: false,
            message: "Error while getting user blogs",
            error: error.message
        });
    }
};
