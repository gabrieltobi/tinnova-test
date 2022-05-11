import React, { useState, useEffect } from "react";
import axios from "axios";
import { maskBr } from "js-brasil";

import "./styles.scss";
import { Link } from "react-router-dom";

interface User {
  cpf: string;
  email: string;
  name: string;
  phone: string;
}

export default function List() {
  const lsData = localStorage.getItem("data");

  const [data, setData] = useState<User[] | null>(
    lsData ? JSON.parse(lsData) : null
  );

  const insertData = async () => {
    const response = await axios.get(
      "https://private-9d65b3-tinnova.apiary-mock.com/users"
    );

    setData(response.data);
    localStorage.setItem("data", JSON.stringify(response.data));
  };

  useEffect(() => {
    if (!data) {
      insertData();
    }
  }, [data]);

  return (
    <div className="box">
      <ul className="list">
        {data?.map((user) => (
          <Link key={user.cpf} to="/detail">
            <li className="item">
              <h3 className="title">{user.name}</h3>
              <h4 className="subtitle">{user.email}</h4>
              <h4 className="subtitle">{maskBr.telefone(user.phone)}</h4>
              <h4 className="subtitle">{maskBr.cpf(user.cpf)}</h4>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
