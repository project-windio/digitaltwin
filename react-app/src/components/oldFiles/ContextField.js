import React from 'react'
import TextField from '@mui/material/TextField'  // Searchbar ContextField

import { TreeView, TreeItem } from '@mui/x-tree-view';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const {wts, wts_cs, wts_chs, wts_cls, wts_ys, wts_dts, wts_rs, wts_rs_rbs, wts_rs_rhu, wts_rs_rbs2, wts_rs_rbs3, wts_rs_rbs1, wts_rs_rbo, wts_rs_rbo_pas, wts_rs_rbs1_ss1, wts_rs_rbs1_ss2, wts_rs_rbs1_ss3, wts_rs_rbs1_ts, wts_dts_rbs, wts_dts_scs, wts_dts_bsdt, wts_dts_tthss, wts_dts_asdt, wts_dts_mgos, wts_dts_ogos, wts_dts_colsdt, wts_dts_rldt, wts_dts_rsu, wts_dts_csdt, wts_dts_scs_g, wts_dts_scs_gvs, wts_dts_scs_g_ts, wts_ys_ybs, wts_ys_yds, wts_cs_ctc, wts_cs_tcs, gs, gs_pgs, gs_pgs_pgs1, gs_pgs_gcs, gs_pgs_pgs1_g, gs_pgs_pgs1_vs, gs_pgs_pgs1_ts, gs_pgs_pgs1_g_rss, gs_pgs_pgs1_g_vs1, gs_pgs_pgs1_g_vs2, gs_pgs_pgs1_g_vs3, gs_pgs_pgs1_g_as1, gs_pgs_pgs1_g_as2, gs_pgs_pgs1_g_as3, t, t_gss, t_cs, t_cos, t_gts, t_gss_gssg1, t_cs_csg1, t_cs_hccs, t_cs_csg1_c1, t_cs_csg1_csc, t_cs_csg1_gim, t_cs_csg1_c1_hs, t_cs_csg1_c1_ts1, t_cs_csg1_c1_ts2, t_cs_csg1_csc_icvs, t_cs_csg1_csc_ts, t_cs_csg1_gim_gas1, t_cs_csg1_gim_gas2, t_cs_csg1_gim_gas3, t_cs_csg1_gim_gvs1, t_cs_csg1_gim_gvs2, t_cs_csg1_gim_gvs3, t_gts_csmt, t_gts_mtg1, t_gts_wmt, csfwt, csfwt_n, csfwt_ccs, csfwt_ccs_csadtag, csfwt_n_csn, csfwt_n_mfan, csfwt_n_mfan_nvs, csfwt_n_mfan_rhs, csfwt_n_mfan_ts, cap_g_rms, cap_g, cap, eapss, eapss_is, eapss_lvemss, eapss_is_lis, eapss_lvemss_lmd1, eapss_lvemss_us, pm, pm_fas, pm_fas_fas, pm_ems, pm_ems_mms, pm_ems_mms_wvs1, pm_ems_mms_z3l, ts, ts_ts, ts_tsg, ts_tsg_tso, ts_tsg_tsts, ts_tsg_tsms1, ts_tsg_tsbs, ts_tsg_issts, ts_tsg_fs, ts_tsg_gf, ts_tsg_stf, ts_ts_ts, ts_tsg_tso_tvs1, ts_tsg_tso_tvs2, prs, prs_prs, prs_prs_prs, as, as_ebs, as_elp, as_fes, as_lg, as_ows, as_vs, as_vs_aci, as_vs_aco, as_ebs_ebes, as_elp_elp, as_fes_mfes, as_lg_acn, as_lg_cn, as_ows_a} = require("./objects")


