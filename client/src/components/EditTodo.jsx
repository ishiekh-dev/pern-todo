import React, { Fragment } from "react";

const EditTodo = () => {
  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning  "
        data-toggle="modal"
        data-target="#myModal"
      >
        Edit
      </button>

      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
             
              <h4 class="modal-title">Edit Todo</h4>
            </div>
            <div class="modal-body">
              <input type="text" className="form-control" />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
              >
                Edit
              </button>

              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
