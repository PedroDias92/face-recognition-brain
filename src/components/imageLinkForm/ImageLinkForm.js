import React, { Component } from "react";
import "./ImageLinkForm.css";

export default class ImageLinkForm extends Component {
  render() {
    return (
      <div>
        <p className="f3">
          {"This Magic will detect faces in your pictures. Git ii a try"}
        </p>
        <div className="center">
          <div className="form center pa4 br3 shadow-3 ">
            <input
              className="f4 pa2 w-70 center"
              type="text"
              placeholder="paste link"
            />
            <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
              Detect
            </button>
          </div>
        </div>
      </div>
    );
  }
}
