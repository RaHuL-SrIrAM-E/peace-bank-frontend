import React, { useState } from "react";
import TransactionService from "../../service/TransactionServices";
import AuthenticationService from "../../service/AuthenticationService";
import { useNavigate } from "react-router-dom";

function AmountForm(props) {
  const history = useNavigate();
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // check if amount is valid
    if (amount <= 0) {
      setMessage("Amount must be greater than 0");
      setTimeout(() => {
        setMessage("");
      }, 1000);
      return;
    }

    if (props.type === "Deposit") {
      TransactionService.deposit({
        accountNumber: AuthenticationService.getLoggedInAccountNumber(),
        amount: amount,
      }).then((response) => {
        setMessage(response.data);
        setTimeout(() => {
          setMessage("");
          history("/transaction/success");
        }, 1000);
      });
    } else if (props.type === "Withdraw") {
      TransactionService.withdraw({
        accountNumber: AuthenticationService.getLoggedInAccountNumber(),
        amount: amount,
      })
        .then((response) => {
          setMessage(response.data);
          setTimeout(() => {
            setMessage("");
            history("/transaction/success");
          }, 1000);
        })
        .catch((error) => {
          setMessage(error.response.data);
          setTimeout(() => {
            setMessage("");
            history("/transaction/failure");
          }, 1000);
        });
    }
  };

  return (
    <div className="container mt-4">
      <h2>{props.type}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="depositAmount">Enter {props.type} Amount:</label>
          <input
            type="number"
            className="form-control"
            id="depositAmount"
            value={amount}
            onChange={handleAmountChange}
            required
          />
        </div>
        <div className="mt-3"></div>
        <button type="submit" className="btn btn-primary">
          {props.type}
        </button>
      </form>
      {message && <div className="alert alert-success mt-3">{message}</div>}
    </div>
  );
}

export default AmountForm;