import mongoose from 'mongoose';
const { Schema } = mongoose;

const requestSchema = new mongoose.Schema({
    email: {
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
    inPerson: {
        type: Boolean,
        required: true
    },
    online: {
        type: Boolean,
        required: true
    },
  

});

async function make_request(desiredCourse, requestingUser) {
    

}

export default mongoose.model("Request", requestSchema);