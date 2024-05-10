import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
// import type { FormInstance } from 'antd';
import { Button, Form, Input, Space, Layout } from "antd";




const About = () => {
    const [storeName, setStoreName] = useState('');
    const [storeAge, setStoreAge] = useState(0);

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    
    const storeCred = () => {
       localStorage.setItem(storeName, storeAge);
       let localName = localStorage.getItem(storeName);
       alert(storeName);
    }

    function checkValidity ()  {
        var data = localStorage.getItem(name)
       if(data && parseInt(data) === parseInt(age) ){
        alert(`Welcome to ${name}`)
       }else{
        alert('Noooo !! Wrong credentials')
       }
    }


  return (
    <div>
      <HeaderTop />
      <div className="validForm">
        <Layout style={{padding: '0 45px'}}>
          <Form
            name="validateOnly"
            layout="vertical"
            autoComplete="off"
          >
            <p style={{margin: '12px 0', fontWeight: 'bold'}}>Enter any credentials to check</p>
            <Form.Item name="enterName" label="Name" rules={[{ }]}>
              <Input  value={storeName} onChange={(e)=> setStoreName(e.target.value)}/>
            </Form.Item>
            <Form.Item name="enterAge" label="Age" rules={[{ required: true }]}>
              <Input value={storeAge} onChange={(e) => setStoreAge(e.target.value)}/>
            </Form.Item>
            <Form.Item>
              <Space>
                <Button onClick={storeCred}>store credentials</Button>
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>

          <Form
            name="validateOnly"
            layout="horizontal"
            autoComplete="off"
          >
            <p style={{margin: '12px 0', fontWeight: 'bold'}}>Check the local storage credentials</p>
            <Form.Item name="checkName" label="Name" rules={[{ }]}>
              <Input  value={name} onChange={(e)=> setName(e.target.value)}/>
            </Form.Item>
            <Form.Item name="checkAge" label="Age" rules={[{ required: true }]}>
              <Input value={age} onChange={(e) => setAge(e.target.value)}/>
            </Form.Item>
            <Form.Item>
              <Space>
                <Button onClick={checkValidity}>check credentisla</Button>
                <Button htmlType="reset">Reset</Button>
              </Space>
            </Form.Item>
          </Form>
        </Layout>
      </div>
    </div>
  );
};

export default About;
