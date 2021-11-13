import React from "react";

export default function result(props) {
    console.log(props.results);
    if (props.results.length) {
    return <div className="Results">Hello from, Results</div>;
} else {
    return null;
}
}