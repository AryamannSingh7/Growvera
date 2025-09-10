const PostedJobsCard = (props: any) => {
  return (
    <div className="bg-white-900 rounded-xl p-2 border-l-2 border-l-primary-400">
      <div className="text-md text-white-200 font-semibold">
        {props.jobTitle}
      </div>
      <div className="text-sm text-white-300 font-medium">{props.location}</div>
      <div className="text-sm text-white-300">{props.posted}</div>
    </div>
  );
};

export default PostedJobsCard;
