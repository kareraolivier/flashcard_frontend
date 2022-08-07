import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
{
  allCategorys {
    id
    name
    questions {
      question
      answer
    }
  }
}
`;


export const GET_QUESTION = gql`
{
  allQuestions {
    id
    question
    answer
    qnCategory {
      id
      name
    }
  }
}
`;

