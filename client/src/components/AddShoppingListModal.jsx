import React from "react";
import PropTypes from "prop-types";

export default class AddShoppingListModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="as-shoppingListBackDrop">
        <div className="as-shoppingListModalStyle">
          <div
            className="as-shoppingListCloseButton"
            onClick={this.props.onClose}
          >
            <svg viewBox="0 0 24 24">
              <path d="M13.45,12,16.71,8.7,15.29,7.3,12,10.59,8.74,7.32,7.33,8.75,10.62,12,7.36,15.3l1.42,1.4L12,13.41l3.32,3.26,1.41-1.42Z"></path>
            </svg>
          </div>
          <div className="as-mainPopup">
            <div>
              <p>Item added to your Shopping list</p> <br />
              <a className="as-listButton">View your shopping list</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddShoppingListModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool
};

// thank you david kim
