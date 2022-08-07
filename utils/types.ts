
export type Category ={
    id: Number,
    name: String,
    questions: Question[]
  }
  export type CategoryParam = {
    name: String
  }
  export type Question = {
    qnCategory: Category
    question: String,
    answer: String,
    createdAt: Date,
    id: Number,
    viewed: Boolean,
    updatedAt: Date,
    viewCount: Number,
    qnCategoryId: String,
  }