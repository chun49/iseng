"use strict";
const Blog = use("App/Models/Blog");
class BlogController {
  async index({ request, response }) {
    try {
      const blogs = await Blog.all();
      return response.json({
        status: "success",
        data: blogs,
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
        message:
          "There was a problem creating the user, please try again later.",
      });
    }
  }
  async post({ request, response }) {
    try {
      const { title, body, slug } = request.body;
      const blog = await Blog.create({
        title: title,
        body: body,
        slug: slug,
      });
      return response.json({
        status: "success",
        data: blog,
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
        message:
          "There was a problem creating the user, please try again later.",
      });
    }
  }
  async show({ params, request, response }) {
    try {
      const blog = await Blog.query().where("slug", params.slug).first();
      return response.json({
        status: "success",
        data: blog,
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
        message:
          "There was a problem creating the user, please try again later.",
      });
    }
  }
  async edit({ params, request, response }) {
    try {
      const blog = await Blog.query().where("slug", params.slug).first();
      const { title, body, slug } = request.body;
      blog.title = title;
      blog.body = body;
      blog.slug = slug;
      await blog.save();
      return response.json({
        status: "success",
        data: blog,
      });
    } catch (error) {
      return response.status(400).json({
        status: "error",
        message:
          "There was a problem creating the user, please try again later.",
      });
    }
  }
  async delete({params,request,response}){
      try {
          const blog = await Blog.findBy('slug',params.slug)
          await blog.delete()
          return response.json({
            status: "success",
            data: blog,
          });
      } catch (error) {
        return response.status(400).json({
            status: "error",
            message:
              "There was a problem creating the user, please try again later.",
          });
      }
  }
}

module.exports = BlogController;
