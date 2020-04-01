import React, { Component } from "react";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.uploadSingleFile = this.uploadSingleFile.bind(this);
    this.upload = this.upload.bind(this);
  }

  uploadSingleFile(e) {
    const file =  URL.createObjectURL(e.target.files[0])
    this.setState({
      file:file
    });
    this.props.fileChanged (file)
  }

  upload(e) {
    e.preventDefault();
    console.log(this.state.file);
  }


  render() {
    let imgPreview;
    if (this.state.file) {
      imgPreview = <img style={{width:'50px'}} src={this.state.file} />;
    }
    return (
      <form className="w-100">
        <div className="form-group preview">{imgPreview}</div>

        <div className="form-group">
          <input
            style={{ display: "none" }}
            type="file"
            className="form-control"
            onChange={this.uploadSingleFile}
            ref={ fileInput => this.fileInput = fileInput}
          />
        </div>
        <button
          type="button"
          className="btn btn-link "
          onClick={()=> this.fileInput.click()}
        >
          <i className="fa fa-camera mr-2"></i>
          Images
        </button>
        
      </form>
    );
  }
}

export default FileUpload;
