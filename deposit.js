function Deposit(){

  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [balance, setBalance] = React.useState('');
  const ctx = React.useContext(UserContext);
 
  var users = ctx.users;
  var nameList = document.getElementById('nameList');
  for(var i = 0; i < users.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = users[i].name;
      opt.value = users[i].name;
      sel.appendChild(opt);
  }

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,balance);
    if (!validate(name,  'name'))     return;
    if (!validate(balance, 'balance')) return;
    ctx.users.push({name,balance});
    setShow(false);
  }

  function clearForm(){
    setName('');
    setBalance('');
    setShow(true);
  }

  function doDeposit(){
    setName('');
    ctx.balance+= balance;
    setShow(true);
  }

  return (
    <Card
    bgcolor="primary"
    header="Deposit"
    body={show ? (
            <>
            Select User<br/>
            <select id="nameList">
            </select> 
            <input type="number" className="form-control" id="depositAmount" placeholder="Enter Amount" value={balance} onChange={e => setBalance(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={doDeposit}>Deposit</button>
            <button type="submit" className="btn btn-light" onClick={load}>Deposit</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Money Successfully Deposited</button>
            </>
          )}
  />
  ) 
}
