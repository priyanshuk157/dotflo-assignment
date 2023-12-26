import React, { useState } from "react";
import { FormControl, InputLabel, Input, Stack, Divider, Box } from "@mui/material";
import { CiSearch } from "react-icons/ci";
import './home.css'
import axios from "axios";
import Slider1 from "../Components/Slider1.jsx"
import Navbar from "../Components/Navbar.jsx";


const Home = ()=> {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [newsData, setNewsData] = useState([]);

  
  const handleSearch = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${input1}&from=${input2}&apiKey=ec9c40f42256400982c1a48a403ec53f`
      )
      .then((res) => {  
        console.log(res.data);
        setNewsData(res.data.articles);
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
     <div>
      <div className="mt-10">
        <Navbar/> 
       <div >
       <Slider1/>
       </div>
       <Box
       direction={"row"} display={"flex"} justifyContent={"flex-start"} zIndex={"1"}
       position={"absolute"}
       top={"6%"}
       left={"5%"}
       padding={"5px"}
   alignItems={"center"}
       fontSize={"30px"}
       color={"white"}
       width={"50%"}
       height={"2rem"}
       borderRadius={"11px"}
       fontWeight={"700"}
       
       >TOP NEWS</Box>
       
          <Box
          direction={"row"} display={"flex"} justifyContent={"flex-start"} zIndex={"1"}
          position={"absolute"}
          top={"63%"}
          right={"25%"}
          padding={"5px"}
      alignItems={"center"}
          fontSize={"30px"}
          color={"white"}
          width={"50%"}
          height={"2rem"}
          borderRadius={"10px"}
          fontWeight={"700"}
          
          
          >Search The News below</Box>
          <Stack direction={"row"} justifyContent={"center"} zIndex={"1"}
          position={"absolute"}
          top={"69%"}
          right={"25%"}
      alignItems={"center"}
          bgcolor={"white"}
          width={"50%"}
          height={"4rem"}
          borderRadius={"10px"}
          boxShadow={"0px 0px 5px black"}
          > 
          <FormControl>
          <div className="contanier d-flex justify-content-center  align-items-center">
          <InputLabel  htmlFor="search">Search</InputLabel>  
            <Input
              id="search"
              aria-describedby="my-helper-text"
              onChange={(e) => setInput1(e.target.value)}
          />
            
              
            
          </div>
          </FormControl>
          {/* <Dropdown>
      <MenuButton>Sort by time</MenuButton>
      <Menu >
        <MenuItem onClick={setInput2('2023')}>2023</MenuItem>
        <MenuItem onClick={setInput2('2022')}>
          2022
        </MenuItem>
        <MenuItem onClick={setInput2('2021')}>2021</MenuItem>
        <MenuItem onClick={setInput2('2020')}>2020</MenuItem>
        <MenuItem onClick={setInput2('2019')}>2019</MenuItem>
        <MenuItem onClick={setInput2('2018')}>2018</MenuItem>
      </Menu>
    </Dropdown> */}
          <FormControl  
         
          >
          <div className="contanier d-flex justify-content-center  align-items-center">
          <InputLabel  htmlFor="search"></InputLabel>  
            <Input
              id="search"
              type="date"
              aria-describedby="my-helper-text"
              onChange={(e) => setInput2(e.target.value)}
           />
            
              
            
          </div>
       
          </FormControl>
        
       
         {/* <Select
         
          defaultValue={"popularity"}>
      <Option    value={"popularity"} onChange={()=>(handleSort)}>popularity</Option>
      <Option value={"relevancy"} onChange={()=>(handleSort)}>relevancy</Option>
    </Select> */}

          <Divider variant="horizonntal"/>
         
          <CiSearch fontSize={"25px"}
            cursor={"pointer"}
             onClick={handleSearch} />

          </Stack>
          
        
      </div>
      <div className="container justify-content-center mt-5 p-5 border flex-wrap d-flex gap-5">
        {newsData.map((data , key ) =>  {
         

if(key<20){
  return (
    <>
     <div className="card w-25" >
      <div className="card-body">
        <img src={data.urlToImage} alt="" />
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
       {data.abstract}
        </p>
        <a href={data.web_url} className="btn btn-primary">
          View Article
        </a>
      </div>
    </div></>
   
  )
}
          return(<></>)  
          
        })}
      </div>
    </div></>
   
  );
}

export default Home;
