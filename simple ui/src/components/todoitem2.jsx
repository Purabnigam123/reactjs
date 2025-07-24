function Todoitem2() {
  let todoname = "go to college";
  let tododate = "1/11/2025";
  return (
    <div class="row kg-row">
      <div class="col-sm-4">{todoname}</div>
      <div class="col-sm-4">{tododate}</div>
      <div class="col-sm-2">
        <button
          type="button"
          class="btn btn-danger
        kg-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todoitem2;
