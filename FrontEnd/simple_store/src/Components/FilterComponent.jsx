import { Box, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const FilterComponent = () => {

  const [searchParams,setSearchParams] = useSearchParams() ;

  const urlCategory = searchParams.getAll('category')
//   const urlSort = searchParams.get('sortBy')
 
  const [category,setCategory] = useState(urlCategory || []) ;
//   const [sortBy,setSortBy] = useState(urlSort || '')

  const dispatch = useDispatch() ; 

  useEffect(()=>{
    if(category){
      setSearchParams({category})
    }
  },[category,dispatch,setSearchParams])


//   useEffect(()=>{
//     if(sortBy){
//       const params = {
//         category : searchParams.getAll('category'),
//       }
//       setSearchPrams(params)
//     }
//   },[searchParams,dispatch,setSearchPrams,sortBy])
  
  
  const handleCheckbox =(e)=>{

    let option = e.target.value ;

    let newCategory = [...category]

    if(category.includes(option))
    {
      newCategory.splice(newCategory.indexOf(option),1) 
    }
    else{
      newCategory.push(option) ;
    }
    setCategory(newCategory)
   
  }

  return (
    <>
       <Text pl={5} pb={3} pt={6} fontWeight={'bold'} fontSize={"large"}>CATEGORY FILTER</Text>

       <Box>
        <input type='checkbox' value='Biscuits & Cookies' onChange={handleCheckbox} checked={category.includes('Biscuits & Cookies')} />
        <label style={{fontSize:"18px",marginLeft:"12px"}} >Biscuits & Cookies</label> <br></br>

        <input type='checkbox' value='Dairy Products' onChange={handleCheckbox} checked={category.includes('Dairy Products')}  />
        <label style={{fontSize:"18px",marginLeft:"12px"}} >Dairy Products</label><br></br>

        <input type='checkbox' value='Edible Oil' onChange={handleCheckbox} checked={category.includes('Edible Oil')}  />
        <label style={{fontSize:"18px",marginLeft:"12px"}} >Edible Oil</label><br></br>

        <input type='checkbox' value='Bath & Handwash' onChange={handleCheckbox} checked={category.includes('Bath & Handwash')} />
        <label style={{fontSize:"18px",marginLeft:"12px"}} >Bath & Handwash</label><br></br>

        <input type='checkbox' value='Skin Care' onChange={handleCheckbox} checked={category.includes('Skin Care')} />
        <label style={{fontSize:"18px",marginLeft:"12px"}} >Skin Care</label><br></br>

        <input type='checkbox' value='Instant Foods' onChange={handleCheckbox} checked={category.includes('Instant Foods')} />
        <label style={{fontSize:"18px",marginLeft:"12px"}} >Instant Foods</label><br></br>
       </Box>
    </>
  )
}

export default FilterComponent