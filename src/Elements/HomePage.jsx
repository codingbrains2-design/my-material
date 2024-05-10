import React, { useEffect, useState } from 'react';
import Container from "@mui/material/Container";
import { Box, Toolbar, Typography } from "@mui/material";
import HeaderTop from './HeaderTop';
import axios from 'axios';

const HomePage = () => {
  const [colleges, setColleges] = useState([]);
  const [filterClg, setFilterClg] = useState([]);

  const fetchColleges = async () => {
    try {
      const response = await axios.get('http://universities.hipolabs.com/search?country=india');
      console.log(response.data);
      setColleges(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  // const filterState = (event) => {
  //   const searchTerm = event.target.value.toLowerCase();
  //   if(colleges){
  //     const filteredColleges = colleges.filter(college =>
  //       college['state-province'].toLowerCase().includes(searchTerm)
  //     );
  //     setFilterClg(filteredColleges);
  //   }
  // };
  const filterState = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    console.log('ye hai',colleges)
    // if (colleges) { // Check if colleges array is not null or undefined
      const filteredColleges = colleges.filter(college =>
        college['state-province'] && college['state-province'].toLowerCase().includes(searchTerm)
      );
      setFilterClg(filteredColleges);
    // }
  };

  return (
    <>
      <HeaderTop />
      <Box component="main" sx={{ p: 3, background: "#060709" }}>
        <Container maxWidth="xl">
          <Toolbar />
          <div className="pageCover">
            <Box
              component="img"
              src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/google-quiz.jpg?width=595&height=400&name=google-quiz.jpg"
            ></Box>
            <Box className="coverText" component="div">
              <Typography variant="h4" color="#fff">Experience Media Like Never Before</Typography>
              <Typography variant="span" color="#fff">Enjoy award-winning stereo beats with wireless listening freedom and sleek, streamlined with premium padded and delivering first-rate playback.</Typography>
            </Box>
          </div>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="xl">
          <div className="searchClg">
            <input onChange={filterState} type="text" placeholder='Search College By State' />
          </div>
          <div className="collegeBox">
            {(filterClg.length > 0 ? filterClg : colleges).map((item, index) => (
              <div className='collegeCard card' key={index}>
                <div className="card1">
                  <span className='clgName'>{item.name}</span><br />
                  <span>{item.country}</span><br />
                  <span>{item['state-province']}</span><br />
                  <span>{item.web_pages}</span>
                  <div class="go-corner" href="#">
                    <div class="go-arrow">
                      →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Box>
    </>
  );
}

export default HomePage;


// import React, { useEffect, useState } from 'react'
// import Container from "@mui/material/Container";

// import { Box, Toolbar, ImageList, Typography } from "@mui/material";
// import HeaderTop from './HeaderTop';
// import axios from 'axios';

// const HomePage = () => {
//   const [colleges , setColleges] = useState([]);
//   const [filterClg, setFilterClg] = useState([])

//   const fetchColleges = async () => {
//     try{
//       const response = await axios.get('http://universities.hipolabs.com/search?country=india')
//       console.log(response.data)
//        setColleges(response.data);

//     }catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
//  useEffect(() => {
//     fetchColleges()
//   }, [])

//   return (
//     <>
//     <HeaderTop />
//       <Box component="main" sx={{ p: 3, background: "#060709" }}>
//         <Container maxWidth="xl">
//           <Toolbar />
//           <div className="pageCover">
//             <Box
//               component="img"
//               src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/google-quiz.jpg?width=595&height=400&name=google-quiz.jpg"
//             ></Box>
//             <Box  className="coverText" component="div">
//               <Typography variant="h4" color="#fff">Experience Media Like Never Before</Typography>
//               <Typography variant="span" color="#fff">Enjoy award-winning stereo beats with wireless listening freedom and sleek, streamlined with premium padded and delivering first-rate playback.</Typography>
//             </Box>
//           </div>
//         </Container>
//       </Box>
//       <Box>
//         <Container maxWidth="xl">
//           <div className="searchClg">
//             <input onChange={filterState} type="text" placeholder='enter state'/>
//           </div>
//           <div className="collegeBox">
//             {colleges.map(( item, index) => (
//               <div className='collegeCard card' key={index}>
//                 <div className="card1">
//                   <span className='clgName'>{item.name}</span><br />
//                   <span>{item.country}</span><br />
//                   <span>{item['state-province']}</span><br />
//                   <span>{item.web_pages}</span>
//                   <div class="go-corner" href="#">
//                       <div class="go-arrow">
//                         →
//                       </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div class="card">
//             <a class="card1" href="#">
//               <p>This is heading</p>
//               <p class="small">Card description with lots of great facts and interesting details.</p>
//               <div class="go-corner" href="#">
//                 <div class="go-arrow">
//                   →
//                 </div>
//               </div>
//             </a>
//           </div>
//         </Container>
//       </Box>
//     </>
//   );
// }

// export default HomePage