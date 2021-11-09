import "./PureWarehouseTable.css";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
} from "reactstrap";
import WarehouseTableRow from "../WarehouseTableRow/WarehouseTableRow";
import useSearch from "../../Hooks/useSearch";

const pageSize = 10;

const PureWarehouseTable = ({ warehouses, onRowChange, onRowDelete }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchedWarehouses = useSearch(searchTerm, warehouses);

  const [currentPage, setCurrentPage] = useState(0);

  const pagesCount = Math.ceil(searchedWarehouses.length / pageSize);

  useEffect(() => {
    if (pagesCount === 0) {
      setCurrentPage(0);
    } else if (currentPage > pagesCount - 1) {
      setCurrentPage(pagesCount - 1);
    }
  }, [currentPage, pagesCount]);

  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
    setCurrentPage(0);
  };

  let pageLimit = 10;
  let start = 0;
  let end = pageLimit;

  if (pagesCount <= pageLimit) {
    pageLimit = pagesCount;
  }

  // increment start page when current page is greater than 5
  if (currentPage - 5 >= 0) {
    start = currentPage - 4;
  }

  // if reaching end of pagination stop increment
  if (start + pageLimit >= pagesCount) {
    start = pagesCount - pageLimit;
  }

  // increment end page when current + 5 exceeds page limit
  if (currentPage + 5 >= pageLimit) {
    end = currentPage + 6;
    pageLimit = end;
    if (pagesCount <= pageLimit) {
      pageLimit = pagesCount;
    }
  }

  return (
    <div>
      <Input
        className="warehouseSearchInput"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchChange}
      />
      <div className="warehouseTable">
        <Table bordered>
          <thead className="warehouseHeader">
            <tr>
              <th rowSpan={2}>Name</th>
              <th rowSpan={2}>Description</th>
              <th colSpan={7}>Address</th>
              <th rowSpan={2}>Actions</th>
            </tr>
            <tr>
              <th>Building Name</th>
              <th>Street Line 1</th>
              <th>Street Line 2</th>
              <th>City</th>
              <th>State/Province</th>
              <th>Postal Code</th>
              <th>Country</th>
            </tr>
          </thead>

          <tbody>
            {searchedWarehouses
              .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
              .map((warehouse) => (
                <WarehouseTableRow
                  key={warehouse.warehouseId}
                  warehouse={warehouse}
                  onRowChange={onRowChange}
                  onRowDelete={onRowDelete}
                />
              ))}
          </tbody>
        </Table>
      </div>
      <div className="pagination">
        <Pagination>
          <PaginationItem disabled={currentPage === 0}>
            <PaginationLink
              first
              onClick={() => setCurrentPage(0)}
              disabled={currentPage === 0}
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage === 0}>
            <PaginationLink
              previous
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 0}
            />
          </PaginationItem>
          {[...Array(pagesCount)].map((page, index) => {
            if (index >= start && index < end) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <PaginationItem active={currentPage === index} key={index}>
                  <PaginationLink onClick={() => setCurrentPage(index)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            }
            return undefined;
          })}
          <PaginationItem disabled={currentPage === pagesCount - 1}>
            <PaginationLink
              next
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === pagesCount - 1}
            />
          </PaginationItem>
          <PaginationItem disabled={currentPage === pagesCount - 1}>
            <PaginationLink
              last
              onClick={() => setCurrentPage(pagesCount - 1)}
              disabled={currentPage === pagesCount - 1}
            />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

PureWarehouseTable.propTypes = {
  warehouses: PropTypes.arrayOf(
    PropTypes.shape({
      warehouseId: PropTypes.string,
      warehouseName: PropTypes.string,
      warehouseDescription: PropTypes.string,
      warehouseAddress: PropTypes.shape({
        buildingName: PropTypes.string,
        streetLine1: PropTypes.string,
        streetLine2: PropTypes.string,
        city: PropTypes.string,
        stateProvince: PropTypes.string,
        zipPostalCode: PropTypes.string,
        country: PropTypes.string,
      }).isRequired,
    }).isRequired
  ).isRequired,
  onRowChange: PropTypes.func,
  onRowDelete: PropTypes.func,
};

PureWarehouseTable.defaultProps = {
  onRowChange: undefined,
  onRowDelete: undefined,
};

export default PureWarehouseTable;
