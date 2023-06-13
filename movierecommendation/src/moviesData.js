const movies = [
    {
      id: 1,
      title: 'War',
      year:"2019",
      category: 'Action',
      image:"https://cdn.bollywoodmdb.com/movies/largethumb/2019/siddharth-anand-s-next/siddharth-anand-s-next-poster-3.jpg",
      link:"https://www.imdb.com/title/tt7430722/"
    },
    {
      id: 2,
      title: 'Singham',
      year:"2011",
      category: 'Action',
      image: 'https://th.bing.com/th/id/OIP.5OVExHD8sZ1UskCy5F3DqwHaKu?pid=ImgDet&rs=1',
      link:"https://www.imdb.com/title/tt1948150/"
    },
    {
        id: 3,
        title: 'RRR',
        year:"2022",
        category: 'Action',
        image: 'https://cdn.bollywoodmdb.com/movies/largethumb/2020/rrr/rrr-poster-3.jpg',
        link : "https://www.imdb.com/title/tt8178634/"
      },
      {
        id: 4,
        title: 'Major',
        year:"2022",
        category: 'Action',
        image: 'https://moviescq.b-cdn.net/wp-content/uploads/2021/02/Major-Full-Movie-Download-759x1024.jpg',
        link:"https://www.imdb.com/title/tt9851854/?ref_=fn_al_tt_4"
      },
      {
        id: 5,
        title: 'Sholay',
        category: 'Action',
        year:"1975",
        image: 'https://static.toiimg.com/photo/77566146.cms',
        link:"https://www.imdb.com/title/tt0073707/"
      },
      {
        id: 6,
        title: 'Shor in the city',
        category: 'Drama',
        year:'2010',
        image: 'https://i2.wp.com/www.moviescut.com/wp-content/uploads/2011/04/Shor-In-The-City.jpg',
        link:'https://www.imdb.com/title/tt1916728/'

      },
      {
        id: 7,
        title: 'Shanghai',
        category: 'Drama',
        year:'2012',
        image: 'https://th.bing.com/th/id/R.f095dc625c5f7b65b517f063d2cec45f?rik=UX9uHB5yAoO74Q&riu=http%3a%2f%2fwww.musicaloud.com%2fwp-content%2fuploads%2f2012%2f06%2fshanghai-movie-posters001.jpg&ehk=%2bpS97h9yaEnCb7HDjdWSv90u3rRlx1Ua5X%2bTz8YkSXw%3d&risl=&pid=ImgRaw&r=0',
        link:'https://www.imdb.com/title/tt1092634/'
      },
      {
        id: 8,
        title: 'Bahubali',
        category: 'Drama',
        year:'2015',
        image: 'https://3.bp.blogspot.com/-6HqHX4tcumk/VZ3xhdEEBHI/AAAAAAAAjU0/6xnDtKR85js/s1600/Bahubali%2BHD%2BWallpaperes%2B8.jpg',
        link:'https://www.imdb.com/title/tt2631186/'
      },
      {
        id: 9,
        title: 'Ponniyin selvan',
        category: 'Drama',
        year:'2022',
        image: 'https://img.theweek.in/content/dam/week/news/entertainment/images/2022/9/29/PS1movie_jpg.jpg',
        link:'https://www.imdb.com/title/tt22444570/'
      },
      {
        id: 10,
        title: 'Padmaavat',
        category: 'Drama',
        year:'2018',
        image: 'https://th.bing.com/th/id/OIP.ne1QBu_zg2djrPIM0hz2dwHaLg?pid=ImgDet&rs=1',
        link:"https://www.imdb.com/title/tt5935704/"
      },
      {
        id: 11,
        title: 'Hit',
        category: 'Crime',
        year:'2020',
        image: 'https://www.sakshi.com/sites/default/files/article_images/2020/02/28/hit.jpg',
        link:"https://www.imdb.com/title/tt11490170/"
      },
      {
        id: 12,
        title: 'Drushyam',
        category: 'Crime',
        year:'2014',
        image: 'https://moviegalleri.net/wp-content/gallery/drishyam-telugu-movie-release-wallpapers/drishyam_telugu_movie_release_date_wallpapers_90033eb.jpg',
        link:"https://www.imdb.com/title/tt4430212/"
      },
      {
        id: 13,
        title: 'Vikram veda',
        category: 'Crime',
        year:'2022',
        image: 'https://i2.cinestaan.com/image-bank/1500-1500/86001-87000/86109.jpg',
        link:"https://www.imdb.com/title/tt13131350/"
      },
      {
        id: 14,
        title: 'Forensic',
        category: 'Crime',
        year:'2020',
        image: 'https://assets.gadgets360cdn.com/pricee/assets/product/202205/Forensic-2022-movie-poster_1653500386.jpg',
        link:"https://www.imdb.com/title/tt15121860/"
      },
      {
        id: 15,
        title: 'Rakshasudu',
        category: 'Crime',
        year:'2019',
        image: 'https://th.bing.com/th/id/OIP.auNc3sttRf_SOydpFx5NewHaE3?pid=ImgDet&rs=1',
        link:"https://www.imdb.com/title/tt10133300/"
      },
      {
        id: 16,
        title: 'Pari',
        category: 'Horror',
        year:'2018',
        image: 'https://th.bing.com/th/id/OIP.cZdGFsVR5WfyVinIlZ6MFAHaFL?pid=ImgDet&rs=1',
        link:"https://www.imdb.com/title/tt7329858/"
      },
      {
        id: 17,
        title: 'Bhoot',
        category: 'Horror',
        year:'2018',
        image: 'https://th.bing.com/th/id/OIP.wBPGq09qj_Eznc6tU77EpAHaFj?pid=ImgDet&rs=1',
        link:"https://www.imdb.com/title/tt10463030/"
      },
      {
        id: 18,
        title: 'Tumbbad',
        category: 'Horror',
        year:'2018',
        image: 'https://th.bing.com/th/id/OIP.lVqfHU-JkwUBQy7-_DLFRAHaLH?pid=ImgDet&rs=1',
        link:"https://www.imdb.com/title/tt8239946/"
      },
      {
        id:19,
        title:'Masooda',
        category: 'Horror',
        year:'2023',
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDCd8LmPdPeO3udxYfETIK51m7bCJOfywq5HrL1lGU0aFzq4Dn8FhuJe9TNFAOUqQDgn2-Vc3gle9SbPFmYjhajH236T2ioPKLL1OuLc8-IhgJhP_d5Wn3rNLaJv4TfVNho9OJdIeeDAR5k5VdbB7ChceojEW7Jm1d2Vk5gNdTaA2STont_I-FzX8irg/s600/Masooda-Telugu-Movie-Box-Office-Hit-or-Flop.jpg",
        link:"https://www.imdb.com/title/tt23726308/"
      },
      {
        id:20,
        title:'Arundathi',
        year:'2009',
        category: 'Horror',
        image:"https://th.bing.com/th/id/OIP.HRzhobLY2KAfapQBZDCYgAHaLE?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt1361809/"
      },
      {
        id:21,
        title:'Three Idiots',
        year:'2009',
        category: 'Comedy',
        image:"https://th.bing.com/th/id/OIP.lYV8OrLMUDNxthXdhHxzawHaJs?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt1187043/"
      },
      {
        id:22,
        title:'Welcome',
        year:'2007',
        category: 'Comedy',
        image:"https://th.bing.com/th/id/OIP.peyFrALpEBPdW1ULLbYwSwHaJ4?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt0488798/"
      },
      {
        id:23,
        title:'Jathi ratnalu',
        year:'2021',
        category: 'Comedy',
        image:"https://th.bing.com/th/id/OIP.4vYLYsvjL3KxspwRcyI88gHaI-?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt11306376/"
      },
      {
        id:24,
        title:'F2',
        year:'2019',
        category: 'Comedy',
        image:"https://m.media-amazon.com/images/M/MV5BY2FiNmYyZDktZDJmNC00YmQwLWI4YTEtZTU3NDZhMGNhYzc4XkEyXkFqcGdeQXVyOTA3MTM0MTM@._V1_UY1200_CR69,0,630,1200_AL_.jpg",
        link:"https://www.imdb.com/title/tt8188610/"
      },
      {
        id:25,
        title:'Cirkus',
        year:'2019',
        category: 'Comedy',
        image:"https://th.bing.com/th/id/OIP.OgTziqmnqRaG2gVRwUoE5QHaJQ?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt11112808/"
      },
      {
        id:26,
        title:'Gumraah',
        year:'2023',
        category: 'Mystery',
        image:"https://myfilmyzilla.com/wp-content/uploads/2023/04/Gumraah-Poster.png",
        link:"https://www.imdb.com/title/tt11905536/"
      },
      {
        id:27,
        title:'Andhadhun',
        year:'2018',
        category: 'Mystery',
        image:"https://th.bing.com/th/id/OIP.d8vfZR9knWHZ2muPZ0D4GgHaHa?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt8108198/"
      },
      {
        id:28,
        title:'CBI 5',
        year:'2022',
        category: 'Mystery',
        image:"https://th.bing.com/th/id/OIP.wLCU3fmuCj6XBh91F8MXJwHaK9?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt7311164/"
      },
      {
        id:29,
        title:'Virupaksha',
        year:'2023',
        category: 'Mystery',
        image:"https://th.bing.com/th/id/OIP.90ogiolNCtNrVZ2rUjWU2gHaJe?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt24059780/"
      },
      {
        id:30,
        title:'Gaslight',
        year:'2023',
        category: 'Mystery',
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Gaslight_film_poster.jpg/220px-Gaslight_film_poster.jpg",
        link:"https://www.imdb.com/title/tt27012110/"
      },
      {
        id:31,
        title:'Eega',
        year:'2012',
        category: 'Fantasy',
        image:"https://flxt.tmsimg.com/assets/p9271707_p_v10_aa.jpg",
        link:"https://www.imdb.com/title/tt2258337/"
      },
      {
        id:32,
        title:'Krrish',
        year:'2006',
        category: 'Fantasy',
        image:"https://wallpapercave.com/wp/wp8239498.jpg",
        link:"https://www.imdb.com/title/tt0432637/"
      },
      {
        id:33,
        title:'Bramhastra',
        year:'2022',
        category: 'Fantasy',
        image:"https://th.bing.com/th/id/OIP.vXpOloazMjQ0qsflc1L27QHaEK?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt6277462/"
      },
      {
        id:34,
        title:'Oh! Baby',
        year:'2019',
        category: 'Fantasy',
        image:"https://th.bing.com/th/id/OIP.WaTJuUYKbSWe-lYGoz5SlAHaKg?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt9348296/"
      },
      {
        id:35,
        title:'Kantara',
        year:'2022',
        category: 'Fantasy',
        image:"https://cdn.zeebiz.com/sites/default/files/2022/11/16/210883-why-has-a-mid-budget-kannada-film-kantara-worked-at-an-all-india-level.jpg",
        link:"https://www.imdb.com/title/tt15327088/"
      },
      {
        id:36,
        title:'Tik Tik Tik',
        year:'2018',
        category: 'Fiction',
        image:"https://tamilmoviesclub.b-cdn.net/wp-content/uploads/2019/10/Tik-Tik-Tik-Full-Movie-Download.jpg",
        link:"https://www.imdb.com/title/tt7280786/"
      },
      {
        id:37,
        title:'Robo',
        year:'2010',
        category: 'Fiction',
        image:"https://m.media-amazon.com/images/I/918ZiDyRkjL._SL1500_.jpg",
        link:"https://www.imdb.com/title/tt1305797/"
      },
      {
        id:38,
        title:'7th Sense',
        year:'2011',
        category: 'Fiction',
        image:"https://th.bing.com/th/id/OIP.ddnbhkX76nLZwmjDze4cFgHaJ3?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt1725795/"
      },
      {
        id:39,
        title:'Mission Mangal',
        year:'2019',
        category: 'Fiction',
        image:"https://th.bing.com/th/id/OIP.pYkDCAycchDA6WmmcCNnsAHaFK?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt9248972/"
      },
      {
        id:40,
        title:'Mr. India',
        year:'1987',
        category: 'Fiction',
        image:"https://th.bing.com/th/id/OIP.pYkDCAycchDA6WmmcCNnsAHaFK?pid=ImgDet&rs=1",
        link:"https://www.imdb.com/title/tt0093578/"
      },
  ];
  
  export default movies;
  