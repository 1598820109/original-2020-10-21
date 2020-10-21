module.exports = app =>{

    const express = require('express');
    const router = express.Router();
    const mongoose = require('mongoose');
    const dayjs = require('dayjs')

    // 引入文章模型
    const Category = mongoose.model('Category');
    const Article = mongoose.model('Article');
    const Links = mongoose.model('Link');
    const Project = mongoose.model('Project');
    const Image = mongoose.model('Image')


    router.get('/article/init',async (req,res)=>{
        const articleList = await Article.find().populate('sorts');
        res.send(articleList);
    })

    // 查询生活分类文章数据1
    router.get('/article/lifestyle',async (req,res)=>{
        const articleLife = await Article.findOne({name:'欢迎来到这个生活方式博客'}).populate('sorts');
        res.send(articleLife);
    });

    // 查询二月份的数据
    router.get('/article/ctimelist',async (req,res)=>{
        const articleCtime = await Article.find({"date":{$regex:"2020-2"}}).populate('sorts');
        res.send(articleCtime);
    })

    // 首页导航数据
    router.get('/categories/all',async (req,res)=>{
        const categoriesAll = await Category.find();
        var data = [];
        // 筛选分类
        categoriesAll.forEach((obj,index)=>{
            if(obj.parent == undefined){
                data.push(obj)
            }
            return data;
        })
       
        res.send(data)
    })

    // tags数据
    router.get('/categories/tags',async (req,res)=>{
      const parent = await Category.findOne({
          name:"TAG"
      }).populate({
          path:'children',
          populate:{
              path:'categorieslist'
          }
      }).lean();
      res.send(parent)
    })

    // 文章分类数据
    router.get('/artilce/list',async(req,res)=>{
        const parent = await Category.findOne({
            name:'分类',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(parent);
    })

    // 最新帖子
    router.get('/article/newdate',async (req,res)=>{
        const newData = await Article.find({"date":{$regex:"2020-10-04"}}).populate('sorts');
        res.send(newData);
    })

    // 文章详情数据
    router.get('/articles/:id',async (req,res)=>{
        const data = await Article.findById(req.params.id).populate('sorts');
        console.log(data);
        res.send(data)
    })

    // 归档数据
    router.get('/archive/list',async (req,res)=>{
        const archive = await Category.findOne({
            name:'归档',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(archive);
    });
    
    //分类数据
    router.get('/categories/list',async (req,res)=>{
        const category = await Category.findOne({
             name:'CATEGORY',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(category);
    })

    // 标签
    router.get('/labels/list',async (req,res)=>{
        const labels = await Category.findOne({
            name:'标签',
        }).populate({
            path:'children',
            populate:{
                path:'articleList'
            }
        }).lean();

        res.send(labels);
    })


    // 项目
    router.get('/project/list',async(req,res)=>{
        const project = await Project.find();
        res.send(project);
    })

    // 友情链接
    router.get('/links/list',async (req,res)=>{
         const links = await Links.find();
         res.send(links);
    })

    // 轮播图片
    router.get('/images/list',async(req,res)=>{
        const image = await Image.find().populate('parent');
        res.send(image)
    })

    app.use('/web/api',router);

}