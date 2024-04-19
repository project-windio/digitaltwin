const data = [
    {
        id: 0,
        name: "Krogmann 15/50",
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
                                children: [
                                    {
                                        id: 1111,
                                        name: "Pitch Angle Sensor",
                                        isSensor: true,
                                        device: "urn:uni-bremen:iab:wio:0:0:ptch:0001"
                                    }
                                ]
                            }, {
                                id: 112, 
                                name: "Rotor Blade System 1",
                                core: "urn_fibretech_fbt_wio_0_0_rot_0001",
                                children: [
                                    {
                                        id: 1121,
                                        name: "Strain Sensor",
                                        device: "urn:fibretech:fbt:wio:0:0:rot:0001",
                                        sensor: "Dehnung_Mitte",
                                        isSensor: true
                                        
                                    }, {
                                        id: 1122,
                                        name: "Strain Sensor",
                                        device: "urn:fibretech:fbt:wio:0:0:rot:0001",
                                        sensor: "Dehnung_Spitze",
                                        isSensor: true
                                        
                                        
                                    }, {
                                        id: 1123,
                                        name: "Strain Sensor",
                                        device: "urn:fibretech:fbt:wio:0:0:rot:0001",
                                        sensor: "Dehnung_Wurzel",
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
                                        children: [
                                            {
                                                id: 120211,
                                                name: "Temperature Sensor",
                                                isSensor: true,
                                                device: "urn:uni-bremen:bik:wio:0:0:gbxt:0001",
                                                core: "urn_uni-bremen_bik_wio_0_0_gbxt_0001"
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
                                core: "urn_uni-bremen_ialb_windio_0_0_cntr_0001"
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
                                                name: "Amperage Sensor 1",
                                                core: "urn_uni-bremen_iab_wio_0_0_gena_0001",
                                                isSensor: true
                                            }, {
                                                id: 21112,
                                                name: "Amperage Sensor 2",
                                                core: "urn_uni-bremen_iab_wio_0_0_gena_0001",
                                                isSensor: true
                                            }, {
                                                id: 21113,
                                                name: "Amperage Sensor 3",
                                                core: "urn_uni-bremen_iab_wio_0_0_gena_0001",
                                                isSensor: true
                                            }, {
                                                id: 21114,
                                                name: "Voltage Sensor 1",
                                                isSensor: true
                                            }, {
                                                id: 21115,
                                                name: "Voltage Sensor 2",
                                                isSensor: true
                                            }, {
                                                id: 21116,
                                                name: "Voltage Sensor 3",
                                                isSensor: true
                                            }, {
                                                id: 21117,
                                                name: "Rotation Speed Sensor",
                                                isSensor: true
                                            },
                                        ]
                                    }, {
                                        id: 2112,
                                        name: "Vibration Sensor",
                                        core: "urn_uni-bremen_bik_wio_0_0_gens_0001",
                                        isSensor: true
                                    }, {
                                        id: 2113,
                                        name: "Temperature Sensor",
                                        core: "urn_uni-bremen_bik_wio_0_0_gent_0001",
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
                        children: [
                            {
                                id: 321,
                                name: "Converter System Generator 1",
                                children: [
                                    {
                                        id: 3211,
                                        name: "Converter 1",
                                        core: "urn_uni-bremen_ialb_wio_0_0_conv_0001",
                                        children: [
                                            {
                                                id: 32111,
                                                name: "Humidity Sensor",
                                                isSensor: true
                                            }, {
                                                id: 32112,
                                                name: "Temperature Sensor 1",
                                                core: "urn_uni-bremen_iab_wio_0_0_tcon_0002",
                                                isSensor: true
                                            }, {
                                                id: 32113,
                                                name: "Temperature Sensor 2",
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
                                                core: "urn_uni-bremen_iab_wio_0_0_tcon_0001",
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
                                                core: "urn_uni-bremen_iab_wio_0_0_inva_0001"
                                            }, {
                                                id: 32132,
                                                name: "Grid Amperage System 2",
                                                core: "urn_uni-bremen_iab_wio_0_0_inva_0002"
                                            }, {
                                                id: 32133,
                                                name: "Grid Amperage System 3",
                                                core: "urn_uni-bremen_iab_wio_0_0_inva_0003"
                                            }, {
                                                id: 32134,
                                                name: "Grid Voltage System 1"
                                            }, {
                                                id: 32135,
                                                name: "Grid Voltage System 2"
                                            }, {
                                                id: 32136,
                                                name: "Grid Voltage System 3"
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
                        children: [
                            {
                                id: 411,
                                name: "Main Frame and Nacelle",
                                children: [
                                    {
                                        id: 4111,
                                        name: "Temperature Sensor",
                                        isSensor: true
                                    }, {
                                        id: 4112,
                                        name: "Relative humidity Sensor",
                                        isSensor: true
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
                                name: "Universal Sensor Gateway"                        
                            }, {
                                id: 512,
                                name: "Industrie PC"
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
                                        device: "urn:uni-bremen:iab:wio:0:0:wspd:0001"
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
                        children: [
                            {
                                id: 811,
                                name: "Tower System Overall",
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
    }
]

export default data;