import WidgetWrapper from "./src/components/ODSwidgets/WidgetWrapper";
import BarGraph from "./src/components/ODSwidgets/BarGraph";
import Filter from "./src/components/ODSwidgets/Filter";
import Map from "./src/components/ODSwidgets/Map";
import Card from "./src/components/ODSwidgets/Card";

const Info = ({ url, setUrl }) => {
  return (
    <>
      <WidgetWrapper>
        <Filter setUrl={setUrl} />
        <Card url={url} />
        <BarGraph />
        <Map />
      </WidgetWrapper>
    </>
  );
};

export default Info;
