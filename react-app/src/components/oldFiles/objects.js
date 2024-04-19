// Wind Turbine System
const wts_cs_tcs = {label: "Turbine Control System", id: 1}
const wts_cs_ctc = {label: "Climatization Turbine Control", id: 2}
const wts_cs = {label: "Control System", children: [wts_cs_ctc, wts_cs_tcs], id: 3}
const wts_chs = {label: "Central Hydraulic System", id: 4}
const wts_cls = {label: "Central Lubrication System", id: 5}
const wts_ys_yds = {label: "Yaw Drive System", id: 6}
const wts_ys_ybs = {label: "Yaw Brake System", id: 7}
const wts_ys = {label: "Yaw System", children: [wts_ys_ybs, wts_ys_yds], id: 8}
const wts_dts_csdt = {label: "Cooling system Drive Train", id: 9}
const wts_dts_rsu = {label: "Rotor slewing Unit", id: 10}
const wts_dts_rldt = {label: "Rotor Lock Drive Train", id: 11}
const wts_dts_colsdt = {label: "Common oil lubrication system Drive Train", id: 12}
const wts_dts_ogos = {label: "Offline Gear oil system", id: 13}
const wts_dts_mgos = {label: "Main Gear oil system", id: 14}
const wts_dts_asdt = {label: "Auxiliary systems Drive Train", id: 15}
const wts_dts_tthss = {label: "Torque Transmission High speed shaft", id: 16}
const wts_dts_bsdt = {label: "Brake System Drive Train", id: 17}
const wts_dts_scs_gvs = {label: "Gearbox Vibration Sensor", id: 18}
const wts_dts_scs_g_ts = {label: "Temperature Sensor", id: 19}
const wts_dts_scs_g = {label: "Gearbox", children: [wts_dts_scs_g_ts], sensors_below: [wts_dts_scs_g_ts], id: 20}
const wts_dts_scs = {label: "Speed Conversion System", children: [wts_dts_scs_g, wts_dts_scs_gvs], sensors_below: [wts_dts_scs_g_ts, wts_dts_scs_gvs], id: 21}
const wts_dts_rbs = {label: "Rotor Bearing System", id: 22}
const wts_dts = {label: "Drive Train System", children: [wts_dts_rbs, wts_dts_scs, wts_dts_bsdt, wts_dts_tthss, wts_dts_asdt, wts_dts_mgos, wts_dts_ogos, wts_dts_colsdt, wts_dts_rldt, wts_dts_rsu, wts_dts_csdt], sensors_below: [wts_dts_scs_g_ts, wts_dts_scs_gvs], id: 23}
const wts_rs_rbs = {label: "Rotor Brake System", id: 24}
const wts_rs_rhu = {label: "Rotor Hub Unit", id: 25}
const wts_rs_rbs2 = {label: "Rotor Blade System 2", id: 26}
const wts_rs_rbs3 = {label: "Rotor Blade System 3", id: 27}
const wts_rs_rbs1_ss1 = {label: "Strain Sensor", device: "urn:fibretech:fbt:wio:0:0:rot:0001", sensor:"Dehnung_Mitte", id: 28}
const wts_rs_rbs1_ss2 = {label: "Strain Sensor", device: "urn:fibretech:fbt:wio:0:0:rot:0001", sensor:"Dehnung_Spitze", id: 29}
const wts_rs_rbs1_ss3 = {label: "Strain Sensor", device: "urn:fibretech:fbt:wio:0:0:rot:0001", sensor:"Dehnung_Wurzel", id: 30}
const wts_rs_rbs1_ts = {label: "Temperature Sensor", device: "urn:fibretech:fbt:wio:0:0:rot:0001", sensor:"Temperatur", id: 31}
const wts_rs_rbs1 = {label: "Rotor Blade System 1", children: [wts_rs_rbs1_ss1, wts_rs_rbs1_ss2, wts_rs_rbs1_ss3, wts_rs_rbs1_ts], sensors_below: [wts_rs_rbs1_ss1, wts_rs_rbs1_ss2, wts_rs_rbs1_ss3, wts_rs_rbs1_ts], id: 32}
const wts_rs_rbo_pas = {label: "Pitch Angle Sensor", id: 33}
const wts_rs_rbo = {label: "Rotor Blade Overall", children: [wts_rs_rbo_pas], sensors_below: [wts_rs_rbo_pas], id: 34}
const wts_rs = {label: "Rotor System", children: [wts_rs_rbs, wts_rs_rhu, wts_rs_rbs2, wts_rs_rbs3, wts_rs_rbs1, wts_rs_rbo], sensors_below: [wts_rs_rbo_pas, wts_rs_rbs1_ss1, wts_rs_rbs1_ss2, wts_rs_rbs1_ss3, wts_rs_rbs1_ts], id: 35}
const wts = {label: "Wind Turbine System", children: [wts_cs, wts_chs, wts_cls, wts_ys, wts_dts, wts_rs], sensors_below:[wts_rs_rbo_pas, wts_rs_rbs1_ss1, wts_rs_rbs1_ss2, wts_rs_rbs1_ss3, wts_rs_rbs1_ts, wts_dts_scs_g_ts, wts_dts_scs_gvs], sensor_id: "TLM0100", id: 36}


