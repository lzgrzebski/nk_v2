import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { ContentContainer } from "./ContentContainer";
import { TextField } from "./TextField";

export default ({ children, query, id }) => {
    const { data, loading, error } = useQuery(query,  {
        variables: { id: parseInt(id) }
    });

    if(loading) return <ContentContainer><TextField>Loading...</TextField></ContentContainer>;
    if(error) return <ContentContainer><TextField>Error {JSON.stringify(error)}</TextField></ContentContainer>;

    return children(data);
}