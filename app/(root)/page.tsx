import Chart from "@/components/Chart";
import { getFiles, getUsedSpace } from "@/lib/actions/file.actions";
import { getUsageSummary } from "@/lib/utils";
import React from "react";

const Dashboard = async () => {
  const [files, usedSpace] = await Promise.all([
    getFiles({ types: [], limit: 10 }),
    getUsedSpace(),
  ]);

  const usageSummary = getUsageSummary(usedSpace);

  return (
    <div className="dashboard-container">
      <section>
        <Chart used={usedSpace.used} />
      </section>
    </div>
  );
};

export default Dashboard;
