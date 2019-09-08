const express = require('express');
const router = express.Router()
const rPlaylist = require('../modules/rPlaylist');


router.get('/personalized',(req,res,next)=>{
  rPlaylist.find((err,set)=>{
    if(!set.length) {
      const recommendPlaylist = new rPlaylist({
        code: 200,
        result: JSON.parse(`
        [{
          "id": 2972838322,
          "type": 0,
          "name": "风起叶落，是最适合想念的季节啊",
          "copywriter": "编辑推荐：比起夏的炽热 好像更中意秋的温柔",
          "picUrl": "https://p2.music.126.net/cx5jibNhQsZcuQTcNffOCw==/109951164347198857.jpg",
          "canDislike": false,
          "playCount": 2653369,
          "trackCount": 40,
          "highQuality": false,
          "alg": "featured"
        },
        {
          "id": 2820956491,
          "type": 0,
          "name": "耳边呢喃 | 天鹅绒之夜",
          "copywriter": "编辑推荐：朦胧暧昧，又耐人寻味",
          "picUrl": "https://p2.music.126.net/WYSl7dayEqATv_Dt9ogMZA==/109951164313545845.jpg",
          "canDislike": false,
          "playCount": 597310,
          "trackCount": 31,
          "highQuality": false,
          "alg": "featured"
        },
        {
          "id": 2301227992,
          "type": 0,
          "name": "欧美精选 | 嗨 伙计 要来首10w+吗？",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/vu236KSx8gQZ4o7Qys6pRQ==/109951163414509421.jpg",
          "canDislike": true,
          "playCount": 46055104,
          "trackCount": 41,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 988690134,
          "type": 0,
          "name": "经典老歌，久听不厌",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/VFd5cboNTbnYsWZ5DBn9bg==/18953381440004340.jpg",
          "canDislike": true,
          "playCount": 115609968,
          "trackCount": 115,
          "highQuality": true,
          "alg": "cityLevel_A"
        },
        {
          "id": 2170976338,
          "type": 0,
          "name": "滚石香港黄金十年",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/6k6L9DtmNyDQ2elG1smxyw==/19064432114600478.jpg",
          "canDislike": true,
          "playCount": 8512256,
          "trackCount": 100,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 395100131,
          "type": 0,
          "name": "【华语篇】成长 都是闪着泪光的决定",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/TLDOve7c_ed0VxKJ7HF3Pw==/109951162913202465.jpg",
          "canDislike": true,
          "playCount": 2812202,
          "trackCount": 49,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 75182300,
          "type": 0,
          "name": "评论过万的英文歌与潜力股",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/gzsxh-u0mN_OtdrjpbfI8w==/7842816441775262.jpg",
          "canDislike": true,
          "playCount": 73957216,
          "trackCount": 112,
          "highQuality": true,
          "alg": "cityLevel_A"
        },
        {
          "id": 2347091387,
          "type": 0,
          "name": "B榜空冠，是什么妖单刚来就是冠军。",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/RsgaPZQl5hsSeVXbbaangQ==/18899505370007925.jpg",
          "canDislike": true,
          "playCount": 693691,
          "trackCount": 35,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2237551001,
          "type": 0,
          "name": "粤语传世经典，怀旧是人的本能",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/PsONIoIzCJ-9gPCAeq9ahw==/19115009649498152.jpg",
          "canDislike": true,
          "playCount": 31246254,
          "trackCount": 173,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2961193083,
          "type": 0,
          "name": "请你牵我的手，来我的温柔宇宙",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/4AyC6Hj9_yGs9K3p4E1NlQ==/109951164341616858.jpg",
          "canDislike": true,
          "playCount": 3552210,
          "trackCount": 33,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 552301464,
          "type": 0,
          "name": "来解压！做个快乐的人儿呀",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/uuCy-SU2-IX7opO9R9KyKQ==/109951163805997802.jpg",
          "canDislike": true,
          "playCount": 888181,
          "trackCount": 21,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 376493212,
          "type": 0,
          "name": "那些网易评论过十万的歌，请随机播放。",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/K_84LZWdizS0cN7Hwl0laQ==/109951163353347041.jpg",
          "canDislike": true,
          "playCount": 95893728,
          "trackCount": 327,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 814812699,
          "type": 0,
          "name": "欧美 | 前奏跪 × 开口脆",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/t5lalcY7dQq2dhcXB3EtVA==/109951163434572045.jpg",
          "canDislike": true,
          "playCount": 41554568,
          "trackCount": 207,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2476663154,
          "type": 0,
          "name": "经典粤语合集【无损音质】黑胶唱片会员专属",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/fXqqtoBjkEAJHYDgOBGW2w==/109951163613409873.jpg",
          "canDislike": true,
          "playCount": 12687490,
          "trackCount": 93,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 575168245,
          "type": 0,
          "name": "网络流行歌曲2019♡",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/aJLxFYEy8NHyZZM92nUOSg==/109951163919639197.jpg",
          "canDislike": true,
          "playCount": 21417714,
          "trackCount": 520,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2785515965,
          "type": 0,
          "name": "失眠飞行｜你是我无法逃离的梦境",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/KQCEC54ZsQKE52gtalJ7gQ==/109951164285316532.jpg",
          "canDislike": true,
          "playCount": 573055,
          "trackCount": 52,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2954657473,
          "type": 0,
          "name": "下辈子做一只咖啡馆的猫，听着音乐扭着懒腰",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/zLsNJ5iI_7qj-kEIQTRUhg==/109951164343658739.jpg",
          "canDislike": true,
          "playCount": 584474,
          "trackCount": 30,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 924680166,
          "type": 0,
          "name": "[华语速爆新歌] 最新华语音乐推荐",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/C5n3AzVnqXOY7wMYdAbJbA==/109951164339912126.jpg",
          "canDislike": true,
          "playCount": 581616510,
          "trackCount": 20,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2682188232,
          "type": 0,
          "name": "失恋歌单: 再听已是曲中人",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/ca2LJ4wRiQ9lrFmezpKqfQ==/109951164342941056.jpg",
          "canDislike": true,
          "playCount": 2904329,
          "trackCount": 87,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2429488976,
          "type": 0,
          "name": "『好听的翻唱Cover集』",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/wc_4zG3XMFlku4AdeUHg1g==/109951163561148208.jpg",
          "canDislike": true,
          "playCount": 104025048,
          "trackCount": 92,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2019129958,
          "type": 0,
          "name": "【精选】欧美踩点混剪bgm燃向/剧情向",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/Vul1lVY04aTjJU984riRXw==/19056735533185390.jpg",
          "canDislike": true,
          "playCount": 50928520,
          "trackCount": 111,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 308213605,
          "type": 0,
          "name": "适合视频剪辑BGM的音乐",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/iQdBR7LiiMXmAKSSWse-KA==/109951162956237599.jpg",
          "canDislike": true,
          "playCount": 73863864,
          "trackCount": 395,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2651036663,
          "type": 0,
          "name": "那些好听到爆了的歌",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/rxniujJFoCOD1AAQVF_eAQ==/109951163902784557.jpg",
          "canDislike": true,
          "playCount": 65979972,
          "trackCount": 50,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2557918409,
          "type": 0,
          "name": "KTV必点：有没有一首歌，唱着唱着就泪奔",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/7Mt5mJHc8TZUyvCptbD3EA==/109951163727311249.jpg",
          "canDislike": true,
          "playCount": 23553314,
          "trackCount": 92,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2928999576,
          "type": 0,
          "name": "逆向生长，愿你成为自己的星星与月亮",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/s_ujhi28Kkte10Zq2JhLXw==/109951164287935283.jpg",
          "canDislike": true,
          "playCount": 2791707,
          "trackCount": 54,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 46437175,
          "type": 0,
          "name": "永远听不腻的英文歌",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/ZaPDp86Fdc_hjuU588avkA==/2885118511986598.jpg",
          "canDislike": true,
          "playCount": 30904138,
          "trackCount": 118,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 15163713,
          "type": 0,
          "name": "百年奥斯卡金曲珍藏版&英文老歌",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/3c3DrPeh_Y9yyTXuLh5_Ww==/6030821278852503.jpg",
          "canDislike": true,
          "playCount": 9928168,
          "trackCount": 58,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 2271103368,
          "type": 0,
          "name": "每人一首金典粤语老歌",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/cPvHx6I7N_lhNry0_5s_fg==/24189255823154.jpg",
          "canDislike": true,
          "playCount": 6220211,
          "trackCount": 403,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 117586346,
          "type": 0,
          "name": "全球最高下载量单曲Top 100",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/FeDHljP5ISgXA13SM0cz3Q==/3302932932877941.jpg",
          "canDislike": true,
          "playCount": 60087448,
          "trackCount": 97,
          "highQuality": false,
          "alg": "cityLevel_A"
        },
        {
          "id": 560609382,
          "type": 0,
          "name": "『加州公路』皮卡夕阳与微风，生活不止苟且",
          "copywriter": "热门推荐",
          "picUrl": "https://p2.music.126.net/kzrUM6_p8N0wDXGW71GX3g==/18965476068109008.jpg",
          "canDislike": true,
          "playCount": 11811564,
          "trackCount": 59,
          "highQuality": true,
          "alg": "cityLevel_A"
        }
      ]`)
      })
      recommendPlaylist.save(err=>{
        if(err) {
          console.log('rplaylist error')
        }
      })
    }
  })
  rPlaylist.find().then(playlist => {
    res.send(playlist)
  }).catch(next)
})

module.exports = router