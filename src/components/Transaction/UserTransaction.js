import React, { useState, useEffect } from "react";
import TransactionService from "../../service/TransactionServices";
import DisplayTable from "./DisplayTable";
import TransactionColumns from "./TransactionColumn";

function UserTransactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    TransactionService.getTransactions().then((response) => {
      setTransactions(response.data);
    });
  };

  return (
    <DisplayTable
      data={transactions}
      columns={TransactionColumns}
      table="Transactions"
    />
  );
}

export default UserTransactions;