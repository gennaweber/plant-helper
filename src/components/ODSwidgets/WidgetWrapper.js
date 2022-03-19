const WidgetWrapper = ({ children }) => {
  const dataset = "index-2020-full";

  return (
    <>
      {/* urlsync will automatically adjust the url search params according to ODS's standard */}
      <ods-dataset-context
        context="index"
        index-domain="https://pivothub.youthfulcities.com/"
        index-dataset={dataset}
        index-urlsync="true"
      >
        {children}
      </ods-dataset-context>
    </>
  );
};

export default WidgetWrapper;
