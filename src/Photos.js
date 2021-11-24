import React from "react";

export default function Photos(props) {
    if (props.photos) {
        return <div className="Photos">
        <h2>{props.photos.photos}</h2>
        </div>
    }
}
