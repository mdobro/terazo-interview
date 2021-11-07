import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

import "./WarehouseTableRow.css";

const WarehouseTableRow = ({
  name,
  description,
  buildingName,
  streetLine1,
  streetLine2,
  city,
  stateProvince,
  zipPostalCode,
  country,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <tr className="warehouseTableRow">
      <td>{name}</td>
      <td>{description}</td>
      <td>{buildingName}</td>
      <td>{streetLine1}</td>
      <td>{streetLine2}</td>
      <td>{city}</td>
      <td>{stateProvince}</td>
      <td>{zipPostalCode}</td>
      <td>{country}</td>
      <td id="actionsCell">
        <Button color="success" size="sm" id="editButton">
          Edit
        </Button>
        <Button color="danger" size="sm">
          Delete
        </Button>
      </td>
    </tr>
  );
};

WarehouseTableRow.propTypes = {};

WarehouseTableRow.defaultProps = {};

export default WarehouseTableRow;
