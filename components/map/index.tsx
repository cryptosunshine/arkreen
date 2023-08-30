import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Drawer } from '@/components/drawer'
import { useAccount } from "wagmi";
import { useAddRecentTransaction } from '@rainbow-me/rainbowkit';
import * as L from 'leaflet';
import GameApi from "@/utils/backend/GameApi";
import WalletUtils from "@/utils/WalletUtils";

class CanvasCirclesLayer extends L.GridLayer {
    constructor(options?: L.GridLayerOptions) {
        super({
            ...options,
            tileSize: TileSize,
            minZoom: 0,
            maxZoom: 6,
            minNativeZoom: 0, // 设置最小的本地缩放级别
            // maxNativeZoom: 10, // 设置最大的本地缩放级别
            pane: 'tilePane',
            // bounds,
            noWrap: false,

            // tileSize: 100
        });
    }

    createTile(coords: L.Coords, done: L.DoneCallback): HTMLElement {
        const x = coords.x;
        const y = coords.y;
        const z = coords.z;

        const total = 1048576; // 总块数 1024 * 1024
        const xBlocks = 256; // x每层的块数量
        const yBlocks = 256; // y层

        let error: any;

        // create a <canvas> element for drawing
        let tile = L.DomUtil.create('canvas', 'leaflet-tile');

        // setup tile width and height according to the options
        let size = this.getTileSize();
        tile.width = size.x;
        tile.height = size.y;

        // get the canvas 2d context
        let ctx: any = tile.getContext('2d');

        // 超出范围
        if (x < 0 || y < 0 || x >= xBlocks / TileSize * 4 * Math.pow(2, z) || y >= yBlocks / TileSize * 4 * Math.pow(2, z + 2)) {
            let tile = document.createElement('div');
            setTimeout(function () {
                done(undefined, tile);
            }, 0);
            return tile;
        }

        // generate canvas with grid using your method
        let canvasWithGrid = generateCanvasWithGrid(z, coords); // Change the count as needed

        // draw the generated canvas onto the tile's context
        ctx.drawImage(canvasWithGrid, 0, 0);

        // pass the tile to the done() callback
        setTimeout(function () {
            done(error, tile);
        }, 1);


        ctx.fillStyle = 'black';
        // ctx.fillText('zoom: ' + coords.z, 10, 10);
        // ctx.fillText('x: ' + coords.x, 20, 20);
        // ctx.fillText('y: ' + coords.y, 30, 30);

        return tile;
    }
}

function _changeBufferToBytes(buf: any) {
    let combinedBuffer = new Uint8Array(buf.length * 8);

    for (let i = 0; i < buf.length; i++) {
        let buffer = new Uint8Array(8);
        let byte = buf[i];

        for (let j = 7; j >= 0; j--) {
            buffer[j] = (byte >> j) & 1;
        }

        combinedBuffer.set(buffer, i * 8);
    }

    return combinedBuffer;
}


export function imageOverlay() {
    let images = ['./avtar/shine.png', './avtar/jack.png', './avtar/tom.png']
    let arr = []
    // Add multiple random image overlays to the map
    for (let i = 0; i < 1000; i++) {
        let img = images[Math.floor(Math.random() * 3)]
        // Generate random coordinates
        let size = Math.trunc(parseInt(String(Math.random() * 21 + 2)));
        let randomX1 = Math.trunc(parseInt(String(Math.random() * 1000)));
        let randomY1 = - parseInt(String(Math.random() * 1520 + 20));
        let randomX2 = randomX1 + size;
        let randomY2 = randomY1 + size;
        let zoomLevel = 0;
        if (size > 20) {
            zoomLevel = 0;
        } else if (size > 15 && size <= 20) {
            zoomLevel = 1;
        } else if (size > 10 && size <= 15) {
            zoomLevel = 2;
        } else if (size > 5 && size <= 10) {
            zoomLevel = 3;
        } else if (size > 2 && size <= 5) {
            zoomLevel = 4;
        } else if (size > 0 && size <= 2) {
            zoomLevel = 5;
        }

        arr.push([zoomLevel, img, [[randomY1, randomX1], [randomY2, randomX2]]])
    }
    return arr;
}
const TileSize = 256
let mapImgArr = imageOverlay();

