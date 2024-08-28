const InfoBox = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <div className="w-full ">
      <div className="relative z-10 rounded-sm bg-white px-8 py-10 shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default InfoBox;
