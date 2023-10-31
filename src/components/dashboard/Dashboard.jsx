import React, { useEffect, useState } from "react";
import { useAuth } from "../../provider/UserProvider";
import { PageLayout, headingStyles } from "../shared/designSystem";
import LogoutButton from "../shared/LogoutButton";
import UserTable from "./UsersDataTable";
import { getUsers } from "../../utils/api";
import { useBreakPoint } from "../shared/userBreakPoint";
import SummaryCard from "./SummaryCard";

const Dashboard = () => {
  const auth = useAuth();
  const [usersData, setUsesData] = useState([]);
  const [requestError, setRequestError] = useState(null);
  const [totalUsers, setTotalUsers] = useState(0);
  const [smallestSizeUser, setSmallestSizeUser] = useState(0);
  const [largestSizeUser, setLargestSizeUser] = useState(0);
  const { isMobile } = useBreakPoint();

  useEffect(() => {
    const getUsersData = async () => {
      try {
        const response = await getUsers();
        const resTotalUsers = response.data.result.length;
        const resTotalSmallUsers = response.data.result.filter(
          (user) => user.size === "XS"
        ).length;
        const resTotalLargeUsers = response.data.result.filter(
          (user) => user.size === "XXL"
        ).length;

        setTotalUsers(resTotalUsers);
        setSmallestSizeUser(resTotalSmallUsers);
        setLargestSizeUser(resTotalLargeUsers);
        setUsesData(response.data.result);
      } catch (error) {
        setRequestError(error.response.data?.message);
      }
    };
    getUsersData();
  }, []);

  return (
    <PageLayout>
      <div className="mb-8">
        <div className="flex justify-between mb-6">
          <div>
            <h2 className={headingStyles.h2}>
              Welcome back,{"  "}
              {isMobile && <br />}
              <span className="text-slate-300">
                {auth?.userState?.userName}
              </span>
            </h2>
            {auth?.userState?.size && (
              <p className="text-gray-400 text-sm">
                Your t-shirt size is{" "}
                <span className="text-slate-300">{auth?.userState?.size}</span>
              </p>
            )}
          </div>

          <LogoutButton />
        </div>
        <p className="font-medium mb-4">Dashboard</p>
        <div className="flex">
          <SummaryCard total={totalUsers} title="Total users" />
          <SummaryCard total={smallestSizeUser} title="XS users" />
          <SummaryCard total={largestSizeUser} title=" XXL users" noMargin />
        </div>
      </div>

      <div>
        {requestError && <p className="text-red-400">{requestError}</p>}
        <UserTable usersData={usersData} />
      </div>
    </PageLayout>
  );
};

export default Dashboard;
