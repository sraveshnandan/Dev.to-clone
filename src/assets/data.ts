// Discussion topics 
export const Topics: DataType[] = [
  {
    title: "Meams Monday.",
    desc: "22 comments"
  },
  {
    title: `Dev.to and "The missing middle economy." `,
    desc: "12 comments"
  },

  {
    title: "Most meaningfull jobs.",
    desc: "28 comments"
  },

  {
    title: "Rise of Typescript. ",
    desc: "44 comments"
  },

  {
    title: "How next js changing worlds.",
    desc: "82 comments"
  },

];



export const Post: PostContent = {
  title: "Awesome triks in typescript that blow your mind",
  tag: ["js", "typescript", "development"],
  comments: [
    {
      id: String(Math.ceil(10000) / 100),
      comment: "Nice Post",
    },
    {
      id: String(Math.ceil(10000) / 100),
      comment: "Awesome Post , keep it up.",
    }
  ],
  author: "Sravesh Nandan",
  published_date: "12/12/2023"
}