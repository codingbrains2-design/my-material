import React, { useState } from "react";
import HeaderTop from "./HeaderTop";
import axios from "axios";

const ApiTest = () => {
  const [myTrains, setMyTrains] = useState([]);
  const [coachtypes, setcoachtypes] = useState([]);

  function getDayInitial(day) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    console.log('ye day hai' , daysOfWeek[day])
    return daysOfWeek[day];
  }

  const getTrains = async () => {
    getDayInitial(1)
    const trainOptions = {
      method: "POST",
      url: "https://trains.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "11e9866147msh03dea3b7078f635p168143jsne45120c3ec41",
        "X-RapidAPI-Host": "trains.p.rapidapi.com",
      },
      // data: { search: 'Rajdhani' },
      data: { search: "superfast" },
    };

    // const currencyOptions = {
    //   method: 'GET',
    //   url: 'https://currency-exchange.p.rapidapi.com/listquotes',
    //   headers: {
    //     'X-RapidAPI-Key': '11e9866147msh03dea3b7078f635p168143jsne45120c3ec41',
    //     'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    //   }
    // };
    try {
      const trainResponse = await axios.request(trainOptions);
      console.log("trains a gyi", trainResponse.data);
      setMyTrains(trainResponse.data);
      console.log(myTrains);
    } catch (error) {
      console.log("aa nahi pyi train", error);
    }
    // try {
    //   const [trainResponse, currencyResponse] = await Promise.all([
    //     axios.request(trainOptions),
    //     axios.request(currencyOptions)
    //   ]);

    //   console.log('Train data:', trainResponse.data);
    //   console.log('Currency data:', currencyResponse.data);

    //   // Set the state or handle the responses as needed
    //   // Example:
    //   // setMyTrains(trainResponse.data);
    //   // setCurrencyQuotes(currencyResponse.data);
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    // }
  };

  return (
    <>
      <HeaderTop />
      <div className="apiTest" style={{ padding: "20px" }}>
        <div className="trainAPI">c
          <div className="trainContent">
            <div>
              {myTrains.map((tItem, index) => (
                <div className="myTrain">
                  <div>
                    <p>Train Name</p> {tItem.name}
                  </div>
                  <div>
                    <p>Train Number</p> {tItem.train_num}
                  </div>
                  <div>
                    <span>From : {tItem.train_from}</span>
                    <span>
                      <p>TO : </p> {tItem.train_to}
                    </span>
                  </div>
                  <div>
                    <span>
                      <p>Departure</p> {tItem.data.departTime}
                    </span>
                    <span>
                      <p>Arrival</p> {tItem.data.arriveTime}
                    </span>
                    <span>
                      <div>
                      <h5>Days</h5> 
                      <p>{tItem.data.days.Fri}</p>                      
                      </div>
                    </span>
                    <span>
                      {Object.entries(tItem.data.days).map(([day, value]) => (
                        <div key={day}>
                          <h5 style={{ color: value== 1 ? 'green' : 'red' }}>{day}</h5>
                        </div>
                      ))}
                    </span>
                    <div className="coach">
                      <span>
                        <p>Coach Type</p>
                        {tItem.data.classes.map((classItem, index) => (
                          <span key={index}>{classItem}{index !== tItem.data.classes.length-1 && ', '}</span>
                        ))}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={getTrains}>get Trains</button>
        </div>
      </div>
    </>
  );
};

export default ApiTest;
