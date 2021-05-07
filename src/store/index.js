import { createStore } from "vuex";

export default createStore({
  state: {
    games: [
      {
        id: 3498,
        slug: "grand-theft-auto-v",
        name: "Grand Theft Auto V",
        released: "2013-09-17",
        tba: false,
        background_image:
          "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
        rating: 4.48,
        rating_top: 5,
        ratings: [
          {
            id: 5,
            title: "exceptional",
            count: 2810,
            percent: 59.15,
          },
          {
            id: 4,
            title: "recommended",
            count: 1563,
            percent: 32.9,
          },
          {
            id: 3,
            title: "meh",
            count: 301,
            percent: 6.34,
          },
          {
            id: 1,
            title: "skip",
            count: 77,
            percent: 1.62,
          },
        ],
        ratings_count: 4702,
        reviews_text_count: 27,
        added: 14746,
        added_by_status: {
          yet: 375,
          owned: 8805,
          beaten: 3906,
          toplay: 406,
          dropped: 723,
          playing: 531,
        },
        metacritic: 97,
        playtime: 70,
        suggestions_count: 416,
        updated: "2021-03-03T20:31:29",
        user_game: null,
        reviews_count: 4751,
        saturated_color: "0f0f0f",
        dominant_color: "0f0f0f",
        platforms: [
          {
            platform: {
              id: 187,
              name: "PlayStation 5",
              slug: "playstation5",
              image: null,
              year_end: null,
              year_start: 2020,
              games_count: 202,
              image_background:
                "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 18,
              name: "PlayStation 4",
              slug: "playstation4",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 5836,
              image_background:
                "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 16,
              name: "PlayStation 3",
              slug: "playstation3",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 3621,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 14,
              name: "Xbox 360",
              slug: "xbox360",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 2709,
              image_background:
                "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 4,
              name: "PC",
              slug: "pc",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 323344,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: {
              minimum:
                "Minimum:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1, Windows Vista 64 Bit Service Pack 2* (*NVIDIA video card recommended if running Vista OS)Processor: Intel Core 2 Quad CPU Q6600 @ 2.40GHz (4 CPUs) / AMD Phenom 9850 Quad-Core Processor (4 CPUs) @ 2.5GHzMemory: 4 GB RAMGraphics: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB (DX 10, 10.1, 11)Storage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes: Over time downloadable content and programming changes will change the system requirements for this game.  Please refer to your hardware manufacturer and www.rockstargames.com/support for current compatibility information. Some system components such as mobile chipsets, integrated, and AGP graphics cards may be incompatible. Unlisted specifications may not be supported by publisher.     Other requirements:  Installation and online play requires log-in to Rockstar Games Social Club (13+) network; internet connection required for activation, online play, and periodic entitlement verification; software installations required including Rockstar Games Social Club platform, DirectX , Chromium, and Microsoft Visual C++ 2008 sp1 Redistributable Package, and authentication software that recognizes certain hardware attributes for entitlement, digital rights management, system, and other support purposes.     SINGLE USE SERIAL CODE REGISTRATION VIA INTERNET REQUIRED; REGISTRATION IS LIMITED TO ONE ROCKSTAR GAMES SOCIAL CLUB ACCOUNT (13+) PER SERIAL CODE; ONLY ONE PC LOG-IN ALLOWED PER SOCIAL CLUB ACCOUNT AT ANY TIME; SERIAL CODE(S) ARE NON-TRANSFERABLE ONCE USED; SOCIAL CLUB ACCOUNTS ARE NON-TRANSFERABLE.  Partner Requirements:  Please check the terms of service of this site before purchasing this software.",
              recommended:
                "Recommended:OS: Windows 10 64 Bit, Windows 8.1 64 Bit, Windows 8 64 Bit, Windows 7 64 Bit Service Pack 1Processor: Intel Core i5 3470 @ 3.2GHz (4 CPUs) / AMD X8 FX-8350 @ 4GHz (8 CPUs)Memory: 8 GB RAMGraphics: NVIDIA GTX 660 2GB / AMD HD 7870 2GBStorage: 72 GB available spaceSound Card: 100% DirectX 10 compatibleAdditional Notes:",
            },
            requirements_ru: null,
          },
          {
            platform: {
              id: 1,
              name: "Xbox One",
              slug: "xbox-one",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 4484,
              image_background:
                "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 186,
              name: "Xbox Series S/X",
              slug: "xbox-series-x",
              image: null,
              year_end: null,
              year_start: 2020,
              games_count: 171,
              image_background:
                "https://media.rawg.io/media/games/6b1/6b14dc4cc1785e396580c69165e55d2d.jpg",
            },
            released_at: "2013-09-17",
            requirements_en: null,
            requirements_ru: null,
          },
        ],
        parent_platforms: [
          {
            platform: {
              id: 1,
              name: "PC",
              slug: "pc",
            },
          },
          {
            platform: {
              id: 2,
              name: "PlayStation",
              slug: "playstation",
            },
          },
          {
            platform: {
              id: 3,
              name: "Xbox",
              slug: "xbox",
            },
          },
        ],
        genres: [
          {
            id: 4,
            name: "Action",
            slug: "action",
            games_count: 115708,
            image_background:
              "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
          },
          {
            id: 3,
            name: "Adventure",
            slug: "adventure",
            games_count: 84496,
            image_background:
              "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
          },
        ],
        stores: [
          {
            id: 290375,
            store: {
              id: 3,
              name: "PlayStation Store",
              slug: "playstation-store",
              domain: "store.playstation.com",
              games_count: 7518,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
          },
          {
            id: 438095,
            store: {
              id: 11,
              name: "Epic Games",
              slug: "epic-games",
              domain: "epicgames.com",
              games_count: 517,
              image_background:
                "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
            },
          },
          {
            id: 290376,
            store: {
              id: 1,
              name: "Steam",
              slug: "steam",
              domain: "store.steampowered.com",
              games_count: 50808,
              image_background:
                "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            },
          },
          {
            id: 290377,
            store: {
              id: 7,
              name: "Xbox 360 Store",
              slug: "xbox360",
              domain: "marketplace.xbox.com",
              games_count: 1908,
              image_background:
                "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
            },
          },
          {
            id: 290378,
            store: {
              id: 2,
              name: "Xbox Store",
              slug: "xbox-store",
              domain: "microsoft.com",
              games_count: 4073,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
          },
        ],
        clip: null,
        tags: [
          {
            id: 31,
            name: "Singleplayer",
            slug: "singleplayer",
            language: "eng",
            games_count: 112015,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
          {
            id: 40847,
            name: "Steam Achievements",
            slug: "steam-achievements",
            language: "eng",
            games_count: 21516,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          {
            id: 7,
            name: "Multiplayer",
            slug: "multiplayer",
            language: "eng",
            games_count: 25011,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 13,
            name: "Atmospheric",
            slug: "atmospheric",
            language: "eng",
            games_count: 13024,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          {
            id: 40836,
            name: "Full controller support",
            slug: "full-controller-support",
            language: "eng",
            games_count: 10020,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          {
            id: 42,
            name: "Great Soundtrack",
            slug: "great-soundtrack",
            language: "eng",
            games_count: 3128,
            image_background:
              "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
          },
          {
            id: 24,
            name: "RPG",
            slug: "rpg",
            language: "eng",
            games_count: 11647,
            image_background:
              "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
          },
          {
            id: 18,
            name: "Co-op",
            slug: "co-op",
            language: "eng",
            games_count: 6580,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 36,
            name: "Open World",
            slug: "open-world",
            language: "eng",
            games_count: 3660,
            image_background:
              "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
          },
          {
            id: 411,
            name: "cooperative",
            slug: "cooperative",
            language: "eng",
            games_count: 2750,
            image_background:
              "https://media.rawg.io/media/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg",
          },
          {
            id: 8,
            name: "First-Person",
            slug: "first-person",
            language: "eng",
            games_count: 12415,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 149,
            name: "Third Person",
            slug: "third-person",
            language: "eng",
            games_count: 4154,
            image_background:
              "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
          },
          {
            id: 4,
            name: "Funny",
            slug: "funny",
            language: "eng",
            games_count: 12937,
            image_background:
              "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
          },
          {
            id: 37,
            name: "Sandbox",
            slug: "sandbox",
            language: "eng",
            games_count: 3399,
            image_background:
              "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
          },
          {
            id: 123,
            name: "Comedy",
            slug: "comedy",
            language: "eng",
            games_count: 6278,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
          {
            id: 150,
            name: "Third-Person Shooter",
            slug: "third-person-shooter",
            language: "eng",
            games_count: 1460,
            image_background:
              "https://media.rawg.io/media/games/a3c/a3c529a12c896c0ef02db5b4741de2ba.jpg",
          },
          {
            id: 62,
            name: "Moddable",
            slug: "moddable",
            language: "eng",
            games_count: 538,
            image_background:
              "https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg",
          },
          {
            id: 144,
            name: "Crime",
            slug: "crime",
            language: "eng",
            games_count: 1774,
            image_background:
              "https://media.rawg.io/media/games/546/546cf59a24b0ae308e311a07611ca22f.jpg",
          },
          {
            id: 62349,
            name: "vr mod",
            slug: "vr-mod",
            language: "eng",
            games_count: 19,
            image_background:
              "https://media.rawg.io/media/games/bda/bdab2603c0dc67268d0610449bc7df16.jpg",
          },
        ],
        esrb_rating: {
          id: 4,
          name: "Mature",
          slug: "mature",
        },
        short_screenshots: [
          {
            id: -1,
            image:
              "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
          },
          {
            id: 1827221,
            image:
              "https://media.rawg.io/media/screenshots/a7c/a7c43871a54bed6573a6a429451564ef.jpg",
          },
          {
            id: 1827222,
            image:
              "https://media.rawg.io/media/screenshots/cf4/cf4367daf6a1e33684bf19adb02d16d6.jpg",
          },
          {
            id: 1827223,
            image:
              "https://media.rawg.io/media/screenshots/f95/f9518b1d99210c0cae21fc09e95b4e31.jpg",
          },
          {
            id: 1827225,
            image:
              "https://media.rawg.io/media/screenshots/a5c/a5c95ea539c87d5f538763e16e18fb99.jpg",
          },
          {
            id: 1827226,
            image:
              "https://media.rawg.io/media/screenshots/a7e/a7e990bc574f4d34e03b5926361d1ee7.jpg",
          },
          {
            id: 1827227,
            image:
              "https://media.rawg.io/media/screenshots/592/592e2501d8734b802b2a34fee2df59fa.jpg",
          },
        ],
      },
      {
        id: 4200,
        slug: "portal-2",
        name: "Portal 2",
        released: "2011-04-18",
        tba: false,
        background_image:
          "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
        rating: 4.62,
        rating_top: 5,
        ratings: [
          {
            id: 5,
            title: "exceptional",
            count: 2768,
            percent: 70.25,
          },
          {
            id: 4,
            title: "recommended",
            count: 994,
            percent: 25.23,
          },
          {
            id: 3,
            title: "meh",
            count: 106,
            percent: 2.69,
          },
          {
            id: 1,
            title: "skip",
            count: 72,
            percent: 1.83,
          },
        ],
        ratings_count: 3906,
        reviews_text_count: 22,
        added: 12866,
        added_by_status: {
          yet: 416,
          owned: 8011,
          beaten: 3739,
          toplay: 232,
          dropped: 361,
          playing: 107,
        },
        metacritic: 95,
        playtime: 11,
        suggestions_count: 580,
        updated: "2020-08-03T02:17:38",
        user_game: null,
        reviews_count: 3940,
        saturated_color: "0f0f0f",
        dominant_color: "0f0f0f",
        platforms: [
          {
            platform: {
              id: 14,
              name: "Xbox 360",
              slug: "xbox360",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 2709,
              image_background:
                "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
            },
            released_at: "2011-04-19",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 5,
              name: "macOS",
              slug: "macos",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 70768,
              image_background:
                "https://media.rawg.io/media/games/4ba/4ba9b4b68ffcc7019b112174883ba4d6.jpg",
            },
            released_at: "2011-04-19",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 6,
              name: "Linux",
              slug: "linux",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 49681,
              image_background:
                "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
            },
            released_at: "2011-04-19",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 4,
              name: "PC",
              slug: "pc",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 323344,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
            released_at: "2011-04-19",
            requirements_en: null,
            requirements_ru: {
              minimum:
                "Core 2 Duo/Athlon X2 2 ГГц,1 Гб памяти,GeForce 7600/Radeon X800,10 Гб на винчестере,интернет-соединение",
              recommended:
                "Core 2 Duo/Athlon X2 2.5 ГГц,2 Гб памяти,GeForce GTX 280/Radeon HD 2600,10 Гб на винчестере,интернет-соединение",
            },
          },
          {
            platform: {
              id: 16,
              name: "PlayStation 3",
              slug: "playstation3",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 3621,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
            released_at: "2011-04-19",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 1,
              name: "Xbox One",
              slug: "xbox-one",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 4484,
              image_background:
                "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
            },
            released_at: "2011-04-18",
            requirements_en: null,
            requirements_ru: null,
          },
        ],
        parent_platforms: [
          {
            platform: {
              id: 1,
              name: "PC",
              slug: "pc",
            },
          },
          {
            platform: {
              id: 2,
              name: "PlayStation",
              slug: "playstation",
            },
          },
          {
            platform: {
              id: 3,
              name: "Xbox",
              slug: "xbox",
            },
          },
          {
            platform: {
              id: 5,
              name: "Apple Macintosh",
              slug: "mac",
            },
          },
          {
            platform: {
              id: 6,
              name: "Linux",
              slug: "linux",
            },
          },
        ],
        genres: [
          {
            id: 2,
            name: "Shooter",
            slug: "shooter",
            games_count: 37596,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
          {
            id: 7,
            name: "Puzzle",
            slug: "puzzle",
            games_count: 64051,
            image_background:
              "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg",
          },
        ],
        stores: [
          {
            id: 465889,
            store: {
              id: 2,
              name: "Xbox Store",
              slug: "xbox-store",
              domain: "microsoft.com",
              games_count: 4073,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
          },
          {
            id: 13134,
            store: {
              id: 1,
              name: "Steam",
              slug: "steam",
              domain: "store.steampowered.com",
              games_count: 50808,
              image_background:
                "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            },
          },
          {
            id: 4526,
            store: {
              id: 3,
              name: "PlayStation Store",
              slug: "playstation-store",
              domain: "store.playstation.com",
              games_count: 7518,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
          },
          {
            id: 33916,
            store: {
              id: 7,
              name: "Xbox 360 Store",
              slug: "xbox360",
              domain: "marketplace.xbox.com",
              games_count: 1908,
              image_background:
                "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
            },
          },
        ],
        clip: null,
        tags: [
          {
            id: 31,
            name: "Singleplayer",
            slug: "singleplayer",
            language: "eng",
            games_count: 112015,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
          {
            id: 40847,
            name: "Steam Achievements",
            slug: "steam-achievements",
            language: "eng",
            games_count: 21516,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          {
            id: 7,
            name: "Multiplayer",
            slug: "multiplayer",
            language: "eng",
            games_count: 25011,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 7808,
            name: "steam-trading-cards",
            slug: "steam-trading-cards",
            language: "eng",
            games_count: 7584,
            image_background:
              "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
          },
          {
            id: 13,
            name: "Atmospheric",
            slug: "atmospheric",
            language: "eng",
            games_count: 13024,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          {
            id: 40849,
            name: "Steam Cloud",
            slug: "steam-cloud",
            language: "eng",
            games_count: 9896,
            image_background:
              "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg",
          },
          {
            id: 40836,
            name: "Full controller support",
            slug: "full-controller-support",
            language: "eng",
            games_count: 10020,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          {
            id: 18,
            name: "Co-op",
            slug: "co-op",
            language: "eng",
            games_count: 6580,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 118,
            name: "Story Rich",
            slug: "story-rich",
            language: "eng",
            games_count: 9732,
            image_background:
              "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
          },
          {
            id: 411,
            name: "cooperative",
            slug: "cooperative",
            language: "eng",
            games_count: 2750,
            image_background:
              "https://media.rawg.io/media/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg",
          },
          {
            id: 8,
            name: "First-Person",
            slug: "first-person",
            language: "eng",
            games_count: 12415,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 32,
            name: "Sci-fi",
            slug: "sci-fi",
            language: "eng",
            games_count: 10011,
            image_background:
              "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
          },
          {
            id: 30,
            name: "FPS",
            slug: "fps",
            language: "eng",
            games_count: 7446,
            image_background:
              "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
          },
          {
            id: 4,
            name: "Funny",
            slug: "funny",
            language: "eng",
            games_count: 12937,
            image_background:
              "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
          },
          {
            id: 9,
            name: "Online Co-Op",
            slug: "online-co-op",
            language: "eng",
            games_count: 2641,
            image_background:
              "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
          },
          {
            id: 189,
            name: "Female Protagonist",
            slug: "female-protagonist",
            language: "eng",
            games_count: 5468,
            image_background:
              "https://media.rawg.io/media/games/d1f/d1f872a48286b6b751670817d5c1e1be.jpg",
          },
          {
            id: 123,
            name: "Comedy",
            slug: "comedy",
            language: "eng",
            games_count: 6278,
            image_background:
              "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg",
          },
          {
            id: 75,
            name: "Local Co-Op",
            slug: "local-co-op",
            language: "eng",
            games_count: 3783,
            image_background:
              "https://media.rawg.io/media/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg",
          },
          {
            id: 11669,
            name: "stats",
            slug: "stats",
            language: "eng",
            games_count: 3620,
            image_background:
              "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg",
          },
          {
            id: 40852,
            name: "Steam Workshop",
            slug: "steam-workshop",
            language: "eng",
            games_count: 1084,
            image_background:
              "https://media.rawg.io/media/games/88c/88c5b4d7c80276c03ff62aebb1a99ad4.jpg",
          },
          {
            id: 40838,
            name: "Includes level editor",
            slug: "includes-level-editor",
            language: "eng",
            games_count: 1346,
            image_background:
              "https://media.rawg.io/media/screenshots/4f4/4f4722571e32954af43a4508607c1748.jpg",
          },
          {
            id: 25,
            name: "Space",
            slug: "space",
            language: "eng",
            games_count: 26769,
            image_background:
              "https://media.rawg.io/media/games/9d5/9d5aa70db8c16566d79712df6417d13a.jpg",
          },
          {
            id: 40833,
            name: "Captions available",
            slug: "captions-available",
            language: "eng",
            games_count: 1040,
            image_background:
              "https://media.rawg.io/media/games/fee/fee0100afd87b52bfbd33e26689fa26c.jpg",
          },
          {
            id: 40834,
            name: "Commentary available",
            slug: "commentary-available",
            language: "eng",
            games_count: 220,
            image_background:
              "https://media.rawg.io/media/games/9e5/9e5b91a6d02e66b8d450a977a59ae123.jpg",
          },
          {
            id: 87,
            name: "Science",
            slug: "science",
            language: "eng",
            games_count: 1014,
            image_background:
              "https://media.rawg.io/media/screenshots/18c/18c0bf89ecef8170cdd97075dbbadded.jpg",
          },
        ],
        esrb_rating: {
          id: 2,
          name: "Everyone 10+",
          slug: "everyone-10-plus",
        },
        short_screenshots: [
          {
            id: -1,
            image:
              "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
          },
          {
            id: 99018,
            image:
              "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg",
          },
          {
            id: 99019,
            image:
              "https://media.rawg.io/media/screenshots/173/1737ff43c14f40294011a209b1012875.jpg",
          },
          {
            id: 99020,
            image:
              "https://media.rawg.io/media/screenshots/b11/b11a2ae0664f0e8a1ef2346f99df26e1.jpg",
          },
          {
            id: 99021,
            image:
              "https://media.rawg.io/media/screenshots/9b1/9b107a790909b31918ebe2f40547cc85.jpg",
          },
          {
            id: 99022,
            image:
              "https://media.rawg.io/media/screenshots/d05/d058fc7f7fa6128916c311eb14267fed.jpg",
          },
          {
            id: 99023,
            image:
              "https://media.rawg.io/media/screenshots/415/41543dcc12dffc8e97d85a56ad42cda8.jpg",
          },
        ],
      },
      {
        id: 3328,
        slug: "the-witcher-3-wild-hunt",
        name: "The Witcher 3: Wild Hunt",
        released: "2015-05-18",
        tba: false,
        background_image:
          "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        rating: 4.67,
        rating_top: 5,
        ratings: [
          {
            id: 5,
            title: "exceptional",
            count: 3397,
            percent: 77.89,
          },
          {
            id: 4,
            title: "recommended",
            count: 686,
            percent: 15.73,
          },
          {
            id: 3,
            title: "meh",
            count: 180,
            percent: 4.13,
          },
          {
            id: 1,
            title: "skip",
            count: 98,
            percent: 2.25,
          },
        ],
        ratings_count: 4297,
        reviews_text_count: 46,
        added: 12803,
        added_by_status: {
          yet: 704,
          owned: 7273,
          beaten: 3048,
          toplay: 550,
          dropped: 551,
          playing: 677,
        },
        metacritic: 92,
        playtime: 50,
        suggestions_count: 673,
        updated: "2020-10-02T00:57:03",
        user_game: null,
        reviews_count: 4361,
        saturated_color: "0f0f0f",
        dominant_color: "0f0f0f",
        platforms: [
          {
            platform: {
              id: 7,
              name: "Nintendo Switch",
              slug: "nintendo-switch",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 4349,
              image_background:
                "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 1,
              name: "Xbox One",
              slug: "xbox-one",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 4484,
              image_background:
                "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 4,
              name: "PC",
              slug: "pc",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 323344,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
          {
            platform: {
              id: 18,
              name: "PlayStation 4",
              slug: "playstation4",
              image: null,
              year_end: null,
              year_start: null,
              games_count: 5836,
              image_background:
                "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
            },
            released_at: "2015-05-18",
            requirements_en: null,
            requirements_ru: null,
          },
        ],
        parent_platforms: [
          {
            platform: {
              id: 1,
              name: "PC",
              slug: "pc",
            },
          },
          {
            platform: {
              id: 2,
              name: "PlayStation",
              slug: "playstation",
            },
          },
          {
            platform: {
              id: 3,
              name: "Xbox",
              slug: "xbox",
            },
          },
          {
            platform: {
              id: 7,
              name: "Nintendo",
              slug: "nintendo",
            },
          },
        ],
        genres: [
          {
            id: 4,
            name: "Action",
            slug: "action",
            games_count: 115708,
            image_background:
              "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
          },
          {
            id: 3,
            name: "Adventure",
            slug: "adventure",
            games_count: 84496,
            image_background:
              "https://media.rawg.io/media/games/364/3642d850efb217c58feab80b8affaa89.jpg",
          },
          {
            id: 5,
            name: "RPG",
            slug: "role-playing-games-rpg",
            games_count: 35862,
            image_background:
              "https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg",
          },
        ],
        stores: [
          {
            id: 354780,
            store: {
              id: 5,
              name: "GOG",
              slug: "gog",
              domain: "gog.com",
              games_count: 3278,
              image_background:
                "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg",
            },
          },
          {
            id: 3565,
            store: {
              id: 3,
              name: "PlayStation Store",
              slug: "playstation-store",
              domain: "store.playstation.com",
              games_count: 7518,
              image_background:
                "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
            },
          },
          {
            id: 305376,
            store: {
              id: 1,
              name: "Steam",
              slug: "steam",
              domain: "store.steampowered.com",
              games_count: 50808,
              image_background:
                "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
            },
          },
          {
            id: 312313,
            store: {
              id: 2,
              name: "Xbox Store",
              slug: "xbox-store",
              domain: "microsoft.com",
              games_count: 4073,
              image_background:
                "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
            },
          },
        ],
        clip: null,
        tags: [
          {
            id: 31,
            name: "Singleplayer",
            slug: "singleplayer",
            language: "eng",
            games_count: 112015,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
          {
            id: 13,
            name: "Atmospheric",
            slug: "atmospheric",
            language: "eng",
            games_count: 13024,
            image_background:
              "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
          },
          {
            id: 40836,
            name: "Full controller support",
            slug: "full-controller-support",
            language: "eng",
            games_count: 10020,
            image_background:
              "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg",
          },
          {
            id: 42,
            name: "Great Soundtrack",
            slug: "great-soundtrack",
            language: "eng",
            games_count: 3128,
            image_background:
              "https://media.rawg.io/media/games/b7d/b7d3f1715fa8381a4e780173a197a615.jpg",
          },
          {
            id: 24,
            name: "RPG",
            slug: "rpg",
            language: "eng",
            games_count: 11647,
            image_background:
              "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
          },
          {
            id: 118,
            name: "Story Rich",
            slug: "story-rich",
            language: "eng",
            games_count: 9732,
            image_background:
              "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
          },
          {
            id: 36,
            name: "Open World",
            slug: "open-world",
            language: "eng",
            games_count: 3660,
            image_background:
              "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
          },
          {
            id: 149,
            name: "Third Person",
            slug: "third-person",
            language: "eng",
            games_count: 4154,
            image_background:
              "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
          },
          {
            id: 64,
            name: "Fantasy",
            slug: "fantasy",
            language: "eng",
            games_count: 12719,
            image_background:
              "https://media.rawg.io/media/screenshots/88b/88b5f27f07d6ca2f8a3cd0b36e03a670.jpg",
          },
          {
            id: 37,
            name: "Sandbox",
            slug: "sandbox",
            language: "eng",
            games_count: 3399,
            image_background:
              "https://media.rawg.io/media/games/849/849414b978db37d4563ff9e4b0d3a787.jpg",
          },
          {
            id: 97,
            name: "Action RPG",
            slug: "action-rpg",
            language: "eng",
            games_count: 3372,
            image_background:
              "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
          },
          {
            id: 41,
            name: "Dark",
            slug: "dark",
            language: "eng",
            games_count: 7150,
            image_background:
              "https://media.rawg.io/media/games/8bd/8bd24e3c15354a9555bb1437fe555a69.jpg",
          },
          {
            id: 44,
            name: "Nudity",
            slug: "nudity",
            language: "eng",
            games_count: 2535,
            image_background:
              "https://media.rawg.io/media/games/dbe/dbeeb30e02b59f55c4d8cf4f103a83b9.jpg",
          },
          {
            id: 336,
            name: "controller support",
            slug: "controller-support",
            language: "eng",
            games_count: 293,
            image_background:
              "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg",
          },
          {
            id: 192,
            name: "Mature",
            slug: "mature",
            language: "eng",
            games_count: 868,
            image_background:
              "https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg",
          },
          {
            id: 145,
            name: "Choices Matter",
            slug: "choices-matter",
            language: "eng",
            games_count: 1102,
            image_background:
              "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg",
          },
          {
            id: 40,
            name: "Dark Fantasy",
            slug: "dark-fantasy",
            language: "eng",
            games_count: 1563,
            image_background:
              "https://media.rawg.io/media/games/789/7896837ec22a83e4007018ddd55e8c9a.jpg",
          },
          {
            id: 66,
            name: "Medieval",
            slug: "medieval",
            language: "eng",
            games_count: 2770,
            image_background:
              "https://media.rawg.io/media/games/078/078986692ea320a4fa3b819da33c14cc.jpg",
          },
          {
            id: 82,
            name: "Magic",
            slug: "magic",
            language: "eng",
            games_count: 4661,
            image_background:
              "https://media.rawg.io/media/games/bad/bad95aa1f2edbbad2ae93981291b6560.jpg",
          },
          {
            id: 218,
            name: "Multiple Endings",
            slug: "multiple-endings",
            language: "eng",
            games_count: 3197,
            image_background:
              "https://media.rawg.io/media/games/e63/e635b8c7fbe3ffd69ad6c1c586cd250e.jpg",
          },
        ],
        esrb_rating: {
          id: 4,
          name: "Mature",
          slug: "mature",
        },
        short_screenshots: [
          {
            id: -1,
            image:
              "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
          },
          {
            id: 30336,
            image:
              "https://media.rawg.io/media/screenshots/1ac/1ac19f31974314855ad7be266adeb500.jpg",
          },
          {
            id: 30337,
            image:
              "https://media.rawg.io/media/screenshots/6a0/6a08afca95261a2fe221ea9e01d28762.jpg",
          },
          {
            id: 30338,
            image:
              "https://media.rawg.io/media/screenshots/cdd/cdd31b6b4a687425a87b5ce231ac89d7.jpg",
          },
          {
            id: 30339,
            image:
              "https://media.rawg.io/media/screenshots/862/862397b153221a625922d3bb66337834.jpg",
          },
          {
            id: 30340,
            image:
              "https://media.rawg.io/media/screenshots/166/166787c442a45f52f4f230c33fd7d605.jpg",
          },
          {
            id: 30342,
            image:
              "https://media.rawg.io/media/screenshots/f63/f6373ee614046d81503d63f167181803.jpg",
          },
        ],
      },
    ],
  },
  mutations: {
    setGames(state, payload) {
      state.games = payload;
    },
  },
  actions: {
    async fetchGames({ commit }) {
      const res = await fetch(
        `https://api.rawg.io/api/games?key=6e2685a3e2aa4271b67bece3422a0788`
      );
      const data = await res.json();
      commit("setGames", data.results);
    },
  },
  getters: {
    games(state) {
      return state.games;
    },
  },
  modules: {},
});