export function generateCanvasWithGrid(z: any, coords: any) {

    const canvas = document.createElement('canvas');
    canvas.width = TileSize
    canvas.height = TileSize

    const ctx: any = canvas.getContext('2d');

    let n = 1;
    let borderOffset = 0.2;

    const zToValuesMap: any = {
        0: { n: 128, borderOffset: 0 },
        1: { n: 64, borderOffset: 0.5 },
        2: { n: 32, borderOffset: 0.5 },
        3: { n: 16, borderOffset: 1 },
        4: { n: 8, borderOffset: 1 },
        5: { n: 4, borderOffset: 1 },
        6: { n: 2, borderOffset: 1 },
    };

    if (z in zToValuesMap) {
        n = zToValuesMap[z].n;
        borderOffset = zToValuesMap[z].borderOffset;
    }

    const cellSize = TileSize / n; // 格子大小



    if (z == 0) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const row = i;
                const col = j;

                const x = col * cellSize + borderOffset;
                const y = row * cellSize + borderOffset;

                const blockNumber = (row + (n * coords.y)) * 512 + col + (n * coords.x)
                if (blockNumber <= 800000) {

                    // ctx.fillStyle = Math.round(Math.random() * 100) % 100 == 1 ? '#66BD89' : '#D8E4DD';
                    ctx.fillStyle = bitmap[blockNumber] ? "#66BD89" : "#D8E4DD";
                    ctx.fillRect(x, y, cellSize - borderOffset * 2, cellSize - borderOffset * 2);
                }


            }
        }
        return canvas
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const row = i;
            const col = j;
            // borderOffset = 0

            const x = col * cellSize + borderOffset;
            const y = row * cellSize + borderOffset;

            const blockNumber = (row + (n * coords.y)) * 512 + col + (n * coords.x)

            if (blockNumber <= 800000) {
                ctx.fillStyle = bitmap[blockNumber] ? "#66BD89" : "#D8E4DD";
                ctx.fillRect(x, y, cellSize - borderOffset * 2, cellSize - borderOffset * 2);

                if (z >= 4) {
                    ctx.fillStyle = 'black'; // Set text color
                    if (z == 4) {
                        ctx.font = '6px sans-serif'; // Set font size and family
                    } else if (z == 5) {
                        ctx.font = '12px sans-serif'; // Set font size and family
                    } else if (z == 6) {
                        ctx.font = '24px sans-serif'; // Set font size and family
                    }
                    ctx.textAlign = 'center'; // Center the text
                    ctx.textBaseline = 'middle'; // Align the middle of the text with the cell's middle
                    ctx.fillText(blockNumber, x + cellSize / 2, y + cellSize / 2); // Center the text in the cell
                }
            }

        }
    }


    return canvas;
}

const columns = [
    {
        title: 'Key',
        dataIndex: 'key',
        key: 'key',
        ellipsis: true
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        ellipsis: true
    }
]
let map: any = null;
let bitmap: any = [];
let cavasGridLayer: any = null;

