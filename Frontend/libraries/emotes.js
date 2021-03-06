!function (e) {
    if ("object" == typeof exports) module.exports = e(); else if ("function" == typeof define && define.amd) define(e); else {
        var t;
        "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self), t.twitchEmoji = e()
    }
}(function () {
    var e;
    return function e(t, i, n) {
        function r(o, a) {
            if (!i[o]) {
                if (!t[o]) {
                    var f = "function" == typeof require && require;
                    if (!a && f) return f(o, !0);
                    if (s) return s(o, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                var u = i[o] = {exports: {}};
                t[o][0].call(u.exports, function (e) {
                    var i = t[o][1][e];
                    return r(i || e)
                }, u, u.exports, e, t, i, n)
            }
            return i[o].exports
        }

        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
        return r
    }({
        1: [function (e, t, i) {
            (function (t, n, r, s, o, a, f, u, c) {
                const l = e("./src/util.js"), d = e("./src/get-channel-emojis.js"), h = e("./src/subscriber-emojis.js"),
                    p = [e("./src/global-emojis.js")];
                i.parse = function (e, t) {
                    return t = l.setDefaultOptions(t), l.validateInput(e, t), p.reduce(function (e, i) {
                        return i.parse(e, t)
                    }, e)
                }, i.add = function (e, t) {
                    return d(e, function (e, i) {
                        e || p.push(new h(i)), void 0 !== t && t(e)
                    })
                }
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_70a70d16.js", "/")
        }, {
            "./src/get-channel-emojis.js": 9,
            "./src/global-emojis.js": 10,
            "./src/subscriber-emojis.js": 11,
            "./src/util.js": 12,
            buffer: 5,
            "g5I+bs": 7
        }], 2: [function (e, t, i) {
            t.exports = {
                meta: {generated_at: "2017-07-08T14:31:40Z"},
                template: {
                    small: "https://static-cdn.jtvnw.net/emoticons/v1/{image_id}/2.0",
                    medium: "https://static-cdn.jtvnw.net/emoticons/v1/{image_id}/1.0",
                    large: "https://static-cdn.jtvnw.net/emoticons/v1/{image_id}/3.0"
                },
                emotes: {
                    "Alik":{description: null, image_id: 3405, first_seen: null},
                    "Dread":{description: null, image_id: 3406, first_seen: null},
                    "Solo":{description: null, image_id: 3407, first_seen: null},
                    "Nexus":{description: null, image_id: 20665, first_seen: null},
                    "Svch":{description: null, image_id: 20666, first_seen: null},
                    "cakeCry":{description: null, image_id: 27415, first_seen: null},
                    "cake1":{description: null, image_id: 89075, first_seen: null},
                    "cakeYeah":{description: null, image_id: 173184, first_seen: null},
                    "cakeFat":{description: null, image_id: 601595, first_seen: null},
                    "LUL":{description: null, image_id: 425618, first_seen: null},
                    "4Head": {
                        description: "This is the face of a popular Twitch streamer. twitch.tv/cadburryftw",
                        image_id: 354,
                        first_seen: null
                    },
                    AMPTropPunch: {description: null, image_id: 110785, first_seen: "2016-08-22 18:45:04"},
                    ANELE: {
                        description: "This is the face of Twitch Partnerships Lead Anele. twitch.tv/anele",
                        image_id: 3792,
                        first_seen: null
                    },
                    ArgieB8: {
                        description: "ArgieB8 is the face of Twitch Staff member Ignacio Estanga. twitch.tv/theargietv",
                        image_id: 51838,
                        first_seen: null
                    },
                    ArigatoNas: {description: null, image_id: 160393, first_seen: "2017-03-30 15:35:03"},
                    ArsonNoSexy: {
                        description: "This is the face of streamer ArSon. twitch.tv/arson",
                        image_id: 50,
                        first_seen: null
                    },
                    AsianGlow: {
                        description: "This is the face of Twitch staff member Eliene Sun. twitch.tv/eleinetv",
                        image_id: 74,
                        first_seen: null
                    },
                    BabyRage: {
                        description: "Common meme spurring from Dota 2 professional player and Twitch streamer Arteezy (RTZ) who gets mad when bad things happen in his games, and rages.",
                        image_id: 22639,
                        first_seen: null
                    },
                    BatChest: {
                        description: "The BatChest face belongs JhnnyCrwsh, part of the Twitch moderation team. It refers to how his chest hair looks like the Bat Symbol, and came about from a dumb highlight on his channel. twitch.tv/JhnnyCrwsh",
                        image_id: 115234,
                        first_seen: "2016-09-25 10:10:04"
                    },
                    BCWarrior: {
                        description: "This is the face of streamer Zeke. twitch.tv/ezekiel_iii",
                        image_id: 30,
                        first_seen: null
                    },
                    BegWan: {description: null, image_id: 160394, first_seen: "2017-03-30 15:35:03"},
                    BibleThump: {
                        description: "This is an icon from the game The Binding of Isaac.",
                        image_id: 86,
                        first_seen: null
                    },
                    BigBrother: {description: null, image_id: 1904, first_seen: null},
                    BigPhish: {description: null, image_id: 160395, first_seen: "2017-03-30 15:35:03"},
                    BJBlazkowicz: {description: null, image_id: 206495, first_seen: "2017-06-12 00:20:02"},
                    BlargNaut: {
                        description: "This is the face of streamer Aria Blarg. twitch.tv/ariablarg",
                        image_id: 114738,
                        first_seen: "2016-09-20 19:35:04"
                    },
                    bleedPurple: {description: null, image_id: 62835, first_seen: null},
                    BlessRNG: {description: null, image_id: 153556, first_seen: "2017-03-01 20:00:02"},
                    BloodTrail: {
                        description: "This is an icon of the main character in the game Super Meat Boy.",
                        image_id: 69,
                        first_seen: null
                    },
                    BrainSlug: {
                        description: "This is a Brain Slug. It controls your thoughts. Originally this was the face of Bwana, part of the Twitch moderation team. It was changed to be an actual Brain Slug due to racist abuse of this emote. More info: twitch.tv/bwana/c/2151897",
                        image_id: 115233,
                        first_seen: "2016-09-25 09:50:04"
                    },
                    BrokeBack: {
                        description: "This is the face of streamer Alan. twitch.tv/seriousgaming",
                        image_id: 4057,
                        first_seen: null
                    },
                    BuddhaBar: {
                        description: "This is the face of Yoh, a JavaScript nerd who works on social features for Twitch.",
                        image_id: 27602,
                        first_seen: null
                    },
                    BudStar: {description: null, image_id: 97856, first_seen: "2016-05-08 14:05:03"},
                    CarlSmile: {description: null, image_id: 166266, first_seen: "2017-04-24 15:05:04"},
                    ChefFrank: {description: null, image_id: 90129, first_seen: null},
                    cmonBruh: {description: null, image_id: 84608, first_seen: null},
                    CoolCat: {description: null, image_id: 58127, first_seen: null},
                    CoolStoryBob: {description: null, image_id: 123171, first_seen: "2016-10-28 15:50:03"},
                    copyThis: {description: null, image_id: 112288, first_seen: "2016-09-02 16:45:03"},
                    CorgiDerp: {description: "This is Lana the corgi.", image_id: 49106, first_seen: null},
                    CrreamAwk: {description: null, image_id: 191313, first_seen: "2017-05-16 18:15:04"},
                    CurseLit: {description: null, image_id: 116625, first_seen: "2016-10-04 14:55:04"},
                    DAESuppy: {
                        description: "This is the face of famous Starcraft 2 player, EG.Suppy.",
                        image_id: 973,
                        first_seen: null
                    },
                    DansGame: {
                        description: "This is the face of Dan. twitch.tv/dansgaming ",
                        image_id: 33,
                        first_seen: null
                    },
                    DatSheffy: {
                        description: "This is the face of Twitch staff member Sheffy. twitch.tv/sheffy",
                        image_id: 111700,
                        first_seen: "2016-08-29 19:40:04"
                    },
                    DBstyle: {
                        description: "This is the face of streamer and composer Dannybstyle. twitch.tv/dannybstyle",
                        image_id: 73,
                        first_seen: null
                    },
                    DendiFace: {
                        description: "This is the face of Danil \"Dendi\" Ishutin a professional Dota2 player. The emote is a temporary (https://twitter.com/Trancez0r/status/534501083796611073) prize given to the winner of the Twitch Doube Trouble tournament. Although Dendi's team didn't actually win the tournament, the prize was graciously(?) given to Dendi by the winner. (https://twitter.com/Trancez0r/status/534501692285673472). The code itself is reference to what trolls use for the WinWaker emote.",
                        image_id: 58135,
                        first_seen: null
                    },
                    DogFace: {
                        description: "DogFace is the face of Kyle Pulver, an indie game developer that added :dogface: to Steam.",
                        image_id: 114835,
                        first_seen: "2016-09-21 16:10:04"
                    },
                    DoritosChip: {description: null, image_id: 102242, first_seen: "2016-06-09 16:55:04"},
                    duDudu: {
                        description: "This is a representation of the popular song Sandstorm by Darude. The code is commonly spammed in chat whenever Sandstorm is played.",
                        image_id: 62834,
                        first_seen: null
                    },
                    DxCat: {description: null, image_id: 110734, first_seen: "2016-08-22 13:55:04"},
                    EagleEye: {
                        description: "This is the face of Twitch staff member Jacob.",
                        image_id: 20,
                        first_seen: null
                    },
                    EleGiggle: {
                        description: "This is the face of Twitch streamer Elegy of Games. twitch.tv/elegyofgames",
                        image_id: 4339,
                        first_seen: null
                    },
                    FailFish: {
                        description: "This is the face of streamer SpamFish. twitch.tv/spamfish",
                        image_id: 360,
                        first_seen: null
                    },
                    FrankerZ: {
                        description: "This is the face of Frank the dog of Twitch staff member Ernest Le. Brother of RalpherZ.",
                        image_id: 65,
                        first_seen: null
                    },
                    FreakinStinkin: {
                        description: "This is the face of GQ, part of the Twitch moderation team. twitch.tv/thegreatgq",
                        image_id: 117701,
                        first_seen: "2016-10-07 17:00:05"
                    },
                    FUNgineer: {
                        description: "This is the face of Twitch engineer, Jon. twitch.tv/jbrhymer",
                        image_id: 244,
                        first_seen: null
                    },
                    FunRun: {
                        description: "This is the icon of Justin Ignacio aka TheGunrun, Twitch staff member and savior of eSports! twitch.tv/thegunrun",
                        image_id: 48,
                        first_seen: null
                    },
                    FutureMan: {description: null, image_id: 98562, first_seen: "2016-05-13 14:55:03"},
                    GingerPower: {
                        description: "This is the face of Dylan Reichstadt. He works for Twitch in quality assurance. twitch.tv/dylanlive",
                        image_id: 32,
                        first_seen: null
                    },
                    GivePLZ: {description: null, image_id: 112291, first_seen: "2016-09-02 16:45:03"},
                    GOWSkull: {description: null, image_id: 116942, first_seen: "2016-10-05 12:30:04"},
                    GrammarKing: {
                        description: "This is the face of Twitch employee/KBMOD writer Vol1tion. twitch.tv/vol1tion",
                        image_id: 3632,
                        first_seen: null
                    },
                    HassaanChop: {
                        description: "This is the face of Twitch software engineer Hassaan. This emote was at one point known as 'DatHass'.",
                        image_id: 20225,
                        first_seen: null
                    },
                    HassanChop: {
                        description: "This is the face of Twitch Staff member Hassan. twitch.tv/hassan",
                        image_id: 68,
                        first_seen: null
                    },
                    HeyGuys: {
                        description: "This is the face of Selen, director of recruiting at Twitch.",
                        image_id: 30259,
                        first_seen: null
                    },
                    HotPokket: {
                        description: "This is the face of streamer Pokket. twitch.tv/pokket",
                        image_id: 357,
                        first_seen: null
                    },
                    HumbleLife: {
                        description: "This icon was added for Extra Life 2014 where gamers raise money for Children's Miracle Network Hospitals. Find out more at extra-life.org.",
                        image_id: 46881,
                        first_seen: null
                    },
                    imGlitch: {description: null, image_id: 112290, first_seen: "2016-09-02 16:45:03"},
                    InuyoFace: {description: null, image_id: 160396, first_seen: "2017-03-30 15:35:03"},
                    ItsBoshyTime: {
                        description: "This is an icon from the game I Wanna Be the Boshy.",
                        image_id: 133468,
                        first_seen: "2016-12-13 16:10:02"
                    },
                    Jebaited: {
                        description: "This is the face of Jebailey.",
                        image_id: 114836,
                        first_seen: "2016-09-21 16:20:03"
                    },
                    JKanStyle: {
                        description: "This is the face of Justin Kan, co-founder of Justin.tv and Twitch.",
                        image_id: 15,
                        first_seen: null
                    },
                    JonCarnage: {
                        description: "This is the face of Twitch staff member and caster Jon Carnage.",
                        image_id: 26,
                        first_seen: null
                    },
                    KAPOW: {
                        description: "This is a promotional emote for the game Infinite Crisis.",
                        image_id: 133537,
                        first_seen: "2016-12-13 20:55:03"
                    },
                    Kappa: {
                        description: "This is the face of Josh, a former Justin.tv employee. Kappa is generally used to indicate sarcasm or trolling.",
                        image_id: 25,
                        first_seen: null
                    },
                    KappaClaus: {
                        description: "This is Kappa with a Santa hat added for Christmas 2015.",
                        image_id: 74510,
                        first_seen: null
                    },
                    KappaPride: {
                        description: "On June 26, 2015, the Supreme Court of the United States ruled that same-sex couples can marry nationwide. You can read the full decision at: http://www.supremecourt.gov/opinions/14pdf/14-556_3204.pdf The rainbow coloring is a symbol of the LGBT pride movement.",
                        image_id: 55338,
                        first_seen: null
                    },
                    KappaRoss: {
                        description: "In honor of the late Bob Ross's 73rd birthday and the official launch of the Creative directory, Twitch created this emote - a mashup of Kappa and Bob's distinctive hair. Twitch also ran a non-stop marathon of all 403 episodes of \"The Joy of Painting\" on twitch.tv/bobross",
                        image_id: 70433,
                        first_seen: null
                    },
                    KappaWealth: {description: null, image_id: 81997, first_seen: null},
                    Kappu: {description: null, image_id: 160397, first_seen: "2017-03-30 15:35:03"},
                    Keepo: {
                        description: "Keepo is Kappa stylized as the hero Meepo from DotA/DotA 2.",
                        image_id: 1902,
                        first_seen: null
                    },
                    KevinTurtle: {
                        description: "This is the face of Klutch, part of the Twitch partnership team. twitch.tv/klutch",
                        image_id: 40,
                        first_seen: null
                    },
                    Kippa: {description: null, image_id: 1901, first_seen: null},
                    KonCha: {description: null, image_id: 160400, first_seen: "2017-03-30 15:35:03"},
                    Kreygasm: {
                        description: "This is the face of streamer Kreyg. twitch.tv/kreyg",
                        image_id: 41,
                        first_seen: null
                    },
                    Mau5: {
                        description: "The Mau5 emote belongs to music producer Deadmau5. twitch.tv/deadmau5",
                        image_id: 30134,
                        first_seen: null
                    },
                    mcaT: {
                        description: "This is the logo of the music label Monstercat. twitch.tv/monstercat monstercat.com",
                        image_id: 35063,
                        first_seen: null
                    },
                    MikeHogu: {description: null, image_id: 81636, first_seen: null},
                    MingLee: {
                        description: "The face of Chris Mead, the Director of Partnerships EMEA at Twitch.",
                        image_id: 68856,
                        first_seen: null
                    },
                    MorphinTime: {description: null, image_id: 156787, first_seen: "2017-03-16 12:05:03"},
                    MrDestructoid: {
                        description: "This is the mascot of the gaming website Destructoid. twitch.tv/destructoid",
                        image_id: 28,
                        first_seen: null
                    },
                    MVGame: {
                        description: "This is the face of streamer MAN. twitch.tv/manvsgame",
                        image_id: 142140,
                        first_seen: "2017-01-19 17:40:02"
                    },
                    NinjaGrumpy: {description: null, image_id: 138325, first_seen: "2017-01-05 23:40:03"},
                    NomNom: {description: null, image_id: 90075, first_seen: null},
                    NotATK: {description: null, image_id: 34875, first_seen: null},
                    NotLikeThis: {
                        description: "This is the face of Twitch staff member Ben Swartz. twitch.tv/bensw",
                        image_id: 58765,
                        first_seen: null
                    },
                    OhMyDog: {description: "This is the face of the dog, Tank.", image_id: 81103, first_seen: null},
                    OneHand: {
                        description: "This is the face of streamer EdwardStarcraft.",
                        image_id: 66,
                        first_seen: null
                    },
                    OpieOP: {
                        description: "This is the face of Jason Babo. Strategic Partnerships at TwitchTV and a Web Developer. twitch.tv/opie",
                        image_id: 100590,
                        first_seen: "2016-05-26 16:00:05"
                    },
                    OptimizePrime: {
                        description: "This is the face of Emmett Shear, co-founder of Justin.tv and CEO of Twitch.",
                        image_id: 16,
                        first_seen: null
                    },
                    OSblob: {description: null, image_id: 191758, first_seen: "2017-05-17 12:45:05"},
                    OSfrog: {
                        description: "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
                        image_id: 81248,
                        first_seen: null
                    },
                    OSkomodo: {description: null, image_id: 81273, first_seen: null},
                    OSsloth: {
                        description: "This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.",
                        image_id: 81249,
                        first_seen: null
                    },
                    panicBasket: {
                        description: 'This emote was voted into existence by the Twitch Townhall attendees during PAX Prime 2014. It is inspired by the phrase "PICNIC" (based on PANIC) spammed in chat when a stream goes offline during a broadcast.',
                        image_id: 22998,
                        first_seen: null
                    },
                    PanicVis: {
                        description: "This is the emote of Visual, part of the Twitch moderation team. Twitch.tv/visual",
                        image_id: 3668,
                        first_seen: null
                    },
                    PartyTime: {
                        description: "This is the face of Pluto, a partnership manager for Twitch. twitch.tv/pluto",
                        image_id: 135393,
                        first_seen: "2016-12-22 05:30:09"
                    },
                    pastaThat: {description: null, image_id: 112289, first_seen: "2016-09-02 16:45:03"},
                    PeoplesChamp: {
                        description: "The PeoplesChamp emote belongs to Bobby 'Scar' of the smash community and of MeleeItOnMe. twitch.tv/meleeitonme",
                        image_id: 3412,
                        first_seen: null
                    },
                    PermaSmug: {
                        description: "This is the face of Aaron Krasnov, a product manager at Twitch, captured during their AHGL Dota team photo.",
                        image_id: 27509,
                        first_seen: null
                    },
                    PicoMause: {
                        description: "This is the face of streamer PicoMause. twitch.tv/picomause",
                        image_id: 111300,
                        first_seen: "2016-08-26 03:55:04"
                    },
                    PipeHype: {
                        description: "The PipeHype emote is of Pipe, part of the Twitch support team. twitch.tv/pipe",
                        image_id: 4240,
                        first_seen: null
                    },
                    PJSalt: {
                        description: " PJ stands for PeacefulJay, a Fighting Game Community (FGC) stream: twitch.tv/peacefuljay and Salt is a term used in the FGC to describe someone who is upset.",
                        image_id: 36,
                        first_seen: null
                    },
                    PJSugar: {description: null, image_id: 102556, first_seen: "2016-06-12 14:40:03"},
                    PMSTwin: {
                        description: "This is the face of Twitch staff member & PMS clan founder Amber Dalton.",
                        image_id: 92,
                        first_seen: null
                    },
                    PogChamp: {
                        description: "This is the face of streamer Gootecks. twitch.tv/gootecks",
                        image_id: 88,
                        first_seen: null
                    },
                    Poooound: {
                        description: "This is the face of streamer RSQViper. twitch.tv/RSQViper",
                        image_id: 117484,
                        first_seen: "2016-10-06 21:45:05"
                    },
                    PraiseIt: {
                        description: "This is the icon for the Helix Fossil item in Pokemon games. It became a meme as part of the TwitchPlaysPokemon streams.",
                        image_id: 38586,
                        first_seen: null
                    },
                    PRChase: {
                        description: "This is the face of Twitch PR Director, Chase.",
                        image_id: 28328,
                        first_seen: null
                    },
                    PrimeMe: {description: null, image_id: 115075, first_seen: "2016-09-23 18:25:04"},
                    PunchTrees: {
                        description: "This is an icon of Steve, the ingame persona in the game Minecraft. One of the first objectives in Minecraft is to punch trees to get wood.",
                        image_id: 47,
                        first_seen: null
                    },
                    PunOko: {description: null, image_id: 160401, first_seen: "2017-03-30 15:35:03"},
                    QuadDamage: {description: null, image_id: 206494, first_seen: "2017-06-12 00:20:02"},
                    RaccAttack: {
                        description: "This is the avatar of Nick aka BlackLightAttack. Formerly of his personal channel, twitch.tv/blacklightattack, where raccoons are a recurring theme.",
                        image_id: 114870,
                        first_seen: "2016-09-21 19:50:04"
                    },
                    RalpherZ: {
                        description: "This is the face of Ralph the dog of Twitch staff member Ernest Le. Brother of FrankerZ.",
                        image_id: 1900,
                        first_seen: null
                    },
                    RedCoat: {
                        description: "This is the face of Twitch staff member, Bill.",
                        image_id: 22,
                        first_seen: null
                    },
                    ResidentSleeper: {
                        description: "This is the face of Oddler. Oddler was doing a 72 hour Resident Evil marathon when he fell asleep about 66 hours into it. His stream with him sleeping became massively popular and at one point the viewer count even reached 13,000. twitch.tv/oddler",
                        image_id: 245,
                        first_seen: null
                    },
                    riPepperonis: {
                        description: 'This is a symbol for "Rest In Pepperonis". "Rest In Pepperonis" is a middle of the herd term used to describe a death, usually on a video game.',
                        image_id: 62833,
                        first_seen: null
                    },
                    RitzMitz: {
                        description: "The emote RitzMitz is of RitzPlays. twitch.tv/ritzplays",
                        image_id: 4338,
                        first_seen: null
                    },
                    RlyTho: {description: null, image_id: 134256, first_seen: "2016-12-16 16:40:03"},
                    RuleFive: {
                        description: "This is the face of streamer Chuk. twitch.tv/whenchukattacks",
                        image_id: 107030,
                        first_seen: "2016-07-22 15:25:09"
                    },
                    SabaPing: {description: null, image_id: 160402, first_seen: "2017-03-30 15:35:03"},
                    SeemsGood: {
                        description: "The face of staff member Paul Diamond, twitch.tv/bearcat",
                        image_id: 64138,
                        first_seen: null
                    },
                    ShadyLulu: {
                        description: "The face of Twitch Staff member Lauren Etner from Events/Marketing",
                        image_id: 52492,
                        first_seen: null
                    },
                    ShazBotstix: {
                        description: "This is the face of Ben Goldhaber, Twitch staff member and streamer. twitch.tv/fishstix",
                        image_id: 87,
                        first_seen: null
                    },
                    SmoocherZ: {
                        description: "This is the emote of Jordan Tayer aka Soma, Influencer Relations Manager at Twitch. twitch.tv/soma",
                        image_id: 89945,
                        first_seen: null
                    },
                    SMOrc: {description: "This is an icon from the game Space Marine.", image_id: 52, first_seen: null},
                    SoBayed: {
                        description: "This is the face of SONOS, Twitch staff member and streamer. twitch.tv/s0n0s",
                        image_id: 1906,
                        first_seen: null
                    },
                    SoonerLater: {
                        description: "This is the face of Sooner, a popular Twitch streamer. twitch.tv/lolsooner",
                        image_id: 134472,
                        first_seen: "2016-12-18 01:15:04"
                    },
                    Squid1: {description: null, image_id: 191762, first_seen: "2017-05-17 12:45:05"},
                    Squid2: {description: null, image_id: 191763, first_seen: "2017-05-17 12:55:23"},
                    Squid3: {description: null, image_id: 191764, first_seen: "2017-05-17 12:55:23"},
                    Squid4: {description: null, image_id: 191767, first_seen: "2017-05-17 12:55:23"},
                    SSSsss: {
                        description: "This is an icon of a Creeper from the game Minecraft. They blow stuff up.",
                        image_id: 46,
                        first_seen: null
                    },
                    StinkyCheese: {description: null, image_id: 90076, first_seen: null},
                    StoneLightning: {
                        description: "This is the face of Michael Seibel, co-founder of Justin.tv.",
                        image_id: 17,
                        first_seen: null
                    },
                    StrawBeary: {
                        description: "This is the icon of streamer LordKat. twitch.tv/lordkat",
                        image_id: 114876,
                        first_seen: "2016-09-21 20:45:03"
                    },
                    SuperVinlin: {
                        description: "This is the face of Twitch staff member Kevin Lin.",
                        image_id: 118772,
                        first_seen: "2016-10-11 22:20:04"
                    },
                    SwiftRage: {
                        description: "This is the face of streamer Swiftor. twitch.tv/swiftor",
                        image_id: 34,
                        first_seen: null
                    },
                    TakeNRG: {description: null, image_id: 112292, first_seen: "2016-09-02 16:45:03"},
                    TBAngel: {description: null, image_id: 143490, first_seen: "2017-01-24 16:55:04"},
                    TBCrunchy: {description: null, image_id: 200208, first_seen: "2017-05-31 19:35:04"},
                    TBTacoBag: {description: null, image_id: 200211, first_seen: "2017-05-31 19:35:04"},
                    TBTacoProps: {description: null, image_id: 200212, first_seen: "2017-05-31 19:35:04"},
                    TearGlove: {description: null, image_id: 160403, first_seen: "2017-03-30 15:35:03"},
                    TehePelo: {description: null, image_id: 160404, first_seen: "2017-03-30 15:35:03"},
                    TF2John: {
                        description: "This is the face of stream and Twitch staff member, John. twitch.tv/synwyn",
                        image_id: 1899,
                        first_seen: null
                    },
                    ThankEgg: {description: null, image_id: 160392, first_seen: "2017-03-30 15:35:03"},
                    TheIlluminati: {description: null, image_id: 145315, first_seen: "2017-01-31 16:40:02"},
                    TheRinger: {
                        description: "This is the face of Kyle Vogt, co-founder of Justin.tv.",
                        image_id: 18,
                        first_seen: null
                    },
                    TheTarFu: {
                        description: "This is the face of streamer Tarfu. twitch.tv/tarfu",
                        image_id: 111351,
                        first_seen: "2016-08-26 15:45:03"
                    },
                    TheThing: {
                        description: 'The emote "TheThing" is the face of Geoff "iNcontroL" Robinson. twitch.tv/incontroltv',
                        image_id: 7427,
                        first_seen: null
                    },
                    ThunBeast: {
                        description: "ThunBeast belongs to Twitch caster ThunderCast twitch.tv/Thundercast",
                        image_id: 1898,
                        first_seen: null
                    },
                    TinyFace: {
                        description: "This is the face of streamer, Foom. twitch.tv/king_foom",
                        image_id: 111119,
                        first_seen: "2016-08-24 21:05:03"
                    },
                    TooSpicy: {
                        description: "This is the face of Miguel, part of the Twitch moderation team. twitch.tv/sournothardcore SourPls",
                        image_id: 114846,
                        first_seen: "2016-09-21 17:35:03"
                    },
                    TriHard: {
                        description: "This is the face of speed runner Trihex. twitch.tv/trihex",
                        image_id: 120232,
                        first_seen: "2016-10-17 20:20:03"
                    },
                    TTours: {description: null, image_id: 38436, first_seen: null},
                    TwitchLit: {description: null, image_id: 166263, first_seen: "2017-04-24 14:55:03"},
                    twitchRaid: {description: null, image_id: 62836, first_seen: null},
                    TwitchRPG: {description: null, image_id: 191747, first_seen: "2017-05-17 12:25:04"},
                    TwitchUnity: {description: null, image_id: 196892, first_seen: "2017-05-26 11:10:04"},
                    UncleNox: {
                        description: "This is the face of Nox, part of the Twitch moderation team. Rumor is that he does not wear pants. twitch.tv/nox",
                        image_id: 114856,
                        first_seen: "2016-09-21 18:35:10"
                    },
                    UnSane: {
                        description: "This is the face of streamer Tom. twitch.tv/unsanitylive",
                        image_id: 111792,
                        first_seen: "2016-08-30 15:35:04"
                    },
                    UWot: {description: null, image_id: 134255, first_seen: "2016-12-16 16:40:03"},
                    VaultBoy: {
                        description: "This is a promotional emote for Bethesda's Fallout franchise. Vault Boy is the mascot for the fictional corporation known as Vault-Tec within the Fallout universe.",
                        image_id: 206490,
                        first_seen: "2017-06-12 00:20:02"
                    },
                    VoHiYo: {
                        description: "This is the emote of Volary, a member of the Twitch partnerships team. twitch.tv/volary",
                        image_id: 81274,
                        first_seen: null
                    },
                    VoteNay: {description: null, image_id: 106294, first_seen: "2016-07-15 18:25:03"},
                    VoteYea: {description: null, image_id: 106293, first_seen: "2016-07-15 18:25:03"},
                    WholeWheat: {
                        description: "This is the face of caster and Twitch staff member djWHEAT. twitch.tv/djwheat",
                        image_id: 1896,
                        first_seen: null
                    },
                    WTRuck: {
                        description: "WTRuck belongs Eddie Ruckus twitch.tv/eddieruckus",
                        image_id: 114847,
                        first_seen: "2016-09-21 17:55:03"
                    },
                    WutFace: {
                        description: "This is the face of Twitch staff member Alex Mendez. twitch.tv/goldenboyftw",
                        image_id: 28087,
                        first_seen: null
                    },
                    YouDontSay: {description: null, image_id: 134254, first_seen: "2016-12-16 16:40:03"},
                    YouWHY: {
                        description: "This is the emote of YouPickGames. twitch.tv/youpickgames",
                        image_id: 4337,
                        first_seen: null
                    }
                }
            }
        }, {}], 3: [function (e, t, i) {
            (function (e, t, n, r, s, o, a, f, u) {
                !function (e) {
                    "use strict";

                    function t(e) {
                        var t = e.charCodeAt(0);
                        return t === s || t === c ? 62 : t === o || t === l ? 63 : t < a ? -1 : t < a + 10 ? t - a + 26 + 26 : t < u + 26 ? t - u : t < f + 26 ? t - f + 26 : void 0
                    }

                    function i(e) {
                        function i(e) {
                            u[l++] = e
                        }

                        var n, s, o, a, f, u;
                        if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        var c = e.length;
                        f = "=" === e.charAt(c - 2) ? 2 : "=" === e.charAt(c - 1) ? 1 : 0, u = new r(3 * e.length / 4 - f), o = f > 0 ? e.length - 4 : e.length;
                        var l = 0;
                        for (n = 0, s = 0; n < o; n += 4, s += 3) a = t(e.charAt(n)) << 18 | t(e.charAt(n + 1)) << 12 | t(e.charAt(n + 2)) << 6 | t(e.charAt(n + 3)), i((16711680 & a) >> 16), i((65280 & a) >> 8), i(255 & a);
                        return 2 === f ? (a = t(e.charAt(n)) << 2 | t(e.charAt(n + 1)) >> 4, i(255 & a)) : 1 === f && (a = t(e.charAt(n)) << 10 | t(e.charAt(n + 1)) << 4 | t(e.charAt(n + 2)) >> 2, i(a >> 8 & 255), i(255 & a)), u
                    }

                    function n(e) {
                        function t(e) {
                            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)
                        }

                        var i, n, r, s = e.length % 3, o = "";
                        for (i = 0, r = e.length - s; i < r; i += 3) n = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], o += function (e) {
                            return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
                        }(n);
                        switch (s) {
                            case 1:
                                n = e[e.length - 1], o += t(n >> 2), o += t(n << 4 & 63), o += "==";
                                break;
                            case 2:
                                n = (e[e.length - 2] << 8) + e[e.length - 1], o += t(n >> 10), o += t(n >> 4 & 63), o += t(n << 2 & 63), o += "="
                        }
                        return o
                    }

                    var r = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "+".charCodeAt(0),
                        o = "/".charCodeAt(0), a = "0".charCodeAt(0), f = "a".charCodeAt(0), u = "A".charCodeAt(0),
                        c = "-".charCodeAt(0), l = "_".charCodeAt(0);
                    e.toByteArray = i, e.fromByteArray = n
                }(void 0 === i ? this.base64js = {} : i)
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/base64-js/lib/b64.js", "/node_modules/base64-js/lib")
        }, {buffer: 5, "g5I+bs": 7}], 4: [function (t, i, n) {
            (function (t, r, s, o, a, f, u, c, l) {
                !function (t, r) {
                    "function" == typeof e && e.amd ? e([], r) : "object" == typeof n ? i.exports = r() : t.returnExports = r()
                }(this, function () {
                    function e(r, s) {
                        if ("function" != typeof s) throw new Error("Bad callback given: " + s);
                        if (!r) throw new Error("No options given");
                        var a = r.onResponse;
                        if (r = "string" == typeof r ? {uri: r} : JSON.parse(JSON.stringify(r)), r.onResponse = a, r.verbose && (e.log = n()), r.url && (r.uri = r.url, delete r.url), !r.uri && "" !== r.uri) throw new Error("options.uri is a required argument");
                        if ("string" != typeof r.uri) throw new Error("options.uri must be a string");
                        for (var f = ["proxy", "_redirectsFollowed", "maxRedirects", "followRedirect"], u = 0; u < f.length; u++) if (r[f[u]]) throw new Error("options." + f[u] + " is not supported");
                        if (r.callback = s, r.method = r.method || "GET", r.headers = r.headers || {}, r.body = r.body || null, r.timeout = r.timeout || e.DEFAULT_TIMEOUT, r.headers.host) throw new Error("Options.headers.host is not supported");
                        r.json && (r.headers.accept = r.headers.accept || "application/json", "GET" !== r.method && (r.headers["content-type"] = "application/json"), "boolean" != typeof r.json ? r.body = JSON.stringify(r.json) : "string" != typeof r.body && (r.body = JSON.stringify(r.body)));
                        var c = function (e) {
                            var t = [];
                            for (var i in e) e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                            return t.join("&")
                        };
                        if (r.qs) {
                            var l = "string" == typeof r.qs ? r.qs : c(r.qs);
                            -1 !== r.uri.indexOf("?") ? r.uri = r.uri + "&" + l : r.uri = r.uri + "?" + l
                        }
                        if (r.form) {
                            if ("string" == typeof r.form) throw"form name unsupported";
                            if ("POST" === r.method) {
                                var d = (r.encoding || "application/x-www-form-urlencoded").toLowerCase();
                                switch (r.headers["content-type"] = d, d) {
                                    case"application/x-www-form-urlencoded":
                                        r.body = c(r.form).replace(/%20/g, "+");
                                        break;
                                    case"multipart/form-data":
                                        var h = function (e) {
                                            var t = {};
                                            t.boundry = "-------------------------------" + Math.floor(1e9 * Math.random());
                                            var i = [];
                                            for (var n in e) e.hasOwnProperty(n) && i.push("--" + t.boundry + '\nContent-Disposition: form-data; name="' + n + '"\n\n' + e[n] + "\n");
                                            return i.push("--" + t.boundry + "--"), t.body = i.join(""), t.length = t.body.length, t.type = "multipart/form-data; boundary=" + t.boundry, t
                                        }(r.form);
                                        r.body = h.body, r.headers["content-type"] = h.type;
                                        break;
                                    default:
                                        throw new Error("unsupported encoding:" + d)
                                }
                            }
                        }
                        return r.onResponse = r.onResponse || i, !0 === r.onResponse && (r.onResponse = s, r.callback = i), !r.headers.authorization && r.auth && (r.headers.authorization = "Basic " + o(r.auth.username + ":" + r.auth.password)), t(r)
                    }

                    function t(t) {
                        function i() {
                            l = !0;
                            var i = new Error("ETIMEDOUT");
                            return i.code = "ETIMEDOUT", i.duration = t.timeout, e.log.error("Timeout", {
                                id: c._id,
                                milliseconds: t.timeout
                            }), t.callback(i, c)
                        }

                        function n(i) {
                            if (l) return e.log.debug("Ignoring timed out state change", {
                                state: c.readyState,
                                id: c.id
                            });
                            if (e.log.debug("State change", {
                                    state: c.readyState,
                                    id: c.id,
                                    timed_out: l
                                }), c.readyState === a.OPENED) {
                                e.log.debug("Request started", {id: c.id});
                                for (var n in t.headers) c.setRequestHeader(n, t.headers[n])
                            } else c.readyState === a.HEADERS_RECEIVED ? r() : c.readyState === a.LOADING ? (r(), o()) : c.readyState === a.DONE && (r(), o(), u())
                        }

                        function r() {
                            if (!m.response) {
                                if (m.response = !0, e.log.debug("Got response", {
                                        id: c.id,
                                        status: c.status
                                    }), clearTimeout(c.timeoutTimer), c.statusCode = c.status, d && 0 == c.statusCode) {
                                    var i = new Error("CORS request rejected: " + t.uri);
                                    return i.cors = "rejected", m.loading = !0, m.end = !0, t.callback(i, c)
                                }
                                t.onResponse(null, c)
                            }
                        }

                        function o() {
                            m.loading || (m.loading = !0, e.log.debug("Response body loading", {id: c.id}))
                        }

                        function u() {
                            if (!m.end) {
                                if (m.end = !0, e.log.debug("Request done", {id: c.id}), c.body = c.responseText, t.json) try {
                                    c.body = JSON.parse(c.responseText)
                                } catch (e) {
                                    return t.callback(e, c)
                                }
                                t.callback(null, c, c.body)
                            }
                        }

                        var c = new a, l = !1, d = s(t.uri), h = "withCredentials" in c;
                        if (f += 1, c.seq_id = f, c.id = f + ": " + t.method + " " + t.uri, c._id = c.id, d && !h) {
                            var p = new Error("Browser does not support cross-origin request: " + t.uri);
                            return p.cors = "unsupported", t.callback(p, c)
                        }
                        c.timeoutTimer = setTimeout(i, t.timeout);
                        var m = {response: !1, loading: !1, end: !1};
                        return c.onreadystatechange = n, c.open(t.method, t.uri, !0), d && (c.withCredentials = !!t.withCredentials), c.send(t.body), c
                    }

                    function i() {
                    }

                    function n() {
                        var e, t, n = {}, s = ["trace", "debug", "info", "warn", "error"];
                        for (t = 0; t < s.length; t++) e = s[t], n[e] = i, "undefined" != typeof console && console && console[e] && (n[e] = r(console, e));
                        return n
                    }

                    function r(e, t) {
                        function i(i, n) {
                            return "object" == typeof n && (i += " " + JSON.stringify(n)), e[t].call(e, i)
                        }

                        return i
                    }

                    function s(e) {
                        var t, i = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/;
                        try {
                            t = location.href
                        } catch (e) {
                            t = document.createElement("a"), t.href = "", t = t.href
                        }
                        var n = i.exec(t.toLowerCase()) || [], r = i.exec(e.toLowerCase());
                        return !(!r || r[1] == n[1] && r[2] == n[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (n[3] || ("http:" === n[1] ? 80 : 443)))
                    }

                    function o(e) {
                        var t, i, n, r, s, o, a, f,
                            u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", c = 0, l = 0,
                            d = "", h = [];
                        if (!e) return e;
                        do {
                            t = e.charCodeAt(c++), i = e.charCodeAt(c++), n = e.charCodeAt(c++), f = t << 16 | i << 8 | n, r = f >> 18 & 63, s = f >> 12 & 63, o = f >> 6 & 63, a = 63 & f, h[l++] = u.charAt(r) + u.charAt(s) + u.charAt(o) + u.charAt(a)
                        } while (c < e.length);
                        switch (d = h.join(""), e.length % 3) {
                            case 1:
                                d = d.slice(0, -2) + "==";
                                break;
                            case 2:
                                d = d.slice(0, -1) + "="
                        }
                        return d
                    }

                    var a = XMLHttpRequest;
                    if (!a) throw new Error("missing XMLHttpRequest");
                    e.log = {trace: i, debug: i, info: i, warn: i, error: i};
                    var f = 0;
                    return e.withCredentials = !1, e.DEFAULT_TIMEOUT = 18e4, e.defaults = function (t, i) {
                        var n = function (e) {
                            return function (i, n) {
                                i = "string" == typeof i ? {uri: i} : JSON.parse(JSON.stringify(i));
                                for (var r in t) void 0 === i[r] && (i[r] = t[r]);
                                return e(i, n)
                            }
                        }, r = n(e);
                        return r.get = n(e.get), r.post = n(e.post), r.put = n(e.put), r.head = n(e.head), r
                    }, ["get", "put", "post", "head"].forEach(function (t) {
                        var i = t.toUpperCase();
                        e[t.toLowerCase()] = function (t) {
                            "string" == typeof t ? t = {
                                method: i,
                                uri: t
                            } : (t = JSON.parse(JSON.stringify(t)), t.method = i);
                            var n = [t].concat(Array.prototype.slice.apply(arguments, [1]));
                            return e.apply(this, n)
                        }
                    }), e.couch = function (t, n) {
                        function r(e, t, i) {
                            if (e) return n(e, t, i);
                            if ((t.statusCode < 200 || t.statusCode > 299) && i.error) {
                                e = new Error("CouchDB error: " + (i.error.reason || i.error.error));
                                for (var r in i) e[r] = i[r];
                                return n(e, t, i)
                            }
                            return n(e, t, i)
                        }

                        return "string" == typeof t && (t = {uri: t}), t.json = !0, t.body && (t.json = t.body), delete t.body, n = n || i, e(t, r)
                    }, e
                })
            }).call(this, t("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, t("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/browser-request/index.js", "/node_modules/browser-request")
        }, {buffer: 5, "g5I+bs": 7}], 5: [function (e, t, i) {
            (function (t, n, r, s, o, a, f, u, c) {
                function r(e, t, i) {
                    if (!(this instanceof r)) return new r(e, t, i);
                    var n = typeof e;
                    if ("base64" === t && "string" === n) for (e = N(e); e.length % 4 != 0;) e += "=";
                    var s;
                    if ("number" === n) s = R(e); else if ("string" === n) s = r.byteLength(e, t); else {
                        if ("object" !== n) throw new Error("First argument needs to be a number, array or string.");
                        s = R(e.length)
                    }
                    var o;
                    r._useTypedArrays ? o = r._augment(new Uint8Array(s)) : (o = this, o.length = s, o._isBuffer = !0);
                    var a;
                    if (r._useTypedArrays && "number" == typeof e.byteLength) o._set(e); else if (x(e)) for (a = 0; a < s; a++) r.isBuffer(e) ? o[a] = e.readUInt8(a) : o[a] = e[a]; else if ("string" === n) o.write(e, 0, t); else if ("number" === n && !r._useTypedArrays && !i) for (a = 0; a < s; a++) o[a] = 0;
                    return o
                }

                function l(e, t, i, n) {
                    i = Number(i) || 0;
                    var s = e.length - i;
                    n ? (n = Number(n)) > s && (n = s) : n = s;
                    var o = t.length;
                    Z(o % 2 == 0, "Invalid hex string"), n > o / 2 && (n = o / 2);
                    for (var a = 0; a < n; a++) {
                        var f = parseInt(t.substr(2 * a, 2), 16);
                        Z(!isNaN(f), "Invalid hex string"), e[i + a] = f
                    }
                    return r._charsWritten = 2 * a, a
                }

                function d(e, t, i, n) {
                    return r._charsWritten = K(J(t), e, i, n)
                }

                function h(e, t, i, n) {
                    return r._charsWritten = K(G(t), e, i, n)
                }

                function p(e, t, i, n) {
                    return h(e, t, i, n)
                }

                function m(e, t, i, n) {
                    return r._charsWritten = K(q(t), e, i, n)
                }

                function g(e, t, i, n) {
                    return r._charsWritten = K(z(t), e, i, n)
                }

                function w(e, t, i) {
                    return 0 === t && i === e.length ? X.fromByteArray(e) : X.fromByteArray(e.slice(t, i))
                }

                function _(e, t, i) {
                    var n = "", r = "";
                    i = Math.min(e.length, i);
                    for (var s = t; s < i; s++) e[s] <= 127 ? (n += H(r) + String.fromCharCode(e[s]), r = "") : r += "%" + e[s].toString(16);
                    return n + H(r)
                }

                function y(e, t, i) {
                    var n = "";
                    i = Math.min(e.length, i);
                    for (var r = t; r < i; r++) n += String.fromCharCode(e[r]);
                    return n
                }

                function b(e, t, i) {
                    return y(e, t, i)
                }

                function v(e, t, i) {
                    var n = e.length;
                    (!t || t < 0) && (t = 0), (!i || i < 0 || i > n) && (i = n);
                    for (var r = "", s = t; s < i; s++) r += F(e[s]);
                    return r
                }

                function T(e, t, i) {
                    for (var n = e.slice(t, i), r = "", s = 0; s < n.length; s += 2) r += String.fromCharCode(n[s] + 256 * n[s + 1]);
                    return r
                }

                function E(e, t, i, n) {
                    n || (Z("boolean" == typeof i, "missing or invalid endian"), Z(void 0 !== t && null !== t, "missing offset"), Z(t + 1 < e.length, "Trying to read beyond buffer length"));
                    var r = e.length;
                    if (!(t >= r)) {
                        var s;
                        return i ? (s = e[t], t + 1 < r && (s |= e[t + 1] << 8)) : (s = e[t] << 8, t + 1 < r && (s |= e[t + 1])), s
                    }
                }

                function S(e, t, i, n) {
                    n || (Z("boolean" == typeof i, "missing or invalid endian"), Z(void 0 !== t && null !== t, "missing offset"), Z(t + 3 < e.length, "Trying to read beyond buffer length"));
                    var r = e.length;
                    if (!(t >= r)) {
                        var s;
                        return i ? (t + 2 < r && (s = e[t + 2] << 16), t + 1 < r && (s |= e[t + 1] << 8), s |= e[t], t + 3 < r && (s += e[t + 3] << 24 >>> 0)) : (t + 1 < r && (s = e[t + 1] << 16), t + 2 < r && (s |= e[t + 2] << 8), t + 3 < r && (s |= e[t + 3]), s += e[t] << 24 >>> 0), s
                    }
                }

                function I(e, t, i, n) {
                    if (n || (Z("boolean" == typeof i, "missing or invalid endian"), Z(void 0 !== t && null !== t, "missing offset"), Z(t + 1 < e.length, "Trying to read beyond buffer length")), !(t >= e.length)) {
                        var r = E(e, t, i, !0);
                        return 32768 & r ? -1 * (65535 - r + 1) : r
                    }
                }

                function B(e, t, i, n) {
                    if (n || (Z("boolean" == typeof i, "missing or invalid endian"), Z(void 0 !== t && null !== t, "missing offset"), Z(t + 3 < e.length, "Trying to read beyond buffer length")), !(t >= e.length)) {
                        var r = S(e, t, i, !0);
                        return 2147483648 & r ? -1 * (4294967295 - r + 1) : r
                    }
                }

                function k(e, t, i, n) {
                    return n || (Z("boolean" == typeof i, "missing or invalid endian"), Z(t + 3 < e.length, "Trying to read beyond buffer length")), Q.read(e, t, i, 23, 4)
                }

                function A(e, t, i, n) {
                    return n || (Z("boolean" == typeof i, "missing or invalid endian"), Z(t + 7 < e.length, "Trying to read beyond buffer length")), Q.read(e, t, i, 52, 8)
                }

                function j(e, t, i, n, r) {
                    r || (Z(void 0 !== t && null !== t, "missing value"), Z("boolean" == typeof n, "missing or invalid endian"), Z(void 0 !== i && null !== i, "missing offset"), Z(i + 1 < e.length, "trying to write beyond buffer length"), W(t, 65535));
                    var s = e.length;
                    if (!(i >= s)) for (var o = 0, a = Math.min(s - i, 2); o < a; o++) e[i + o] = (t & 255 << 8 * (n ? o : 1 - o)) >>> 8 * (n ? o : 1 - o)
                }

                function C(e, t, i, n, r) {
                    r || (Z(void 0 !== t && null !== t, "missing value"), Z("boolean" == typeof n, "missing or invalid endian"), Z(void 0 !== i && null !== i, "missing offset"), Z(i + 3 < e.length, "trying to write beyond buffer length"), W(t, 4294967295));
                    var s = e.length;
                    if (!(i >= s)) for (var o = 0, a = Math.min(s - i, 4); o < a; o++) e[i + o] = t >>> 8 * (n ? o : 3 - o) & 255
                }

                function L(e, t, i, n, r) {
                    r || (Z(void 0 !== t && null !== t, "missing value"), Z("boolean" == typeof n, "missing or invalid endian"), Z(void 0 !== i && null !== i, "missing offset"), Z(i + 1 < e.length, "Trying to write beyond buffer length"), V(t, 32767, -32768)), i >= e.length || (t >= 0 ? j(e, t, i, n, r) : j(e, 65535 + t + 1, i, n, r))
                }

                function M(e, t, i, n, r) {
                    r || (Z(void 0 !== t && null !== t, "missing value"), Z("boolean" == typeof n, "missing or invalid endian"), Z(void 0 !== i && null !== i, "missing offset"), Z(i + 3 < e.length, "Trying to write beyond buffer length"), V(t, 2147483647, -2147483648)), i >= e.length || (t >= 0 ? C(e, t, i, n, r) : C(e, 4294967295 + t + 1, i, n, r))
                }

                function P(e, t, i, n, r) {
                    r || (Z(void 0 !== t && null !== t, "missing value"), Z("boolean" == typeof n, "missing or invalid endian"), Z(void 0 !== i && null !== i, "missing offset"), Z(i + 3 < e.length, "Trying to write beyond buffer length"), Y(t, 3.4028234663852886e38, -3.4028234663852886e38)), i >= e.length || Q.write(e, t, i, n, 23, 4)
                }

                function D(e, t, i, n, r) {
                    r || (Z(void 0 !== t && null !== t, "missing value"), Z("boolean" == typeof n, "missing or invalid endian"), Z(void 0 !== i && null !== i, "missing offset"), Z(i + 7 < e.length, "Trying to write beyond buffer length"), Y(t, 1.7976931348623157e308, -1.7976931348623157e308)), i >= e.length || Q.write(e, t, i, n, 52, 8)
                }

                function N(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }

                function U(e, t, i) {
                    return "number" != typeof e ? i : (e = ~~e) >= t ? t : e >= 0 ? e : (e += t, e >= 0 ? e : 0)
                }

                function R(e) {
                    return e = ~~Math.ceil(+e), e < 0 ? 0 : e
                }

                function O(e) {
                    return (Array.isArray || function (e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    })(e)
                }

                function x(e) {
                    return O(e) || r.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length
                }

                function F(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }

                function J(e) {
                    for (var t = [], i = 0; i < e.length; i++) {
                        var n = e.charCodeAt(i);
                        if (n <= 127) t.push(e.charCodeAt(i)); else {
                            var r = i;
                            n >= 55296 && n <= 57343 && i++;
                            for (var s = encodeURIComponent(e.slice(r, i + 1)).substr(1).split("%"), o = 0; o < s.length; o++) t.push(parseInt(s[o], 16))
                        }
                    }
                    return t
                }

                function G(e) {
                    for (var t = [], i = 0; i < e.length; i++) t.push(255 & e.charCodeAt(i));
                    return t
                }

                function z(e) {
                    for (var t, i, n, r = [], s = 0; s < e.length; s++) t = e.charCodeAt(s), i = t >> 8, n = t % 256, r.push(n), r.push(i);
                    return r
                }

                function q(e) {
                    return X.toByteArray(e)
                }

                function K(e, t, i, n) {
                    for (var r = 0; r < n && !(r + i >= t.length || r >= e.length); r++) t[r + i] = e[r];
                    return r
                }

                function H(e) {
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        return String.fromCharCode(65533)
                    }
                }

                function W(e, t) {
                    Z("number" == typeof e, "cannot write a non-number as a number"), Z(e >= 0, "specified a negative value for writing an unsigned value"), Z(e <= t, "value is larger than maximum value for type"), Z(Math.floor(e) === e, "value has a fractional component")
                }

                function V(e, t, i) {
                    Z("number" == typeof e, "cannot write a non-number as a number"), Z(e <= t, "value larger than maximum allowed value"), Z(e >= i, "value smaller than minimum allowed value"), Z(Math.floor(e) === e, "value has a fractional component")
                }

                function Y(e, t, i) {
                    Z("number" == typeof e, "cannot write a non-number as a number"), Z(e <= t, "value larger than maximum allowed value"), Z(e >= i, "value smaller than minimum allowed value")
                }

                function Z(e, t) {
                    if (!e) throw new Error(t || "Failed assertion")
                }

                var X = e("base64-js"), Q = e("ieee754");
                i.Buffer = r, i.SlowBuffer = r, i.INSPECT_MAX_BYTES = 50, r.poolSize = 8192, r._useTypedArrays = function () {
                    try {
                        var e = new ArrayBuffer(0), t = new Uint8Array(e);
                        return t.foo = function () {
                            return 42
                        }, 42 === t.foo() && "function" == typeof t.subarray
                    } catch (e) {
                        return !1
                    }
                }(), r.isEncoding = function (e) {
                    switch (String(e).toLowerCase()) {
                        case"hex":
                        case"utf8":
                        case"utf-8":
                        case"ascii":
                        case"binary":
                        case"base64":
                        case"raw":
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, r.isBuffer = function (e) {
                    return !(null === e || void 0 === e || !e._isBuffer)
                }, r.byteLength = function (e, t) {
                    var i;
                    switch (e += "", t || "utf8") {
                        case"hex":
                            i = e.length / 2;
                            break;
                        case"utf8":
                        case"utf-8":
                            i = J(e).length;
                            break;
                        case"ascii":
                        case"binary":
                        case"raw":
                            i = e.length;
                            break;
                        case"base64":
                            i = q(e).length;
                            break;
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            i = 2 * e.length;
                            break;
                        default:
                            throw new Error("Unknown encoding")
                    }
                    return i
                }, r.concat = function (e, t) {
                    if (Z(O(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new r(0);
                    if (1 === e.length) return e[0];
                    var i;
                    if ("number" != typeof t) for (t = 0, i = 0; i < e.length; i++) t += e[i].length;
                    var n = new r(t), s = 0;
                    for (i = 0; i < e.length; i++) {
                        var o = e[i];
                        o.copy(n, s), s += o.length
                    }
                    return n
                }, r.prototype.write = function (e, t, i, n) {
                    if (isFinite(t)) isFinite(i) || (n = i, i = void 0); else {
                        var r = n;
                        n = t, t = i, i = r
                    }
                    t = Number(t) || 0;
                    var s = this.length - t;
                    i ? (i = Number(i)) > s && (i = s) : i = s, n = String(n || "utf8").toLowerCase();
                    var o;
                    switch (n) {
                        case"hex":
                            o = l(this, e, t, i);
                            break;
                        case"utf8":
                        case"utf-8":
                            o = d(this, e, t, i);
                            break;
                        case"ascii":
                            o = h(this, e, t, i);
                            break;
                        case"binary":
                            o = p(this, e, t, i);
                            break;
                        case"base64":
                            o = m(this, e, t, i);
                            break;
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            o = g(this, e, t, i);
                            break;
                        default:
                            throw new Error("Unknown encoding")
                    }
                    return o
                }, r.prototype.toString = function (e, t, i) {
                    var n = this;
                    if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, (i = void 0 !== i ? Number(i) : i = n.length) === t) return "";
                    var r;
                    switch (e) {
                        case"hex":
                            r = v(n, t, i);
                            break;
                        case"utf8":
                        case"utf-8":
                            r = _(n, t, i);
                            break;
                        case"ascii":
                            r = y(n, t, i);
                            break;
                        case"binary":
                            r = b(n, t, i);
                            break;
                        case"base64":
                            r = w(n, t, i);
                            break;
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            r = T(n, t, i);
                            break;
                        default:
                            throw new Error("Unknown encoding")
                    }
                    return r
                }, r.prototype.toJSON = function () {
                    return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                }, r.prototype.copy = function (e, t, i, n) {
                    var s = this;
                    if (i || (i = 0), n || 0 === n || (n = this.length), t || (t = 0), n !== i && 0 !== e.length && 0 !== s.length) {
                        Z(n >= i, "sourceEnd < sourceStart"), Z(t >= 0 && t < e.length, "targetStart out of bounds"), Z(i >= 0 && i < s.length, "sourceStart out of bounds"), Z(n >= 0 && n <= s.length, "sourceEnd out of bounds"), n > this.length && (n = this.length), e.length - t < n - i && (n = e.length - t + i);
                        var o = n - i;
                        if (o < 100 || !r._useTypedArrays) for (var a = 0; a < o; a++) e[a + t] = this[a + i]; else e._set(this.subarray(i, i + o), t)
                    }
                }, r.prototype.slice = function (e, t) {
                    var i = this.length;
                    if (e = U(e, i, 0), t = U(t, i, i), r._useTypedArrays) return r._augment(this.subarray(e, t));
                    for (var n = t - e, s = new r(n, void 0, !0), o = 0; o < n; o++) s[o] = this[o + e];
                    return s
                }, r.prototype.get = function (e) {
                    return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
                }, r.prototype.set = function (e, t) {
                    return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
                }, r.prototype.readUInt8 = function (e, t) {
                    if (t || (Z(void 0 !== e && null !== e, "missing offset"), Z(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e]
                }, r.prototype.readUInt16LE = function (e, t) {
                    return E(this, e, !0, t)
                }, r.prototype.readUInt16BE = function (e, t) {
                    return E(this, e, !1, t)
                }, r.prototype.readUInt32LE = function (e, t) {
                    return S(this, e, !0, t)
                }, r.prototype.readUInt32BE = function (e, t) {
                    return S(this, e, !1, t)
                }, r.prototype.readInt8 = function (e, t) {
                    if (t || (Z(void 0 !== e && null !== e, "missing offset"), Z(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) {
                        return 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }
                }, r.prototype.readInt16LE = function (e, t) {
                    return I(this, e, !0, t)
                }, r.prototype.readInt16BE = function (e, t) {
                    return I(this, e, !1, t)
                }, r.prototype.readInt32LE = function (e, t) {
                    return B(this, e, !0, t)
                }, r.prototype.readInt32BE = function (e, t) {
                    return B(this, e, !1, t)
                }, r.prototype.readFloatLE = function (e, t) {
                    return k(this, e, !0, t)
                }, r.prototype.readFloatBE = function (e, t) {
                    return k(this, e, !1, t)
                }, r.prototype.readDoubleLE = function (e, t) {
                    return A(this, e, !0, t)
                }, r.prototype.readDoubleBE = function (e, t) {
                    return A(this, e, !1, t)
                }, r.prototype.writeUInt8 = function (e, t, i) {
                    i || (Z(void 0 !== e && null !== e, "missing value"), Z(void 0 !== t && null !== t, "missing offset"), Z(t < this.length, "trying to write beyond buffer length"), W(e, 255)), t >= this.length || (this[t] = e)
                }, r.prototype.writeUInt16LE = function (e, t, i) {
                    j(this, e, t, !0, i)
                }, r.prototype.writeUInt16BE = function (e, t, i) {
                    j(this, e, t, !1, i)
                }, r.prototype.writeUInt32LE = function (e, t, i) {
                    C(this, e, t, !0, i)
                }, r.prototype.writeUInt32BE = function (e, t, i) {
                    C(this, e, t, !1, i)
                }, r.prototype.writeInt8 = function (e, t, i) {
                    i || (Z(void 0 !== e && null !== e, "missing value"), Z(void 0 !== t && null !== t, "missing offset"), Z(t < this.length, "Trying to write beyond buffer length"), V(e, 127, -128)), t >= this.length || (e >= 0 ? this.writeUInt8(e, t, i) : this.writeUInt8(255 + e + 1, t, i))
                }, r.prototype.writeInt16LE = function (e, t, i) {
                    L(this, e, t, !0, i)
                }, r.prototype.writeInt16BE = function (e, t, i) {
                    L(this, e, t, !1, i)
                }, r.prototype.writeInt32LE = function (e, t, i) {
                    M(this, e, t, !0, i)
                }, r.prototype.writeInt32BE = function (e, t, i) {
                    M(this, e, t, !1, i)
                }, r.prototype.writeFloatLE = function (e, t, i) {
                    P(this, e, t, !0, i)
                }, r.prototype.writeFloatBE = function (e, t, i) {
                    P(this, e, t, !1, i)
                }, r.prototype.writeDoubleLE = function (e, t, i) {
                    D(this, e, t, !0, i)
                }, r.prototype.writeDoubleBE = function (e, t, i) {
                    D(this, e, t, !1, i)
                }, r.prototype.fill = function (e, t, i) {
                    if (e || (e = 0), t || (t = 0), i || (i = this.length), "string" == typeof e && (e = e.charCodeAt(0)), Z("number" == typeof e && !isNaN(e), "value is not a number"), Z(i >= t, "end < start"), i !== t && 0 !== this.length) {
                        Z(t >= 0 && t < this.length, "start out of bounds"), Z(i >= 0 && i <= this.length, "end out of bounds");
                        for (var n = t; n < i; n++) this[n] = e
                    }
                }, r.prototype.inspect = function () {
                    for (var e = [], t = this.length, n = 0; n < t; n++) if (e[n] = F(this[n]), n === i.INSPECT_MAX_BYTES) {
                        e[n + 1] = "...";
                        break
                    }
                    return "<Buffer " + e.join(" ") + ">"
                }, r.prototype.toArrayBuffer = function () {
                    if ("undefined" != typeof Uint8Array) {
                        if (r._useTypedArrays) return new r(this).buffer;
                        for (var e = new Uint8Array(this.length), t = 0, i = e.length; t < i; t += 1) e[t] = this[t];
                        return e.buffer
                    }
                    throw new Error("Buffer.toArrayBuffer not supported in this browser")
                };
                var $ = r.prototype;
                r._augment = function (e) {
                    return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = $.get, e.set = $.set, e.write = $.write, e.toString = $.toString, e.toLocaleString = $.toString, e.toJSON = $.toJSON, e.copy = $.copy, e.slice = $.slice, e.readUInt8 = $.readUInt8, e.readUInt16LE = $.readUInt16LE, e.readUInt16BE = $.readUInt16BE, e.readUInt32LE = $.readUInt32LE, e.readUInt32BE = $.readUInt32BE, e.readInt8 = $.readInt8, e.readInt16LE = $.readInt16LE, e.readInt16BE = $.readInt16BE, e.readInt32LE = $.readInt32LE, e.readInt32BE = $.readInt32BE, e.readFloatLE = $.readFloatLE, e.readFloatBE = $.readFloatBE, e.readDoubleLE = $.readDoubleLE, e.readDoubleBE = $.readDoubleBE, e.writeUInt8 = $.writeUInt8, e.writeUInt16LE = $.writeUInt16LE, e.writeUInt16BE = $.writeUInt16BE, e.writeUInt32LE = $.writeUInt32LE, e.writeUInt32BE = $.writeUInt32BE, e.writeInt8 = $.writeInt8, e.writeInt16LE = $.writeInt16LE, e.writeInt16BE = $.writeInt16BE, e.writeInt32LE = $.writeInt32LE, e.writeInt32BE = $.writeInt32BE, e.writeFloatLE = $.writeFloatLE, e.writeFloatBE = $.writeFloatBE, e.writeDoubleLE = $.writeDoubleLE, e.writeDoubleBE = $.writeDoubleBE, e.fill = $.fill, e.inspect = $.inspect, e.toArrayBuffer = $.toArrayBuffer, e
                }
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/buffer/index.js", "/node_modules/buffer")
        }, {"base64-js": 3, buffer: 5, "g5I+bs": 7, ieee754: 6}], 6: [function (e, t, i) {
            (function (e, t, n, r, s, o, a, f, u) {
                i.read = function (e, t, i, n, r) {
                    var s, o, a = 8 * r - n - 1, f = (1 << a) - 1, u = f >> 1, c = -7, l = i ? r - 1 : 0,
                        d = i ? -1 : 1, h = e[t + l];
                    for (l += d, s = h & (1 << -c) - 1, h >>= -c, c += a; c > 0; s = 256 * s + e[t + l], l += d, c -= 8) ;
                    for (o = s & (1 << -c) - 1, s >>= -c, c += n; c > 0; o = 256 * o + e[t + l], l += d, c -= 8) ;
                    if (0 === s) s = 1 - u; else {
                        if (s === f) return o ? NaN : 1 / 0 * (h ? -1 : 1);
                        o += Math.pow(2, n), s -= u
                    }
                    return (h ? -1 : 1) * o * Math.pow(2, s - n)
                }, i.write = function (e, t, i, n, r, s) {
                    var o, a, f, u = 8 * s - r - 1, c = (1 << u) - 1, l = c >> 1,
                        d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0, h = n ? 0 : s - 1, p = n ? 1 : -1,
                        m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (f = Math.pow(2, -o)) < 1 && (o--, f *= 2), t += o + l >= 1 ? d / f : d * Math.pow(2, 1 - l), t * f >= 2 && (o++, f /= 2), o + l >= c ? (a = 0, o = c) : o + l >= 1 ? (a = (t * f - 1) * Math.pow(2, r), o += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, r), o = 0)); r >= 8; e[i + h] = 255 & a, h += p, a /= 256, r -= 8) ;
                    for (o = o << r | a, u += r; u > 0; e[i + h] = 255 & o, h += p, o /= 256, u -= 8) ;
                    e[i + h - p] |= 128 * m
                }
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/ieee754/index.js", "/node_modules/ieee754")
        }, {buffer: 5, "g5I+bs": 7}], 7: [function (e, t, i) {
            (function (e, i, n, r, s, o, a, f, u) {
                function c() {
                }

                var e = t.exports = {};
                e.nextTick = function () {
                    var e = "undefined" != typeof window && window.setImmediate,
                        t = "undefined" != typeof window && window.postMessage && window.addEventListener;
                    if (e) return function (e) {
                        return window.setImmediate(e)
                    };
                    if (t) {
                        var i = [];
                        return window.addEventListener("message", function (e) {
                            var t = e.source;
                            if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), i.length > 0)) {
                                i.shift()()
                            }
                        }, !0), function (e) {
                            i.push(e), window.postMessage("process-tick", "*")
                        }
                    }
                    return function (e) {
                        setTimeout(e, 0)
                    }
                }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = c, e.addListener = c, e.once = c, e.off = c, e.removeListener = c, e.removeAllListeners = c, e.emit = c, e.binding = function (e) {
                    throw new Error("process.binding is not supported")
                }, e.cwd = function () {
                    return "/"
                }, e.chdir = function (e) {
                    throw new Error("process.chdir is not supported")
                }
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/node_modules/process/browser.js", "/node_modules/process")
        }, {buffer: 5, "g5I+bs": 7}], 8: [function (e, t, i) {
            t.exports = {
                name: "twitch-emoji",
                version: "0.2.209",
                description: "Parse Twitch emojis",
                main: "twitchemoji.node.js",
                scripts: {test: "mocha"},
                author: "James Frost <hello@jamesfrost.me> (http://jamesfrost.me)",
                license: "MIT",
                devDependencies: {
                    assert: "^1.4.1",
                    async: "^2.1.2",
                    gulp: "^3.9.1",
                    "gulp-browserify": "^0.5.1",
                    "gulp-rename": "^1.2.2",
                    "gulp-uglify": "^2.0.0",
                    jsonfile: "^2.4.0",
                    mocha: "^3.0.2",
                    mockery: "^2.0.0",
                    request: "^2.75.0",
                    shelljs: "^0.7.4"
                },
                repository: {type: "git", url: "http://github.com/JamesFrost/twitch-emoji"},
                keywords: ["twitch", "emoji", "emotes"],
                dependencies: {"browser-request": "^0.3.3"},
                homepage: "https://jamesfrost.github.io/twitch-emoji/"
            }
        }, {}], 9: [function (e, t, i) {
            (function (i, n, r, s, o, a, f, u, c) {
                const l = e("./../package.json").version, d = e("browser-request"),
                    h = "https://unpkg.com/twitch-emoji@" + l + "/dist/channels/";
                t.exports = function (e, t) {
                    e = e.toLowerCase();
                    const i = h + e + ".json";
                    return new Promise(function (e, n) {
                        if ("undefined" != typeof Storage) {
                            const r = localStorage.getItem(i);
                            if (null !== r) return t(void 0, JSON.parse(r)), void e()
                        }
                        d(i, function (r, s, o) {
                            if (r || 200 !== s.status) t(r || s), n(r || s); else try {
                                t(void 0, JSON.parse(o)), "undefined" != typeof Storage && localStorage.setItem(i, o), e(s)
                            } catch (r) {
                                n(r)
                            }
                        })
                    })
                }
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/src/get-channel-emojis.js", "/src")
        }, {"./../package.json": 8, "browser-request": 4, buffer: 5, "g5I+bs": 7}], 10: [function (e, t, i) {
            (function (t, n, r, s, o, a, f, u, c) {
                const l = e("../json/v2/global.json"), d = e("./util.js");
                i.parse = function (e, t) {
                    const i = Object.keys(l.emotes);
                    return d.searchString(i, e).map(function (i) {
                        const n = l.emotes[i].image_id, r = l.template[t.emojiSize].replace("{image_id}", n);
                        e = e.replace(new RegExp("\\b" + i + "\\b", "g"), d.buildImgTag(i, r, t.emojiSize))
                    }), e
                }
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/src/global-emojis.js", "/src")
        }, {"../json/v2/global.json": 2, "./util.js": 12, buffer: 5, "g5I+bs": 7}], 11: [function (e, t, i) {
            (function (i, n, r, s, o, a, f, u, c) {
                function l(t) {
                    this._util = e("./util.js"), this._subscriber = t, this.parse = function (e, t) {
                        if (void 0 === t.channel || void 0 === t.channel || void 0 === this._subscriber.channels[t.channel]) return e;
                        const i = this._subscriber.channels[t.channel].emotes.map(function (e) {
                            return e.code
                        });
                        return this._util.searchString(i, e).map(function (i) {
                            const n = this._subscriber.channels[t.channel].emotes.reduce(function (e, t) {
                                return t.code === i ? t.image_id : e
                            }, ""), r = this._subscriber.template[t.emojiSize].replace("{image_id}", n);
                            e = e.replace(new RegExp("\\b" + i + "\\b", "g"), this._util.buildImgTag(i, r, t.emojiSize))
                        }.bind(this)), e
                    }
                }

                t.exports = l
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/src/subscriber-emojis.js", "/src")
        }, {"./util.js": 12, buffer: 5, "g5I+bs": 7}], 12: [function (e, t, i) {
            (function (e, t, n, r, s, o, a, f, u) {
                const c = ["small", "medium", "large"], l = {emojiSize: "medium"};
                i.setDefaultOptions = function (e) {
                    if (void 0 === e || void 0 === e) return l;
                    for (var t in l) void 0 === e[t] && (e[t] = l[t]);
                    return e
                }, i.validateInput = function (e, t) {
                    if ("string" != typeof e) throw"Text to be parsed must be a string";
                    if ("string" != typeof t.emojiSize) throw"Emoji size must be a string";
                    if (-1 === c.indexOf(t.emojiSize)) throw"Invalid emoji size";
                    if (void 0 !== t.channel && "string" != typeof t.channel) throw"Channel must be a string"
                }, i.buildImgTag = function (e, t, i) {
                    return '<img class="twitch-emoji twitch-emoji-' + i + '" src="' + t + '" alt="' + e + '">'
                }, i.searchString = function (e, t) {
                    if (0 === e.length) return [];
                    const n = e.slice(0, 1);
                    return t.match(new RegExp("\\b" + n + "\\b")) ? i.searchString(e.slice(1), t).concat(n) : i.searchString(e.slice(1), t)
                }
            }).call(this, e("g5I+bs"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/src/util.js", "/src")
        }, {buffer: 5, "g5I+bs": 7}]
    }, {}, [1])(1)
});