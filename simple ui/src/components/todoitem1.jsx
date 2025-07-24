function Todoitem1() {
  let todoname = "buy milk";
  let tododate = "4/07/2025";
  return (
    <div class="row kg-row">
      <div class="col-sm-4">{todoname}</div>
      <div class="col-sm-4">{tododate}</div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
}
export default Todoitem1;
