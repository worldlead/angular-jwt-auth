import express from "express";
import ArticleModel from "../models/article.model.js";
const router = express.Router();


router.post("/articles", async(req, res) => {
    const article = new ArticleModel(req.body);

    try {
        await article.save();
        res.send(article);
    } catch (err) {
        res.status(500).send(err);
    }

});

//Return all articles
router.get("/articles", async(req, res) => {
    try {
        const articles = await ArticleModel.find({});
        res.send(articles);
    } catch (err) {
        res.status(500).send({ err });
    }
});

//Return a single article by id
router.get("/articles/:id", async(req, res) => {
    try {
        const article = await ArticleModel.findOne({ _id: req.params.id });
        res.send(article);
    } catch (err) {
        res.status(500).send({ err });
    }
});


//Update data using Patch
router.patch("/articles/:id", async(req, res) => {
    try {
        const article = await ArticleModel.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        await article.save();
        res.send(article);
    } catch (err) {
        res.status(500).send({ err });
    }
});

//Delete a post
router.delete("/articles/:id", async(req, res) => {
    try {
        const article = await ArticleModel.findByIdAndDelete(req.params.id);
        if (!article) {
            return res.status(404).send("Item wasn't found");
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).send({ err });
    }
});


export default router;

