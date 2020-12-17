import React, { useState,useEffect } from 'react'
import { Button, Form,Row,Col,Modal,Card, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import {CHECKLIST_SERVICE} from './Endpoint';

const CheckList = () => {
/* AWS IPv4 */
const URL = CHECKLIST_SERVICE;
// const URL = "3.237.81.127:7070";

  const [checklist,setChecklist] = useState([]);
  const [createNew,setCreateNew] = useState(false);
  const [id,setId] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg,setErrMsg] =useState('');

  /* deep dive meeting */
  const [sendQuestionnaire, setQuestionnareStatus] = useState(false);
  const [createHubPage, setHubPageStatus] = useState(false);
  const [scheduleDeepDive, setDeepDiveStatus] = useState(false);
  const [determineCustomer, setDetermineCustomerStatus] = useState(false);
  const [disscussAddons, setDisscussAddonsStatus] =useState(false);
  const [proxySetting,setProxySettingStatus] = useState(false);
  const [trendExport,setTrendExportStatus] = useState(false);
  const [explainCloudMigrationTool,SetExplainCloudMigrationToolStatus] = useState(false);
  const [networking,setNetworkingStatus] = useState(false);
  const [changeCloud,setChangeCloudStatus] = useState(false);
  const [actionUi,setActionUiStatus] = useState(false);
  const [patching,setPatchingStatus] = useState(false);
  const [siteBuilder,setSideBuilederStatus] = useState(false);
  const [workArounds,setWorkArroundsStatus] = useState(false);
  const [sourceTrees,setSourceTreesStatus] = useState(false);
  const [gap,setGapStatus] = useState(false);
  const [coming,setComingStatus] = useState(false);
  const [passwordNotify,setpasswordNotifyStatus] = useState(false);
  const [methodToMinimize,setMethodTominimizestatus] = useState(false);
  const [determineNetworking,setDetermineNetworkingStatus] = useState(false);
  const [changeRoute,setChangeRouteStatus] = useState(false);
  const [testingValidation,setTestingValidationStatus] = useState(false);
  const [targetDates,setTargetDatesStatus] = useState(false);
  const [addMember,setAddMemberStatus] = useState(false);

  /* upgrade System */
  const [webCtrlAccess,setWebCtrlAccessStatus] = useState(false);
  const [webCtrlKey,setWebCtrlKeyStatus] = useState(false);
  const [bacLicenses,setBacLicensesStatus] = useState(false);
  const [upgradeSystem,setUpgradeSystemStatus] = useState(false);
  const [cleanOutWebRoot,setCleanOutWebRootStatus] = useState(false);
  const [notUsingDerby,setUsingDerbyStatus] = useState(false);
  const [scheduleMigration,setScheduleMigration] = useState(false);

  /* update drivers */
  const [updateAllDevice,setUpdateAllDeviceStatus] = useState(false);

  /* tosibox setup */
  const [orderTosibox,setOrderTosiboxStatus]= useState(false);
  const [digitalNetTicket,setDigitalNetTicketStatus]= useState(false);
  const [staticIpAddress,setStaticIpAddressStatus] = useState(false);
  const [switchPort,setSwitchPortStatus]= useState(false);
  const [firewallRules,setFirewallRulesStatus]= useState(false);
  const [configureTosibox,setConfigureTosiboxStatus]= useState(false);
  const [shipTosibox,setShipTosiboxStatus]= useState(false);
  const [veryfyTosiboxbyOwner,setVeryfyTosiboxbyOwner]= useState(false);
  /* cloud sytem setup */
  const [implementAwsNetwork,setImplementAwsNetStatus] = useState(false);
  const [createEmptyAwsSystem,setCreateEmptySytemStatus] = useState(false);
  const [giveToolAndPassword,setGiveToolAndPwdStatus] = useState(false);
  const [giveOwnerWebCtrlUrl,setGiveOwnerWebCtrlurlStatus] = useState(false);

  /* owner-premigration */
  const [updateBbmd,setUpdateBbmdStatus] = useState(false);
  const [changeDefaultRoute,setChangeDefaultRouteStatus] = useState(false);
  const [makeBbmdDevice,setMakeBbmdDeviceStatus] = useState(false);

  /* migrate to aws */
  const [webCtrlOwnerAction,setWebCtrlOwnerActionStatus]  = useState(false);
  const [disableLdap,setDisableLdapStatus] = useState(false);
  const [stopControllerConnection,setControllerConnectionStatus] = useState(false);
  const [systemShutDown,setSystemShutDownStatus] = useState(false);
  const [runCloudTool,setRunCloudToolStatus] = useState(false);
  const [danDocSize,setDanDocSizeStatus] = useState(false);
  const [copyAndRunTool,setCopyArtifactAndRunClaudToolStatus] = useState(false);
  const [copyArtifact,setCopyArtifactStatus] = useState(false);
  const [fileToEfs,setFileToEfsStatus] = useState(false);
  const [navigateToEsfFile,setNavigateToEsfFileStatus] = useState(false);
  const [runAwsS3,setRunAwsS3Status] = useState(false);

  const [importAndConfigData,setImportAndConfigDataStatus]  = useState(false);
  const [editContainerProps,setEditContainerPropsStatus] = useState(false);
  const [stopWebCtrlTask,setStopWebCtrlTaskStatus] = useState(false);

  const [testSystemWithStopConn, setTestSystemWithStopConnStatus] = useState(false);
  const [verifyAddons,setVerifyAddonsStatus] = useState(false);
  const [changeProxySet,setChangeProxySetStatus] = useState(false);
  const [checkTrendExport,setCheckTrendExportStatus] = useState(false);
  const [walkThroughUi,setWalkThroughUiStatus] = useState(false);
  const [clickStatisticBtn,setClickStatisticBtnStatus] = useState(false);
  const [checkOperator,setCheckOperatorStatus] = useState(false);
  const [viewAlarms,setViewAlarmsStatus] = useState(false);
  const [runSecurity,setRunSecurityStatus] = useState(false);
  const [viewOneTrend,setViewOneTrendStatus] = useState(false);
  const [confimServiceStatus,setConfimServiceStatusStatus] = useState(false);
  const [exportTrend,setExportTrendStatus] = useState(false);
  const [danPingBbmd,setDanPingBbmdStatus] = useState(false);

  const [changeIpSetting,setChangeIpSettingStatus] = useState(false);
  const [keepOnlyPort,setKeepOnlyPortStatus] = useState(false);
  const [forceRegistration,setForceRegistrationStatus]  = useState(false);
  const [enableDevice,setEnableDeviceStatus] = useState(false);
  const [dontUseBackUpBbmd,setUseBackUpBbmdStatus] = useState(false);
  const [tuning,setTuningStatus] = useState(false);
  const [timeOut6s,setTimeOut6sStatus] = useState(false);
  const [attempts10,setAttempts10Status] = useState(false);
  const [sync72m,setsync72mStatus] = useState(false);
  const [registerFd,setRegisterFdStatus] = useState(false);

  const [startConn,setStartConnStatus] = useState(false);

  const [confirmConnectivity,setConfirmConnectivityStatus] = useState(false);
  const [seeColors,setSeeColorsStatus] = useState(false);
  const [runModstat,setRunModstatStatus] = useState(false);
  const [seeDataOnEquipment,setSeeDataOnEquipmentStatus] = useState(false);
  const [captureTrendCount,setCaptureTrendCountStatus] = useState(false);
  const [showDbValues,setShowDbValuesStatus] = useState(false);
  const [pointLockAlarm,setPointLockAlarmStatus] = useState(false);
  const [configureTrend1m,setConfigureTrend1mStatus] = useState(false);
  const [enableTrendHistorian,setEnableTrendHistorianStatus] = useState(false);
  const [forceAlarm,setForceAlarmStatus] = useState(false);
  const [verifyDeviceBind,setVerifyDeviceBindStatus] = useState(false);

  const [postLaunchWebCtrl,setPostLaunchWebCtrlStatus]  = useState(false);
  const [changeServerEmail,setChangeServerEmailStatus] = useState(false);
  const [changeMailSetup,setChangeMailSetupStatus] = useState(false);
  const [changePort,setChangePortStatus]= useState(false);
  const [secureTsl,setSecureTslStatus] = useState(false);
  const [addMailUser,setAddMailUserStatus] = useState(false);
  const [changeEmailAddress,setChangeEmailAddressStatus] = useState(false);

  const [testSystemWithOwner,setTestSystemWithOwnerStatus] = useState(false);
  const [emailNotification,setEmailNotificationStatus] = useState(false);

  /* process improvement */
  const [automatedTestPotential,setAutomatedTestPotentialStatus] = useState(false);
  const [dbTrendSetting,setDbTrendSettingStatus] = useState(false);
  const [rngTrendNo,setRngTrendNoStatus] = useState(false);
  const [programToDownload,setProgramToDownloadStatus] = useState(false);
  const [createAlarm,setCreateAlarmStatus] = useState(false);
  const [jordanToSoap, setJordanToSoapStatus] = useState(false);
  const [askSteveForAutoTest,setAskSteveForAutoTestStatus] = useState(false);


useEffect(() => {
  getChecklistData(id);
  getChecklist();
  // eslint-disable-next-line 
}, [])

/* collect all the data from DB */
const getChecklist = () => {
  axios.get (`http://${URL}/meeting-checklist`)
  .then(response=>{
    setChecklist(response.data);
  })
}

/* retrieve data handler */
const getChecklistData = (id) =>{
  axios.get(`http://${URL}/meeting-checklist/`+id)
  .then (response => {
    if(response.data.length !== 0){
    setId(id);
     /* deep dive meeting */
   setQuestionnareStatus(response.data.sendQuestionnaire);
   setHubPageStatus(response.data.createHubPage);
   setDeepDiveStatus(response.data.scheduleDeepDiveMeeting)
   setDetermineCustomerStatus(response.data.determineCustomer);
   setDisscussAddonsStatus(response.data.disscussAddons);
   setProxySettingStatus(response.data.proxySetting);
   setTrendExportStatus(response.data.trendExport);
   SetExplainCloudMigrationToolStatus(response.data.explainCloudMigrationTool);
   setNetworkingStatus(response.data.networking);
   setChangeCloudStatus(response.data.changeCloud);
   setActionUiStatus(response.data.actionUi);
   setPatchingStatus(response.data.patching);
   setSideBuilederStatus(response.data.siteBuilder);
   setWorkArroundsStatus(response.data.workArounds);
   setSourceTreesStatus(response.data.sourceTrees);
   setGapStatus(response.data.gap);
   setComingStatus(response.data.coming);
   setpasswordNotifyStatus(response.data.passwordNotify);
   setMethodTominimizestatus(response.data.methodToMinimize);
   setDetermineNetworkingStatus(response.data.determineNetworking);
   setChangeRouteStatus(response.data.changeRoute);
   setTestingValidationStatus(response.data.testingValidation);
   setTargetDatesStatus(response.data.targetDates);
   setAddMemberStatus(response.data.addMember);
/* upgrade system */
   setWebCtrlAccessStatus(response.data.webCtrlAccess);
   setWebCtrlKeyStatus(response.data.webCtrlKey);
   setBacLicensesStatus(response.data.bacLicenses);
   setUpgradeSystemStatus(response.data.upgradeSystem);
   setCleanOutWebRootStatus(response.data.cleanOutWebRoot);
   setUsingDerbyStatus(response.data.notUsingDerby);
   setScheduleMigration(response.data.scheduleMigration);
/* update drivers */
   setUpdateAllDeviceStatus(response.data.updateAllDevice);
/* tosibox setup */
   setOrderTosiboxStatus(response.data.orderTosibox);
   setDigitalNetTicketStatus(response.data.digitalNetTicket);
   setStaticIpAddressStatus(response.data.staticIpAddress);
    setSwitchPortStatus(response.data.switchPort);
    setFirewallRulesStatus(response.data.firewallRules);
    setConfigureTosiboxStatus(response.data.configureTosibox);
    setShipTosiboxStatus(response.data.shipTosibox);
    setVeryfyTosiboxbyOwner(response.data.veryfyTosiboxbyOwner);
/* cloud system setup */
  setImplementAwsNetStatus(response.data.implementAwsNetwork);
  setCreateEmptySytemStatus(response.data.createEmptyAwsSystem);
  setGiveToolAndPwdStatus(response.data.giveToolAndPassword);
  setGiveOwnerWebCtrlurlStatus(response.data.giveOwnerWebCtrlUrl);
/* owner pre-migration */
  setUpdateBbmdStatus(response.data.updateBbmd);
  setChangeDefaultRouteStatus(response.data.defaultRoute);
  setMakeBbmdDeviceStatus(response.data.makeBbmdDevice);
/* process Improvement */
  setAutomatedTestPotentialStatus(response.data.automatedTestPotential);
  setDbTrendSettingStatus(response.data.dbTrendSetting);
  setRngTrendNoStatus(response.data.rngTrendNo);
  setProgramToDownloadStatus(response.data.programToDownload);
  setCreateAlarmStatus(response.data.createAlarm);
  setJordanToSoapStatus(response.data.jordanToSoap);
  setAskSteveForAutoTestStatus(response.data.askSteveForAutoTest);
/* migrate to aws */
  setWebCtrlOwnerActionStatus(response.data.webCtrlOwnerAction);
  setDisableLdapStatus(response.data.disableLdap);
  setControllerConnectionStatus(response.data.stopControllerConnection);
  setSystemShutDownStatus(response.data.systemShutDown);
  setRunCloudToolStatus(response.data.runCloudTool);
  setDanDocSizeStatus(response.data.danDocSize);
  setCopyArtifactAndRunClaudToolStatus(response.data.copyAndRunTool);
  setCopyArtifactStatus(response.data.copyArtifact);
  setFileToEfsStatus(response.data.fileToEfs);
  setNavigateToEsfFileStatus(response.data.navigateToEsfFile);
  setRunAwsS3Status(response.data.runAwsS3);

  setImportAndConfigDataStatus(response.data.importAndConfigData);
  setEditContainerPropsStatus(response.data.editContainerProps);
  setStopWebCtrlTaskStatus(response.data.stopWebCtrlTask);

  setTestSystemWithStopConnStatus(response.data.testSystemWithStopConn);
  setVerifyAddonsStatus(response.data.verifyAddons);
  setChangeProxySetStatus(response.data.changeProxySet);
  setCheckTrendExportStatus(response.data.checkTrendExport);
  setWalkThroughUiStatus(response.data.walkThroughUi);
  setClickStatisticBtnStatus(response.data.clickStatisticBtn);
  setCheckOperatorStatus(response.data.checkOperator);
  setViewAlarmsStatus(response.data.viewAlarms);
  setRunSecurityStatus(response.data.runSecurity);
  setViewOneTrendStatus(response.data.viewOneTrend);
  setConfimServiceStatusStatus(response.data.confimServiceStatus);
  setExportTrendStatus(response.data.exportTrend);
  setDanPingBbmdStatus(response.data.danPingBbmd);

  setChangeIpSettingStatus(response.data.changeIpSetting);
  setKeepOnlyPortStatus(response.data.keepOnlyPort);
  setForceAlarmStatus(response.data.forceRegistration);
  setEnableDeviceStatus(response.data.enableDevice);
  setUseBackUpBbmdStatus(response.data.dontUseBackUpBbmd);
  setTuningStatus(response.data.tuning);
  setTimeOut6sStatus(response.data.timeOut6s);
  setAttempts10Status(response.data.attempts10);
  setsync72mStatus(response.data.sync72m);
  setRegisterFdStatus(response.data.registerFd);

  setStartConnStatus(response.data.startConn);

  setConfirmConnectivityStatus(response.data.confirmConnectivity);
  setSeeColorsStatus(response.data.seeColors);
  setRunModstatStatus(response.data.runModstat);
  setSeeDataOnEquipmentStatus(response.data.seeDataOnEquipment);
  setCaptureTrendCountStatus(response.data.captureTrendCount);
  setShowDbValuesStatus(response.data.showDbValues);
  setPointLockAlarmStatus(response.data.pointLockAlarm);
  setConfigureTrend1mStatus(response.data.configureTrend1m);
  setEnableTrendHistorianStatus(response.data.enableTrendHistorian);
  setForceAlarmStatus(response.data.forceAlarm);
  setVerifyDeviceBindStatus(response.data.verifyDeviceBind);

  setPostLaunchWebCtrlStatus(response.data.postLaunchWebCtrl);
  setChangeServerEmailStatus(response.data.changeServerEmail);
  setChangeEmailAddressStatus(response.data.changeMailSetup);
  setChangeMailSetupStatus(response.data.changePort);
  setSecureTslStatus(response.data.secureTsl);
  setAddMailUserStatus(response.data.addMailUser);
  setChangeEmailAddressStatus(response.data.changeEmailAddress);

  setTestSystemWithOwnerStatus(response.data.testSystemWithOwner);
  setEmailNotificationStatus(response.data.emailNotificatio);
    }else{
      setErrMsg ("Data doesnt Exist. Try Again or Create New Checklist!")
    }
  })
}

/* submit handler */
const submit = (e) =>{
  e.preventDefault();
  const newData = {
   id: id,
   /* deep dive meeting */
   sendQuestionnaire,
   createHubPage,
   scheduleDeepDiveMeeting: scheduleDeepDive,
   determineCustomer,
   disscussAddons,
   proxySetting,
   trendExport,
   explainCloudMigrationTool,
   networking,
   changeCloud,
   actionUi,
   patching,
   siteBuilder,
   workArounds,
   sourceTrees,
   gap,
   coming,
   passwordNotify,
   methodToMinimize,
   determineNetworking,
   changeRoute,
   testingValidation,
   targetDates,
   addMember,
/* upgrade system */
   webCtrlAccess,
   webCtrlKey,
   bacLicenses,
   upgradeSystem,
   cleanOutWebRoot,
   notUsingDerby,
   scheduleMigration,
/* update drivers */
   updateAllDevice,
/* tosibox setup */
    orderTosibox,
    digitalNetTicket,
    staticIpAddress,
    switchPort,
    firewallRules,
    configureTosibox,
    shipTosibox,
    veryfyTosiboxbyOwner,
/* cloud system setup */
    implementAwsNetwork,
    createEmptyAwsSystem,
    giveToolAndPassword,
    giveOwnerWebCtrlUrl,
/* owner pre-migration */
    updateBbmd,
    defaultRoute:changeDefaultRoute,
    makeBbmdDevice,
/* process Improvement */
    automatedTestPotential,
    dbTrendSetting,
    rngTrendNo,
    programToDownload,
    createAlarm,
    jordanToSoap,
    askSteveForAutoTest,
/* migrate to aws */
    webCtrlOwnerAction,
    disableLdap,
    stopControllerConnection,
    systemShutDown,
    runCloudTool,
    danDocSize,
    copyAndRunTool,
    copyArtifact,
    fileToEfs,
    navigateToEsfFile,
    runAwsS3,

    importAndConfigData,
    editContainerProps,
    stopWebCtrlTask,

    testSystemWithStopConn,
    verifyAddons,
    changeProxySet,
    checkTrendExport,
    walkThroughUi,
    clickStatisticBtn,
    checkOperator,
    viewAlarms,
    runSecurity,
    viewOneTrend,
    confimServiceStatus,
    exportTrend,
    danPingBbmd,

    changeIpSetting,
    keepOnlyPort,
    forceRegistration,
    enableDevice,
    dontUseBackUpBbmd,
    tuning,
    timeOut6s,
    attempts10,
    sync72m,
    registerFd,

    startConn,

    confirmConnectivity,
    seeColors,
    runModstat,
    seeDataOnEquipment,
    captureTrendCount,
    showDbValues,
    pointLockAlarm,
    configureTrend1m,
    enableTrendHistorian,
    forceAlarm,
    verifyDeviceBind,

    postLaunchWebCtrl,
    changeServerEmail,
    changeMailSetup,
    changePort,
    secureTsl,
    addMailUser,
    changeEmailAddress,

    testSystemWithOwner,
    emailNotification

  }
   console.log(newData);

   if(id.length > 0){
    axios.post(`http://${URL}/add-meeting`,newData)
         .then(response => {
             // alert("Data Saved Successfully!")
           setSuccessMsg("Data Saved Successfully!")
             setTimeout(() => {
               setSuccessMsg('')
              }, 3000);
            //  reset();
         })
    }else{
        setErrMsg ("CheckList Id is Required!!!")
      }
    }

const scheduleDeepDiveController = () => {
    setDeepDiveStatus(!scheduleDeepDive);
       resetChildValue();
  }

const resetChildValue = () => {
/* deep dive meeting */
    setDetermineCustomerStatus(false);
    setDisscussAddonsStatus(false);
    setProxySettingStatus(false);
    setTrendExportStatus(false);
    SetExplainCloudMigrationToolStatus(false);
    setNetworkingStatus(false);
    setChangeCloudStatus(false);
    setActionUiStatus(false);
    setPatchingStatus(false);
    setSideBuilederStatus(false);
    setWorkArroundsStatus(false);
    setSourceTreesStatus(false);
    setGapStatus(false);
    setComingStatus(false);
    setpasswordNotifyStatus(false);
    setMethodTominimizestatus(false);
    setDetermineNetworkingStatus(false);
    setChangeRouteStatus(false);
    setTestingValidationStatus(false);
    setTargetDatesStatus(false);
  }

const digitalNetTicketController = () => {
    setDigitalNetTicketStatus(!digitalNetTicket);
      resetTosiboxSetupChild();
  }

const resetTosiboxSetupChild = () => {
    setStaticIpAddressStatus(false);
    setSwitchPortStatus(false);
    setFirewallRulesStatus(false);
}

const automatedTestPotentialController = () => {
  setAutomatedTestPotentialStatus(!automatedTestPotential);
  resetAutomatedTestPotentialChild();
}

const resetAutomatedTestPotentialChild = () => {
  setDbTrendSettingStatus(false);
  setRngTrendNoStatus(false);
  setProgramToDownloadStatus(false);
  setCreateAlarmStatus(false);
}

const webCtrlOwnerActionController = () => {
  setWebCtrlOwnerActionStatus(!webCtrlOwnerAction);
  resetWebCtrlOwnerActionChild();
}

const resetWebCtrlOwnerActionChild = () => {
  setDisableLdapStatus(false);
  setControllerConnectionStatus(false);
  setSystemShutDownStatus(false);
  setRunCloudToolStatus(false);
  setDanDocSizeStatus(false);
  setCopyArtifactAndRunClaudToolStatus(false);
  setCopyArtifactStatus(false);
  setFileToEfsStatus(false);
  setNavigateToEsfFileStatus(false);
  setRunAwsS3Status(false);
}

const importAndConfigDataController = () => {
setImportAndConfigDataStatus(!importAndConfigData);
resetImportAndConfigDataChild();
}

const resetImportAndConfigDataChild = () =>{
  setEditContainerPropsStatus(false);
  setStopWebCtrlTaskStatus(false);
}

const testSystemWithStopConnController = () => {
  setTestSystemWithStopConnStatus(!testSystemWithStopConn);
  resetTestSystemWithStopConChild();
}

const resetTestSystemWithStopConChild = () => {
    setVerifyAddonsStatus(false);
    setChangeProxySetStatus(false);
    setCheckTrendExportStatus(false);
    setWalkThroughUiStatus(false);
    setClickStatisticBtnStatus(false);
    setCheckOperatorStatus(false);
    setViewAlarmsStatus(false);
    setRunSecurityStatus(false);
    setViewOneTrendStatus(false);
    setConfimServiceStatusStatus(false);
    setExportTrendStatus(false);
    setDanPingBbmdStatus(false);
}

const changeIpSettingController = () => {
  setChangeIpSettingStatus(!changeIpSetting);
  resetChangeIpSettingChild();
}

const resetChangeIpSettingChild = () => {
    setKeepOnlyPortStatus(false);
    setForceRegistrationStatus(false);
    setEnableDeviceStatus(false);
    setUseBackUpBbmdStatus(false);
    setTuningStatus(false);
    setTimeOut6sStatus(false);
    setAttempts10Status(false);
    setsync72mStatus(false);
    setRegisterFdStatus(false);
}

const confirmConnectivityController = () => {
  setConfirmConnectivityStatus(!confirmConnectivity);
  resetConfirmConnectivityChild();
}

const resetConfirmConnectivityChild = () => {
  setSeeColorsStatus(false);
  setRunModstatStatus(false);
  setSeeDataOnEquipmentStatus(false);
  setCaptureTrendCountStatus(false);
  setShowDbValuesStatus(false);
  setPointLockAlarmStatus(false);
  setConfigureTrend1mStatus(false);
  setEnableTrendHistorianStatus(false);
  setForceAlarmStatus(false);
  setVerifyDeviceBindStatus(false);
}

const postLaunchWebCtrlController = () => {
  setPostLaunchWebCtrlStatus(!postLaunchWebCtrl);
  resetPostLaunchChild();
}

const resetPostLaunchChild = () =>{
    setChangeServerEmailStatus(false);
    setChangeMailSetupStatus(false);
    setChangePortStatus(false);
    setSecureTslStatus(false);
    setAddMailUserStatus(false);
    setChangeEmailAddressStatus(false); 
}

const testSystemWithOwnerController = () =>{
  setTestSystemWithOwnerStatus(!testSystemWithOwner)
  setEmailNotificationStatus(false);
}
const resetParentValue = () => {
  /* deep dive meeting */
      setQuestionnareStatus(false);
      setHubPageStatus(false);
      setDeepDiveStatus(false);
      setAddMemberStatus(false);
  /* upgrade system */
      setWebCtrlAccessStatus(false);
      setWebCtrlKeyStatus(false);
      setBacLicensesStatus(false);
      setUpgradeSystemStatus(false);
      setCleanOutWebRootStatus(false);
      setUsingDerbyStatus(false);
      setScheduleMigration(false);
      /* update drivers */
      setUpdateAllDeviceStatus(false);

/* tosibox setup */
      setOrderTosiboxStatus(false);
      setDigitalNetTicketStatus(false);
      setConfigureTosiboxStatus(false);
      setShipTosiboxStatus(false);
      setVeryfyTosiboxbyOwner(false);
/* cloud sytem setup */
      setImplementAwsNetStatus(false);
      setCreateEmptySytemStatus(false);
      setGiveToolAndPwdStatus(false);
      setGiveOwnerWebCtrlurlStatus(false);

/* owner-premigration */
      setUpdateBbmdStatus(false);
      setChangeDefaultRouteStatus(false);
      setMakeBbmdDeviceStatus(false);

/* migrate system to aws */
      setWebCtrlOwnerActionStatus(false);
      setImportAndConfigDataStatus(false);
      setTestSystemWithStopConnStatus(false);
      setChangeIpSettingStatus(false);
      setConfirmConnectivityStatus(false);
      setPostLaunchWebCtrlStatus(false);
      setTestSystemWithOwnerStatus(false);

/* process Improvement */
      setAutomatedTestPotentialStatus(false);
      setJordanToSoapStatus(false);
      setAskSteveForAutoTestStatus(false);
  }

 const reset = () => {
   resetParentValue();
   resetChildValue();
   resetTosiboxSetupChild();
   window.location.reload();
 }

/* Modal */
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
       <h4 className="headerTitle">Migration Plan and Checklist</h4>

            <div style={{color:'green',textAlign:'center',padding:'10px',margin:'5px'}}>{successMsg}</div>
            <div style={{color:'Red',textAlign:'center',padding:'10px',margin:'5px'}}>{errMsg}</div>
            
            <div>       
            <Form.Group controlId="formBasicEmail">
            <Row>
              <Form.Label className="text text-info" column sm="2">
                Meeting ID
              </Form.Label>
              <Col sm="6">
                  <Form.Control 
                          size ="sm"
                          as="select" 
                          type="text" 
                          value={id} 
                          onChange={(e)=>{setId(e.target.value);setErrMsg('');setSuccessMsg('');setCreateNew(false)}}  required>
                  <option>Choose Existing ID or Create a New One</option>
                  {checklist.map((ch) => (
                      <option key={ch.id}>{ch.id}</option>
                  ))}
                  </Form.Control>
              </Col>
              </Row>
              <div style={{marginLeft:'40%',marginTop:'25px'}}>
              <Button size ="sm" style={{width:'100px',fontSize:'12px',marginLeft:'2px'}} onClick={()=>getChecklistData(id)} variant="light"><i style={{color:'black'}} className="fas fa-list"></i> Get Data</Button>
              <Button size ="sm"  style={{width:'100px',fontSize:'12px',marginLeft:'2px'}} onClick={()=>setCreateNew(true)} variant="dark"><i style={{color:'white'}} className="fas fa-plus"></i> Create New</Button>
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
                Create New Meeting ID
              </Form.Label>
              <Col sm="7">
                <Form.Control className="inputBox"
                type="text" 
                value={id}
                onChange={(e)=>{setId(e.target.value);setErrMsg('');setSuccessMsg('')}}
                placeholder="CheckList ID" required/>
              </Col>
            </Form.Group>
          </div>
          :
          <div></div>
    }

    <hr className="border"></hr>
    <div className="title"><i className="fas fa-list-alt"></i>  Deep Dive Meeting</div>
          <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={sendQuestionnaire}
                checked={sendQuestionnaire}
                onClick={()=>setQuestionnareStatus(!sendQuestionnaire)}
                label="Send Questionnaire" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={createHubPage}
                checked={createHubPage}
                onClick={()=>setHubPageStatus(!createHubPage)}
                label="Create Hub page with answers from questionnaire" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
                <Form.Check 
                type="checkbox" 
                value={scheduleDeepDive}
                checked={scheduleDeepDive}
                onClick={scheduleDeepDiveController}
                label="Schedule Deep Dive and Planning meeting with system manager"/>  
          </Form.Group>

                { scheduleDeepDive ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      checked={determineCustomer}
                      value={determineCustomer}
                      onClick={()=>setDetermineCustomerStatus(!determineCustomer)}
                      label="Determine customer name" />
                      <Form.Check 
                      type="checkbox" 
                      checked={disscussAddons}
                      value={disscussAddons}
                      onClick={()=>setDisscussAddonsStatus(!disscussAddons)}
                      label="Disscuss all addons and ensure compatibility" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group>
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={determineCustomer}
                        onClick={()=>setDetermineCustomerStatus(!determineCustomer)}
                        label="Determine customer name" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={disscussAddons}
                        onClick={()=>setDisscussAddonsStatus(!disscussAddons)}
                        label="Disscuss all addons and ensure compatibility" />
                    </Form.Group>
                  </div>
                }
                 { scheduleDeepDive && disscussAddons ?
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={proxySetting}
                        value={proxySetting}
                        onClick={()=>setProxySettingStatus(!proxySetting)}
                        label="Proxy settings" />
                        <Form.Check 
                        type="checkbox" 
                        checked={trendExport}
                        value={trendExport}
                        onClick={()=>setTrendExportStatus(!trendExport)}
                        label="Trend Export" />
                    </Form.Group>
                  </div>
                  :
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={proxySetting}
                        onClick={()=>setProxySettingStatus(!proxySetting)}
                        label="Proxy settings" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={trendExport}
                        onClick={()=>setTrendExportStatus(!trendExport)}
                        label="Trend Export" />
                    </Form.Group>
                  </div>
                }
                {scheduleDeepDive ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      checked={explainCloudMigrationTool}
                      value={explainCloudMigrationTool}
                      onClick={()=>SetExplainCloudMigrationToolStatus(!explainCloudMigrationTool)}
                      label="Explain cloud migration tool" />
                      <Form.Check 
                      type="checkbox" 
                      checked={networking}
                      value={networking}
                      onClick={()=>setNetworkingStatus(!networking)}
                      label="Networking" />
                      <Form.Check 
                      type="checkbox" 
                      checked={changeCloud}
                      value={changeCloud}
                      onClick={()=>setChangeCloudStatus(!changeCloud)}
                      label="Change in the cloud" />
                  </Form.Group>
                </div>
                :
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={explainCloudMigrationTool}
                      onClick={()=>SetExplainCloudMigrationToolStatus(!explainCloudMigrationTool)}
                      label="Explain cloud migration tool" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={networking}
                      onClick={()=>setNetworkingStatus(!networking)}
                      label="Networking" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={changeCloud}
                      onClick={()=>setChangeCloudStatus(!changeCloud)}
                      label="Change in the cloud" />
                  </Form.Group>
                </div>
                }

                { scheduleDeepDive && changeCloud ?
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      checked={actionUi}
                      value={actionUi}
                      onClick={()=>setActionUiStatus(!actionUi)}
                      label="Actions in UI are same on-prem and cloud" />
                      <Form.Check 
                      type="checkbox" 
                      checked={patching}
                      value={patching}
                      onClick={()=>setPatchingStatus(!patching)}
                      label="No longer patching" />
                      <Form.Check 
                      type="checkbox" 
                      checked={siteBuilder}
                      value={siteBuilder}
                      onClick={()=>setSideBuilederStatus(!siteBuilder)}
                      label="SiteBuilder - No direct Sitebuilder" />
                    </Form.Group>
                  </div>
                  :
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={actionUi}
                        onClick={()=>setActionUiStatus(!actionUi)}
                        label="Actions in UI are same on-prem and cloud" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={patching}
                        onClick={()=>setPatchingStatus(!patching)}
                        label="No longer patching" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={siteBuilder}
                        onClick={()=>setSideBuilederStatus(!siteBuilder)}
                        label="SiteBuilder - No direct Sitebuilder" />
                    </Form.Group>
                  </div>
                }
                {scheduleDeepDive && changeCloud && siteBuilder ?
                  <div className="thirdChildBox" style={{paddingLeft:'150px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox"
                        checked={workArounds} 
                        value={workArounds}
                        onClick={()=>setWorkArroundsStatus(!workArounds)}
                        label="Workarounds: clippings" />
                        <Form.Check 
                        type="checkbox" 
                        checked={sourceTrees}
                        value={sourceTrees}
                        onClick={()=>setSourceTreesStatus(!sourceTrees)}
                        label="Source Trees" />
                        <Form.Check 
                        type="checkbox" 
                        checked={gap}
                        value={gap}
                        onClick={()=>setGapStatus(!gap)}
                        label="Gap: Network tree – can use clippings" />
                        <Form.Check 
                        type="checkbox" 
                        checked={coming}
                        value={coming}
                        onClick={()=>setComingStatus(!coming)}
                        label="Coming: Admin tool to pull replicant and make backups" />
                      </Form.Group>
                  </div>
                  :
                  <div className="thirdChildBox" style={{paddingLeft:'150px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={workArounds}
                        onClick={()=>setWorkArroundsStatus(!workArounds)}
                        label="Workarounds: clippings" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={sourceTrees}
                        onClick={()=>setSourceTreesStatus(!sourceTrees)}
                        label="Source Trees" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={gap}
                        onClick={()=>setGapStatus(!gap)}
                        label="Gap: Network tree – can use clippings" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={coming}
                        onClick={()=>setComingStatus(!coming)}
                        label="Coming: Admin tool to pull replicant and make backups" />
                    </Form.Group>
                  </div>
                }
                
                {scheduleDeepDive ? 
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={passwordNotify}
                        value={passwordNotify}
                        onClick={()=>setpasswordNotifyStatus(!passwordNotify)}
                        label="Notify that all passwords will change and need to be reset" />
                        <Form.Check 
                        type="checkbox" 
                        checked={methodToMinimize}
                        value={methodToMinimize}
                        onClick={()=>setMethodTominimizestatus(!methodToMinimize)}
                        label="Methods to minimize time of outage - bigger trend buffers" />
                        <Form.Check 
                        type="checkbox" 
                        checked={determineNetworking}
                        value={determineNetworking}
                        onClick={()=>setDetermineNetworkingStatus(!determineNetworking)}
                        label="Determine networking requirements (Tosibox or SC Hub)" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={passwordNotify}
                        onClick={()=>setpasswordNotifyStatus(!passwordNotify)}
                        label="Notify that all passwords will change and need to be reset" />
                        <Form.Check 
                        disabled
                        value={methodToMinimize}
                        onClick={()=>setMethodTominimizestatus(!methodToMinimize)}
                        label="Methods to minimize time of outage - bigger trend buffers" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={determineNetworking}
                        onClick={()=>setDetermineNetworkingStatus(!determineNetworking)}
                        label="Determine networking requirements (Tosibox or SC Hub)" />
                    </Form.Group>
                  </div>
                }

                {scheduleDeepDive && determineNetworking ?
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={changeRoute}
                        value={changeRoute}
                        onClick={()=>setChangeRouteStatus(!changeRoute)}
                        label= "Can devices change default route or add static routes?"/>
                    </Form.Group>
                  </div>
                  :
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={changeRoute}
                        onClick={()=>setChangeRouteStatus(!changeRoute)}
                        label= "Can devices change default route or add static routes?"/>
                    </Form.Group>
                  </div>
                }

                {scheduleDeepDive ? 
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={testingValidation}
                        value={testingValidation}
                        onClick={()=>setTestingValidationStatus(!testingValidation)}
                        label="May have some programs to pre-load for migration validation testing" />
                        <Form.Check 
                        type="checkbox" 
                        checked={targetDates}
                        value={targetDates}
                        onClick={()=>setTargetDatesStatus(!targetDates)}
                        label="Determine target dates for upgrading to 8.0 and for migration" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={testingValidation}
                        onClick={()=>setTestingValidationStatus(!testingValidation)}
                        label="May have some programs to pre-load for migration validation testing" />
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={targetDates}
                        onClick={()=>setTargetDatesStatus(!targetDates)}
                        label="Determine target dates for upgrading to 8.0 and for migration" />
                    </Form.Group>
                  </div>
                }

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={addMember}
                checked={addMember}
                onClick={()=>setAddMemberStatus(!addMember)}
                label="Add members and start Conversation in Teams" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Upgrade System</div>
               
          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={webCtrlAccess}
              checked={webCtrlAccess}
              onClick={()=>setWebCtrlAccessStatus(!webCtrlAccess)}
              label="Give site access to required WebCTRL Build" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={webCtrlKey}
              checked={webCtrlKey}
              onClick={()=>setWebCtrlKeyStatus(!webCtrlKey)}
              label="Generate WebCTRL 8.0 license key for system" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={bacLicenses}
              checked={bacLicenses}
              onClick={()=>setBacLicensesStatus(!bacLicenses)}
              label="Generate licenses for any other products deployed (BACnet/SC Hub etc.)" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={upgradeSystem}
              checked={upgradeSystem}
              onClick={()=>setUpgradeSystemStatus(!upgradeSystem)}
              label="Upgrade system to 8.0 in place and confirm it is stable and fully functional" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={cleanOutWebRoot}
              checked={cleanOutWebRoot}
              onClick={()=>setCleanOutWebRootStatus(!cleanOutWebRoot)}
              label="After upgrade, clean out anything from your webroot/system directory that you don't need in the cloud. Everything in there gets copied to the cloud
              and takes time to move" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={notUsingDerby}
              checked={notUsingDerby}
              onClick={()=>setUsingDerbyStatus(!notUsingDerby)}
              label="If not using Derby: remove databases directory if it exists" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={scheduleMigration}
              checked={scheduleMigration}
              onClick={()=>setScheduleMigration(!scheduleMigration)}
              label="Schedule migration" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Update Drivers</div>
       
          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={updateAllDevice}
              checked={updateAllDevice}
              onClick={()=>setUpdateAllDeviceStatus(!updateAllDevice)}
              label="Update all devices to latest driver" />
          </Form.Group>
      

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Tosibox Setup</div>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={orderTosibox}
              checked={orderTosibox}
              onClick={()=>setOrderTosiboxStatus(!orderTosibox)}
              label="Order Tosibox" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
                <Form.Check 
                type="checkbox" 
                value={digitalNetTicket}
                checked={digitalNetTicket}
                onClick={digitalNetTicketController}
                label="Tickets for Digital Networking Team"/>  
          </Form.Group>

                { digitalNetTicket ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      checked={staticIpAddress}
                      value={staticIpAddress}
                      onClick={()=>setStaticIpAddressStatus(!staticIpAddress)}
                      label="Static IP address" />
                      <Form.Check 
                      type="checkbox" 
                      checked={switchPort}
                      value={switchPort}
                      onClick={()=>setSwitchPortStatus(!switchPort)}
                      label="Switch/Patch Port" />
                      <Form.Check 
                      type="checkbox" 
                      checked={firewallRules}
                      value={firewallRules}
                      onClick={()=>setFirewallRulesStatus(!firewallRules)}
                      label="Firewall rules" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={staticIpAddress}
                      onClick={()=>setStaticIpAddressStatus(!staticIpAddress)}
                      label="Static IP address" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={switchPort}
                      onClick={()=>setSwitchPortStatus(!switchPort)}
                      label="Switch/Patch Port" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={firewallRules}
                      onClick={()=>setFirewallRulesStatus(!firewallRules)}
                      label="Firewall rules" />
                    </Form.Group>
                  </div>
                }

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={configureTosibox}
              checked={configureTosibox}
              onClick={()=>setConfigureTosiboxStatus(!configureTosibox)}
              label="Configure Tosibox" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={shipTosibox}
              checked={shipTosibox}
              onClick={()=>setShipTosiboxStatus(!shipTosibox)}
              label="Ship to site with instructions on installation" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={veryfyTosiboxbyOwner}
              checked={veryfyTosiboxbyOwner}
              onClick={()=>setVeryfyTosiboxbyOwner(!veryfyTosiboxbyOwner)}
              label="Site owner install Tosibox and Dan verify function" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Cloud System Setup</div>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={implementAwsNetwork}
              checked={implementAwsNetwork}
              onClick={()=>setImplementAwsNetStatus(!implementAwsNetwork)}
              label="Implement required network for connectivity to AWS" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={createEmptyAwsSystem}
              checked={createEmptyAwsSystem}
              onClick={()=>setCreateEmptySytemStatus(!createEmptyAwsSystem)}
              label="Create empty system in AWS" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={giveToolAndPassword}
              checked={giveToolAndPassword}
              onClick={()=>setGiveToolAndPwdStatus(!giveToolAndPassword)}
              label="Give Barry Admin Tool URL and Password" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={giveOwnerWebCtrlUrl}
              checked={giveOwnerWebCtrlUrl}
              onClick={()=>setGiveOwnerWebCtrlurlStatus(!giveOwnerWebCtrlUrl)}
              label="Give Site Owner WebCTRL URL and default user password" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Owner Pre-Migration</div>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={updateBbmd}
              checked={updateBbmd}
              onClick={()=>setUpdateBbmdStatus(!updateBbmd)}
              label="Update device that will be BBMD to latest driver rev and confirm that driver doesn't have BBMD issues (LGR250 mb driver known issues)" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={changeDefaultRoute}
              checked={changeDefaultRoute}
              onClick={()=>setChangeDefaultRouteStatus(!changeDefaultRoute)}
              label="Site owner change default route of IP devices to Tosibox IP" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={makeBbmdDevice}
              checked={makeBbmdDevice}
              onClick={()=>setMakeBbmdDeviceStatus(!makeBbmdDevice)}
              label="Make one device a BBMD (In SiteBuilder check the Auto box) (Only one device can have the box checked)" />
          </Form.Group>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Migrate System to AWS</div>

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={webCtrlOwnerAction}
                checked={webCtrlOwnerAction}
                onClick={webCtrlOwnerActionController}
                label="Owner actions for on-prem WebCTRL"/>  
            </Form.Group>

            { webCtrlOwnerAction ?
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group>
                  <Form.Check 
                  type="checkbox" 
                  checked={disableLdap}
                  value={disableLdap}
                  onClick={()=>setDisableLdapStatus(!disableLdap)}
                  label="Disable Non-Functional or Deprecated Add-Ons (LDAP, Exchange Calendar Sync)" />
                  <Form.Check 
                  type="checkbox" 
                  checked={stopControllerConnection}
                  value={stopControllerConnection}
                  onClick={()=>setControllerConnectionStatus(!stopControllerConnection)}
                  label="Stop connections to controllers (Connections:Configure Tab - Stop all connections)" />
                  <Form.Check 
                  type="checkbox" 
                  checked={systemShutDown}
                  value={systemShutDown}
                  onClick={()=>setSystemShutDownStatus(!systemShutDown)}
                  label="Shut down system" />
                  <Form.Check 
                  type="checkbox" 
                  checked={runCloudTool}
                  value={runCloudTool}
                  onClick={()=>setRunCloudToolStatus(!runCloudTool)}
                  label="Run CloudTool (see details below)" />
                  <Form.Check 
                  type="checkbox" 
                  checked={danDocSize}
                  value={danDocSize}
                  onClick={()=>setDanDocSizeStatus(!danDocSize)}
                  label="Dan document size of file to transfer" />
                  <Form.Check 
                  type="checkbox" 
                  checked={copyAndRunTool}
                  value={copyAndRunTool}
                  onClick={()=>setCopyArtifactAndRunClaudToolStatus(!copyAndRunTool)}
                  label="Copy artifact and run CloudTool" />
                </Form.Group>
              </div>
              :
              <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                <Form.Group>
                <Form.Check 
                type="checkbox" 
                disabled
                value={disableLdap}
                onClick={()=>setDisableLdapStatus(!disableLdap)}
                label="Disable Non-Functional or Deprecated Add-Ons (LDAP, Exchange Calendar Sync)" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={stopControllerConnection}
                onClick={()=>setControllerConnectionStatus(!stopControllerConnection)}
                label="Stop connections to controllers (Connections:Configure Tab - Stop all connections)" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={systemShutDown}
                onClick={()=>setSystemShutDownStatus(!systemShutDown)}
                label="Shut down system" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={runCloudTool}
                onClick={()=>setRunCloudToolStatus(!runCloudTool)}
                label="Run CloudTool (see details below)" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={danDocSize}
                onClick={()=>setDanDocSizeStatus(!danDocSize)}
                label="Dan document size of file to transfer" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={copyAndRunTool}
                onClick={()=>setCopyArtifactAndRunClaudToolStatus(!copyAndRunTool)}
                label="Copy artifact and run CloudTool" />
                </Form.Group>
              </div>
            }

            { webCtrlOwnerAction && copyAndRunTool ?
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    checked={copyArtifact}
                    value={copyArtifact}
                    onClick={()=>setCopyArtifactStatus(!copyArtifact)}
                    label="Copy artifact" />
                </Form.Group>
              </div>
              :
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    disabled
                    value={copyArtifact}
                    onClick={()=>setCopyArtifactStatus(!copyArtifact)}
                    label="Copy artifact" />
                </Form.Group>
              </div>
            }

            {webCtrlOwnerAction ?
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group id="formGridCheckbox">
                  <Form.Check 
                  type="checkbox" 
                  checked={fileToEfs}
                  value={fileToEfs}
                  onClick={()=>setFileToEfsStatus(!fileToEfs)}
                  label="Barry copy file to EFS" />
              </Form.Group>
            </div>
            :
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group id="formGridCheckbox">
                  <Form.Check 
                  type="checkbox" 
                  disabled
                  value={fileToEfs}
                  onClick={()=>setFileToEfsStatus(!fileToEfs)}
                  label="Barry copy file to EFS" />
              </Form.Group>
            </div>
            }


            { webCtrlOwnerAction && fileToEfs ?
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    checked={navigateToEsfFile}
                    value={navigateToEsfFile}
                    onClick={()=>setNavigateToEsfFileStatus(!navigateToEsfFile)}
                    label="In admin tool open cmd prompt and navigate to /mnt/customer_efsroot/resourceproperties" />
                    <Form.Check 
                    type="checkbox" 
                    checked={runAwsS3}
                    value={runAwsS3}
                    onClick={()=>setRunAwsS3Status(!runAwsS3)}
                    label="Run aws s3 cp s3://<bucket>/<Dest Zip File>" />
                </Form.Group>
              </div>
              :
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    disabled
                    value={navigateToEsfFile}
                    onClick={()=>setNavigateToEsfFileStatus(!navigateToEsfFile)}
                    label="In admin tool open cmd prompt and navigate to /mnt/customer_efsroot/resourceproperties" />
                    <Form.Check 
                    type="checkbox" 
                    disabled
                    value={runAwsS3}
                    onClick={()=>setRunAwsS3Status(!runAwsS3)}
                    label="Run aws s3 cp s3://<bucket>/<Dest Zip File>" />
                </Form.Group>
              </div>
            }

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={importAndConfigData}
                checked={importAndConfigData}
                onClick={importAndConfigDataController}
                label="Barry Launch system to import data and configure system ?? Barry details (no connections active)"/>  
            </Form.Group>

            { importAndConfigData ?
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group>
                  <Form.Check 
                  type="checkbox" 
                  checked={editContainerProps}
                  value={editContainerProps}
                  onClick={()=>setEditContainerPropsStatus(!editContainerProps)}
                  label="edit container.properties to trigger load" />
                  <Form.Check 
                  type="checkbox" 
                  checked={stopWebCtrlTask}
                  value={stopWebCtrlTask}
                  onClick={()=>setStopWebCtrlTaskStatus(!stopWebCtrlTask)}
                  label="stop bas-webctrl task, let it restart" />
                </Form.Group>
              </div>
              :
              <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                <Form.Group>
                <Form.Check 
                type="checkbox" 
                disabled
                value={editContainerProps}
                onClick={()=>setEditContainerPropsStatus(!editContainerProps)}
                label="edit container.properties to trigger load" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={stopWebCtrlTask}
                onClick={()=>setStopWebCtrlTaskStatus(!stopWebCtrlTask)}
                label="stop bas-webctrl task, let it restart" />
                </Form.Group>
              </div>
            }

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={testSystemWithStopConn}
                checked={testSystemWithStopConn}
                onClick={testSystemWithStopConnController}
                label="Test system with connections Stopped (Connections:Configure tab)"/>  
            </Form.Group>

            { testSystemWithStopConn ?
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group>
                  <Form.Check 
                  type="checkbox" 
                  checked={verifyAddons}
                  value={verifyAddons}
                  onClick={()=>setVerifyAddonsStatus(!verifyAddons)}
                  label="Verify Addons started" />
                </Form.Group>
              </div>
              :
              <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                <Form.Group>
                <Form.Check 
                type="checkbox" 
                disabled
                value={verifyAddons}
                onClick={()=>setVerifyAddonsStatus(!verifyAddons)}
                label="Verify Addons started" /></Form.Group>
              </div>
            }

            { testSystemWithStopConn && verifyAddons ?
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    checked={changeProxySet}
                    value={changeProxySet}
                    onClick={()=>setChangeProxySetStatus(!changeProxySet)}
                    label="Change proxy settings if needed" />
                    <Form.Check 
                    type="checkbox" 
                    checked={checkTrendExport}
                    value={checkTrendExport}
                    onClick={()=>setCheckTrendExportStatus(!checkTrendExport)}
                    label="Check trend export configuration" />
                </Form.Group>
              </div>
              :
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                <Form.Check 
                    type="checkbox" 
                    disabled
                    value={changeProxySet}
                    onClick={()=>setChangeProxySetStatus(!changeProxySet)}
                    label="Change proxy settings if needed" />
                    <Form.Check 
                    type="checkbox" 
                    disabled
                    value={checkTrendExport}
                    onClick={()=>setCheckTrendExportStatus(!checkTrendExport)}
                    label="Check trend export configuration" />
                </Form.Group>
              </div>
            }

            {testSystemWithStopConn ?
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group id="formGridCheckbox">
                  <Form.Check 
                  type="checkbox" 
                  checked={walkThroughUi}
                  value={walkThroughUi}
                  onClick={()=>setWalkThroughUiStatus(!walkThroughUi)}
                  label="Walk through UI" />
                  <Form.Check 
                  type="checkbox" 
                  checked={clickStatisticBtn}
                  value={clickStatisticBtn}
                  onClick={()=>setClickStatisticBtnStatus(!clickStatisticBtn)}
                  label="System Settings: General: Click system statistics button. Confirm system statistics match before" />
                  <Form.Check 
                  type="checkbox" 
                  checked={checkOperator}
                  value={checkOperator}
                  onClick={()=>setCheckOperatorStatus(!checkOperator)}
                  label="Operators - check that they came over" />
                  <Form.Check 
                  type="checkbox" 
                  checked={viewAlarms}
                  value={viewAlarms}
                  onClick={()=>setViewAlarmsStatus(!viewAlarms)}
                  label="View Alarms to confirm old alarms came over" />
                  <Form.Check 
                  type="checkbox" 
                  checked={runSecurity}
                  value={runSecurity}
                  onClick={()=>setRunSecurityStatus(!runSecurity)}
                  label="Run security Audit report reports arrow dropdown" />
                  <Form.Check 
                  type="checkbox" 
                  checked={viewOneTrend}
                  value={viewOneTrend}
                  onClick={()=>setViewOneTrendStatus(!viewOneTrend)}
                  label="View one trend" />
                  <Form.Check 
                  type="checkbox" 
                  checked={confimServiceStatus}
                  value={confimServiceStatus}
                  onClick={()=>setConfimServiceStatusStatus(!confimServiceStatus)}
                  label="run in console: services status -v confirm everything running" />
                  <Form.Check 
                  type="checkbox" 
                  checked={exportTrend}
                  value={exportTrend}
                  onClick={()=>setExportTrendStatus(!exportTrend)}
                  label="Trend Export" />
                  <Form.Check 
                  type="checkbox" 
                  checked={danPingBbmd}
                  value={danPingBbmd}
                  onClick={()=>setDanPingBbmdStatus(!danPingBbmd)}
                  label="Dan ping BBMD IP from Cloudcommander console" />
              </Form.Group>
            </div>
            :
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group id="formGridCheckbox">
              <Form.Check 
              type="checkbox" 
              disabled
              value={walkThroughUi}
              onClick={()=>setWalkThroughUiStatus(!walkThroughUi)}
              label="Walk through UI" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={clickStatisticBtn}
              onClick={()=>setClickStatisticBtnStatus(!clickStatisticBtn)}
              label="System Settings: General: Click system statistics button. Confirm system statistics match before" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={checkOperator}
              onClick={()=>setCheckOperatorStatus(!checkOperator)}
              label="Operators - check that they came over" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={viewAlarms}
              onClick={()=>setViewAlarmsStatus(!viewAlarms)}
              label="View Alarms to confirm old alarms came over" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={runSecurity}
              onClick={()=>setRunSecurityStatus(!runSecurity)}
              label="Run security Audit report reports arrow dropdown" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={viewOneTrend}
              onClick={()=>setViewOneTrendStatus(!viewOneTrend)}
              label="View one trend" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={confimServiceStatus}
              onClick={()=>setConfimServiceStatusStatus(!confimServiceStatus)}
              label="run in console: services status -v confirm everything running" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={exportTrend}
              onClick={()=>setExportTrendStatus(!exportTrend)}
              label="Trend Export" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={danPingBbmd}
              onClick={()=>setDanPingBbmdStatus(!danPingBbmd)}
              label="Dan ping BBMD IP from Cloudcommander console" />
              </Form.Group>
            </div>
            }

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={changeIpSetting}
                checked={changeIpSetting}
                onClick={changeIpSettingController}
                label="Change BACnet/IP settings and Tuning Parameters on Connections page"/>  
            </Form.Group>

            { changeIpSetting ?
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group>
                  <Form.Check 
                  type="checkbox" 
                  checked={keepOnlyPort}
                  value={keepOnlyPort}
                  onClick={()=>setKeepOnlyPortStatus(!keepOnlyPort)}
                  label="Server IP address Clear values for IP and subnet. Both should be empty. Keep only the port." />
                  <Form.Check 
                  type="checkbox" 
                  checked={forceRegistration}
                  value={forceRegistration}
                  onClick={()=>setForceRegistrationStatus(!forceRegistration)}
                  label="Foreign Device: Set to Force Registration" />
                  <Form.Check 
                  type="checkbox" 
                  checked={enableDevice}
                  value={enableDevice}
                  onClick={()=>setEnableDeviceStatus(!enableDevice)}
                  label="Primary BBMD: Set to device enabled in prior step" />
                  <Form.Check 
                  type="checkbox" 
                  checked={dontUseBackUpBbmd}
                  value={dontUseBackUpBbmd}
                  onClick={()=>setUseBackUpBbmdStatus(!dontUseBackUpBbmd)}
                  label="Do not use backup BBMD" />
                  <Form.Check 
                  type="checkbox" 
                  checked={tuning}
                  value={tuning}
                  onClick={()=>setTuningStatus(!tuning)}
                  label="Tuning" />
                </Form.Group>
              </div>
              :
              <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                <Form.Group>
                <Form.Check 
                type="checkbox" 
                disabled
                value={keepOnlyPort}
                onClick={()=>setKeepOnlyPortStatus(!keepOnlyPort)}
                label="Server IP address Clear values for IP and subnet. Both should be empty. Keep only the port." />
                <Form.Check 
                type="checkbox" 
                disabled
                value={forceRegistration}
                onClick={()=>setForceRegistrationStatus(!forceRegistration)}
                label="Foreign Device: Set to Force Registration" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={enableDevice}
                onClick={()=>setEnableDeviceStatus(!enableDevice)}
                label="Primary BBMD: Set to device enabled in prior step" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={dontUseBackUpBbmd}
                onClick={()=>setUseBackUpBbmdStatus(!dontUseBackUpBbmd)}
                label="Do not use backup BBMD" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={tuning}
                onClick={()=>setTuningStatus(!tuning)}
                label="Tuning" />
                </Form.Group>
              </div>
            }

            { changeIpSetting && tuning ?
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                    <Form.Check 
                    type="checkbox" 
                    checked={timeOut6s}
                    value={timeOut6s}
                    onClick={()=>setTimeOut6sStatus(!timeOut6s)}
                    label="Comm Timeout: 6000" />
                    <Form.Check 
                    type="checkbox" 
                    checked={attempts10}
                    value={attempts10}
                    onClick={()=>setAttempts10Status(!attempts10)}
                    label="Comm Attempts: 10" />
                    <Form.Check 
                    type="checkbox" 
                    checked={sync72m}
                    value={sync72m}
                    onClick={()=>setsync72mStatus(!sync72m)}
                    label="Do sync: 7200000" />
                    <Form.Check 
                    type="checkbox" 
                    checked={registerFd}
                    value={registerFd}
                    onClick={()=>setRegisterFdStatus(!registerFd)}
                    label="Register FD Interval: 600" />
                </Form.Group>
              </div>
              :
              <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                <Form.Group id="formGridCheckbox">
                <Form.Check 
                    type="checkbox" 
                    disabled
                    value={timeOut6s}
                    onClick={()=>setTimeOut6sStatus(!timeOut6s)}
                    label="Comm Timeout: 6000" />
                    <Form.Check 
                    type="checkbox" 
                    disabled
                    value={attempts10}
                    onClick={()=>setAttempts10Status(!attempts10)}
                    label="Comm Attempts: 10" />
                    <Form.Check 
                    type="checkbox" 
                    disabled
                    value={sync72m}
                    onClick={()=>setsync72mStatus(!sync72m)}
                    label="Do sync: 7200000" />
                    <Form.Check 
                    type="checkbox" 
                    disabled
                    value={registerFd}
                    onClick={()=>setRegisterFdStatus(!registerFd)}
                    label="Register FD Interval: 600" />
                </Form.Group>
              </div>
            }     
        <Form.Group id="formGridCheckbox">
        <Form.Check 
            type="checkbox" 
            value={startConn}
            checked={startConn}
            onClick={()=>setStartConnStatus(!startConn)}
            label="Start Connections" />
      </Form.Group>

          <Form.Group id="formGridCheckbox">
          <Form.Check 
              type="checkbox" 
              value={confirmConnectivity}
              checked={confirmConnectivity}
              onClick={confirmConnectivityController}
              label="All confirm connectivity to remote site"/>  
          </Form.Group>

          { confirmConnectivity ?
          <div className="firstChildBox" style={{paddingLeft:'50px'}}>
            <Form.Group>
                <Form.Check 
                type="checkbox" 
                checked={seeColors}
                value={seeColors}
                onClick={()=>setSeeColorsStatus(!seeColors)}
                label="See colors" />
                <Form.Check 
                type="checkbox" 
                checked={runModstat}
                value={runModstat}
                onClick={()=>setRunModstatStatus(!runModstat)}
                label="Run modstat" />
                <Form.Check 
                type="checkbox" 
                checked={seeDataOnEquipment}
                value={seeDataOnEquipment}
                onClick={()=>setSeeDataOnEquipmentStatus(!seeDataOnEquipment)}
                label="See data on equipment" />
                <Form.Check 
                type="checkbox" 
                checked={captureTrendCount}
                value={captureTrendCount}
                onClick={()=>setCaptureTrendCountStatus(!captureTrendCount)}
                label="Capture trend count (can see aggregate by running ts -t)" />
                <Form.Check 
                type="checkbox" 
                checked={showDbValues}
                value={showDbValues}
                onClick={()=>setShowDbValuesStatus(!showDbValues)}
                label="View trends (cog show database values only)" />
              </Form.Group>
            </div>
            :
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group>
              <Form.Check 
              type="checkbox" 
              disabled
              value={seeColors}
              onClick={()=>setSeeColorsStatus(!seeColors)}
              label="See colors" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={runModstat}
              onClick={()=>setRunModstatStatus(!runModstat)}
              label="Run modstat" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={seeDataOnEquipment}
              onClick={()=>setSeeDataOnEquipmentStatus(!seeDataOnEquipment)}
              label="See data on equipment" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={captureTrendCount}
              onClick={()=>setCaptureTrendCountStatus(!captureTrendCount)}
              label="Capture trend count (can see aggregate by running ts -t)" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={showDbValues}
              onClick={()=>setShowDbValuesStatus(!showDbValues)}
              label="View trends (cog show database values only)" />
              </Form.Group>
            </div>
          }

          { confirmConnectivity && showDbValues ?
            <div className="secondChildBox" style={{paddingLeft:'100px'}}>
              <Form.Group id="formGridCheckbox">
                  <Form.Check 
                  type="checkbox" 
                  checked={pointLockAlarm}
                  value={pointLockAlarm}
                  onClick={()=>setPointLockAlarmStatus(!pointLockAlarm)}
                  label="Points lock alarm" />
                  <Form.Check 
                  type="checkbox" 
                  checked={configureTrend1m}
                  value={configureTrend1m}
                  onClick={()=>setConfigureTrend1mStatus(!configureTrend1m)}
                  label="Configure a trend for 1 minute sample writing to database and on graph show only database values." />
                  <Form.Check 
                  type="checkbox" 
                  checked={enableTrendHistorian}
                  value={enableTrendHistorian}
                  onClick={()=>setEnableTrendHistorianStatus(!enableTrendHistorian)}
                  label="enable trend historian with 2 samples" />
              </Form.Group>
            </div>
            :
            <div className="secondChildBox" style={{paddingLeft:'100px'}}>
              <Form.Group id="formGridCheckbox">
              <Form.Check 
              type="checkbox" 
              disabled
              value={pointLockAlarm}
              onClick={()=>setPointLockAlarmStatus(!pointLockAlarm)}
              label="Points lock alarm" />
              <Form.Check 
              type="checkbox" 
              disabled
              value={configureTrend1m}
              onClick={()=>setConfigureTrend1mStatus(!configureTrend1m)}
              label="Configure a trend for 1 minute sample writing to database and on graph show only database values." />
              <Form.Check 
              type="checkbox" 
              disabled
              value={enableTrendHistorian}
              onClick={()=>setEnableTrendHistorianStatus(!enableTrendHistorian)}
              label="enable trend historian with 2 samples" />
              </Form.Group>
            </div>
          }     

          { confirmConnectivity ?
            <div className="firstChildBox" style={{paddingLeft:'50px'}}>
              <Form.Group>
                  <Form.Check 
                  type="checkbox" 
                  checked={forceAlarm}
                  value={forceAlarm}
                  onClick={()=>setForceAlarmStatus(!forceAlarm)}
                  label="try to force alarm" />
                  <Form.Check 
                  type="checkbox" 
                  checked={verifyDeviceBind}
                  value={verifyDeviceBind}
                  onClick={()=>setVerifyDeviceBindStatus(!verifyDeviceBind)}
                  label="Verify bindings of at least 2 devices (show bindings: bacnet bind show and UI properties button) - note the values before starting the
                  connection" />
                </Form.Group>
              </div>
              :
              <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                <Form.Group>
                <Form.Check 
                type="checkbox" 
                disabled
                value={forceAlarm}
                onClick={()=>setForceAlarmStatus(!forceAlarm)}
                label="try to force alarm" />
                <Form.Check 
                type="checkbox" 
                disabled
                value={verifyDeviceBind}
                onClick={()=>setVerifyDeviceBindStatus(!verifyDeviceBind)}
                label="Verify bindings of at least 2 devices (show bindings: bacnet bind show and UI properties button) - note the values before starting the
                connection" />
                </Form.Group>
              </div>
            }

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={postLaunchWebCtrl}
                checked={postLaunchWebCtrl}
                onClick={postLaunchWebCtrlController}
                label="Owner Post-Launch WebCTRL Configuration"/>  
            </Form.Group>
            
            { postLaunchWebCtrl ?
              <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                <Form.Group>
                    <Form.Check 
                    type="checkbox" 
                    checked={changeServerEmail}
                    value={changeServerEmail}
                    onClick={()=>setChangeServerEmailStatus(!changeServerEmail)}
                    label="Change email Server settings" />
                  </Form.Group>
                </div>
                :
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                  <Form.Check 
                    type="checkbox" 
                    disabled
                    value={changeServerEmail}
                    onClick={()=>setChangeServerEmailStatus(!changeServerEmail)}
                    label="Change email Server settings" />
                </Form.Group>
                </div>
              }
  
              { postLaunchWebCtrl && changeServerEmail ?
                <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                  <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      checked={changeEmailAddress}
                      value={changeEmailAddress}
                      onClick={()=>setChangeEmailAddressStatus(!changeEmailAddress)}
                      label="From: notifications@webctrl.automatedlogic.com" />
                      <Form.Check 
                      type="checkbox" 
                      checked={changeMailSetup}
                      value={changeMailSetup}
                      onClick={()=>setChangeMailSetupStatus(!changeMailSetup)}
                      label="Mail Host: email-smtp.us-east-1.amazonaws.com" />
                      <Form.Check 
                      type="checkbox" 
                      checked={changePort}
                      value={changePort}
                      onClick={()=>setChangePortStatus(!changePort)}
                      label="Port: 587" />
                      <Form.Check 
                      type="checkbox" 
                      checked={secureTsl}
                      value={secureTsl}
                      onClick={()=>setSecureTslStatus(!secureTsl)}
                      label="Secure TLS" />
                      <Form.Check 
                      type="checkbox" 
                      checked={addMailUser}
                      value={addMailUser}
                      onClick={()=>setAddMailUserStatus(!addMailUser)}
                      label="Add Mail user and password from parameter store" />
                  </Form.Group>
                </div>
                :
                <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                  <Form.Group id="formGridCheckbox">
                  <Form.Check 
                      type="checkbox" 
                      disabled
                      value={changeEmailAddress}
                      onClick={()=>setChangeEmailAddressStatus(!changeEmailAddress)}
                      label="From: notifications@webctrl.automatedlogic.com" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={changeMailSetup}
                      onClick={()=>setChangeMailSetupStatus(!changeMailSetup)}
                      label="Mail Host: email-smtp.us-east-1.amazonaws.com" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={changePort}
                      onClick={()=>setChangePortStatus(!changePort)}
                      label="Port: 587" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={secureTsl}
                      onClick={()=>setSecureTslStatus(!secureTsl)}
                      label="Secure TLS" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={addMailUser}
                      onClick={()=>setAddMailUserStatus(!addMailUser)}
                      label="Add Mail user and password from parameter store" />
                  </Form.Group>
                </div>
              }
  
              <Form.Group id="formGridCheckbox">
              <Form.Check 
                  type="checkbox" 
                  value={testSystemWithOwner}
                  checked={testSystemWithOwner}
                  onClick={testSystemWithOwnerController}
                  label="Owner+ Test system"/>  
              </Form.Group>
              
              { testSystemWithOwner ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      checked={emailNotification}
                      value={emailNotification}
                      onClick={()=>setEmailNotificationStatus(!emailNotification)}
                      label="Verify notification emails" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group>
                    <Form.Check 
                      type="checkbox" 
                      disabled
                      value={emailNotification}
                      onClick={()=>setEmailNotificationStatus(!emailNotification)}
                      label="Verify notification emails" />
                  </Form.Group>
                  </div>
                }

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Running CloudTool</div>
      <Card style={{textAlign:'justify'}}>
        <Card.Header style={{textAlign:'center',fontWeight:'bold'}}>The file at this link AWSCloudTool-dev.exe will create a zip file of your system that is prepared to be migrated into AWS. Hopefully, you can run this
        without issue.<br></br>Here are the instructions: </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>1. Copy AWSCloudTool-dev.exe into the root directory of your 8.0 WebCtrl installation. It will reside alongside WebCTRL Server, SiteBuilder, and
            the other launchers.</ListGroup.Item>
            <ListGroup.Item>2. Copy AWSCloudTool-dev.launch into the bin/launchers directory under your 8.0 WebCTRL installation. It will reside alongside other .launch files
            in the same directory.</ListGroup.Item>
            <ListGroup.Item>3. Open a command line prompt in either DOS or PowerShell. This s a Windows executable.</ListGroup.Item>
            <ListGroup.Item>4. Change directory to the root directory of your 8.0 WebCTRL installation where you copied this tool to in step 1)</ListGroup.Item>
            <ListGroup.Item>5. Bring down the WebCTRL server, this tool will report an error if the system is currently open.</ListGroup.Item>
            <ListGroup.Item>6. Take a backup!!! This tool will not change your source system, precautions are taken to not overwrite your source system, but be careful.</ListGroup.Item>
            <ListGroup.Item style={{textAlign:'justify'}}>7. At the command line, run these commands: (Note the -t option at the end to get trends)<br></br><br></br>
            <i className="fas fa-hand-point-right"></i> .\AWSCloudTool-dev.exe help
            This should show you a help menu. If it does not, STOP and contact me with the error message.
            If PostgreSQL or MSSQL use export-system-state, if derby, use bundle-system-state <br></br>
            <br></br>
            <i className="fas fa-hand-point-right"></i> .\AWSCloudTool-dev.exe export-system-state -bundle <strong>(Dest Zip File) </strong> -dest <strong>(Temp System Name)</strong> -source 
            <strong>(System Name to Export)</strong> -t
            Where:
            <strong>(Dest Zip File)</strong> is the name of the big zip file that will be curled up to s3 per dans pervious email.
            <strong>(Temp System Name)</strong> is the name of a new system in webroot that will hold a temporary Derby system to move to AWS
            <strong>(System Name to Export)</strong> is the name of the system that you want to move to AWS
            <br></br><br></br>
            <strong style={{color:'rgb(19, 163, 184)'}}>Example:</strong>
            <br></br>
            <p style={{marginLeft:'10px',textAlign:'justify'}}>.\AWSCloudTool-dev.exe export-system-state -bundle AutoMigrateALCGA.zip -dest alc_ga_temp_derby -source alc_ga -t
            Change -bundle and -dest to your preferences. -source must be your active system name
            </p></ListGroup.Item>
            <ListGroup.Item>8. Contact Barry with questions. If you want to share a screen that is fine.</ListGroup.Item>
          </ListGroup>
        </Card>

      <hr className="border"></hr>
      <div className="title"><i className="fas fa-list-alt"></i> Process Improvements</div>

          <Form.Group id="formGridCheckbox">
                <Form.Check 
                type="checkbox" 
                value={automatedTestPotential}
                checked={automatedTestPotential}
                onClick={automatedTestPotentialController}
                label="From Trevor (potential for automated testing too) (Dana first, then Tim's team) (Check with test team - Ed Morris team, Ben, Casey, Barry has
                  some - Dana lead effort )"/>  
          </Form.Group>

                { automatedTestPotential ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group>
                      <Form.Check 
                      type="checkbox" 
                      checked={dbTrendSetting}
                      value={dbTrendSetting}
                      onClick={()=>setDbTrendSettingStatus(!dbTrendSetting)}
                      label="We create a program with some trend settings we want to write something to database" />
                    </Form.Group>
                  </div>
                  :
                  <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                    <Form.Group>
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={dbTrendSetting}
                        onClick={()=>setDbTrendSettingStatus(!dbTrendSetting)}
                        label="We create a program with some trend settings we want to write something to database" />
                    </Form.Group>
                  </div>
                }
                 { automatedTestPotential && dbTrendSetting ?
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        checked={rngTrendNo}
                        value={rngTrendNo}
                        onClick={()=>setRngTrendNoStatus(!rngTrendNo)}
                        label="something like RNG feeding number to a trend" />
                    </Form.Group>
                  </div>
                  :
                  <div className="secondChildBox" style={{paddingLeft:'100px'}}>
                    <Form.Group id="formGridCheckbox">
                        <Form.Check 
                        type="checkbox" 
                        disabled
                        value={rngTrendNo}
                        onClick={()=>setRngTrendNoStatus(!rngTrendNo)}
                        label="something like RNG feeding number to a trend" />
                    </Form.Group>
                  </div>
                }
                {automatedTestPotential ?
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      checked={programToDownload}
                      value={programToDownload}
                      onClick={()=>setProgramToDownloadStatus(!programToDownload)}
                      label="Give customer the program to download into a few modules" />
                      <Form.Check 
                      type="checkbox" 
                      checked={createAlarm}
                      value={createAlarm}
                      onClick={()=>setCreateAlarmStatus(!createAlarm)}
                      label="Alarm too" />
                  </Form.Group>
                </div>
                :
                <div className="firstChildBox" style={{paddingLeft:'50px'}}>
                  <Form.Group id="formGridCheckbox">
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={programToDownload}
                      onClick={()=>setProgramToDownloadStatus(!programToDownload)}
                      label="Give customer the program to download into a few modules" />
                      <Form.Check 
                      type="checkbox" 
                      disabled
                      value={createAlarm}
                      onClick={()=>setCreateAlarmStatus(!createAlarm)}
                      label="Alarm too" />
                  </Form.Group>
                </div>
                }

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={jordanToSoap}
                checked={jordanToSoap}
                onClick={()=>setJordanToSoapStatus(!jordanToSoap)}
                label="From Jordan - SOAP program to change things" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
            <Form.Check 
                type="checkbox" 
                value={askSteveForAutoTest}
                checked={askSteveForAutoTest}
                onClick={()=>setAskSteveForAutoTestStatus(!askSteveForAutoTest)}
                label="Ask Steve if they have plans that will help us do automated testing" />
            </Form.Group>

          <div style={{marginLeft:'40%'}}>
          <Button type="submit" onClick={submit} variant="info" style={{width:'200px',margin:'5px'}}><i className="fas fa-save"></i> Submit</Button>

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

export default CheckList



