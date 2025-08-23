import BugReportLink from "../components/BugReportLink";
import FeatureRequestLink from "../components/FeatureRequestLink";
import TaskTrackerLink from "../components/TaskTrackerLink";

export default function FeedbackMainPage() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 pt-10">
      <FeatureRequestLink />
      <BugReportLink />
      <TaskTrackerLink />
    </div>
  );
}
