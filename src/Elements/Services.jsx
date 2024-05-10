import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import { Layout, Form, Table, Input, Button } from "antd";

function Services() {
  const [myData, setmyData] = useState([
    {
      id: "1",
      name: "Mr. Jumman",
      city: "jumanji",
      age: "20",
    },
  ]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);
  const [editingItem, setEditingItem] = useState(null);
  const [checkId, setCheckId] = useState(0);

  const addData = (e) => {
    e.preventDefault();
    if(checkId === 0 ){

      let newData = {
        id: Date.now(),
        name: `${firstName}`,
        city: `${lastName}`,
        age: parseInt(age),
      };
      setmyData([...myData, newData]);
    }else{
      setmyData(myData.map(m => {
        if(m.id === checkId){
          return{
            ...m,
            id:checkId,
            name: firstName,
            city: lastName,
            age: parseInt(age)
          };
        }else{
          return m
        }
      }))
    }
      setFirstName('');
      setlastName('');
      setAge();
      setCheckId(0)
      let storeList = localStorage.getItem('list')
      if(storeList){
        localStorage.removeItem('list')
      }
      localStorage.setItem('list', JSON.stringify(myData))
  };
 useEffect(() => {

 },[])
  let handleInput = (e, value) => {
    switch (value) {
      case "firstname":
        setFirstName(e.target.value);
        break;

      case "lastname":
        setlastName(e.target.value);
        break;

      case "age":
        setAge(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleEdit = (item) => {
    console.log(item)
    setEditingItem(item);
    setFirstName(item.name);
    setlastName(item.city);
    setAge(item.age.toString());

    setCheckId(item.id)
  }

  const handleDel = (id) => {
    const filterData = myData.filter((item) => item.id !== id);
    setmyData(filterData);
  };

  return (
    <>
      <HeaderTop />
      <div className="myServices">
        <Layout style={{ padding: "0 45px" }}>
          <form>
            {/* <Form.Item name="firstName" label="First Name"> */}
            <Input
              name="firstName"
                onChange={(e) => handleInput(e, "firstname")}
                value={firstName}
              />
              {/* <Input
                onChange={(e) => handleInput(e, "firstname")}
                value={firstName}
              /> */}
            {/* </Form.Item> */}
            {/* <Form.Item name="lastName" label="City"> */}
              <Input
                onChange={(e) => handleInput(e, "lastname")}
                value={lastName}
              />
            {/* </Form.Item> */}

            {/* <Form.Item name="age" label="Age"> */}
              <Input onChange={(e) => handleInput(e, "age")} value={age} />
            {/* </Form.Item> */}

            <Button onClick={addData} type="primary" htmlType="submit">
              Submit
            </Button>
          </form>

          <div className="myTable">
            <table style={{ width: "100%", marginTop: "20px" }}>
              <thead>
                <tr>
                  <th>sr no.</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myData.map((items) => (
                  <tr key={items.id}>
                    <td>{items.id}</td>
                    <td>{items.name}</td>
                    <td>{items.age}</td>
                    <td>{items.city}</td>
                    <td>
                      <button onClick={() => handleEdit(items)}>edit</button>
                      <button onClick={() => handleDel(items.id)}>delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Services;
