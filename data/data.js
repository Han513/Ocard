//全部文章資料
import elephant from '../images/elephant.png';
import rabbit from '../images/rabbit.png';
import turtle from '../images/turtle.png';
import cat from '../images/cat.png';
import dog from '../images/dog.png';
import tiger from '../images/tiger.png';
const data = [
  {
    id: 1,
    type: 'Cosmetic',
    posterId: 1,
    title: '水煮蛋肌',
    subTitle:
      '在護膚保養這塊鑽研多年的我，終於達到人人誇說皮膚又嫩又滑的境界!尤其在現在超乾超冷的冬天我的皮膚還是一樣保濕嫩滑',
    photo: 'https://imgur.dcard.tw/fLXMCNgh.png',
    publish: '2021/01/01 12:29',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 2,
    type: 'Comic',
    posterId: 2,
    title: '鬼滅之刃',
    subTitle: '鬼滅之刃劇場版什麼時候才會登上netflix啊?一直在猶豫要不要看槍版',

    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yQVTrUMhOkj24q0xNUTaWZbwMiK-_tM35g&usqp=CAU',
    publish: '2020/12/01 00:00',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 3,
    type: 'Movie',
    posterId: 3,
    title: '靈魂急轉彎#重雷心得感悟',
    subTitle:
      '在看這部片前，說真的我一點期待都沒有，現在的我對於動畫片總是興致缺缺，也許是過了看動畫的年紀，也或許近期好評如潮的各種「成人向動畫」例如動物方程式等等，都仍講述著王道般的正知正確，讓人覺得無趣。',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLZNlyWTSjoW-5NcbpzhUgbhFoPAAdlAFbQ&usqp=CAU',
    publish: '2020/11/02 08:00',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 4,
    type: 'Movie',
    posterId: 4,
    title: '杏林醫院 史上最難看...',
    subTitle:
      '簡單兩個字，難看，沒看過這麼難看的電影，要不是因為主角是林柏宏根本不會有人想看吧。',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJwhOuXccZH28-af6O6qOCZL-wcKIGPvdESw&usqp=CAU',
    publish: '2021/01/01 08:00',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 5,
    type: 'School',
    posterId: 5,
    title: 'winter coming',
    subTitle: '寒假快到囉，學生又要出沒佔據各個地方呢!',
    photo:
      'https://kaboompics.com/cache/e/5/2/f/3/e52f3a8e65793c94ffa652ed618a1d8490415544.jpeg',
    publish: '2021/01/01 08:00',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 6,
    type: 'Game',
    posterId: 6,
    title: '新女力?',
    subTitle: '新英雄出沒?最美女角?頭髮顏色是淡淡的粉紅色呢!',
    photo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBktU0Ot0rao3ezA4BoN84NXTpE2-jqUPeiQ&usqp=CAU',
    publish: '2021/01/16 08:00',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 7,
    type: 'Cosmetic',
    posterId: 3,
    title: '#分享 最經典的復古紅棕唇膏',
    subTitle:
      '2020要結束啦~應該超多人開始盤點今年的空空和凹凹產品吧!突然發現今年最常用的紅棕色系唇膏依舊還是這一支！BOURJOIS妙巴黎 紅絲絨薄霧唇膏#12清晨咖啡',
    photo: 'https://imgur.dcard.tw/0G45iUDh.jpg',
    publish: '2021/01/01 12:29',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 8,
    type: 'Game',
    posterId: 1,
    title: '適合老年人玩的遊戲有哪些?',
    subTitle: '挑戰數數字、套圈奪寶、摺紙花、送祝福、畫鼻子...',
    photo: 'https://miro.medium.com/max/1050/1*b-DqwY3bsg2L9bWFA4q41w.jpeg',
    publish: '2021/01/08 15:20',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 9,
    type: 'Cosmetic',
    posterId: 4,
    title: '#討論 如何畫出好的眼線?',
    subTitle:
      '小的我呢...一直對畫眼線有困擾，每次化妝時 眼皮都很不固定，有時一內雙 一外雙，有時全內雙，要怎麼畫出適合我的眼線呢?',
    photo: 'https://imgur.dcard.tw/JBuPw7Nh.jpg',
    publish: '2021/01/08 05:07',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
  {
    id: 10,
    type: 'School',
    posterId: 6,
    title: 'What’s in my room? 高科燕巢女宿',
    subTitle: '因應三校合併，住宿費有做調整，詳情請上高科大燕巢宿舍網站',
    photo: 'https://imgur.dcard.tw/r5zxt9Fh.jpg',
    publish: '2020/09/06 08:07',
    like: 0, //按讚
    marked: false, //收藏
    follow: [],
  },
];
export default data;
