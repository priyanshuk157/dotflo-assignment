import React, { useState } from "react";
import { FormControl, InputLabel, Input, Stack, Divider } from "@mui/material";
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
        `https://newsapi.org/v2/everything?q=${input1}&from${input2}=&apiKey=ec9c40f42256400982c1a48a403ec53f`
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
       

          <Stack direction={"row"} justifyContent={"center"} zIndex={"2"}
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
          <FormControl >
          <div className="contanier d-flex justify-content-center  align-items-center">
          <InputLabel  htmlFor="search">Sort by Date</InputLabel>  
            <Input
              id="search"
              aria-describedby="my-helper-text"
              onChange={(e) => setInput2(e.target.value)}
           />
            
              
            
          </div>
          </FormControl>
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
