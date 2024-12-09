import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: String, required: true }, // Will be replaced with proper user reference later
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
  }],
  total: { type: Number, required: true },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending',
  },
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
  },
  createdAt: { type: Date, default: Date.now },
});

export const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);