import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Message } from "../models/messageSchema.js";

export const sendMessage = catchAsyncError(async (req, res, next) => {

  const {senderName , subject, message}= req.body;
  if(!senderName || !subject || !message){
    return next (new ErrorHandler("Please Fill Full Form",400))
  } 
  const data = await Message.create({senderName , subject, message}) 
  res.status(200).json({
    success:true,
    message:"message sent",
    data, 
  })
});
