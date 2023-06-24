import { Fragment } from "react";
function ListGroup() {
  return (
    <Fragment>
         <h1>List</h1>
        <ul className="list-group">
          <li className="list-group-item">Names</li>
          <li className="list-group-item">Bellah</li>
          <li className="list-group-item">Maleek</li>
          <li className="list-group-item">Rayan</li>
          <li className="list-group-item">Shaturah</li>
        </ul>
    </Fragment>
  );
}
export default ListGroup;
