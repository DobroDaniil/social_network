import s from "./Profileinfo.module.css"
import Preloader from "../../common/preloder/preloader";
import React from "react";
import {render} from "react-dom";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode () {
        this.setState( {
            editMode: true
        });
    }
    deactivateEditMode () {
        this.setState( {
            editMode: false
        });
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } value={this.props.status}>{this.props.status}</input>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;