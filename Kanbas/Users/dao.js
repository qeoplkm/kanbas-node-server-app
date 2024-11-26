import model from "./model.js";
export const findAllUsers = () => model.find().lean();
export const createUser = (user) => {
  // Instead of deleting _id, ensure it exists
  if (!user._id) {
    // You can generate an ID here if needed
    user._id = new Date().getTime().toString();
    // Or use MongoDB's ObjectId
    // user._id = new mongoose.Types.ObjectId().toString();
  }
  return model.create(user);
};

export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  model.findOne({ username, password });
export const updateUser = (userId, user) => model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });


export const findUsersByRole = (role) => model.find({ role: role }); // or just model.find({ role })


export function findCoursesForEnrolledUser(userId) {
    const { courses, enrollments } = db;
    const enrolledCourses = courses.filter((course) =>
      enrollments.some((enrollment) => 
        enrollment.user === userId && 
        enrollment.course === course._id
      )
    );
    return enrolledCourses;
}

export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};




