import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './selectionCard.css';
import { useState } from 'react'
import QsCard from './qscard.jsx';
export default function SelectionCard(){
    let arr=["anime","movies","video games","sports","music"];
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [name,setName]=useState("");
    let onBtnClick=(name1)=>{
        setSelectedCategory(true);
        setName(name1);
        
    }
    return(
        (!selectedCategory)?
         <div  className="cont">
        
        <Button variant="contained" className="cont1" onClick={()=>onBtnClick(arr[0])}>{arr[0]}</Button>
        <Button variant="contained" className="cont1" onClick={()=>onBtnClick(arr[1])}>{arr[1]}</Button>
        <Button variant="contained" className="cont1" onClick={()=>onBtnClick(arr[2])}>{arr[2]}</Button>
        <Button variant="contained" className="cont1" onClick={()=>onBtnClick(arr[3])}>{arr[3]}</Button>
        <Button variant="contained" className="cont1" onClick={()=>onBtnClick(arr[4])}>{arr[4]}</Button>
        
        </div>
        :
        <QsCard category={name}></QsCard>
    );
}