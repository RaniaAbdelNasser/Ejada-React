import React,{useContext,useState,useEffect} from 'react'
import MainScreen from '../../components/adminComponents/mainScreen'

import { GlobalContext } from './../../context/Provider';
import { Row, Table, Button, Col, Modal, Form, Spinner } from "react-bootstrap";
const AdminContainer = () => {
 
      const [getData, setgetData] = useState(false);
    useEffect(() => {
        
    //  getStudents()(studentsDispatch);
     setgetData(true);
 
      
        
    }, [])
    return (
        <div>
       {getData==true &&  <MainScreen/>}
       {getData==false && <Row className="my-5 py-5 mx-auto justify-content-center align-center "> <Spinner animation="border" size="lg" className="text-center"/></Row> }
       
      

        </div>
    )
}

export default AdminContainer
