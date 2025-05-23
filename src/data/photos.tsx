import type { Photo } from 'react-photo-album'

export interface aPhoto {
  src: string
  width: number
  height: number
}

export interface PhotoAlbum {
  [key: string]: aPhoto[]
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// для динамических превьюх
const originalPhotos: PhotoAlbum = {
  НГ: [
    { src: '/hpny/220.jpg', width: 1333, height: 2000 },
    { src: '/hpny/222.jpg', width: 1600, height: 1067 },
    { src: '/hpny/225.jpg', width: 1280, height: 853 },
    { src: '/hpny/230.jpg', width: 853, height: 1280 },
    { src: '/hpny/235.jpg', width: 2000, height: 1333 },
    { src: '/hpny/240.jpg', width: 1920, height: 1280 },
    { src: '/hpny/245.jpg', width: 1280, height: 1920 },
    { src: '/hpny/250.jpg', width: 1920, height: 1280 },
    { src: '/hpny/255.jpg', width: 1333, height: 2000 },
    { src: '/hpny/260.jpg', width: 1333, height: 2000 },
    { src: '/hpny/265.jpg', width: 2000, height: 1333 },
    { src: '/hpny/270.jpg', width: 2000, height: 1333 },
    { src: '/hpny/275.jpg', width: 2000, height: 1333 },
    { src: '/hpny/285.jpg', width: 2000, height: 1333 },
    { src: '/hpny/290.jpg', width: 1920, height: 1280 },
    { src: '/hpny/295.jpg', width: 1280, height: 1920 },
    { src: '/hpny/300.jpg', width: 1280, height: 1920 },
    { src: '/hpny/305.jpg', width: 1920, height: 1280 },
    { src: '/hpny/310.jpg', width: 1280, height: 1920 },
    { src: '/hpny/315.jpg', width: 1280, height: 1920 },
    { src: '/hpny/320.jpg', width: 1280, height: 1920 },
    { src: '/hpny/325.jpg', width: 1920, height: 1280 },
    { src: '/hpny/330.jpg', width: 1920, height: 1280 },
    { src: '/hpny/333.jpg', width: 2000, height: 1333 },
    { src: '/hpny/335.jpg', width: 1920, height: 1280 },
    { src: '/hpny/340.jpg', width: 1280, height: 1920 },
    { src: '/hpny/345.jpg', width: 1280, height: 1920 },
    { src: '/hpny/350.jpg', width: 1280, height: 1920 },
    { src: '/hpny/355.jpg', width: 1280, height: 1920 },
    { src: '/hpny/360.jpg', width: 1920, height: 1279 },
    { src: '/hpny/365.jpg', width: 1920, height: 1279 },
    { src: '/hpny/375.jpg', width: 1279, height: 1920 },
    { src: '/hpny/380.jpg', width: 1920, height: 1279 },
    { src: '/hpny/385.jpg', width: 1920, height: 1279 },
    { src: '/hpny/390.jpg', width: 1279, height: 1920 },
    { src: '/hpny/395.jpg', width: 1920, height: 1279 },
    { src: '/hpny/400.jpg', width: 1279, height: 1920 },
    { src: '/hpny/405.jpg', width: 822, height: 1229 },
    { src: '/hpny/410.jpg', width: 1920, height: 1280 },
    { src: '/hpny/415.jpg', width: 2000, height: 1333 },
    { src: '/hpny/420.jpg', width: 1500, height: 1000 },
    { src: '/hpny/425.jpg', width: 1280, height: 1920 },
    { src: '/hpny/430.jpg', width: 1920, height: 1280 },
    { src: '/hpny/435.jpg', width: 1920, height: 1280 },
    { src: '/hpny/440.jpg', width: 1920, height: 1280 },
    { src: '/hpny/444.jpg', width: 1600, height: 1067 },
    { src: '/hpny/445.jpg', width: 2000, height: 1333 },
    { src: '/hpny/450.jpg', width: 1000, height: 1500 },
    { src: '/hpny/455.jpg', width: 1500, height: 1000 },
    { src: '/hpny/465.jpg', width: 1000, height: 1500 },
    { src: '/hpny/470.jpg', width: 1500, height: 1000 },
    { src: '/hpny/475.jpg', width: 1000, height: 1500 },
    { src: '/hpny/480.jpg', width: 1000, height: 1500 },
    { src: '/hpny/485.jpg', width: 1500, height: 999 },
    { src: '/hpny/490.jpg', width: 1000, height: 1500 },
    { src: '/hpny/495.jpg', width: 1000, height: 1500 },
    { src: '/hpny/500.jpg', width: 1500, height: 1000 },
    { src: '/hpny/505.jpg', width: 1500, height: 1000 },
    { src: '/hpny/510.jpg', width: 1500, height: 1000 },
    { src: '/hpny/515.jpg', width: 1000, height: 1500 },
    { src: '/hpny/520.jpg', width: 1500, height: 1000 },
    { src: '/hpny/525.jpg', width: 1000, height: 1500 },
    { src: '/hpny/530.jpg', width: 1000, height: 1500 },
    { src: '/hpny/535.jpg', width: 1333, height: 2000 },
    { src: '/hpny/540.jpg', width: 2000, height: 1333 },
    { src: '/hpny/545.jpg', width: 1333, height: 2000 },
    { src: '/hpny/555.jpg', width: 2000, height: 1333 },
    { src: '/hpny/560.jpg', width: 2000, height: 1333 },
    { src: '/hpny/565.jpg', width: 2000, height: 1333 },
    { src: '/hpny/570.jpg', width: 2000, height: 1333 },
    { src: '/hpny/575.jpg', width: 1333, height: 2000 },
    { src: '/hpny/580.jpg', width: 2000, height: 1333 },
    { src: '/hpny/666.jpg', width: 1922, height: 1282 },
  ],
  Еду: [
    { src: '/food/106.jpg', width: 2000, height: 1333 },
    { src: '/food/151.jpg', width: 2000, height: 1333 },
    { src: '/food/214.jpg', width: 2000, height: 1333 },
    { src: '/food/267.jpg', width: 2000, height: 1333 },
    { src: '/food/276.jpg', width: 2000, height: 1333 },
    { src: '/food/357.jpg', width: 2000, height: 1333 },
    { src: '/food/387.jpg', width: 1920, height: 1280 },
    { src: '/food/416.jpg', width: 1920, height: 1280 },
    { src: '/food/444.jpg', width: 1920, height: 1280 },
    { src: '/food/449.jpg', width: 1500, height: 1000 },
    { src: '/food/466.jpg', width: 1500, height: 1000 },
    { src: '/food/526.jpg', width: 1920, height: 1280 },
    { src: '/food/539.jpg', width: 1319, height: 877 },
    { src: '/food/540.jpg', width: 1920, height: 1280 },
    { src: '/food/557.jpg', width: 1920, height: 1280 },
    { src: '/food/655.jpg', width: 1920, height: 1280 },
    { src: '/food/685.jpg', width: 2000, height: 1333 },
    { src: '/food/725.jpg', width: 1920, height: 1280 },
    { src: '/food/727.jpg', width: 2000, height: 1333 },
    { src: '/food/731.jpg', width: 1920, height: 1280 },
    { src: '/food/738.jpg', width: 1280, height: 1920 },
    { src: '/food/803.jpg', width: 2000, height: 1333 },
    { src: '/food/824.jpg', width: 1280, height: 1920 },
    { src: '/food/826.jpg', width: 1333, height: 2000 },
    { src: '/food/862.jpg', width: 1333, height: 2000 },
    { src: '/food/922.jpg', width: 2000, height: 1333 },
    { src: '/food/927.jpg', width: 1536, height: 1920 },
    { src: '/food/939.jpg', width: 1333, height: 2000 },
    { src: '/food/380.jpg', width: 1920, height: 1280 },
    { src: '/food/903.jpg', width: 1308, height: 1920 },
    { src: '/food/486.jpg', width: 1920, height: 1280 },
  ],
  Производства: [
    { src: '/indu/007.jpg', width: 2000, height: 1333 },
    { src: '/indu/035.jpg', width: 1333, height: 2000 },
    { src: '/indu/055.jpg', width: 2000, height: 1333 },
    { src: '/indu/067.jpg', width: 2000, height: 1333 },
    { src: '/indu/089.jpg', width: 1333, height: 2000 },
    { src: '/indu/138.jpg', width: 2000, height: 1333 },
    { src: '/indu/175.jpg', width: 2000, height: 1333 },
    { src: '/indu/177.jpg', width: 2000, height: 1333 },
    { src: '/indu/244.jpg', width: 2000, height: 1333 },
    { src: '/indu/248.jpg', width: 2000, height: 1333 },
    { src: '/indu/266.jpg', width: 2000, height: 1333 },
    { src: '/indu/272.jpg', width: 2000, height: 1333 },
    { src: '/indu/293.jpg', width: 2000, height: 1333 },
    { src: '/indu/340.jpg', width: 2000, height: 1333 },
    { src: '/indu/348.jpg', width: 2000, height: 1333 },
    { src: '/indu/355.jpg', width: 2000, height: 1333 },
    { src: '/indu/361.jpg', width: 1333, height: 2000 },
    { src: '/indu/369.jpg', width: 1333, height: 2000 },
    { src: '/indu/466.jpg', width: 2000, height: 1333 },
    { src: '/indu/474.jpg', width: 1333, height: 2000 },
    { src: '/indu/496.jpg', width: 2000, height: 1333 },
    { src: '/indu/510.jpg', width: 1333, height: 2000 },
    { src: '/indu/554.jpg', width: 1333, height: 2000 },
    { src: '/indu/561.jpg', width: 1333, height: 2000 },
    { src: '/indu/566.jpg', width: 2000, height: 1333 },
    { src: '/indu/571.jpg', width: 2000, height: 1333 },
    { src: '/indu/587.jpg', width: 2000, height: 1333 },
    { src: '/indu/618.jpg', width: 2000, height: 1333 },
    { src: '/indu/652.jpg', width: 2000, height: 1333 },
    { src: '/indu/702.jpg', width: 2000, height: 1333 },
    { src: '/indu/706.jpg', width: 2000, height: 1333 },
    { src: '/indu/730.jpg', width: 2000, height: 1333 },
    { src: '/indu/737.jpg', width: 2000, height: 1333 },
    { src: '/indu/808.jpg', width: 2000, height: 1333 },
    { src: '/indu/828.jpg', width: 1333, height: 2000 },
    { src: '/indu/837.jpg', width: 1333, height: 2000 },
    { src: '/indu/962.jpg', width: 2000, height: 1334 },
    { src: '/indu/990.jpg', width: 2000, height: 1333 },
    { src: '/indu/993.jpg', width: 2000, height: 1333 },
  ],
  Свадьбы: [
    { src: '/wdng/100.jpg', width: 1200, height: 800 },
    { src: '/wdng/108.jpg', width: 1200, height: 800 },
    { src: '/wdng/136.jpg', width: 533, height: 800 },
    { src: '/wdng/145.jpg', width: 2000, height: 1334 },
    { src: '/wdng/155.jpg', width: 1200, height: 800 },
    { src: '/wdng/169.jpg', width: 1920, height: 1280 },
    { src: '/wdng/192.jpg', width: 1920, height: 1280 },
    { src: '/wdng/193.jpg', width: 1280, height: 853 },
    { src: '/wdng/202.jpg', width: 1200, height: 800 },
    { src: '/wdng/206.jpg', width: 1200, height: 800 },
    { src: '/wdng/208.jpg', width: 1200, height: 800 },
    { src: '/wdng/222.jpg', width: 1200, height: 799 },
    { src: '/wdng/293.jpg', width: 1200, height: 800 },
    { src: '/wdng/296.jpg', width: 1200, height: 800 },
    { src: '/wdng/333.jpg', width: 1675, height: 1675 },
    { src: '/wdng/363.jpg', width: 1200, height: 800 },
    { src: '/wdng/397.jpg', width: 1200, height: 799 },
    { src: '/wdng/421.jpg', width: 1167, height: 853 },
    { src: '/wdng/441.jpg', width: 1200, height: 800 },
    { src: '/wdng/528.jpg', width: 533, height: 800 },
    { src: '/wdng/529.jpg', width: 1200, height: 800 },
    { src: '/wdng/559.jpg', width: 1200, height: 800 },
    { src: '/wdng/565.jpg', width: 1200, height: 800 },
    { src: '/wdng/592.jpg', width: 1199, height: 800 },
    { src: '/wdng/614.jpg', width: 1199, height: 800 },
    { src: '/wdng/627.jpg', width: 1200, height: 800 },
    { src: '/wdng/642.jpg', width: 1333, height: 2000 },
    { src: '/wdng/648.jpg', width: 1199, height: 800 },
    { src: '/wdng/658.jpg', width: 1200, height: 800 },
    { src: '/wdng/663.jpg', width: 1334, height: 2000 },
    { src: '/wdng/692.jpg', width: 1200, height: 800 },
    { src: '/wdng/695.jpg', width: 1333, height: 2000 },
    { src: '/wdng/698.jpg', width: 533, height: 800 },
    { src: '/wdng/703.jpg', width: 1199, height: 800 },
    { src: '/wdng/718.jpg', width: 1333, height: 2000 },
    { src: '/wdng/737.jpg', width: 1200, height: 800 },
    { src: '/wdng/738.jpg', width: 682, height: 1024 },
    { src: '/wdng/759.jpg', width: 1200, height: 800 },
    { src: '/wdng/766.jpg', width: 1200, height: 798 },
    { src: '/wdng/808.jpg', width: 1920, height: 1280 },
    { src: '/wdng/821.jpg', width: 1200, height: 799 },
    { src: '/wdng/822.jpg', width: 1200, height: 800 },
    { src: '/wdng/833.jpg', width: 533, height: 800 },
    { src: '/wdng/834.jpg', width: 1200, height: 800 },
    { src: '/wdng/896.jpg', width: 1199, height: 800 },
    { src: '/wdng/900.jpg', width: 533, height: 800 },
    { src: '/wdng/914.jpg', width: 1192, height: 794 },
    { src: '/wdng/915.jpg', width: 1200, height: 800 },
    { src: '/wdng/920.jpg', width: 533, height: 800 },
    { src: '/wdng/931.jpg', width: 1920, height: 1280 },
    { src: '/wdng/950.jpg', width: 1200, height: 795 },
    { src: '/wdng/952.jpg', width: 1280, height: 1920 },
    { src: '/wdng/965.jpg', width: 1199, height: 800 },
    { src: '/wdng/966.jpg', width: 1200, height: 800 },
  ],
  Портреты: [
    { src: '/prtr/100.jpg', width: 2000, height: 1334 },
    { src: '/prtr/115.jpg', width: 1333, height: 2000 },
    { src: '/prtr/130.jpg', width: 2000, height: 1334 },
    { src: '/prtr/145.jpg', width: 1333, height: 2000 },
    { src: '/prtr/160.jpg', width: 2000, height: 1333 },
    { src: '/prtr/175.jpg', width: 1334, height: 2000 },
    { src: '/prtr/190.jpg', width: 1333, height: 2000 },
    { src: '/prtr/205.jpg', width: 1333, height: 2000 },
    { src: '/prtr/220.jpg', width: 1333, height: 2000 },
    { src: '/prtr/235.jpg', width: 1333, height: 2000 },
    { src: '/prtr/250.jpg', width: 2000, height: 1334 },
    { src: '/prtr/265.jpg', width: 2000, height: 1333 },
    { src: '/prtr/280.jpg', width: 960, height: 960 },
    { src: '/prtr/295.jpg', width: 1333, height: 2000 },
    { src: '/prtr/325.jpg', width: 1333, height: 2000 },
    { src: '/prtr/340.jpg', width: 2000, height: 1333 },
    { src: '/prtr/355.jpg', width: 1333, height: 2000 },
    { src: '/prtr/370.jpg', width: 1333, height: 2000 },
    { src: '/prtr/385.jpg', width: 2000, height: 1334 },
    { src: '/prtr/400.jpg', width: 2000, height: 1334 },
    { src: '/prtr/415.jpg', width: 1922, height: 1282 },
    { src: '/prtr/430.jpg', width: 800, height: 1200 },
    { src: '/prtr/445.jpg', width: 1600, height: 1067 },
    { src: '/prtr/460.jpg', width: 1600, height: 1067 },
    { src: '/prtr/475.jpg', width: 1067, height: 1600 },
    { src: '/prtr/490.jpg', width: 1117, height: 1600 },
    { src: '/prtr/505.jpg', width: 1600, height: 1067 },
    { src: '/prtr/520.jpg', width: 1067, height: 1600 },
    { src: '/prtr/535.jpg', width: 2000, height: 1333 },
    { src: '/prtr/550.jpg', width: 1067, height: 1600 },
    { src: '/prtr/565.jpg', width: 1333, height: 2000 },
    { src: '/prtr/580.jpg', width: 2000, height: 1333 },
    { src: '/prtr/595.jpg', width: 2000, height: 1333 },
    { src: '/prtr/610.jpg', width: 2000, height: 1333 },
    { src: '/prtr/625.jpg', width: 1334, height: 2000 },
    { src: '/prtr/640.jpg', width: 1334, height: 2000 },
    { src: '/prtr/655.jpg', width: 1333, height: 2000 },
    { src: '/prtr/670.jpg', width: 1000, height: 1500 },
    { src: '/prtr/685.jpg', width: 2000, height: 1442 },
    { src: '/prtr/700.jpg', width: 1280, height: 1920 },
    { src: '/prtr/715.jpg', width: 2000, height: 1333 },
    { src: '/prtr/730.jpg', width: 2000, height: 1333 },
    { src: '/prtr/745.jpg', width: 1280, height: 1920 },
    { src: '/prtr/760.jpg', width: 1500, height: 2000 },
  ],
  Клубы: [
    { src: '/club/017.jpg', width: 1067, height: 1600 },
    { src: '/club/061.jpg', width: 1067, height: 1600 },
    { src: '/club/079.jpg', width: 1920, height: 1281 },
    { src: '/club/085.jpg', width: 1920, height: 1281 },
    { src: '/club/040.jpg', width: 1920, height: 1281 },
    { src: '/club/111.jpg', width: 1067, height: 1600 },
    { src: '/club/127.jpg', width: 1920, height: 1281 },
    { src: '/club/138.jpg', width: 1920, height: 1281 },
    { src: '/club/156.jpg', width: 1920, height: 1281 },
    { src: '/club/158.jpg', width: 1067, height: 1600 },
    { src: '/club/168.jpg', width: 1920, height: 1281 },
    { src: '/club/178.jpg', width: 1068, height: 1600 },
    { src: '/club/188.jpg', width: 1920, height: 1281 },
    { src: '/club/204.jpg', width: 1920, height: 1281 },
    { src: '/club/206.jpg', width: 1920, height: 1281 },
    { src: '/club/222.jpg', width: 1920, height: 1281 },
    { src: '/club/229.jpg', width: 1920, height: 1281 },
    { src: '/club/244.jpg', width: 1920, height: 1281 },
    { src: '/club/245.jpg', width: 1920, height: 1281 },
    { src: '/club/253.jpg', width: 1920, height: 1281 },
    { src: '/club/263.jpg', width: 1920, height: 1281 },
    { src: '/club/264.jpg', width: 1067, height: 1600 },
    { src: '/club/266.jpg', width: 1920, height: 1281 },
    { src: '/club/269.jpg', width: 1920, height: 1281 },
    { src: '/club/272.jpg', width: 1920, height: 1281 },
    { src: '/club/279.jpg', width: 1920, height: 1281 },
    { src: '/club/302.jpg', width: 1920, height: 1281 },
    { src: '/club/322.jpg', width: 1920, height: 1281 },
    { src: '/club/347.jpg', width: 1067, height: 1600 },
    { src: '/club/372.jpg', width: 1920, height: 1281 },
    { src: '/club/378.jpg', width: 1067, height: 1600 },
    { src: '/club/383.jpg', width: 1920, height: 1281 },
    { src: '/club/392.jpg', width: 1920, height: 1281 },
    { src: '/club/420.jpg', width: 1920, height: 1280 },
    { src: '/club/438.jpg', width: 1920, height: 1281 },
    { src: '/club/455.jpg', width: 1920, height: 1281 },
    { src: '/club/474.jpg', width: 1920, height: 1280 },
    { src: '/club/478.jpg', width: 1920, height: 1281 },
    { src: '/club/490.jpg', width: 1920, height: 1281 },
    { src: '/club/519.jpg', width: 1920, height: 1280 },
    { src: '/club/543.jpg', width: 1067, height: 1600 },
    { src: '/club/580.jpg', width: 1920, height: 1281 },
    { src: '/club/592.jpg', width: 1920, height: 1281 },
    { src: '/club/601.jpg', width: 1920, height: 1281 },
    { src: '/club/606.jpg', width: 1920, height: 1281 },
    { src: '/club/609.jpg', width: 1920, height: 1281 },
    { src: '/club/635.jpg', width: 1920, height: 1280 },
    { src: '/club/647.jpg', width: 1920, height: 1281 },
    { src: '/club/694.jpg', width: 1920, height: 1281 },
    { src: '/club/696.jpg', width: 1920, height: 1281 },
    { src: '/club/697.jpg', width: 1920, height: 1281 },
    { src: '/club/707.jpg', width: 1920, height: 1281 },
    { src: '/club/708.jpg', width: 1920, height: 1281 },
    { src: '/club/713.jpg', width: 1067, height: 1600 },
    { src: '/club/720.jpg', width: 1920, height: 1281 },
    { src: '/club/768.jpg', width: 1600, height: 1600 },
    { src: '/club/780.jpg', width: 1920, height: 1280 },
    { src: '/club/814.jpg', width: 1920, height: 1281 },
    { src: '/club/838.jpg', width: 1920, height: 1281 },
    { src: '/club/855.jpg', width: 1920, height: 1281 },
    { src: '/club/866.jpg', width: 1920, height: 1281 },
    { src: '/club/871.jpg', width: 1067, height: 1600 },
    { src: '/club/877.jpg', width: 1920, height: 1281 },
    { src: '/club/889.jpg', width: 1920, height: 1280 },
    { src: '/club/914.jpg', width: 1920, height: 1281 },
    { src: '/club/930.jpg', width: 1920, height: 1281 },
    { src: '/club/976.jpg', width: 1920, height: 1281 },
    { src: '/club/993.jpg', width: 1920, height: 1281 },
  ],
}

export const albums = {
  food: 'Еду',
  corporative: 'Мероприятия',
  industrial: 'Производства',
  weddings: 'Свадьбы',
  people: 'Портреты',
  clubs: 'Клубы',
}

export const shuffledPhotos: PhotoAlbum = Object.fromEntries(
  Object.entries(originalPhotos).map(([key, value]) => [
    key,
    shuffleArray(value),
  ])
)
