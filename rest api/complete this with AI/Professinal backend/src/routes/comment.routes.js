import { Router } from 'express';
import {
    addComment,
    deleteComment,
    getComments,
    getCommentsWithRatings,
    updateComment,
} from "../controllers/comment.controller.js"
import verifyJWT from "../middlewares/auth.middleware.js"

const router = Router();

router.use(verifyJWT); // Apply verifyJWT middleware to all routes in this file

// Generic routes that work for both videos and cards
router.route("/:contentType/:contentId")
    .get(getComments)
    .post(addComment);

// Route to get comments with their ratings
router.route("/with-ratings/:contentType/:contentId")
    .get(getCommentsWithRatings);

// Routes for comment operations
router.route("/:commentId")
    .patch(updateComment)
    .delete(deleteComment);

export default router