// Generation System
const gs_pgs_gcs = {label: "Generator Cooling System"}
const gs_pgs_pgs1_ts = {label: "Temperature Sensor"}
const gs_pgs_pgs1_vs = {label: "Vibration Sensor"}
const gs_pgs_pgs1_g_rss = {label: "Rotation Speed Sensor"}
const gs_pgs_pgs1_g_vs1 = {label: "Voltage Sensor 1"}
const gs_pgs_pgs1_g_vs2 = {label: "Voltage Sensor 2"}
const gs_pgs_pgs1_g_vs3 = {label: "Voltage Sensor 3"}
const gs_pgs_pgs1_g_as1 = {label: "Amperage Sensor 1"}
const gs_pgs_pgs1_g_as2 = {label: "Amperage Sensor 2"}
const gs_pgs_pgs1_g_as3 = {label: "Amperage Sensor 3"}
const gs_pgs_pgs1_g = {label: "Generator", children: [gs_pgs_pgs1_g_rss, gs_pgs_pgs1_g_vs1, gs_pgs_pgs1_g_vs2, gs_pgs_pgs1_g_vs3, gs_pgs_pgs1_g_as1, gs_pgs_pgs1_g_as2, gs_pgs_pgs1_g_as3]}
const gs_pgs_pgs1 = {label: "Power Generation System 1", children: [gs_pgs_pgs1_g, gs_pgs_pgs1_vs, gs_pgs_pgs1_ts]}
const gs_pgs = {label: "Power Generation System", children: [gs_pgs_pgs1, gs_pgs_gcs]}
const gs = {label: "Generation System", children: [gs_pgs], sensor_id: "TLM0101"}


// Transmission
const t_gts_wmt = {label: "WTG MV-Transformation"}
const t_gts_mtg1 = {label: "MV-Transformation Generator 1"}
const t_gts_csmt = {label: "Cooling System MV-Transformation"}
const t_gts = {label: "Generator Transformer System", children: [t_gts_csmt, t_gts_mtg1, t_gts_wmt]}
const t_cos = {label: "Compensation System"}
const t_cs_hccs = {label: "Heating/Cooling Converter Systems"}
const t_cs_csg1_gim_gas1 = {label: "Grid Amperage Sensor 1"}
const t_cs_csg1_gim_gas2 = {label: "Grid Amperage Sensor 2"}
const t_cs_csg1_gim_gas3 = {label: "Grid Amperage Sensor 3"}
const t_cs_csg1_gim_gvs1 = {label: "Grid Voltage Sensor 1"}
const t_cs_csg1_gim_gvs2 = {label: "Grid Voltage Sensor 2"}
const t_cs_csg1_gim_gvs3 = {label: "Grid Voltage Sensor 3"}
const t_cs_csg1_gim = {label: "Grid Interface Module", children: [t_cs_csg1_gim_gas1, t_cs_csg1_gim_gas2, t_cs_csg1_gim_gas3, t_cs_csg1_gim_gvs1, t_cs_csg1_gim_gvs2, t_cs_csg1_gim_gvs3]}
const t_cs_csg1_csc_ts = {label: "Temperature Sensor"}
const t_cs_csg1_csc_icvs = {label: "Intermediate Circuit Voltage Sensor"}
const t_cs_csg1_csc = {label: "Converter Switch Cabinet", children: [t_cs_csg1_csc_icvs, t_cs_csg1_csc_ts]}
const t_cs_csg1_c1_hs = {label: "Humidity Sensor"}
const t_cs_csg1_c1_ts1 = {label: "Temperature Sensor 1"}
const t_cs_csg1_c1_ts2 = {label: "Temperature Sensor 2"}
const t_cs_csg1_c1 = {label: "Converter 1", children: [t_cs_csg1_c1_hs, t_cs_csg1_c1_ts1, t_cs_csg1_c1_ts2]}
const t_cs_csg1 = {label: "Converter System Generator 1", children: [t_cs_csg1_c1, t_cs_csg1_csc, t_cs_csg1_gim]}
const t_cs = {label: "Converter System", children: [t_cs_csg1, t_cs_hccs]}
const t_gss_gssg1 = {label: "Generator Switching System Generator 1"}
const t_gss = {label: "Generator Switching System", children: [t_gss_gssg1]}
const t = {label: "Transmission", children: [t_gss, t_cs, t_cos, t_gts]}


