function Input() {
  return (
    <div class="row">
      <div class="col-sm-4">
        <input type="text" placeholder="enter your todo here" />
      </div>
      <div class="col-sm-4">
        <input type="date" />
      </div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-success kg-button">
          Add
        </button>
      </div>
    </div>
  );
}
export default Input;
