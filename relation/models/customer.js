const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection sucessful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }]
});

customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomer = async () => {
//     let cust1 = new Customer({
//         name: "Rahul kumar"
//     });

//     let order1 = await Order.findOne({ item: "chips" });
//     let order2 = await Order.findOne({ item: "chocolate" });

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);

//     let result = await cust1.save();
//     console.log(result);
// };

// addCustomer();

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "samosa", price: 10 },
//     { item: "chips", price: 20 },
//     { item: "chocolate", price: 50 },
//   ]);
//   console.log(res);
// };

// addOrders();
 
// const addCust = async () => {
//   let newCust = new Customer({
//     name: "Karan",
//   });

//   let newOrder = new Order({
//     item: "Pizza",
//     price: 259,
//   });

//   newCust.orders.push(newOrder);

//   await newOrder.save();
//   await newCust.save()
   
//   console.log("added new customer");
// };

// addCust();

const delCust = async () => {
  let data = await Customer.findByIdAndDelete("693c45e4e01ec0c205e6d080");
  console.log(data);
};

delCust();