export default function Map() {
    const { address, isConnected } = useAccount()
    const addRecentTransaction = useAddRecentTransaction()

    const [activeBlock, setActiveBlock] = useState<number | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [mintLoading, setMintLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState();

    useEffect(() => {
        getBitMap()
        if (!map) {
            init()
        }

        return () => {
            // Clean up the map container when the component unmounts
            if (map) {
                map.remove();
                map = null;
            }
        };
    }, []);

    const init = () => {
        console.log('init');
        let bounds = new L.LatLngBounds(new L.LatLng(50, -120), new L.LatLng(-4200, 1200));
        map = L.map('mapContainer', {
            crs: L.CRS.Simple,
            maxBounds: bounds,
            zoomControl: false,
            maxBoundsViscosity: 0.9,
        }).setView([0, 0], 0);

        cavasGridLayer = new CanvasCirclesLayer();
        map.addLayer(cavasGridLayer);


        map.on('zoomend', function (event: any) {
            let zoomLevel = map.getZoom();

            let gap = [50, 50, 40, 30, 20, 10, 10];
            console.log(zoomLevel)
            // 设置边界
            map.setMaxBounds(new L.LatLngBounds(
                new L.LatLng(0 + gap[zoomLevel], 0 - gap[zoomLevel]),
                new L.LatLng(-4096 - gap[zoomLevel], 1024 + gap[zoomLevel]))
            )
            // map.fitBounds([
            //   [0 + gap[zoomLevel], 0 - gap[zoomLevel]],
            //   [-4096 - gap[zoomLevel], 1024 + gap[zoomLevel]]
            // ]);
            // setImage(zoomLevel)
        });


        let hoverBlock: any = null;
        let hoverPoint: any = null;
        map.on('mousemove', function (event: any) {
            let layerPoint = event.layerPoint;
            let latlng = map.layerPointToLatLng(layerPoint);

            let coords = {
                x: Math.floor(latlng.lng),
                y: Math.floor(latlng.lat),
                z: map.getZoom()
            };

            const block = Math.trunc(Math.trunc(coords.y % 2 == 0 ? Math.abs(coords.y + 1) / 2 : Math.abs(coords.y) / 2) * 512 + coords.x / 2)

            if (block == hoverBlock) return;
            hoverBlock = block;

            const svgY = coords.y % 2 == 0 ? coords.y + 1 : coords.y; // latlng.lat;
            const svgX = coords.x % 2 == 0 ? coords.x + 1 : coords.x; // latlng.lng;

            const svgXY: any = [[svgY - 1, svgX - 1], [svgY + 1, svgX + 1]];


            if (hoverPoint) {
                map.removeLayer(hoverPoint);
            }
            let imageUrl = '/images/square.svg';
            hoverPoint = L.imageOverlay(imageUrl, svgXY).addTo(map);

        });

        let svgPoint: any = null;
        map.on('click', function (event: any) {
            let layerPoint = event.layerPoint;
            let latlng = map.layerPointToLatLng(layerPoint);

            let coords = {
                x: Math.floor(latlng.lng),
                y: Math.floor(latlng.lat),
                z: map.getZoom()
            };

            const block = Math.trunc(Math.trunc(coords.y % 2 == 0 ? Math.abs(coords.y + 1) / 2 : Math.abs(coords.y) / 2) * 512 + coords.x / 2)

            const svgY = coords.y % 2 == 0 ? coords.y + 1 : coords.y; // latlng.lat;
            const svgX = coords.x % 2 == 0 ? coords.x + 1 : coords.x; // latlng.lng;

            const svgXY: any = [[svgY - 1, svgX - 1], [svgY + 1, svgX + 1]];
            console.log('Svg at:', svgXY)




            if (svgPoint) {
                map.removeLayer(svgPoint);
            }
            let imageUrl = '/images/square.svg';
            svgPoint = L.imageOverlay(imageUrl, svgXY).addTo(map);

            setActiveBlock(block)
            getBlockDetails(block)
            setOpen(true);
        });

        console.log(map.getSize())
    }

    const setImage = (zoomLevel: any) => {

        for (let i = 0; i < mapImgArr.length; i++) {
            let lit: any = mapImgArr[i]
            if (zoomLevel < lit[0]) {
                if (lit[3]) {
                    map.removeLayer(lit[3])
                    mapImgArr[i] = mapImgArr[i].slice(0, mapImgArr[i].length - 1)
                }
            }

        }

        for (let i = 0; i < mapImgArr.length; i++) {
            let lit: any = mapImgArr[i]
            if (lit.length == 3) {
                if (lit[0] <= zoomLevel) {
                    let obj: any = L.imageOverlay(lit[1], lit[2]).addTo(map);
                    mapImgArr[i].push(obj)
                }
            }

        }

    }

    const getBitMap = () => {
        GameApi.getBitMap().then((res: any) => {
            if (res && res.result) {
                console.log(bitmap)
                if (bitmap.length == 0) {
                    bitmap = _changeBufferToBytes(res.result.data);
                    map.remove();
                    map = null;
                    init()
                }
            }
        });
    }
    const getBlockDetails = async (block: any) => {
        if (block === undefined) return;
        setLoading(true)
        const resp: any = await GameApi.getBlockDetails(block);
        console.log(resp)
        let dataSource: any = []
        Object.entries(resp.result).map(([key, value]) => {
            dataSource.push({
                key: key,
                value: value
            })
        });
        setDetails(dataSource)
        setLoading(false)
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            mint()
        }
    });

    const mint = async () => {
        console.log('mint');
        // bitmap[activeBlock || 0] = 1;
        // cavasGridLayer.redraw()
        // return;
        if (isConnected) {
            setMintLoading(true)
            const resp: any = await GameApi.queryAuthorizationAsGreenActor('' + address, activeBlock || 0)
            console.log(resp)
            if (!resp.error && resp.result) {
                const result = resp.result
                // height:number,energyStr:string,cellCount:number,blockTime:string,beneficiary:string,greenType:number,sig:any,
                const v = result.sig.v
                const r = result.sig.r
                const s = result.sig.s

                try {
                    const resultData = await WalletUtils.authMintGreenBTC(result.block, result.energy, result.cellCount, result.time, result.actor, 2, [v, r, s])
                    const hash = resultData.hash
                    console.log(hash)
                    addRecentTransaction({ hash: hash, description: 'Green Block' });
                    const transactionResult: any = await WalletUtils.waitTransaction(hash)
                    if (transactionResult.status == 1 || transactionResult.status == 'success') {
                        bitmap[activeBlock || 0] = 1;
                        cavasGridLayer.redraw()
                        const tokenURI = await WalletUtils.tokenURI(result.block) || ''
                        if (tokenURI) {
                            const baseStr = tokenURI.toString().replaceAll('data:application/json;base64,', '')

                            console.log(JSON.parse(atob(baseStr)))
                        }

                    } else {
                        toast.error("Green failed.", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                } catch (e) {

                }
            } else {
                toast.error("获取签名失败！", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            setMintLoading(false)
        }
    }
    const openSea = (e: number | undefined) => {
        window.open(`https://testnets.opensea.io/assets/mumbai/0xcac6cae0122aca84d26e89a49ffd71b120dbfad9/` + e)
    }
    return (
        <>
            <Drawer title={`Block ${activeBlock}`} visible={open} onClose={() => setOpen(false)}>
            {
                    activeBlock && bitmap[activeBlock] === 1
                        ?
                        <button onClick={() => openSea(activeBlock)}>openSea</button>
                        :
                        <button onClick={mint}>Mint</button>
                }
                {/* loading={mintLoading}  */}

                
            </Drawer>

            <div id="mapContainer"></div>
        </>

    );
}

