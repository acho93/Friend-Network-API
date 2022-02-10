const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');

router
  .route('/')
  .get(getAllThought);

router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route('/:userId')
  .post(createThought);

router
  .route('/:userId/:thoughtId')
  .put(addReaction)

router
  .route('/:userId/:thoughtId/:reactionId')
  .delete(removeReaction);

module.exports = router;