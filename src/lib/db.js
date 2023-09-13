const username = process.env.REACT_APP_MONGO_USERNAME
const password = process.env.REACT_APP_MONGO_PASSWORD

export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.kse43fv.mongodb.net/mega-mart?retryWrites=true&w=majority"