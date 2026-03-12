"use server";
import { redirect } from "next/navigation";
import connectDB from "../../../config/database";
import Contact from "../../../config/models/Contact";

export const contactAction = async (fullName, email, message) => {
  //   const { fullName, email, message } = Object.fromEntries(formData.entries());

  try {
    await connectDB();
    await Contact.create({ fullName, email, message });
    // return { success: true, message: "Contact saved successfully" };
    redirect("/");
  } catch (error) {
    if (error.message === "NEXT_REDIRECT") throw error;
    return { success: false, message: "Failed to save contact" };
  }
};