// Common Systems for Wind Turbine
const csfwt_ccs_csadtag = {label: "Cooling System and Drive Train and Generation"}
const csfwt_ccs = {label: "Common cooling Systems", children: [csfwt_ccs_csadtag]}
const csfwt_n_csn = {label: "Cooling system Nacelle"}
const csfwt_n_mfan_ts = {label: "Temperature Sensor"}
const csfwt_n_mfan_rhs = {label: "Relative humidity Sensor"}
const csfwt_n_mfan_nvs = {label: "Nacelle Vibration Sensor"}
const csfwt_n_mfan = {label: "Main Frame and Nacelle", children: [csfwt_n_mfan_nvs, csfwt_n_mfan_rhs, csfwt_n_mfan_ts]}
const csfwt_n = {label: "Nacelle", children: [csfwt_n_csn, csfwt_n_mfan]}
const csfwt = {label: "Common Systems for Wind Turbine", children: [csfwt_n, csfwt_ccs]}


// Control and Protection
const cap_g_rms = {label: "Remote Monitoring System"}
const cap_g = {label: "General", children: [cap_g_rms]}
const cap = {label: "Control and Protection", children: [cap_g]}

// Electrical Auxiliary Power Supply System
const eapss_is_lis = {label: "LV Installation System"}
const eapss_is = {label: "Installation System", children: [eapss_is_lis]}
const eapss_lvemss_lmd1 = {label: "LV Main Distribution 1"}
const eapss_lvemss_us = {label: "UPS Distribution"}
const eapss_lvemss = {label: "Low Voltage Electrical Main Supply System", children: [eapss_lvemss_lmd1, eapss_lvemss_us]}
const eapss = {label: "Electrical Auxiliary Power Supply System", children: [eapss_is, eapss_lvemss]}


// Process Monitoring
const pm_ems_mms_z3l = {label: "ZX 300 Lidar"}
const pm_ems_mms_wvs1 = {label: "Wind Velocity Sensor 1"}
const pm_ems_mms = {label: "Meteorological Measurement System", children: [pm_ems_mms_wvs1, pm_ems_mms_z3l]}
const pm_ems = {label: "Environmental Measuring System", children: [pm_ems_mms]}
const pm_fas_fas = {label: "Fire Alarm System"}
const pm_fas = {label: "Fire Alarm System", children: [pm_fas_fas]}
const pm = {label: "Process Monitoring", children: [pm_fas, pm_ems]}


// Tower System
const ts_ts_ts = {label: "Transformer Station"}
const ts_ts = {label: "Transformer Station", children: [ts_ts_ts]}
const ts_tsg_stf = {label: "Structural Steel Foundation"}
const ts_tsg_gf = {label: "Gravity Foundation"}
const ts_tsg_fs = {label: "Foundation Structures"}
const ts_tsg_issts = {label: "Inner Support Structure Tower System"}
const ts_tsg_tsbs = {label: "Tower System Bottom System"}
const ts_tsg_tsms1 = {label: "Tower System Middle System 1"}
const ts_tsg_tsts = {label: "Tower System Top System"}
const ts_tsg_tso_tvs2 = {label: "Tower Vibration Sensor 2"}
const ts_tsg_tso_tvs1 = {label: "Tower Vibration Sensor 1"}
const ts_tsg_tso = {label: "Tower System Overall", children: [ts_tsg_tso_tvs1, ts_tsg_tso_tvs2]}
const ts_tsg = {label: "Tower System General", children: [ts_tsg_tso, ts_tsg_tsts, ts_tsg_tsms1, ts_tsg_tsbs, ts_tsg_issts, ts_tsg_fs, ts_tsg_gf, ts_tsg_stf]}
const ts = {label: "Tower System", children: [ts_ts, ts_tsg]}


// Personnel Rescue Systems
const prs_prs_prs = {label: "Personnel Rescue Systems"}
const prs_prs = {label: "Personnel Rescue Systems", children: [prs_prs_prs]}
const prs = {label: "Personnel Rescue Systems", children: [prs_prs]}


