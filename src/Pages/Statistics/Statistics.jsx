import {
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
} from "recharts";
const Statistics = () => {
  const data = [
    { name: "Laptop", Quantity: 0 },
    { name: "Phone", Quantity: 25 },
    { name: "Accessories", Quantity: 5 },
    { name: "SmartWatch", Quantity: 20 },
    { name: "Macbook", Quantity: 10 },
    { name: "I phone", Quantity: 22 },
  ];
  return (
    <div>
      <div className="hero min-h-full bg-violet-500   md:py-2 rounded-lg">
        <div className="hero-content text-center ">
          <div className=" w-10/12">
            <h1 className="text-3xl font-bold text-white">Statistics</h1>
            <p className="py-6 text-sm w-11/12 text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
      </div>
      <div className="md:w-3/4 md:font-bold mx-auto bg-violet-100 mt-10 md:p-5">
        <h1 className="items-center flex justify-center">Line Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart data={data}>
            <CartesianGrid />
            <XAxis dataKey="name" interval={"preserveStartEnd"}></XAxis>
            <YAxis></YAxis>
            <Line dataKey="Quantity" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