const uri1111 = "urn:uni-bremen:iab:wio:0:0:ptch:0001"
const uri112 = "urn:fibretech:fbt:wio:0:0:rot:0001"
const uri1121 = "urn:fibretech:fbt:wio:0:0:rot:0001"
const uri1122 = "urn:fibretech:fbt:wio:0:0:rot:0001"
const uri1123 = "urn:fibretech:fbt:wio:0:0:rot:0001"
const uri1124 = "urn:fibretech:fbt:wio:0:0:rot:0001"
const uri12111 = "urn:uni-bremen:bik:wio:0:0:gbxt:0001"
const uri1212 = "urn:uni-bremen:bik:wio:0:0:gbxs:0001"
const uri21111 = "urn:uni-bremen:iab:wio:0:0:gena:0001"
const uri21112 = "urn:uni-bremen:iab:wio:0:0:gena:0002"
const uri21113 = "urn:uni-bremen:iab:wio:0:0:gena:0003"
const uri21114 = "urn:uni-bremen:iab:wio:0:0:genv:0001"
const uri21115 = "urn:uni-bremen:iab:wio:0:0:genv:0002"
const uri21116 = "urn:uni-bremen:iab:wio:0:0:genv:0003"
const uri21117 = "urn:uni-bremen:iab:wio:0:0:grpm:0001"
const uri2112 = "urn:uni-bremen:iab:wio:0:0:grpm:0001"
const uri2113 = "urn:uni-bremen:bik:wio:0:0:gent:0001"
const uri32111 = "urn:uni-bremen:iab:wio:0:0:rcon:0001"
const uri32112 = "urn:uni-bremen:iab:wio:0:0:tcon:0002"
const uri32113 = "urn:uni-bremen:iab:wio:0:0:tcon:0003"
const uri32121 = "urn:uni-bremen:iab:wio:0:0:tcon:0001"
const uri32122 = "urn:uni-bremen:iab:wio:0:0:invv:0001"
const uri32131 = "urn:uni-bremen:iab:wio:0:0:inva:0001"
const uri32132 = "urn:uni-bremen:iab:wio:0:0:inva:0002"
const uri32133 = "urn:uni-bremen:iab:wio:0:0:inva:0003"
const uri32134 = "urn:uni-bremen:iab:wio:0:0:invv:0002"
const uri32135 = "urn:uni-bremen:iab:wio:0:0:invv:0003"
const uri32136 = "urn:uni-bremen:iab:wio:0:0:invv:0004"
const uri4111 = "urn:uni-bremen:iab:wio:0:0:tnac:0001"
const uri4112 = "urn:uni-bremen:iab:wio:0:0:rnac:0001"
const uri4113 = "urn:uni-bremen:bik:wio:0:0:msbi:0001"
const uri7211 = "urn:uni-bremen:iab:wio:0:0:wspd:0001"
const uri7212 = "urn:uni-bremen:bik:wio:0:0:wnds:0002"
const uri8111 = "urn:uni-bremen:bik:wio:0:0:msbi:0003"
const uri8112 = "urn:uni-bremen:bik:wio:0:0:tows:0002"



