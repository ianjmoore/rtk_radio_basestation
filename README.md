# RTK Radio Base Station Tutorial

## FreeFly RTK Base Station Configuration
### On Windows: Configure Base Station NVM to Output RTCM 3:
1. Download or clone this repo.
2. Download and install v22.07 of [u-center](https://www.u-blox.com/en/product/u-center) for "F9/M9 products and below". u-center is u-blox's GNSS evaluation software (Windows only). We will use u-center to configure the basestation to output RTCM 3 on startup (OS independent). <br/> <img src="FreeFly_RTK\download_u-center_v22.07.png" width="250">
3. Plug in FreeFly RTK GPS base station first, via USB 
4. Open u-center and select the newly initialized COM port. <br/> <img src="FreeFly_RTK\u-center_com_port.png" width="300">
5. Click Tools > Receiver Configuration... <br/> <img src="FreeFly_RTK\u-center_receiver_configuration.png" width="400">
6. Click the directory browser and select Freefly_RTCM_MSM7_config.txt where you have cloned this repo. <br/> <img src="FreeFly_RTK\u-center_select_config_file.png" width="400">
7. Click "Transfer file -> GNSS".<br/>
8. Click the circled save settings to Non-Volatile Memory button:<br/> <img src="FreeFly_RTK\u-center_write_to_nvm.png">
### On Windows: Survey in the Base Station: 
Surveying in a basestation is a critical step to obtaining accurate global coordinate frame RTK corrections from a base station. Once the base station is physically installed in its stationary location, there are multiple options for surveying in the base station depending on accuracy requirements. If only relative position accuracy is required, then a quick survey is sufficient. If global position accuracy is required, then a longer survey must be performed. The higher the global position accuracy required, the longer the basestation must survey in its global position.<br/>
#### **Option 1**: Quick Survey (60 s)
1. The FreeflyRTCM_MSM7

#### **Option 2**: NTRIP Initialized Survey

#### **Option 3**: Long Survey (24 h)

# byte_shuffle

This directory is a byte shuffler intended for use with a [GQ7-GNSS/INS](https://www.microstrain.com/inertial-sensors/3dm-gq7) and an RTK basestation equipped with radios, such as the [FreeFly RTK GPS basestation](https://store.freeflysystems.com/products/rtk-gps-ground-station)
and [FRX PRO Pair 900 MHz radios](https://store.freeflysystems.com/products/frx-pro-pair-with-accessories-for-alta-x). This tool is intended for convenience only and there is no affiliation between Parker and FreeFly. 

**Remember,** RTK corrections can only be transmitted to the GQ7 via the [AUX port](https://s3.amazonaws.com/files.microstrain.com/GQ7+User+Manual/user_manual_content/RTK/Auxiliary%20Port.htm). The AUX port provides an independent communication channel for RTK correction information and the flexibility of direct connection of radio basestations that this tool supports. The GQ7 supports the RTCM3 messages listed on the [AUX/RTCM3](https://s3.amazonaws.com/files.microstrain.com/GQ7+User+Manual/user_manual_content/RTK/Auxiliary%20Port.htm) page of the manual. 

**WARNING:** Do not connect the same power supply inputs (Vpri or Vaux) to different power supplies. Damage to the device and/or connected equipment may result from improper power supply connection. See the [Powering](https://s3.amazonaws.com/files.microstrain.com/GQ7+User+Manual/user_manual_content/installation/Powering.htm) page of the GQ7 manual on properly powering the 3DM-GQ7.

## Instructions for use of this repo: 

1. Download NodeJS
2. If Node package manager not installed in Step 1, install Node package manager
3. In byte_shuffle client directory, run in command line:
    * `npm install`
4. Edit node_byte_shuffle_client.js for correct serial port names
5. Run in command line:
    * `node byte_shuffle_client.js` 


### System Setup Block Diagram 
<img src="diagrams\RTK_basestation_byte_shuffle_diag.png" width="400">

