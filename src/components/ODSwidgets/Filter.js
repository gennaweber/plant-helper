const Filter = ({ setUrl }) => {
  return (
    <>
      {" "}
      <ods-facets
        context="index"
        onClick={() =>
          setUrl({
            full: window.location.href,
            query: window.location.search,
          })
        }
      >
        <ods-facet name="city_cma" disjunctive="true"></ods-facet>
      </ods-facets>
    </>
  );
};

export default Filter;
