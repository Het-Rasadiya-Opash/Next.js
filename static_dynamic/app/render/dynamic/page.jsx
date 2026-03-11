import connectDB from "@/config/db";
import { cache } from "react";

export const dynamic = "force-dynamic";

const DynamicPage = async () => {
  const users = await getAllUsers();
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Dynamic Page - Database Data</h1>

      <UserList users={users} />
    </div>
  );
};

export default DynamicPage;

const UserList = async () => {
  const users = await getAllUsers();
  return (
    <div>
      {users.length > 0 ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Users from Database:</h2>
          {users.map((user) => (
            <div key={user._id} className="border p-4 rounded">
              <p>
                <strong>Name:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age</strong> {user.age}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500">
          <p>No data found in database.</p>
          <p className="text-sm mt-2">
            Make sure your MongoDB is running and has data in the 'users'
            collection.
          </p>
        </div>
      )}
    </div>
  );
};

const getAllUsers = cache(async() => {
  await connectDB();

  let users = [];
  try {
    const mongoose = await import("mongoose");

    const UserSchema = new mongoose.Schema({
      name: String,
      email: String,
      createdAt: { type: Date, default: Date.now },
    });

    const User = mongoose.models.User || mongoose.model("User", UserSchema);
    users = await User.find({}).lean();
    console.log("Dynamic Page user fetch");
    return users;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
