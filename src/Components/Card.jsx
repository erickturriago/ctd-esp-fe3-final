import React, { useEffect, useState } from "react";
import { useDentistaStates } from "./utils/global.context";
import {useNavigate } from "react-router-dom";
import IconDentista from '../../public/images/doctor.jpg'


const Card = ({dentista}) => {

  const {name, username, id } = dentista
  const [isFav,setIsFav]=useState(false)
  const {state, dispatch} = useDentistaStates()
  const navigate = useNavigate();

  const addFav = ()=>{
    const dentistaSelected = JSON.parse(localStorage.getItem('favs')) || []
    if(!(dentistaSelected.filter((den)=>den.id==dentista.id).length>0)){
      dispatch({type: 'ADD_FAV', payload: dentista})
      localStorage.setItem('favs', JSON.stringify([...dentistaSelected, dentista]))
      setIsFav(true)
    }
    else{
      dispatch({type: 'DEL_FAV', payload: dentista})
      localStorage.setItem('favs',JSON.stringify(dentistaSelected.filter((den)=>den.id!==dentista.id)));
      setIsFav(false)
    }
  }

  const handleClick = () => {
    navigate('/detail/'+dentista.id);
  };

  useEffect(()=>{
    const dentistaSelected = JSON.parse(localStorage.getItem('favs')) || []
    const filtro = dentistaSelected.filter((dentistaFilter)=>dentistaFilter.id == dentista.id)
    filtro.length>0?setIsFav(true):setIsFav(false);
  },[])

  return (
    <div className="card">
        <img className="iconDentista" src={IconDentista} onClick={handleClick} alt="" />
        <h4>{name}</h4>
        <p>{username}</p>
        <i className={`fa-heart favIcon ${isFav?'fa-solid fillHeart':'fa-regular emptyHeart'}`} onClick={addFav}></i>
    </div>
  );
};

export default Card;
