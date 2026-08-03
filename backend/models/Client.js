import mongoose from 'mongoose';

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String, // Optional client name
    },
    logoUrl: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
    }
  },
  { timestamps: true }
);

const Client = mongoose.model('Client', clientSchema);

export default Client;
