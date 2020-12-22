import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function SpinnerLoading() {
  return (
    <div>
      <div className=" d-flex justify-content-center">
        <Spinner
          animation="border"
          role="status"
          style={{ height: "100px", width: "100px" }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
      <p className="text-center mt-1">Cargando datos</p>
    </div>
  );
}
