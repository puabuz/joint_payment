import Button from "./Button"

export default function FormSplitBill() {
  return <form className="form-split-bill">
    <h2>Split a bill with X</h2>

    <label>Bill value</label>
    <input type="text" />

    <label>Your expenses</label>
    <input type="text" />

    <label>X's expense</label>
    <input type="text" disabled/>
    
    <label>Who is paying the bill expense</label>
    <select>
      <option value="user">You</option>
      <option value="">X</option>
    </select>

    <Button>Add</Button>
  </form>
}