// Ancillary Systems
const as_ows_a = {label: "Obstacle Warning System Aviation"}
const as_lg_cn = {label: "Crane Nacelle"}
const as_lg_acn = {label: "Auxiliary Crane Nacelle"}
const as_fes_mfes = {label: "Manual Fire Extinguishing System"}
const as_elp_elp = {label: "External Lightning Protection"}
const as_ebs_ebes = {label: "Equipotential Bonding/Earthing System"}
const as_vs_aco = {label: "Air Conditioning"}
const as_vs_aci = {label: "Air Circulation"}
const as_ows = {label: "Obstacle Warning System", children: [as_ows_a]}
const as_lg = {label: "Lifting Gears", children: [as_lg_acn, as_lg_cn]}
const as_fes = {label: "Fire Extinguishing System", children: [as_fes_mfes]}
const as_elp = {label: "External Lightning Protection", children: [as_elp_elp]}
const as_ebs = {label: "Equipotential Bonding System", children: [as_ebs_ebes]}
const as_vs = {label: "Ventilation System", children: [as_vs_aci, as_vs_aco]}
const as = {label: "Ancillary Systems", children: [as_ebs, as_elp, as_fes, as_lg, as_ows, as_vs]}


module.exports = {wts, wts_cs, wts_chs, wts_cls, wts_ys, wts_dts, wts_rs, wts_rs_rbs, wts_rs_rhu, wts_rs_rbs2, wts_rs_rbs3, wts_rs_rbs1, wts_rs_rbo, wts_rs_rbo_pas, wts_rs_rbs1_ss1, wts_rs_rbs1_ss2, wts_rs_rbs1_ss3, wts_rs_rbs1_ts, wts_dts_rbs, wts_dts_scs, wts_dts_bsdt, wts_dts_tthss, wts_dts_asdt, wts_dts_mgos, wts_dts_ogos, wts_dts_colsdt, wts_dts_rldt, wts_dts_rsu, wts_dts_csdt, wts_dts_scs_g, wts_dts_scs_gvs, wts_dts_scs_g_ts, wts_ys_ybs, wts_ys_yds, wts_cs_ctc, wts_cs_tcs,
gs, gs_pgs, gs_pgs_pgs1, gs_pgs_gcs, gs_pgs_pgs1_g, gs_pgs_pgs1_vs, gs_pgs_pgs1_ts, gs_pgs_pgs1_g_rss, gs_pgs_pgs1_g_vs1, gs_pgs_pgs1_g_vs2, gs_pgs_pgs1_g_vs3, gs_pgs_pgs1_g_as1, gs_pgs_pgs1_g_as2, gs_pgs_pgs1_g_as3, 
t, t_gss, t_cs, t_cos, t_gts, t_gss_gssg1, t_cs_csg1, t_cs_hccs, t_cs_csg1_c1, t_cs_csg1_csc, t_cs_csg1_gim, t_cs_csg1_c1_hs, t_cs_csg1_c1_ts1, t_cs_csg1_c1_ts2, t_cs_csg1_csc_icvs, t_cs_csg1_csc_ts, t_cs_csg1_gim_gas1, t_cs_csg1_gim_gas2, t_cs_csg1_gim_gas3, t_cs_csg1_gim_gvs1, t_cs_csg1_gim_gvs2, t_cs_csg1_gim_gvs3, t_gts_csmt, t_gts_mtg1, t_gts_wmt, 
csfwt, csfwt_n, csfwt_ccs, csfwt_ccs_csadtag, csfwt_n_csn, csfwt_n_mfan, csfwt_n_mfan_nvs, csfwt_n_mfan_rhs, csfwt_n_mfan_ts,
cap_g_rms, cap_g, cap,
eapss, eapss_is, eapss_lvemss, eapss_is_lis, eapss_lvemss_lmd1, eapss_lvemss_us,
pm, pm_fas, pm_fas_fas, pm_ems, pm_ems_mms, pm_ems_mms_wvs1, pm_ems_mms_z3l,
ts, ts_ts, ts_tsg, ts_tsg_tso, ts_tsg_tsts, ts_tsg_tsms1, ts_tsg_tsbs, ts_tsg_issts, ts_tsg_fs, ts_tsg_gf, ts_tsg_stf, ts_ts_ts, ts_tsg_tso_tvs1, ts_tsg_tso_tvs2,
prs, prs_prs, prs_prs_prs,
as, as_ebs, as_elp, as_fes, as_lg, as_ows, as_vs, as_vs_aci, as_vs_aco, as_ebs_ebes, as_elp_elp, as_fes_mfes, as_lg_acn, as_lg_cn, as_ows_a}