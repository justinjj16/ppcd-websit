"use client";
import withPrivateRoute from "@/components/WithPrivateRoute/withPrivateRoute";

const Dashboard = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <h1>Welcome to the Dashboard</h1>
    </div>
  )
};

export default withPrivateRoute(Dashboard);
