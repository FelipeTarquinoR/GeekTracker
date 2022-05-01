//Model example class

//Import block
import {schema, model} from 'mongoose'

//Schema creation example
const taskSchema = new schema({
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true//Trim allows to delete spaces at the beggining and end of the text
    },
    description: {
        type: String,
        requiered: true
    },
    done: {
        type: Boolean,
        defalut: false//Done property already exists after creation but it is set to false by default
    },
},{
    timestamps: true,//This line allows the storage of creation and update timestamps
    versionKey: false
})

//Export block
export default model('Task', taskSchema)