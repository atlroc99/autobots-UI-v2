import React from 'react';
import { useState,useEffect } from 'react';
import {Form,Col,Row,Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import {QUESTIONNAIRE_SERVICE} from './Endpoint';

const Questionnare = () => {
/* AWS IPv4 */
const URL = QUESTIONNAIRE_SERVICE;

    const [questionnaireList,setQuestionnaireList] = useState([]);
    const [createNew,setCreateNew] = useState(false);

    const [id,setId] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg,setErrMsg] =useState('');

/* system configuration */
    const [webCtrlVersion,setWebCtrlVersion] = useState('');
    const [webCtrlIp,setWebCtrlIp] = useState('');
    const [addOnsList,setAddOnsList] = useState('');
    const [oldAddOns,setOldAddOns] = useState('');
    const [alertNotificationMethod,setAlertNotificationMethod] = useState('');

    const [addressesInNotification,setAddressesInNotification] = useState('');
    const [dbBrandAndVersion,setDbBrandAndVersion] = useState('');
    const [usingHierarchialServer,setUsingHierarchialServer] = useState('');
    const [directorySize,setDirectorySize] = useState('');
    const [dbSize,setDbSize] = useState('');
    const [controllerNo,setControllerNo] = useState('');
    const [pointsNo,setPointsNo] = useState('');
    const [sourceNo,setSourceNo] = useState(''); 
    const [sampleNo,setSampleNo] = useState('');

/* site controller */
    const [controllerModel,setControllerModel] = useState('');
    const [controllerIpAddress,setControllerIpAddress]= useState('');
    const [controllerFirmware,setControllerFirmware]= useState('');
    const [bacNet,setBacNet]= useState('');

/* site networking */
    const [internetProxy,setInternetProxy] = useState('');
    const [hardwareVpn,setHardwareVpn] = useState('');

  useEffect(() => {
    getQuestionnaire(id);
    getQuestionnaireList();
    // eslint-disable-next-line 
  }, [])

/* collect all the data from DB */
const getQuestionnaireList = () => {
  axios.get (`http://${URL}//questionnare-list`)
  .then(response=>{
    setQuestionnaireList(response.data);
  })
}
  /* retrieve data handler */
const getQuestionnaire = (id) => {
  axios.get(`http://${URL}/questionnare/`+id)
  .then (response => {
    if(response.data.length !== 0){
    setId(id);
    setWebCtrlVersion(response.data.webCtrlVersion);
    setWebCtrlIp(response.data.webCtrlIp);
    setAddOnsList(response.data.addOnsList);
    setOldAddOns(response.data.oldAddOns);
    setAlertNotificationMethod(response.data.alertMethod);
    setAddressesInNotification(response.data.inNotification);
    setDbBrandAndVersion(response.data.dbBrandAndVersion);
    setUsingHierarchialServer(response.data.usingHierarchial);
    setDirectorySize(response.data.directorySize);
    setDbSize(response.data.dbSize);
    setControllerNo(response.data.controllerNo);
    setPointsNo(response.data.pointsNo);
    setSourceNo(response.data.sourceNo);
    setSampleNo(response.data.sampleNo);

/* site controller */
    setControllerModel(response.data.controllerModel);
    setControllerIpAddress(response.data.controllerIpAddress);
    setControllerFirmware(response.data.controllerFirmware);
    setBacNet(response.data.bacNet);
    setInternetProxy(response.data.internetProxy);
    setHardwareVpn(response.data.hardwareVpn);
    }else{
      setErrMsg ("Data doesnt Exist. Try Again or Create New Qestionnaire!")
    }
  })
}

/* submit handler */
  const submit = (e) =>{
    e.preventDefault();
    const newQuestionnareDate ={
      id,
      webCtrlVersion,
      webCtrlIp,
      addOnsList,
      oldAddOns,
      alertMethod:alertNotificationMethod,
      inNotification:addressesInNotification,
      dbBrandAndVersion,
      usingHierarchial:usingHierarchialServer,
      directorySize,
      dbSize,
      controllerNo,
      pointsNo,
      sourceNo,
      sampleNo,
      controllerModel,
      controllerIpAddress,
      controllerFirmware,
      bacNet,
      internetProxy,
      hardwareVpn
    }
    console.log(newQuestionnareDate);
    if(id.length > 0){
      axios.post(`http://${URL}/add-questionnare`,newQuestionnareDate)
          .then(response => {
            setSuccessMsg("Data Saved Successfully!")
            setTimeout(() => {
             setSuccessMsg('')
            }, 3000);
              // alert("Questionnare Saved Successfully!")
              // reset();
          })
  }else{
      setErrMsg ("Questionnaire Id is Required!!!")
    }
  }

  const reset = () =>{
    setId('');
    setWebCtrlVersion('');
    setWebCtrlIp('');
    setAddOnsList('');
    setOldAddOns('');
    setAlertNotificationMethod('');
    setAddressesInNotification('');
    setDbBrandAndVersion('');
    setUsingHierarchialServer('');
    setDirectorySize('');
    setDbSize('');
    setControllerNo('');
    setPointsNo('');
    setSourceNo('');
    setSampleNo('');
    setControllerModel('');
    setControllerIpAddress('');
    setControllerFirmware('');
    setBacNet('');
    setInternetProxy('');
    setHardwareVpn('');
    window.location.reload();
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true)
  };

  return (
    <div className="checklistBox">
    <fieldset>
     <Form className="p-4">
     <h4 className="headerTitle">System Cloud Migration Questionnaire</h4>
     
        <div style={{color:'green',textAlign:'center',padding:'10px',margin:'5px'}}>{successMsg}</div>
        <div style={{color:'Red',textAlign:'center',padding:'10px',margin:'5px'}}>{errMsg}</div>

          <div>       
            <Form.Group controlId="formBasicEmail">
            <Row>
              <Form.Label className="text text-info" column sm="3">
                Questionnaire ID
              </Form.Label>
              <Col sm="6">
                  <Form.Control 
                          size ="sm"
                          as="select" 
                          type="text" 
                          value={id} 
                          onChange={(e)=>{setId(e.target.value);setErrMsg('');setSuccessMsg('');setCreateNew(false)}}  required>
                  <option>Choose Existing ID or Create a New One</option>
                  {questionnaireList.map((Questionnaire) => (
                      <option key={Questionnaire.id}>{Questionnaire.id}</option>
                  ))}
                  </Form.Control>
              </Col>
              </Row>

              <div style={{marginLeft:'40%',marginTop:'25px'}}>
                <Button size ="sm" style={{width:'100px',fontSize:'12px',marginLeft:'2px'}} onClick={()=>getQuestionnaire(id)} variant="light"><i style={{color:'black'}} className="fas fa-list"></i> Get Data</Button>
                <Button size ="sm" style={{width:'100px',fontSize:'12px',marginLeft:'2px'}}onClick={()=>setCreateNew(true)} variant="dark"><i style={{color:'white'}} className="fas fa-plus"></i> Create New</Button>
                <Button size ="sm" type="submit" onClick={submit} variant="info" style={{width:'100px',fontSize:'12px',marginLeft:'2px'}}><i className="fas fa-save"></i> Submit</Button>
                <Button size ="sm" type="reset" onClick={handleShow} variant="secondary" style={{width:'100px',fontSize:'12px',marginLeft:'2px'}}><i className="fas fa-sync-alt"></i> Reset</Button>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Reseting Field</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Reseting will reset all the fields. Are you sure you want to reset?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="info" onClick={reset}>
                    Yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>
            </div>
           </Form.Group>
          </div>

    {createNew === true?
          <div className="bg-info p-3">     
          <br></br>  
            <Form.Group as={Row} controlId="formBasicEmail">
              <Form.Label className="text text-white" column sm="5">
                Create New Questionnaire ID
              </Form.Label>
              <Col sm="7">
                <Form.Control className="inputBox"
                type="text" 
                value={id}
                onChange={(e)=>{setId(e.target.value);setErrMsg('');setSuccessMsg('')}}
                placeholder="Questionnaire ID" required/>
              </Col>
            </Form.Group>
          </div>
          :
          <div></div>
    }

      <hr className="border"></hr>

      <div className="title"><i className="fas fa-list-alt"></i>  System Configuration (WebCTRL and I-Vu)</div>

              <Form.Group>
              <Form.Label>What version of WebCTRL or I-Vu are you currently running?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={webCtrlVersion}
                    onChange = {(e)=>setWebCtrlVersion(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group>
              <Form.Label>What is the IP of the WebCTRL or I-Vu server?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value ={webCtrlIp}
                    onChange={(e)=>setWebCtrlIp(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group>
              <Form.Label>List all add-ons that are enabled (not built-in)</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value ={addOnsList}
                    onChange={(e)=>setAddOnsList(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group>
              <Form.Label>List any add-ons not currently running that are desired in the next 3-6 months?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={oldAddOns}
                    onChange={(e)=>setOldAddOns(e.target.value)}
                    placeholder="Enter Your Answer"/>
              </Form.Group>

              <Form.Group>
              <Form.Label>What alert notification methods are used?</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={alertNotificationMethod}
                    onChange={(e)=>setAlertNotificationMethod(e.target.value)}
                    placeholder="Enter Your Answer" />
              </Form.Group>


            <Form.Group>
            <Form.Label>Do you depend on specific From: addresses in notifications?</Form.Label>
            <Form.Control className="inputBox" 
                  type="text" 
                  value={addressesInNotification}
                  onChange={(e)=>setAddressesInNotification(e.target.value)}
                  placeholder="Enter Your Answer" />
            </Form.Group>

            <Form.Group>
            <Form.Label>What brand database are you using and what version?</Form.Label>
            <Form.Control className="inputBox" 
                  type="text" 
                  value={dbBrandAndVersion}
                  onChange={(e)=>setDbBrandAndVersion(e.target.value)}
                  placeholder="Enter Your Answer" />
            </Form.Group>

            <Form.Group>
            <Form.Label>Are you using Hierarchical servers?</Form.Label>
            <Form.Control className="inputBox" 
                  type="text" 
                  value={usingHierarchialServer}
                  onChange={(e)=>setUsingHierarchialServer(e.target.value)}
                  placeholder="Enter Your Answer" />
            </Form.Group>

            <h6 className="text text-info">Size of Environment : </h6>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>System directory size (bytes):</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text"
                        value={directorySize} 
                        onChange={(e)=>setDirectorySize(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Total Database size (bytes):</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={dbSize}
                        onChange={(e)=>setDbSize(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
            </Form.Row>

            <h6 className="text text-info">System Settings : System Statistics :</h6>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of controllers:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={controllerNo}
                        onChange={(e)=>setControllerNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
            
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of points:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={pointsNo}
                        onChange={(e)=>setPointsNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of Sources:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text" 
                        value={sourceNo}
                        onChange={(e)=>setSourceNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
                
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Number of Samples:</Form.Label>
                  <Form.Control className="inputBox" 
                        type="text"
                        value={sampleNo} 
                        onChange={(e)=>setSampleNo(e.target.value)}
                        placeholder="Enter Your Answer" />
                </Form.Group>
              </Form.Row>

          <hr className="border"></hr>

          <div className="title"><i className="fas fa-list-alt"></i>  Site Controller</div>
          <h6 className="text text-info">List all controllers connected to the corporate Ethernet network : </h6>
          <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Model :</Form.Label>
                <Form.Control className="inputBox" 
                      type="text"
                      value={controllerModel} 
                      onChange={(e)=>setControllerModel(e.target.value)}
                      placeholder="Enter Your Answer" />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>IP Address :</Form.Label>
                <Form.Control className="inputBox" 
                      type="text" 
                      value={controllerIpAddress}
                      onChange={(e)=>setControllerIpAddress(e.target.value)}
                      placeholder="Enter Your Answer" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Firmware Version :</Form.Label>
              <Form.Control className="inputBox" 
                    type="text" 
                    value={controllerFirmware}
                    onChange={(e)=>setControllerFirmware(e.target.value)}
                    placeholder="Enter Your Answer" />
            </Form.Group>
          </Form.Row>

          <Form.Group>
          <Form.Label>What BACnet/IP port(s) are used communicating with current WebCTRL or I-Vu</Form.Label>
          <Form.Control className="inputBox" 
                type="text" 
                value={bacNet}
                onChange={(e)=>setBacNet(e.target.value)}
                placeholder="Enter Your Answer" />
          </Form.Group>

          <hr className="border"></hr>

          <div className="title"><i className="fas fa-list-alt"></i>  Site Networking</div>
          
          <Form.Group>
          <Form.Label>Does the corporate network require a proxy for internet connectivity?</Form.Label>
          <Form.Control className="inputBox" 
                type="text" 
                value={internetProxy}
                onChange={(e)=>setInternetProxy(e.target.value)}
                placeholder="Enter Your Answer" />
          </Form.Group>


          <Form.Group>
          <Form.Label>Will the corporate IT department allow a hardware VPN appliance to be installed (Tosibox Lock)?</Form.Label>
          <Form.Control className="inputBox" 
                type="text" 
                value={hardwareVpn}
                onChange={(e)=>setHardwareVpn(e.target.value)}
                placeholder="Enter Your Answer" />
          </Form.Group>

              <div style={{marginLeft:'40%'}}>
                <Button type="submit" onClick={submit} variant="info" style={{width:'200px',margin:'6px'}}><i className="fas fa-save"></i> Submit</Button>
                <Button type="reset" onClick={handleShow} variant="secondary" style={{width:'200px'}}><i className="fas fa-sync-alt"></i> Reset</Button>
  
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Reseting Field</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Reseting will reset all the fields. Are you sure you want to reset?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="info" onClick={reset}>
                    Yes
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                      No
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
          </Form>
      </fieldset>
      </div>
  )
}
export default Questionnare

   