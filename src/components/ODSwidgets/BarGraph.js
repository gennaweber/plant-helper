const BarGraph = () => {
  return (
    <>
      <ods-chart align-month="true">
        <ods-chart-query
          context="index"
          field-x="city"
          maxpoints="15"
          sort="serie1-1"
        >
          <ods-chart-serie
            expression-y="value"
            label-y="value (averaged)"
            chart-type="column"
            function-y="AVG"
            color="#4F66AF"
            display-values="false"
            display-stack-values="false"
            scientific-display="true"
            color-thresholds='[{"color":"#EE605B","value":100},{"color":"#884C41","value":50},{"color":"#F7BCB7","value":25},{"color":"#B8D98D","value":15},{"color":"#4F66AF","value":10},{"color":"#FBD166","value":1}]'
          ></ods-chart-serie>
        </ods-chart-query>
      </ods-chart>
    </>
  );
};

export default BarGraph;