const Overview = ({ onSelectedChange }) => {

    const handleClick = (newSelected) => {
      onSelectedChange(newSelected);
    }

    return (
        <div>
          <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ maxWidth: 400 }}
          >
            <TreeItem nodeId='1' label={<div onClick={() => handleClick(wts)}>{wts.label}</div>}>
              <TreeItem nodeId='11' label={<div onClick={() => handleClick(wts_rs)}>{wts_rs.label}</div>}>
                <TreeItem nodeId='111' label={<div onClick={() => handleClick(wts_rs_rbo)}>{wts_rs_rbo.label}</div>}>
                  <TreeItem nodeId='1111' label={<div onClick={() => handleClick(wts_rs_rbo_pas)}>{wts_rs_rbo_pas.label}</div>} />
                </TreeItem>
                <TreeItem nodeId='112' label={<div onClick={() => handleClick(wts_rs_rbs1)}>{wts_rs_rbs1.label}</div>}>
                  <TreeItem nodeId='1121' label={<div onClick={() => handleClick(wts_rs_rbs1_ss1)}>{wts_rs_rbs1_ss1.label}</div>}/>
                  <TreeItem nodeId='1122' label={<div onClick={() => handleClick(wts_rs_rbs1_ss2)}>{wts_rs_rbs1_ss2.label}</div>}/>
                  <TreeItem nodeId='1123' label={<div onClick={() => handleClick(wts_rs_rbs1_ss3)}>{wts_rs_rbs1_ss3.label}</div>}/>
                  <TreeItem nodeId='1124' label={<div onClick={() => handleClick(wts_rs_rbs1_ts)}>{wts_rs_rbs1_ts.label}</div>}/>
                </TreeItem>
                <TreeItem nodeId='113' label={<div onClick={() => handleClick(wts_rs_rbs2)}>{wts_rs_rbs2.label}</div>}/>
                <TreeItem nodeId='114' label={<div onClick={() => handleClick(wts_rs_rbs3)}>{wts_rs_rbs3.label}</div>}/>
                <TreeItem nodeId='115' label={<div onClick={() => handleClick(wts_rs_rhu)}>{wts_rs_rhu.label}</div>}/>
                <TreeItem nodeId='116' label={<div onClick={() => handleClick(wts_rs_rbs)}>{wts_rs_rbs.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='12' label={<div onClick={() => handleClick(wts_dts)}>{wts_dts.label}</div>}>
                <TreeItem nodeId='120' label={<div onClick={() => handleClick(wts_dts_rbs)}>{wts_dts_rbs.label}</div>}/>
                <TreeItem nodeId='121' label={<div onClick={() => handleClick(wts_dts_scs)}>{wts_dts_scs.label}</div>}>
                  <TreeItem nodeId='1211' label={<div onClick={() => handleClick(wts_dts_scs_g)}>{wts_dts_scs_g.label}</div>}>
                    <TreeItem nodeId='12111' label={<div onClick={() => handleClick(wts_dts_scs_g_ts)}>{wts_dts_scs_g_ts.label}</div>}/>
                  </TreeItem>
                  <TreeItem nodeId='1212' label={<div onClick={() => handleClick(wts_dts_scs_gvs)}>{wts_dts_scs_gvs.label}</div>} />
                </TreeItem>
                <TreeItem nodeId='122' label={<div onClick={() => handleClick(wts_dts_bsdt)}>{wts_dts_bsdt.label}</div>}/>
                <TreeItem nodeId='123' label={<div onClick={() => handleClick(wts_dts_tthss)}>{wts_dts_tthss.label}</div>}/>
                <TreeItem nodeId='124' label={<div onClick={() => handleClick(wts_dts_asdt)}>{wts_dts_asdt.label}</div>}/>
                <TreeItem nodeId='125' label={<div onClick={() => handleClick(wts_dts_mgos)}>{wts_dts_mgos.label}</div>}/>
                <TreeItem nodeId='126' label={<div onClick={() => handleClick(wts_dts_ogos)}>{wts_dts_ogos.label}</div>}/>
                <TreeItem nodeId='127' label={<div onClick={() => handleClick(wts_dts_colsdt)}>{wts_dts_colsdt.label}</div>}/>
                <TreeItem nodeId='128' label={<div onClick={() => handleClick(wts_dts_rldt)}>{wts_dts_rldt.label}</div>}/>
                <TreeItem nodeId='129' label={<div onClick={() => handleClick(wts_dts_rsu)}>{wts_dts_rsu.label}</div>}/>
                <TreeItem nodeId='1210' label={<div onClick={() => handleClick(wts_dts_csdt)}>{wts_dts_csdt.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='13' label={<div onClick={() => handleClick(wts_ys)}>{wts_ys.label}</div>}>
                <TreeItem nodeId='131' label={<div onClick={() => handleClick(wts_ys_yds)}>{wts_ys_yds.label}</div>}/>
                <TreeItem nodeId='132' label={<div onClick={() => handleClick(wts_ys_ybs)}>{wts_ys_ybs.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='14' label={<div onClick={() => handleClick(wts_cls)}>{wts_cls.label}</div>}/>
              <TreeItem nodeId='15' label={<div onClick={() => handleClick(wts_chs)}>{wts_chs.label}</div>}/>
              <TreeItem nodeId='16' label={<div onClick={() => handleClick(wts_cs)}>{wts_cs.label}</div>}>
                <TreeItem nodeId='161' label={<div onClick={() => handleClick(wts_cs_tcs)}>{wts_cs_tcs.label}</div>}/>
                <TreeItem nodeId='162' label={<div onClick={() => handleClick(wts_cs_ctc)}>{wts_cs_ctc.label}</div>}/>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='22313213' label={<div onClick={() => handleClick(gs)}>{gs.label}</div>}>
              <TreeItem nodeId='21' label={<div onClick={() => handleClick(gs_pgs)}>{gs_pgs.label}</div>}>
                <TreeItem nodeId='212' label={<div onClick={() => handleClick(gs_pgs_pgs1)}>{gs_pgs_pgs1.label}</div>}>
                  <TreeItem nodeId='2121' label={<div onClick={() => handleClick(gs_pgs_pgs1_g)}>{gs_pgs_pgs1_g.label}</div>}>
                    <TreeItem nodeId='21211' label={<div onClick={() => handleClick(gs_pgs_pgs1_g_as1)}>{gs_pgs_pgs1_g_as1.label}</div>}/>
                    <TreeItem nodeId='21212' label={<div onClick={() => handleClick(gs_pgs_pgs1_g_as2)}>{gs_pgs_pgs1_g_as2.label}</div>}/>
                    <TreeItem nodeId='21213' label={<div onClick={() => handleClick(gs_pgs_pgs1_g_as3)}>{gs_pgs_pgs1_g_as3.label}</div>}/>
                    <TreeItem nodeId='21214' label={<div onClick={() => handleClick(gs_pgs_pgs1_g_vs1)}>{gs_pgs_pgs1_g_vs1.label}</div>}/>
                    <TreeItem nodeId='21215' label={<div onClick={() => handleClick(gs_pgs_pgs1_g_vs2)}>{gs_pgs_pgs1_g_vs2.label}</div>}/>
                    <TreeItem nodeId='21216' label={<div onClick={() => handleClick(gs_pgs_pgs1_g_vs3)}>{gs_pgs_pgs1_g_vs3.label}</div>}/>
                    <TreeItem nodeId='21217' label={<div onClick={() => handleClick(gs_pgs_pgs1_g_rss)}>{gs_pgs_pgs1_g_rss.label}</div>}/>
                  </TreeItem>
                  <TreeItem nodeId='2122' label={<div onClick={() => handleClick(gs_pgs_pgs1_vs)}>{gs_pgs_pgs1_vs.label}</div>} />
                  <TreeItem nodeId='2123' label={<div onClick={() => handleClick(gs_pgs_pgs1_ts)}>{gs_pgs_pgs1_ts.label}</div>}/>
                </TreeItem>
                <TreeItem nodeId='213' label={<div onClick={() => handleClick(gs_pgs_gcs)}>{gs_pgs_gcs.label}</div>}/>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='3' label={<div onClick={() => handleClick(t)}>{t.label}</div>}>
              <TreeItem nodeId='31' label={<div onClick={() => handleClick(t_gss)}>{t_gss.label}</div>}>
                <TreeItem nodeId='311' label={<div onClick={() => handleClick(t_gss_gssg1)}>{t_gss_gssg1.label}</div>} />
              </TreeItem>
              <TreeItem nodeId='32' label={<div onClick={() => handleClick(t_cs)}>{t_cs.label}</div>}>
                <TreeItem nodeId='321' label={<div onClick={() => handleClick(t_cs_csg1)}>{t_cs_csg1.label}</div>}>
                  <TreeItem nodeId='3211' label={<div onClick={() => handleClick(t_cs_csg1_c1)}>{t_cs_csg1_c1.label}</div>}>
                    <TreeItem nodeId='32111' label={<div onClick={() => handleClick(t_cs_csg1_c1_hs)}>{t_cs_csg1_c1_hs.label}</div>}/>
                    <TreeItem nodeId='32112' label={<div onClick={() => handleClick(t_cs_csg1_c1_ts1)}>{t_cs_csg1_c1_ts1.label}</div>}/>
                    <TreeItem nodeId='32113' label={<div onClick={() => handleClick(t_cs_csg1_c1_ts2)}>{t_cs_csg1_c1_ts2.label}</div>}/>
                  </TreeItem>
                  <TreeItem nodeId='3212' label={<div onClick={() => handleClick(t_cs_csg1_csc)}>{t_cs_csg1_csc.label}</div>}>
                    <TreeItem nodeId='32121' label={<div onClick={() => handleClick(t_cs_csg1_csc_ts)}>{t_cs_csg1_csc_ts.label}</div>}/>
                    <TreeItem nodeId='32122' label={<div onClick={() => handleClick(t_cs_csg1_csc_icvs)}>{t_cs_csg1_csc_icvs.label}</div>}/>
                    </TreeItem>
                  <TreeItem nodeId='3213' label={<div onClick={() => handleClick(t_cs_csg1_gim)}>{t_cs_csg1_gim.label}</div>}>
                    <TreeItem nodeId='32131' label={<div onClick={() => handleClick(t_cs_csg1_gim_gas1)}>{t_cs_csg1_gim_gas1.label}</div>} />
                    <TreeItem nodeId='32132' label={<div onClick={() => handleClick(t_cs_csg1_gim_gas2)}>{t_cs_csg1_gim_gas2.label}</div>} />
                    <TreeItem nodeId='32133' label={<div onClick={() => handleClick(t_cs_csg1_gim_gas3)}>{t_cs_csg1_gim_gas3.label}</div>} />
                    <TreeItem nodeId='32134' label={<div onClick={() => handleClick(t_cs_csg1_gim_gvs1)}>{t_cs_csg1_gim_gvs1.label}</div>} />
                    <TreeItem nodeId='32135' label={<div onClick={() => handleClick(t_cs_csg1_gim_gvs2)}>{t_cs_csg1_gim_gvs2.label}</div>} />
                    <TreeItem nodeId='32136' label={<div onClick={() => handleClick(t_cs_csg1_gim_gvs3)}>{t_cs_csg1_gim_gvs3.label}</div>} />
                  </TreeItem>
                </TreeItem>
                <TreeItem nodeId='322' label={<div onClick={() => handleClick(t_cs_hccs)}>{t_cs_hccs.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='33' label={<div onClick={() => handleClick(t_cos)}>{t_cos.label}</div>}/>
              <TreeItem nodeId='34' label={<div onClick={() => handleClick(t_gts)}>{t_gts.label}</div>}>
                <TreeItem nodeId='341' label={<div onClick={() => handleClick(t_gts_wmt)}>{t_gts_wmt.label}</div>}/>
                <TreeItem nodeId='342' label={<div onClick={() => handleClick(t_gts_mtg1)}>{t_gts_mtg1.label}</div>}/>
                <TreeItem nodeId='343' label={<div onClick={() => handleClick(t_gts_csmt)}>{t_gts_csmt.label}</div>}/>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='4' label={<div onClick={() => handleClick(csfwt)}>{csfwt.label}</div>}>
              <TreeItem nodeId='41' label={<div onClick={() => handleClick(csfwt_n)}>{csfwt_n.label}</div>}>
                <TreeItem nodeId='411' label={<div onClick={() => handleClick(csfwt_n_mfan)}>{csfwt_n_mfan.label}</div>}>
                  <TreeItem nodeId='4111' label={<div onClick={() => handleClick(csfwt_n_mfan_ts)}>{csfwt_n_mfan_ts.label}</div>}/>
                  <TreeItem nodeId='4112' label={<div onClick={() => handleClick(csfwt_n_mfan_rhs)}>{csfwt_n_mfan_rhs.label}</div>}/>
                  <TreeItem nodeId='4113' label={<div onClick={() => handleClick(csfwt_n_mfan_nvs)}>{csfwt_n_mfan_nvs.label}</div>}/>
                </TreeItem>
                <TreeItem nodeId='412' label={<div onClick={() => handleClick(csfwt_n_csn)}>{csfwt_n_csn.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='42' label={<div onClick={() => handleClick(csfwt_ccs)}>{csfwt_ccs.label}</div>}>
                <TreeItem nodeId='421' label={<div onClick={() => handleClick(csfwt_ccs_csadtag)}>{csfwt_ccs_csadtag.label}</div>}/>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='5' label={<div onClick={() => handleClick(cap)}>{cap.label}</div>}>
              <TreeItem nodeId='51' label={<div onClick={() => handleClick(cap_g)}>{cap_g.label}</div>}>
                <TreeItem nodeId='511' label={<div onClick={() => handleClick(cap_g_rms)}>{cap_g_rms.label}</div>} />
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='6' label={<div onClick={() => handleClick(eapss)}>{eapss.label}</div>}>
              <TreeItem nodeId='61' label={<div onClick={() => handleClick(eapss_lvemss)}>{eapss_lvemss.label}</div>}>
                <TreeItem nodeId='611' label={<div onClick={() => handleClick(eapss_lvemss_lmd1)}>{eapss_lvemss_lmd1.label}</div>}/>
                <TreeItem nodeId='612' label={<div onClick={() => handleClick(eapss_lvemss_us)}>{eapss_lvemss_us.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='62' label={<div onClick={() => handleClick(eapss_is)}>{eapss_is.label}</div>}>
                <TreeItem nodeId='621' label={<div onClick={() => handleClick(eapss_is_lis)}>{eapss_is_lis.label}</div>}/>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='7' label={<div onClick={() => handleClick(pm)}>{pm.label}</div>}>
              <TreeItem nodeId='71' label={<div onClick={() => handleClick(pm_fas)}>{pm_fas.label}</div>}>
                <TreeItem nodeId='711' label={<div onClick={() => handleClick(pm_fas_fas)}>{pm_fas_fas.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='72' label={<div onClick={() => handleClick(pm_ems)}>{pm_ems.label}</div>}>
                <TreeItem nodeId='721' label={<div onClick={() => handleClick(pm_ems_mms)}>{pm_ems_mms.label}</div>}>
                  <TreeItem nodeId='7211' label={<div onClick={() => handleClick(pm_ems_mms_wvs1)}>{pm_ems_mms_wvs1.label}</div>}/>
                  <TreeItem nodeId='7212' label={<div onClick={() => handleClick(pm_ems_mms_z3l)}>{pm_ems_mms_z3l.label}</div>} />
                </TreeItem>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='8' label={<div onClick={() => handleClick(ts)}>{ts.label}</div>}>
              <TreeItem nodeId='81' label={<div onClick={() => handleClick(ts_tsg)}>{ts_tsg.label}</div>}>
                <TreeItem nodeId='811' label={<div onClick={() => handleClick(ts_tsg_tso)}>{ts_tsg_tso.label}</div>}>
                  <TreeItem nodeId='8111' label={<div onClick={() => handleClick(ts_tsg_tso_tvs1)}>{ts_tsg_tso_tvs1.label}</div>}/>
                  <TreeItem nodeId='8112' label={<div onClick={() => handleClick(ts_tsg_tso_tvs2)}>{ts_tsg_tso_tvs2.label}</div>}/>
                </TreeItem>
                <TreeItem nodeId='812' label={<div onClick={() => handleClick(ts_tsg_tsts)}>{ts_tsg_tsts.label}</div>}/>
                <TreeItem nodeId='813' label={<div onClick={() => handleClick(ts_tsg_tsms1)}>{ts_tsg_tsms1.label}</div>}/>
                <TreeItem nodeId='814' label={<div onClick={() => handleClick(ts_tsg_tsbs)}>{ts_tsg_tsbs.label}</div>}/>
                <TreeItem nodeId='815' label={<div onClick={() => handleClick(ts_tsg_issts)}>{ts_tsg_issts.label}</div>}/>
                <TreeItem nodeId='816' label={<div onClick={() => handleClick(ts_tsg_fs)}>{ts_tsg_fs.label}</div>}/>
                <TreeItem nodeId='817' label={<div onClick={() => handleClick(ts_tsg_gf)}>{ts_tsg_gf.label}</div>}/>
                <TreeItem nodeId='818' label={<div onClick={() => handleClick(ts_tsg_stf)}>{ts_tsg_stf.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='82' label={<div onClick={() => handleClick(ts_ts)}>{ts_ts.label}</div>}>
                <TreeItem nodeId='821' label={<div onClick={() => handleClick(ts_ts_ts)}>{ts_ts_ts.label}</div>}/>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='9' label={<div onClick={() => handleClick(prs)}>{prs.label}</div>}>
              <TreeItem nodeId='91' label={<div onClick={() => handleClick(prs_prs)}>{prs_prs.label}</div>}>
                <TreeItem nodeId='911' label={<div onClick={() => handleClick(prs_prs_prs)}>{prs_prs_prs.label}</div>}/>
              </TreeItem>
            </TreeItem>
            <TreeItem nodeId='10' label={<div onClick={() => handleClick(as)}>{as.label}</div>}>
              <TreeItem nodeId='101' label={<div onClick={() => handleClick(as_vs)}>{as_vs.label}</div>}>
                <TreeItem nodeId='1011' label={<div onClick={() => handleClick(as_vs_aco)}>{as_vs_aco.label}</div>}/>
                <TreeItem nodeId='1012' label={<div onClick={() => handleClick(as_vs_aci)}>{as_vs_aci.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='102' label={<div onClick={() => handleClick(as_ebs)}>{as_ebs.label}</div>}>
                <TreeItem nodeId='1021' label={<div onClick={() => handleClick(as_ebs_ebes)}>{as_ebs_ebes.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='103' label={<div onClick={() => handleClick(as_elp)}>{as_elp.label}</div>}>
                <TreeItem nodeId='1031' label={<div onClick={() => handleClick(as_elp_elp)}>{as_elp_elp.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='104' label={<div onClick={() => handleClick(as_fes_mfes)}>{as_fes.label}</div>}>
                <TreeItem nodeId='1041' label={<div onClick={() => handleClick(as_fes_mfes)}>{as_fes_mfes.label}</div>}/>
              </TreeItem>
              <TreeItem nodeId='105' label={<div onClick={() => handleClick(as_lg)}>{as_lg.label}</div>}>
                <TreeItem nodeId='1051' label={<div onClick={() => handleClick(as_lg_cn)}>{as_lg_cn.label}</div>} />
                <TreeItem nodeId='1052' label={<div onClick={() => handleClick(as_lg_acn)}>{as_lg_acn.label}</div>} />
              </TreeItem>
              <TreeItem nodeId='106' label={<div onClick={() => handleClick(as_ows)}>{as_ows.label}</div>}>
                <TreeItem nodeId='1061' label={<div onClick={() => handleClick(as_ows_a)}>{as_ows_a.label}</div>}/>
              </TreeItem>
            </TreeItem>
          </TreeView>
          
        </div>
      );
}




export default function ContextField({ selected, setSelected })  {
    return (
        <div className='context-field'>
            <h1>Kontext</h1>
            <TextField label="Begin your search for digital twins" style={{width: "400px"}} />
            <p>Currently selected:<br/>{selected.label}</p>
            <Overview onSelectedChange={setSelected} />
        </div>
    )
}