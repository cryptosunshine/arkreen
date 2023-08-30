import dynamic from 'next/dynamic';
import Vector from '../../public/images/Vector.png'
import { DecLineIcon, RiseLineIcon } from '@/components/icons/ArkreenIcon';
import Loading from '@/components/loading';
import React, { useEffect, useState } from 'react';
import GameApi from '@/utils/backend/GameApi';

const BtcMap = dynamic(() => import('../btc-map'), {
  loading: () => null,
  ssr: false
});

export default function Home() {
  const [dashboardStatistics, setDashboardStatistics] = useState<any>();
  const [loading, setLoading] = useState(true);

  async function initDashboardStatistics() {
    setLoading(true)
    const resp: any = await GameApi.getDashboardStatistics()
    if (!resp.error && resp.result) {
      setDashboardStatistics(resp.result)
    }
    setLoading(false)
  }

  useEffect(() => {
    initDashboardStatistics()
  }, [])//eslint-disable-line

  const itemMainStyle: React.CSSProperties = { borderRadius: '32px', border: '1px solid #CBCBD2', padding: '64px 16px', height: '100%', display: 'flex', flexDirection: 'column', gap: '28px' }
  const itemTitleStyle: React.CSSProperties = { flex: 2, fontSize: '18px', fontWeight: 500, color: '#1D1D20', textAlign: 'center', display: 'flex', flexDirection: 'column-reverse' }
  const itemContextStyle: React.CSSProperties = { flex: 8, display: 'flex', flexDirection: 'column' }
  const itemEleStyle: React.CSSProperties = { flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center', }
  const itemEleRowStyle: React.CSSProperties = { flex: 1, textAlign: 'center', display: 'flex', gap: '16px', justifyContent: 'center', alignItems: 'end', }
  const valueMainStyle: React.CSSProperties = { fontSize: '24px', fontWeight: 600, color: '#1D1D20' }
  const valueIncrementStyle: React.CSSProperties = { fontSize: '20px', fontWeight: 600 }
  const valueMainUnitStyle: React.CSSProperties = { fontSize: '20px', fontWeight: 500, color: '#1D1D20' }
  const dividerStyle: React.CSSProperties = { marginTop: '10px',borderTop: ' 2px dashed rgb(203, 203, 210)' }
  return (
    <div style={{ background: '#FFFFFF', borderRadius: '8px', color: 'var(--arkreen-green)', fontWeight: 600, height: 'calc(100vh - 160px)' }}>
      <div style={{ padding: '96px', display: 'flex', gap: '36px', justifyContent: 'space-evenly', height: '100%', background: 'url(' + Vector.src + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

        <div style={{ flex: 1, height: '100%' }}>
          <div style={itemMainStyle}>
            <div style={itemTitleStyle}>BTC Green Blocks</div>
            <div style={itemContextStyle}>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  <div style={valueMainStyle}>{loading ? <Loading /> : (dashboardStatistics ? Number(dashboardStatistics.green_total).toLocaleString() : 0)}</div>
                  <div style={valueIncrementStyle}>{loading ? <Loading /> : (dashboardStatistics ? (<span style={{ color: dashboardStatistics.green_increment < 0 ? '#0072DB' : '#00913A' }}>{dashboardStatistics.green_increment < 0 ? <DecLineIcon /> : <RiseLineIcon />}<span>{' ' + dashboardStatistics.green_increment}</span></span>) : 0)}</div>
                </div>
              </div>
              <div style={dividerStyle}>

              </div>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  {loading ? <Loading /> : <>
                    <div style={valueMainStyle}>{dashboardStatistics ? Number(dashboardStatistics.total).toLocaleString() : 0}</div>
                    <div style={valueIncrementStyle}>{(dashboardStatistics ? (<span style={{ color: dashboardStatistics.total_increment < 0 ? '#0072DB' : '#00913A' }}>{dashboardStatistics.total_increment < 0 ? <DecLineIcon /> : <RiseLineIcon />}<span>{' ' + dashboardStatistics.total_increment}</span></span>) : 0)}</div>
                  </>}
                </div>
                <div style={valueIncrementStyle}>{loading ? <Loading /> : <></>}</div>
              </div>

            </div>
          </div>
        </div>

        <div style={{ flex: 1, height: '100%' }}>
          <div style={itemMainStyle}>
            <div style={itemTitleStyle}>BTC Energy Consumption</div>
            <div style={itemContextStyle}>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  {loading ? <Loading /> : <>
                    <div style={valueMainStyle}>{dashboardStatistics ? Number(dashboardStatistics.green_power_total).toFixed(3) : 0}</div>
                    <div style={valueMainUnitStyle}>kwh</div>
                  </>}
                </div>
                <div style={valueIncrementStyle}>{loading ? <Loading /> : (dashboardStatistics ? (<span style={{ color: dashboardStatistics.green_power_increment < 0 ? '#0072DB' : '#00913A' }}>{dashboardStatistics.green_power_increment < 0 ? <DecLineIcon /> : <RiseLineIcon />}<span>{' ' + Number(dashboardStatistics.green_power_increment / 1000 / 1000).toFixed(3)}</span></span>) : 0)}</div>
              </div>
               <div style={dividerStyle}>

              </div>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  {loading ? <Loading /> : <>
                    <div style={valueMainStyle}>{(dashboardStatistics ? Number(dashboardStatistics.power_total) / 1000 / 1000 / 1000 : 0).toFixed(3)}</div>
                    <div style={valueMainUnitStyle}>TWh</div>
                  </>}
                </div>
                <div style={valueIncrementStyle}>{loading ? <Loading /> : (dashboardStatistics ? (<span style={{ color: dashboardStatistics.power_increment < 0 ? '#0072DB' : '#00913A' }}>{dashboardStatistics.power_increment < 0 ? <DecLineIcon /> : <RiseLineIcon />}<span>{' ' + Number(dashboardStatistics.power_increment / 1000 / 1000 / 1000).toFixed(3)}</span></span>) : 0)}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, height: '100%' }}>
          <div style={itemMainStyle}>
            <div style={itemTitleStyle}>BTC Circulating Supply Consumption</div>
            <div style={itemContextStyle}>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  {loading ? <Loading /> : <>
                    <div style={valueMainStyle}>{loading ? <Loading /> : (dashboardStatistics ? (<span>{Number(dashboardStatistics.circulating_supply_consumption).toFixed(5)}</span>) : 0)}</div>
                    <div style={valueMainUnitStyle}>%</div>
                  </>}
                </div>
                <div style={valueIncrementStyle}>{loading ? <Loading /> : (dashboardStatistics ? (<span style={{ color: dashboardStatistics.circulating_supply_consumption_increment < 0 ? '#0072DB' : '#00913A' }}>{dashboardStatistics.circulating_supply_consumption_increment < 0 ? <DecLineIcon /> : <RiseLineIcon />}<span>{' ' + Number(dashboardStatistics.circulating_supply_consumption_increment).toFixed(5)}</span></span>) : 0)}</div>
              </div>
               <div style={dividerStyle}>
     
              </div>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  {loading ? <Loading /> : <>
                    <div style={valueMainStyle}>{(dashboardStatistics ? Number(dashboardStatistics.circulating_supply).toLocaleString() : 0)}</div>
                  </>}
                </div>
                <div style={valueIncrementStyle}>{loading ? <Loading /> : (dashboardStatistics ? (<span style={{ color: dashboardStatistics.circulating_supply_increment < 0 ? '#0072DB' : '#00913A' }}>{dashboardStatistics.circulating_supply_increment < 0 ? <DecLineIcon /> : <RiseLineIcon />}<span>{' ' + dashboardStatistics.circulating_supply_increment}</span></span>) : 0)}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, height: '100%' }}>
          <div style={itemMainStyle}>
            <div style={itemTitleStyle}>BTC Green Countdown</div>
            <div style={itemContextStyle}>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  {loading ? <Loading /> : <>
                    <div style={valueMainStyle}>0.000</div>
                    <div style={valueMainUnitStyle}>%</div>
                  </>}
                </div>
                <div style={valueIncrementStyle}>{loading ? <Loading /> : <span style={{ color: '#00913A' }}><RiseLineIcon /> 0.000</span>}</div>
              </div>
               <div style={dividerStyle}>

              </div>
              <div style={itemEleStyle}>
                <div style={itemEleRowStyle}>
                  {loading ? <Loading /> : <>
                    <div style={valueMainStyle}>{Number(3000.2).toLocaleString()}</div>
                    <div style={valueMainUnitStyle}>days</div>
                  </>}
                </div>
                <div style={valueIncrementStyle}>{loading ? <Loading /> : <span style={{ color: '#0072DB' }}><DecLineIcon /> 100</span>}</div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div style={{display: 'none'}}>
        <BtcMap />
      </div>

    </div>
  )
}

export async function getStaticProps() {
  console.log("预载btc map数据")
  // Fetch data for the 'about' page and pass it to the Home component
  const aboutData = await new Promise((resolve) => { setTimeout(resolve, 1000) }) || 0

  return {
    props: {
      aboutData
    }
  };
}

