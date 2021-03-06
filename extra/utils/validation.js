
import validateEmail from "./helpers";

// validate user (list of user's emails)
const validateUsers = (users) => {
  // console.log(users);
  const validUsers = [];
  const invalidUsers = [];

  users.forEach((userId) => {
    const {traineeEmail, reviewerEmail} = users[0];

    if (validateEmail(traineeEmail)) {
      validUsers.push(userId.traineeEmail);
    } else {
      invalidUsers.push(userId.traineeEmail);
    }

    if (validateEmail(reviewerEmail)) {
      validUsers.push(userId.reviewerEmail);
    } else {
      invalidUsers.push(userId.reviewerEmail);
    }
  });
  return {
    validUser: validUsers,
    validCount: validUsers.length,
    invalidUser: invalidUsers,
    invalidCount: invalidUsers.length,
  };
  // console.log(result)
};

// list of user's emails
const users = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech",
  },
];

let userEmail = "trainee1@successive.tech";

// check Single User
// console.log(validateEmail(userEmail));

// check array of users
console.log(validateUsers(users));

export default validateUsers;
