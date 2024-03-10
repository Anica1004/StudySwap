import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    canTeach: {
        type: Array,
        required: true
    },
    wantToLearn: {
        type: Array,
        required: true
    },
    volunteer: {
        type: Boolean,
        required: true
    },
    inPerson: {
        type: Boolean,
        required: true
    },
    online: {
        type: Boolean,
        required: true
    },
    matchNumbers: {

    },
    
});

export default mongoose.model("User", userSchema);