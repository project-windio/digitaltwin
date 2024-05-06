const data = [
    {
        id: 0,
        name: "Krogmann 15/50",
        core: "urn_uni-bremen_ialb_wio_0_0_wea_0001",
        doc: "urn_uni-bremen_ialb_wio_0_0_wea_0001",
        children: [
            {
                id: 1,
                name: "Wind Turbine System",
                children: [
                    {
                        id: 11,
                        name: "Rotor System",
                        children: [
                            {
                                id: 111,
                                name: "Rotor Blade Overall",
                                core: "urn_uni-bremen_ialb_windio_0_0_rot_0000",
                                doc: "urn_uni-bremen_ialb_windio_0_0_rot_0000",
                                children: [
                                    {
                                        id: 1111,
                                        name: "Pitch Angle Sensor",
                                        isSensor: true,
                                        device: "urn:uni-bremen:iab:wio:0:0:ptch:0001",
                                        core: "urn_uni-bremen_iab_wio_0_0_ptch_0001",
                                        sensor: "pitchAngle"
                                    }
                                ]
                            }, {
                                id: 112, 
                                name: "Rotor Blade System 1",
                                core: "urn_fibretech_fbt_wio_0_0_rot_0001",
                                doc: "urn_fibretech_fbt_wio_0_0_rot_0001",
                                children: [
                                    {
                                        id: 1121,
                                        name: "Strain Sensor Mid Section",
                                        device: "urn:fibretech:fbt:wio:0:0:rot:0001",
                                        sensor: "Dehnung_Mitte",
                                        core: "urn_fibretech_fbr_wio_0_0_dms_0001",
                                        isSensor: true
                                        
                                    }, {
                                        id: 1122,
                                        name: "Strain Sensor Top",
                                        device: "urn:fibretech:fbt:wio:0:0:rot:0001",
                                        sensor: "Dehnung_Spitze",
                                        core: "urn_fibretech_fbr_wio_0_0_dms_0001",
                                        isSensor: true
                                        
                                        
                                    }, {
                                        id: 1123,
                                        name: "Strain Sensor Root",
                                        device: "urn:fibretech:fbt:wio:0:0:rot:0001",
                                        sensor: "Dehnung_Wurzel",
                                        core: "urn_fibretech_fbr_wio_0_0_dms_0001",
                                        isSensor: true
                                    }, {
                                        id: 1124,
                                        name: "Temperature Sensor",
                                        device: "urn:fibretech:fbt:wio:0:0:rot:0001",
                                        sensor: "Temperatur", 
                                        isSensor: true
                                    }
                                ]
                            }, {
                                id: 113,
                                name: "Rotor Blade System 2"
                            }, {
                                id: 114,
                                name: "Rotor Blade System 3"
                            }, {
                                id: 115,
                                name: "Rotor Hub Unit"
                            }, {
                                id: 116,
                                name: "Rotor Brake System"
                            }
                        ]
                    }, {
                        id: 12,
                        name: "Drive Train System",
                        children: [
                            {
                                id: 1201,
                                name: "Rotor Bearing System"
                            }, {
                                id: 1202,
                                name: "Speed Conversion System",
                                children: [
                                    {
                                        id: 12021,
                                        name: "Gearbox",
                                        core: "urn_uni-bremen_ialb_wio_0_0_gear_0001",
                                        children: [
                                            {
                                                id: 120211,
                                                name: "Temperature Sensor",
                                                isSensor: true,
                                                device: "urn:uni-bremen:bik:wio:0:0:gbxt:0001",
                                                core: "urn_uni-bremen_bik_wio_0_0_gbxt_0001",
                                                sensor: "acc_x"
                                            }
                                        ]
                                    }, {
                                        id: 12022,
                                        name: "Gearbox Vibration Sensor",
                                        isSensor: true
                                    }
                                ]
                            }, {
                                id: 1203,
                                name: "Brake System Drive Train"
                            }, {
                                id: 1204,
                                name: "Torque Transmission High speed shaft"
                            }, {
                                id: 1205,
                                name: "Auxiliary systems Drive Train"
                            }, {
                                id: 1206,
                                name: "Main Gear oil system"
                            }, {
                                id: 1207,
                                name: "Offline Gear oil system"
                            }, {
                                id: 1208,
                                name: "Common oil lubrication system Drive Train"
                            }, {
                                id: 1209,
                                name: "Rotor Lock Drive Train"
                            }, {
                                id: 1210,
                                name: "Rotor slewing Unit"
                            }, {
                                id: 1211,
                                name: "Cooling system Drive Train"
                            }
                        ]
                    }, {
                        id: 13,
                        name: "Yaw System",
                        children: [
                            {
                                id: 131,
                                name: "Yaw Drive System",
                                core: "urn_uni-bremen_iab_wio_0_0_yaw_0000"
                            }, {
                                id: 132,
                                name: "Yaw Brake System"
                            }
                        ]
                    }, {
                        id: 14,
                        name: "Central Lubrication System"
                    }, {
                        id: 15,
                        name: "Central Hydraulic System",
                        core: "urn_uni-bremen_iab_wio_0_0_hydr_0000"
                    }, {
                        id: 16,
                        name: "Control System",
                        children: [
                            {
                                id: 161,
                                name: "Turbine Control System",
                                core: "urn_uni-bremen_ialb_windio_0_0_cntr_0001",
                                doc: "urn_uni-bremen_ialb_windio_0_0_cntr_0001"
                            }, {
                                id: 162,
                                name: "Climatization Turbine Control"
                            }
                        ]
                    }
                ]
            }, {
                id: 2,
                name: "Generation System",
                children: [
                    {
                        id: 21,
                        name: "Power Generation System",
                        children: [
                            {
                                id: 211,
                                name: "Power Generation System 1",
                                core: "urn_uni-bremen_iab_wio_0_0_gensys_0000",
                                children: [
                                    {
                                        id: 2111,
                                        name: "Generator",
                                        core: "urn_uni-bremen_ialb_windio_0_0_gen_0001",
                                        children: [
                                            {
                                                id: 21111,
                                                name: "Amperage Sensor L1",
                                                device: "urn:uni-bremen:iab:wio:0:0:gena:0001",
                                                core: "urn_uni-bremen_iab_wio_0_0_gena_0001",
                                                doc: "urn_uni-bremen_iab_wio_0_0_gena_0001",
                                                isSensor: true,
                                                sensor: "currentL1"
                                            }, {
                                                id: 21112,
                                                name: "Amperage Sensor L2",
                                                device: "urn:uni-bremen:iab:wio:0:0:gena:0002",
                                                core: "urn_uni-bremen_iab_wio_0_0_gena_0001",
                                                isSensor: true,
                                                sensor: "currentL2"
                                            }, {
                                                id: 21113,
                                                name: "Amperage Sensor L3",
                                                device: "urn:uni-bremen:iab:wio:0:0:gena:0003",
                                                core: "urn_uni-bremen_iab_wio_0_0_gena_0001",
                                                isSensor: true,
                                                sensor: "currentL3"
                                            }, {
                                                id: 21114,
                                                name: "Voltage Sensor L1L2",
                                                device: "urn:uni-bremen:iab:wio:0:0:genv:0001",
                                                //core: "urn_uni-bremen_iab_wio_0_0_genv_0001",
                                                isSensor: true,
                                                sensor: "voltageL1L2"
                                            }, {
                                                id: 21115,
                                                name: "Voltage Sensor L2L3",
                                                device: "urn:uni-bremen:iab:wio:0:0:genv:0002",
                                                //core: "urn_uni-bremen_iab_wio_0_0_genv_0001",
                                                isSensor: true,
                                                sensor: "voltageL2L3"
                                            }, {
                                                id: 21116,
                                                name: "Voltage Sensor L3L1",
                                                device: "urn:uni-bremen:iab:wio:0:0:genv:0003",
                                                //core: "urn_uni-bremen_iab_wio_0_0_genv_0001",
                                                isSensor: true,
                                                sensor: "voltageL3L1"
                                            }, {
                                                id: 21117,
                                                name: "Rotation Speed Sensor",
                                                device: "urn:uni-bremen:iab:wio:0:0:grpm:0001",
                                                //core: "urn_uni-bremen_iab_wio_0_0_grpm_0001",
                                                sensor: "rotationSpeed",
                                                isSensor: true
                                            },
                                        ]
                                    }, {
                                        id: 2112,
                                        name: "Generator Vibration BIKBox",
                                        device: "urn:uni-bremen:bik:wio:0:0:gens:0001",
                                        core: "urn_uni-bremen_bik_wio_0_0_gens_0001",
                                        isSensor: true
                                    }, {
                                        id: 2113,
                                        name: "Generator Temperature BIKBox",
                                        device: "urn:uni-bremen:bik:wio:0:0:gent:0001",
                                        core: "urn_uni-bremen_bik_wio_0_0_gent_0001",
                                        sensor: "generator_temperature",
                                        isSensor: true
                                    }
                                ]
                            }, {
                                id: 212,
                                name: "Generator Cooling System"
                            }
                        ]
                    }
                ]
            }, {
                id: 3,
                name: "Transmission",
                children: [
                    {
                        id: 31,
                        name: "Generator Switching System",
                        children: [
                            {
                                id: 311,
                                name: "Generator Switching System Generator 1"
                            }
                        ]
                    }, {
                        id: 32,
                        name: "Converter System",
                        core: "urn_uni-bremen_ialb_windio_0_0_conv_0000",
                        doc: "urn_uni-bremen_ialb_windio_0_0_conv_0000",
                        children: [
                            {
                                id: 321,
                                name: "Converter System Generator 1",
                                children: [
                                    {
                                        id: 3211,
                                        name: "Converter 1",
                                        core: "urn_uni-bremen_ialb_windio_0_0_conv_0001",
                                        doc: "urn_uni-bremen_ialb_windio_0_0_conv_0001",
                                        children: [
                                            {
                                                id: 32111,
                                                name: "Humidity Sensor",
                                                core: "urn_uni-bremen_iab_wio_0_0_rcon_0001",
                                                doc: "urn_uni-bremen_iab_wio_0_0_rcon_0001",
                                                device: "urn:uni-bremen:iab:wio:0:0:rcon:0001",
                                                sensor: "humidity",
                                                isSensor: true
                                            }, {
                                                id: 32112,
                                                name: "Temperature Sensor 1",
                                                device: "urn:uni-bremen:iab:wio:0:0:tcon:0002",
                                                core: "urn_uni-bremen_iab_wio_0_0_tcon_0002",
                                                sensor: "temperature",
                                                isSensor: true
                                            }, {
                                                id: 32113,
                                                name: "Temperature Sensor 2",
                                                device: "urn:uni-bremen:iab:wio:0:0:tcon:0003",
                                                sensor: "temperature",
                                                isSensor: true
                                            }
                                        ]
                                    }, {
                                        id: 3212,
                                        name: "Converter Switch Cabinet",
                                        core: "urn_uni-bremen_iab_wio_0_0_cabin_0001",
                                        children: [
                                            {
                                                id: 32121,
                                                name: "Temperature Sensor",
                                                device: "urn:uni-bremen:iab:wio:0:0:tcon:0001",
                                                core: "urn_uni-bremen_ialb_wio_0_0_tcon_0001",
                                                doc: "urn_uni-bremen_ialb_wio_0_0_tcon_0001",
                                                sensor: "temperature",
                                                isSensor: true
                                            }, {
                                                id: 32122,
                                                name: "Intermediate Circuit Voltage Sensor",
                                                isSensor: true
                                            }
                                        ]
                                    }, {
                                        id: 3213,
                                        name: "Grid Interface Module",
                                        core: "urn_uni-bremen_iab_wio_0_0_grid_0000",
                                        children: [
                                            {
                                                id: 32131,
                                                name: "Grid Amperage System 1",
                                                core: "urn_uni-bremen_iab_wio_0_0_inva_0001",
                                                doc: "urn_uni-bremen_iab_wio_0_0_inva_0001",
                                                device: "urn:uni-bremen:iab:wio:0:0:inva:0001",
                                                sensor: "currentL1"
                                            }, {
                                                id: 32132,
                                                name: "Grid Amperage System 2",
                                                core: "urn_uni-bremen_iab_wio_0_0_inva_0002",
                                                doc: "urn_uni-bremen_iab_wio_0_0_inva_0002",
                                                device: "urn:uni-bremen:iab:wio:0:0:inva:0002",
                                                sensor: "currentL2"
                                            }, {
                                                id: 32133,
                                                name: "Grid Amperage System 3",
                                                core: "urn_uni-bremen_iab_wio_0_0_inva_0003",
                                                doc: "urn_uni-bremen_iab_wio_0_0_inva_0003",
                                                device: "urn:uni-bremen:iab:wio:0:0:inva:0003",
                                                sensor: "currentL3"
                                            }, {
                                                id: 32134,
                                                name: "Grid Voltage L1",
                                                device: "urn:uni-bremen:iab:wio:0:0:invv:0002",
                                                ///core: "urn_uni-bremen_iab_wio_0_0_invv_0002",
                                                sensor: "voltageL1",
                                                isSensor: true
                                            }, {
                                                id: 32135,
                                                name: "Grid Voltage L2",
                                                device: "urn:uni-bremen:iab:wio:0:0:invv:0003",
                                                //core: "urn_uni-bremen_iab_wio_0_0_invv_0003",
                                                sensor: "voltageL2",
                                                isSensor: true
                                            }, {
                                                id: 32136,
                                                name: "Grid Voltage L3",
                                                device: "urn:uni-bremen:iab:wio:0:0:invv:0004",
                                                //core: "urn_uni-bremen_iab_wio_0_0_invv_0004",
                                                sensor: "voltageL3",
                                                isSensor: true
                                            }
                                        ]
                                    }                            
                                ]
                            }, {
                                id: 322,
                                name: "Heating/Cooling Converter Systems"
                            }
                        ]
                    }, {
                        id: 33,
                        name: "Compensation System"
                    }, {
                        id: 34,
                        name: "Generator Transformer System",
                        children: [
                            {
                                id: 341,
                                name: "WTG MV-Transformation"
                            }, {
                                id: 342,
                                name: "MV-Transformation Generator 1"
                            }, {
                                id: 343,
                                name: "Cooling System MV-Transformation"
                            }
                        ]
                    }
                ]
            }, {
                id: 4,
                name: "Common Systems for Wind Turbine",
                children: [
                    {
                        id: 41,
                        name: "Nacelle",
                        core: "urn_uni-bremen_ialb_windio_0_0_nac_0001",
                        children: [
                            {
                                id: 411,
                                name: "Main Frame and Nacelle",
                                core: "urn_uni-bremen_ialb_windio_0_0_nac_0001",
                                children: [
                                    {
                                        id: 4111,
                                        name: "Temperature Sensor",
                                        core: "urn_uni-bremen_ialb_wio_0_0_tnac_0001",
                                        doc: "urn_uni-bremen_ialb_wio_0_0_tnac_0001",
                                        isSensor: true,
                                        device: "urn:uni-bremen:iab:wio:0:0:tnac:0001",
                                        sensor: "temperature"
                                    }, {
                                        id: 4112,
                                        name: "Relative humidity Sensor",
                                        isSensor: true,
                                        core: "urn_uni-bremen_iab_wio_0_0_rnac_0001",
                                        doc: "urn_uni-bremen_iab_wio_0_0_rnac_0001"
                                    }, {
                                        id: 4113,
                                        name: "Nacelle Vibration Sensor",
                                        isSensor: true
                                    }
                                ]   
                            }, {
                                id: 412,
                                name: "Cooling system Nacelle"
                            }
                        ]
                    }, {
                        id: 42,
                        name: "Cooling System and Drive Train and Generation"
                    }
                ]
            }, {
                id: 5,
                name: "Control and Protection",
                children: [
                    {
                        id: 51,
                        name: "Remote Monitoring System",
                        children: [
                            {
                                id: 511,
                                name: "Universal Sensor Gateway",
                                core: "urn_uni-bremen_bik_wio_0_0_usg_0001",
                                doc: "urn_uni-bremen_bik_wio_0_0_usg_0001"
                            }, {
                                id: 512,
                                name: "Industrie PC",
                                core: "urn_uni-bremen_ialb_wio_1_1_ipc_0001"
                            }
                        ]
                    }
                ]
            }, {
                id: 6,
                name: "Electrical Auxiliary Power Supply System",
                children: [
                    {
                        id: 61,
                        name: "Low Voltage Electrical Main Supply System",
                        children: [
                            {
                                id: 611,
                                name: "LV Main Distribution 1"
                            }, {
                                id: 612,
                                name: "UPS Distribution"
                            }
                        ]
                    }, {
                        id: 62,
                        name: "Installation System",
                        children: [
                            {
                                id: 621,
                                name: "LV Installation System"
                            }
                        ]
                    }
                ]
            }, {
                id: 7,
                name: "Process Monitoring",
                children: [
                    {
                        id: 71,
                        name: "Fire Alarm System",
                        children: [
                            {
                                id: 711,
                                name: "Fire Alarm System"
                            }
                        ]
                    }, {
                        id: 72,
                        name: "Environment Measuring System",
                        children: [
                            {
                                id: 721,
                                name: "Meteorological Measurement System",
                                core: "urn_uni-bremen_iab_wio_0_0_met_0000",
                                children: [
                                    {
                                        id: 7211,
                                        name: "Wind Velocity Sensor 1",
                                        device: "urn:uni-bremen:iab:wio:0:0:wspd:0001",
                                        core: "urn_ialb_iab_wio_0_0_wspd_0001",
                                        sensor: "windSpeed"
                                    }, {
                                        id: 7212,
                                        name: "ZX 300 Lidar"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, {
                id: 8,
                name: "Tower System",
                children: [
                    {
                        id: 81,
                        name: "Tower System General",
                        core: "urn_uni-bremen_ialb_windio_0_0_tow_0001",
                        doc: "urn_uni-bremen_ialb_windio_0_0_tow_0001",
                        children: [
                            {
                                id: 811,
                                name: "Tower System Overall",
                                core: "urn_uni-bremen_ialb_windio_0_0_tow_0001",
                                doc: "urn_uni-bremen_ialb_windio_0_0_tow_0001",
                                children: [
                                    {
                                        id: 8111,
                                        name: "Tower Vibration Sensor 1",
                                        isSensor: true
                                    }, {
                                        id: 8112,
                                        name: "Tower Vibration Sensor 2",
                                        isSensor: true
                                    }
                                ]
                            }, {
                                id: 812,
                                name: "Structural Steel Foundation"
                            }
                        ]
                    }, {
                        id: 82,
                        name: "Transformer Station", 
                        children: [
                            {
                                id: 821,
                                name: "Transformer Station"
                            }
                        ]
                    }
                ]
            }, {
                id: 9,
                name: "Personnel Rescue Systems",
                children: [
                    {
                        id: 91,
                        name: "Personnel Rescue System",
                        children: [
                            {
                                id: 911,
                                name: "Personnel Rescue System"
                            }
                        ]
                    }
                ]
            }, {
                id: 10,
                name: "Ancillary Systems",
                children: [
                    {
                        id: 101,
                        name: "Ventilation System",
                        children: [
                            {
                                id: 1011,
                                name: "Air Conditioning"
                            }, {
                                id: 1012,
                                name: "Air Circulation"
                            }
                        ]
                    }, {
                        id: 102,
                        name: "Equipotential Bonding System",
                        children: [
                            {
                                id: 1021,
                                name: "Equipotential Bonding/Earthing System"
                            }
                        ]
                    }, {
                        id: 103,
                        name: "External Lightning Protection",
                        children: [
                            {
                                id: 1031,
                                name: "External Lightning Protection"
                            }
                        ]
                    }, {
                        id: 104,
                        name: "Fire Extinguishing System",
                        children: [
                            {
                                id: 1041,
                                name: "Manual Fire Extinguishing System"
                            }
                        ]
                    }, {
                        id: 105,
                        name: "Lifting Gears",
                        children: [
                            {
                                id: 1051,
                                name: "Crane Nacelle"
                            }, {
                                id: 1052,
                                name: "Auxiliary Crane Nacelle"
                            }
                        ]
                    }, {
                        id: 106,
                        name: "Obstacle Warning System",
                        children: [
                            {
                                id: 1061,
                                name: "Obstacle Warning System Aviation"
                            }
                        ]
                    }
                ]
            }
        ]
    }, {
        id: 10000,
        name: "Senvion 3,4 MW",
        children: [
            {
                id: 10001,
                name: "Wind Turbine System",
                children: [
                    {
                        id: 100011,
                        name: "Rotor System",
                        children: [
                            {
                                id: 1000111,
                                name: "Rotor Blade Overall",
                                children: [
                                    {
                                        id: 10001111,
                                        name: "Pitch Angle Sensor"
                                    }
                                ]
                            }, {
                                id: 1000112, 
                                name: "Rotor Blade System 1"
                            }, {
                                id: 1000113,
                                name: "Rotor Blade System 2"
                            }, {
                                id: 1000114,
                                name: "Rotor Blade System 3"
                            }, {
                                id: 1000115,
                                name: "Rotor Hub Unit"
                            }, {
                                id: 1000116,
                                name: "Rotor Brake System"
                            }
                        ]
                    }, {
                        id: 100012,
                        name: "Drive Train System",
                        children: [
                            {
                                id: 10001201,
                                name: "Rotor Bearing System"
                            }, {
                                id: 10001202,
                                name: "Speed Conversion System",
                                children: [
                                    {
                                        id: 100012021,
                                        name: "Gearbox",
                                    }
                                ]
                            }, {
                                id: 10001203,
                                name: "Brake System Drive Train"
                            }, {
                                id: 10001204,
                                name: "Torque Transmission High speed shaft"
                            }, {
                                id: 10001205,
                                name: "Auxiliary systems Drive Train"
                            }, {
                                id: 10001206,
                                name: "Main Gear oil system"
                            }, {
                                id: 10001207,
                                name: "Offline Gear oil system"
                            }, {
                                id: 10001208,
                                name: "Common oil lubrication system Drive Train"
                            }, {
                                id: 10001209,
                                name: "Rotor Lock Drive Train"
                            }, {
                                id: 10001210,
                                name: "Rotor slewing Unit"
                            }, {
                                id: 10001211,
                                name: "Cooling system Drive Train"
                            }
                        ]
                    }, {
                        id: 100013,
                        name: "Yaw System",
                        children: [
                            {
                                id: 1000131,
                                name: "Yaw Drive System"
                            }, {
                                id: 1000132,
                                name: "Yaw Brake System"
                            }
                        ]
                    }, {
                        id: 100014,
                        name: "Central Lubrication System"
                    }, {
                        id: 100015,
                        name: "Central Hydraulic System"
                    }, {
                        id: 100016,
                        name: "Control System",
                        children: [
                            {
                                id: 1000161,
                                name: "Turbine Control System"
                            }, {
                                id: 1000162,
                                name: "Climatization Turbine Control"
                            }
                        ]
                    }
                ]
            }, {
                id: 10002,
                name: "Generation System",
                children: [
                    {
                        id: 100021,
                        name: "Power Generation System",
                        children: [
                            {
                                id: 1000211,
                                name: "Power Generation System 1",
                                children: [
                                    {
                                        id: 10002111,
                                        name: "Generator"
                                    }
                                ]
                            }, {
                                id: 1000212,
                                name: "Generator Cooling System"
                            }
                        ]
                    }
                ]
            }, {
                id: 10003,
                name: "Transmission",
                children: [
                    {
                        id: 100031,
                        name: "Generator Switching System",
                        children: [
                            {
                                id: 1000311,
                                name: "Generator Switching System Generator 1"
                            }
                        ]
                    }, {
                        id: 100032,
                        name: "Converter System",
                        children: [
                            {
                                id: 1000321,
                                name: "Converter System Generator 1",
                                children: [
                                    {
                                        id: 10003211,
                                        name: "Converter 1"
                                    }, {
                                        id: 10003212,
                                        name: "Converter Switch Cabinet"
                                    }, {
                                        id: 10003213,
                                        name: "Grid Interface Module"
                                    }                            
                                ]
                            }, {
                                id: 1000322,
                                name: "Heating/Cooling Converter Systems"
                            }
                        ]
                    }, {
                        id: 100033,
                        name: "Compensation System"
                    }, {
                        id: 100034,
                        name: "Generator Transformer System",
                        children: [
                            {
                                id: 1000341,
                                name: "WTG MV-Transformation"
                            }, {
                                id: 1000342,
                                name: "MV-Transformation Generator 1"
                            }, {
                                id: 1000343,
                                name: "Cooling System MV-Transformation"
                            }
                        ]
                    }
                ]
            }, {
                id: 10004,
                name: "Common Systems for Wind Turbine",
                children: [
                    {
                        id: 100041,
                        name: "Nacelle",
                        children: [
                            {
                                id: 1000411,
                                name: "Main Frame and Nacelle",
                                children: [
                                    {
                                        id: 10004111,
                                        name: "Temperature Sensor",
                                        isSensor: true
                                    }, {
                                        id: 10004112,
                                        name: "Relative humidity Sensor",
                                        isSensor: true
                                    }, {
                                        id: 10004113,
                                        name: "Nacelle Vibration Sensor",
                                        isSensor: true
                                    }
                                ]   
                            }, {
                                id: 1000412,
                                name: "Cooling system Nacelle"
                            }
                        ]
                    }, {
                        id: 100042,
                        name: "Cooling System and Drive Train and Generation"
                    }
                ]
            }, {
                id: 10005,
                name: "Control and Protection",
                children: [
                    {
                        id: 100051,
                        name: "Remote Monitoring System",
                        children: [
			    {
                                id: 1000512,
                                name: "Industrie PC"
                            }
                        ]
                    }
                ]
            }, {
                id: 10006,
                name: "Electrical Auxiliary Power Supply System",
                children: [
                    {
                        id: 100061,
                        name: "Low Voltage Electrical Main Supply System",
                        children: [
                            {
                                id: 1000611,
                                name: "LV Main Distribution 1"
                            }, {
                                id: 1000612,
                                name: "UPS Distribution"
                            }
                        ]
                    }, {
                        id: 100062,
                        name: "Installation System",
                        children: [
                            {
                                id: 1000621,
                                name: "LV Installation System"
                            }
                        ]
                    }
                ]
            }, {
                id: 10007,
                name: "Process Monitoring",
                children: [
                    {
                        id: 100071,
                        name: "Fire Alarm System",
                        children: [
                            {
                                id: 1000711,
                                name: "Fire Alarm System"
                            }
                        ]
                    }, {
                        id: 100072,
                        name: "Environment Measuring System",
                        children: [
                            {
                                id: 1000721,
                                name: "Meteorological Measurement System",
                                core: "urn_uni-bremen_iab_wio_0_0_met_0000",
                                children: [
                                    {
                                        id: 10007211,
                                        name: "Wind Velocity Sensor 1"
                                    }, {
                                        id: 10007212,
                                        name: "ZX 300 Lidar"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }, {
                id: 10008,
                name: "Tower System",
                children: [
                    {
                        id: 100081,
                        name: "Tower System General",
                        children: [
                            {
                                id: 1000811,
                                name: "Tower System Overall",
                            }, {
                                id: 1000812,
                                name: "Structural Steel Foundation"
                            }
                        ]
                    }, {
                        id: 100082,
                        name: "Transformer Station", 
                        children: [
                            {
                                id: 1000821,
                                name: "Transformer Station"
                            }
                        ]
                    }
                ]
            }, {
                id: 10009,
                name: "Personnel Rescue Systems",
                children: [
                    {
                        id: 100091,
                        name: "Personnel Rescue System",
                        children: [
                            {
                                id: 1000911,
                                name: "Personnel Rescue System"
                            }
                        ]
                    }
                ]
            }, {
                id: 100010,
                name: "Ancillary Systems",
                children: [
                    {
                        id: 1000101,
                        name: "Ventilation System",
                        children: [
                            {
                                id: 10001011,
                                name: "Air Conditioning"
                            }, {
                                id: 10001012,
                                name: "Air Circulation"
                            }
                        ]
                    }, {
                        id: 1000102,
                        name: "Equipotential Bonding System",
                        children: [
                            {
                                id: 10001021,
                                name: "Equipotential Bonding/Earthing System"
                            }
                        ]
                    }, {
                        id: 1000103,
                        name: "External Lightning Protection",
                        children: [
                            {
                                id: 10001031,
                                name: "External Lightning Protection"
                            }
                        ]
                    }, {
                        id: 1000104,
                        name: "Fire Extinguishing System",
                        children: [
                            {
                                id: 10001041,
                                name: "Manual Fire Extinguishing System"
                            }
                        ]
                    }, {
                        id: 1000105,
                        name: "Lifting Gears",
                        children: [
                            {
                                id: 10001051,
                                name: "Crane Nacelle"
                            }, {
                                id: 10001052,
                                name: "Auxiliary Crane Nacelle"
                            }
                        ]
                    }, {
                        id: 1000106,
                        name: "Obstacle Warning System",
                        children: [
                            {
                                id: 10001061,
                                name: "Obstacle Warning System Aviation"
                            }
                        ]
                    }
                ]
            }
        ]
    }
]

export default data;