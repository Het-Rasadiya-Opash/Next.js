"use server";
import connectDB from '../../../config/database';
import Contact from '../../../config/models/Contact';

export const contactAction = async (formData) => {
  const { fullName, email, message } = Object.fromEntries(formData.entries());
  
  try {
    await connectDB();
    await Contact.create({ fullName, email, message });
    return { success: true, message: 'Contact saved successfully' };
  } catch (error) {
    return { success: false, message: 'Failed to save contact' };
  }
};
