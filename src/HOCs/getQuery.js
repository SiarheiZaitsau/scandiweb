import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";

const Wrapper = (props) => (Component) => {
  function Comp() {
    const [responseData, setResponseData] = useState([]);
    const { data, loading, error } = useQuery(props.query, {
      variables: props.id,
    });
    useEffect(() => {
      if (!loading) {
        setResponseData(data);
      }
    }, [data, loading]);
    return { responseData, loading, error };
  }
  return (props) => {
    return <Component {...props} data={Comp()} />;
  };
};
export default Wrapper;
